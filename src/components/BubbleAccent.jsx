"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function BubbleAccent({ className = "" }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const circles = svgRef.current.querySelectorAll("circle");
    const tweens = Array.from(circles).map((circle, i) =>
      gsap.to(circle, {
        y: i % 2 === 0 ? -8 : 8,
        x: i % 3 === 0 ? 4 : -4,
        duration: 3 + (i % 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.15,
      }),
    );

    return () => tweens.forEach((tween) => tween.kill());
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      viewBox="0 0 260 200"
      className={className}
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    >
      <circle cx="30" cy="40" r="14" />
      <circle cx="70" cy="20" r="6" />
      <circle cx="110" cy="55" r="20" />
      <circle cx="160" cy="30" r="9" />
      <circle cx="190" cy="70" r="16" />
      <circle cx="225" cy="45" r="5" />
      <circle cx="55" cy="90" r="8" />
      <circle cx="140" cy="100" r="11" />
      <circle cx="205" cy="115" r="7" />
    </svg>
  );
}
