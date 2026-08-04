"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import HeroBackground from "./HeroBackground";
import BubbleAccent from "./BubbleAccent";
import HeroWordmark from "./HeroWordmark";

// Runs before paint on the client (avoiding a flash of fully-visible content
// before GSAP hides it) but falls back to a no-op on the server, since
// useLayoutEffect isn't available during static export prerendering.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function HeroSection() {
  const sectionRef = useRef(null);

  useIsoLayoutEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const entrance = gsap.from(sectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 0.9,
      delay: 1.2,
      ease: "power2.out",
    });

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return () => entrance.kill();

    gsap.registerPlugin(ScrollTrigger);

    const widthTween = gsap.fromTo(
      sectionRef.current,
      { width: "70%", borderRadius: "32px" },
      {
        width: "100%",
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: window.innerHeight,
          scrub: true,
        },
      },
    );

    return () => {
      entrance.kill();
      widthTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-10 mx-auto flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />
      <BubbleAccent className="absolute top-24 right-6 h-40 w-52 md:top-28 md:right-10" />
      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        <HeroWordmark />
      </div>
    </section>
  );
}
