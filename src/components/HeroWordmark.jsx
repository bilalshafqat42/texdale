"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function HeroWordmark() {
  const wordmarkRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const tween = gsap.from(wordmarkRef.current, {
      opacity: 0,
      x: -160,
      duration: 1.8,
      ease: "power2.out",
    });

    return () => tween.kill();
  }, []);

  return (
    <p
      ref={wordmarkRef}
      aria-hidden="true"
      className="font-brand text-paper text-7xl leading-none tracking-wide sm:text-8xl md:text-9xl"
    >
      TEXDALE
    </p>
  );
}
