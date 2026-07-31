"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

// Runs before paint on the client (avoiding a flash of fully-visible content
// before GSAP hides it) but falls back to a no-op on the server, since
// useLayoutEffect isn't available during static export prerendering.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Reveal({ children, className = "", y = 24, delay = 0, onMount = false }) {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    if (onMount) {
      const tween = gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: "power2.out",
      });
      return () => tween.kill();
    }

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.from(el, {
      opacity: 0,
      y,
      duration: 0.6,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, delay, onMount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
