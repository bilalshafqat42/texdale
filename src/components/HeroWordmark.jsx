"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

const WORDS = ["TEXDALE", "TEXTILE", "CHEMICALS"];

const SIZE_CLASSES = "font-brand tracking-wide text-6xl sm:text-7xl md:text-9xl lg:text-[11rem]";

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
      ease: "power3.out",
    });

    let index = 0;
    const flip = () => {
      index = (index + 1) % WORDS.length;
      gsap
        .timeline()
        .to(el, { opacity: 0, blur: 16, scale: 1.04, duration: 0.45, ease: "power1.in" })
        .call(() => {
          el.textContent = WORDS[index];
        })
        .fromTo(
          el,
          { opacity: 0, blur: 16, scale: 0.96 },
          { opacity: 1, blur: 0, scale: 1, duration: 0.65, ease: "power2.out" },
        );
    };

    const interval = setInterval(flip, 3000);

    const parallax = ScrollTrigger.create({
      trigger: wrapper.closest("section"),
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => gsap.set(wrapper, { y: self.progress * 90 }),
    });

    return () => {
      entrance.kill();
      clearInterval(interval);
      parallax.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="flex justify-center">
      <p
        ref={wordRef}
        aria-hidden="true"
        className={`text-paper leading-none whitespace-nowrap ${SIZE_CLASSES}`}
      >
        {WORDS[0]}
      </p>
    </div>
  );
}
