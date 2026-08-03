"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

const WORDS = [
  {
    text: "TEXDALE",
    className: "font-brand tracking-wide text-7xl sm:text-8xl md:text-9xl lg:text-[11rem]",
  },
  {
    text: "Textile Chemicals",
    className: "font-sans font-medium tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  },
];

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
    const morph = () => {
      index = (index + 1) % WORDS.length;
      const word = WORDS[index];
      gsap
        .timeline()
        .to(el, { opacity: 0, blur: 16, scale: 1.04, duration: 0.5, ease: "power1.in" })
        .call(() => {
          el.textContent = word.text;
          el.className = `text-paper leading-none ${word.className}`;
        })
        .fromTo(
          el,
          { opacity: 0, blur: 16, scale: 0.96 },
          { opacity: 1, blur: 0, scale: 1, duration: 0.7, ease: "power2.out" },
        );
    };

    const interval = setInterval(morph, 3400);

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
    <div ref={wrapperRef}>
      <p
        ref={wordRef}
        aria-hidden="true"
        className={`text-paper leading-none ${WORDS[0].className}`}
      >
        {WORDS[0].text}
      </p>
    </div>
  );
}
