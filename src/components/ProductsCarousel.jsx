"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import Card from "./Card";
import { categories } from "@/lib/products";

export default function ProductsCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (prefersReducedMotion() || !isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const getDistance = () => Math.max(track.scrollWidth - track.clientWidth, 0);

    const tween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + getDistance(),
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-brand-blue relative flex h-screen w-full flex-col overflow-hidden"
    >
      <div className="px-6 pt-16 md:px-16 md:pt-20">
        <p className="text-caption tracking-wide text-white/90 uppercase">What we make</p>
        <h2 className="text-h2 mt-2 text-white">Product families</h2>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex flex-1 [scrollbar-width:none] items-center gap-6 overflow-x-auto px-6 pb-10 md:overflow-visible md:px-16 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className="block h-[78%] w-[78%] shrink-0 snap-start sm:w-[62%] md:h-[80%] md:w-[63vw]"
          >
            <Card
              image={category.image}
              imageAlt={`${category.name} textile chemicals`}
              className="h-full"
              accent="blue"
            >
              <h3 className="text-h4">{category.name}</h3>
              <p className="text-ink/70 mt-2 text-sm">{category.summary}</p>
              <span className="text-brand-blue mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                View range
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M1 7h11M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Card>
          </Link>
        ))}
        <div className="w-6 shrink-0 md:hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
