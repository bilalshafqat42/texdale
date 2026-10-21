"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

// Runs before paint on the client (avoiding a flash of fully-visible content
// before GSAP hides it) but falls back to a no-op on the server, since
// useLayoutEffect isn't available during static export prerendering.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const EASE = "power3.out";

// Drives every reveal on a .tx page from data attributes: data-split headings
// (pre-split into words by SplitWords), data-rule lines, data-fade groups,
// data-row index rows and data-shot image chapters.
export default function PageMotion({ children }) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) {
      root.style.visibility = "visible";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);

      gsap
        .timeline({ defaults: { ease: EASE } })
        .from(q(".mast-meta .mono"), { y: 10, opacity: 0, duration: 0.6, stagger: 0.05 }, 0.1)
        .from(q(".mast .rule"), { scaleX: 0, duration: 1.1, ease: "power2.inOut" }, 0.15)
        .from(
          q(".mast h1 .wi"),
          { yPercent: 130, duration: 1.1, stagger: 0.055, ease: "power4.out" },
          0.3,
        )
        .from(q(".mast-foot > *"), { y: 18, opacity: 0, duration: 0.8, stagger: 0.09 }, 0.85);

      q("[data-rule]").forEach((r) => {
        if (r.closest(".mast")) return;
        gsap.from(r, {
          scaleX: 0,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: { trigger: r, start: "top 92%", once: true },
        });
      });

      q("h2[data-split], blockquote[data-split]").forEach((h) => {
        gsap.from(h.querySelectorAll(".wi"), {
          yPercent: 130,
          duration: 0.95,
          stagger: 0.04,
          ease: "power4.out",
          scrollTrigger: { trigger: h, start: "top 88%", once: true },
        });
      });

      // Siblings marked data-fade reveal together, staggered, off their parent.
      const parents = new Set();
      q("[data-fade]").forEach((el) => {
        if (!el.closest(".mast")) parents.add(el.parentNode);
      });
      parents.forEach((p) => {
        gsap.from(
          Array.from(p.children).filter((c) => c.hasAttribute("data-fade")),
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: EASE,
            scrollTrigger: { trigger: p, start: "top 88%", once: true },
          },
        );
      });

      q(".idx").forEach((idx) => {
        const rows = idx.querySelectorAll("[data-row]");
        if (!rows.length) return;
        gsap.from(rows, {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.075,
          ease: EASE,
          scrollTrigger: { trigger: idx, start: "top 84%", once: true },
        });
      });

      q("[data-shot]").forEach((s) => {
        gsap.from(s, {
          scaleY: 0.88,
          opacity: 0,
          duration: 1.1,
          ease: EASE,
          transformOrigin: "50% 50%",
          scrollTrigger: { trigger: s, start: "top 92%", once: true },
        });
      });
    }, root);
    root.style.visibility = "visible";

    // Trigger positions are measured before the web fonts swap in, and the
    // display headings change height when they do, so measure again after.
    let active = true;
    const refresh = () => active && ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      active = false;
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ref} className="tx">
      {children}
    </div>
  );
}

// Renders text as masked words so headings can rise in word by word.
export function SplitWords({ text }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i > 0 && " "}
      <span className="w">
        <span className="wi">{word}</span>
      </span>
    </span>
  ));
}
