"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";
import Button from "./Button";

export default function HeroText({ onOpenContact }) {
  const eyebrowRef = useRef(null);
  const wordmarkRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(eyebrowRef.current, { opacity: 0, y: 12, duration: 0.5 })
      .from(wordmarkRef.current, { opacity: 0, y: 40, scale: 0.94, duration: 0.9 }, "-=0.2")
      .from(subheadingRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.45")
      .from(paragraphRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
      .from(buttonsRef.current, { opacity: 0, y: 16, duration: 0.6 }, "-=0.4");

    return () => tl.kill();
  }, []);

  return (
    <div>
      <p ref={eyebrowRef} className="text-caption text-paper/80 mb-3 tracking-wide uppercase">
        Eco-friendly textile chemicals
      </p>

      <p
        ref={wordmarkRef}
        aria-hidden="true"
        className="font-brand text-paper text-6xl leading-none tracking-wide sm:text-8xl md:text-9xl"
      >
        TEXDALE
      </p>

      <h1
        ref={subheadingRef}
        className="text-h3 text-paper/95 sm:text-h2 mt-6 max-w-xl font-normal"
      >
        Textile chemicals for pretreatment, dyeing and finishing — UK manufactured, REACH compliant.
      </h1>

      <p ref={paragraphRef} className="text-paper/80 mt-4 max-w-xl">
        Texdale formulates and supplies pretreatment, dyeing, finishing and denim-washing chemicals
        to mills and finishers across the UK and internationally.
      </p>

      <div ref={buttonsRef} className="mt-6 flex gap-4">
        <Button href="/products" variant="light">
          Explore products
        </Button>
        <Button
          type="button"
          onClick={onOpenContact}
          variant="light-outline"
          className="cursor-pointer"
        >
          Contact us
        </Button>
      </div>
    </div>
  );
}
