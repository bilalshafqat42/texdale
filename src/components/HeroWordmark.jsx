"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

const SIZE_CLASSES = "text-7xl sm:text-8xl md:text-9xl lg:text-[11rem]";

const WORDS = [
  { text: "TEXDALE", className: `font-brand tracking-wide ${SIZE_CLASSES}` },
  { text: "TEXTILE CHEMICALS", className: `font-sans font-bold tracking-wide ${SIZE_CLASSES}` },
];

export default function HeroWordmark() {
  const wrapperRef = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const el = wordRef.current;

    const fitToContainer = () => {
      gsap.set(el, { scaleX: 1 });
      const available = wrapper.clientWidth;
      const natural = el.scrollWidth;
      gsap.set(el, { scaleX: Math.min(1, available / natural) });
    };

    fitToContainer();

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
        .to(el, { opacity: 0, blur: 16, scaleY: 1.04, duration: 0.5, ease: "power1.in" })
        .call(() => {
          el.textContent = word.text;
          el.className = `text-paper leading-none whitespace-nowrap ${word.className}`;
          fitToContainer();
        })
        .fromTo(
          el,
          { opacity: 0, blur: 16 },
          { opacity: 1, blur: 0, scaleY: 1, duration: 0.7, ease: "power2.out" },
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

    window.addEventListener("resize", fitToContainer);

    return () => {
      entrance.kill();
      clearInterval(interval);
      parallax.kill();
      window.removeEventListener("resize", fitToContainer);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="flex justify-center">
      <p
        ref={wordRef}
        aria-hidden="true"
        className={`text-paper leading-none whitespace-nowrap ${WORDS[0].className}`}
      >
        {WORDS[0].text}
      </p>
    </div>
  );
}
