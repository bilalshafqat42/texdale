"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

export default function HeroWordmark() {
  const wrapperRef = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const el = wordRef.current;

    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const entrance = gsap.from(el, {
      opacity: 0,
      y: 24,
      scale: 0.94,
      blur: 14,
      duration: 1.4,
      delay: 1.9,
      ease: "power3.out",
    });

    const parallax = ScrollTrigger.create({
      trigger: wrapper.closest("section"),
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => gsap.set(wrapper, { y: self.progress * 90 }),
    });

    return () => {
      entrance.kill();
      parallax.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="flex justify-center">
      <p
        ref={wordRef}
        aria-hidden="true"
        className="font-brand text-paper text-6xl leading-none tracking-wide whitespace-nowrap sm:text-7xl md:text-9xl lg:text-[11rem]"
      >
        TEXDALE
      </p>
    </div>
  );
}
