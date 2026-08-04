"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import HeroBackground from "./HeroBackground";
import BubbleAccent from "./BubbleAccent";
import HeroWordmark from "./HeroWordmark";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (prefersReducedMotion() || !isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
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

    return () => tween.scrollTrigger?.kill();
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
