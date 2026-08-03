"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const wordmarkRef = useRef(null);

  useEffect(() => {
    const el = wordmarkRef.current;
    if (prefersReducedMotion()) return;

    const entrance = gsap.from(el, {
      opacity: 0,
      x: -160,
      duration: 1.8,
      ease: "power2.out",
    });

    let index = 0;
    const flip = () => {
      index = (index + 1) % WORDS.length;
      const word = WORDS[index];
      gsap
        .timeline()
        .to(el, { rotationX: 90, duration: 0.4, ease: "power1.in" })
        .call(() => {
          el.textContent = word.text;
          el.className = `text-paper leading-none ${word.className}`;
        })
        .to(el, { rotationX: 0, duration: 0.4, ease: "power1.out" });
    };

    const interval = setInterval(flip, 3000);

    return () => {
      entrance.kill();
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ perspective: "800px" }}>
      <p
        ref={wordmarkRef}
        aria-hidden="true"
        className={`text-paper leading-none ${WORDS[0].className}`}
      >
        {WORDS[0].text}
      </p>
    </div>
  );
}
