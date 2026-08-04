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
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
      sectionRef.current,
      { clipPath: "inset(20% 0% 20% 0% round 32px)", y: 80 },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
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
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />
      <BubbleAccent className="absolute top-24 right-6 h-40 w-52 md:top-28 md:right-10" />
      <div className="relative mx-auto w-full max-w-6xl px-6 text-center">
        <HeroWordmark />
      </div>
    </section>
  );
}
