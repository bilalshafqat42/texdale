"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

export default function Header() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({
      start: 40,
      end: "max",
      onUpdate: (self) => setCondensed(self.scroll() > 40),
    });

    return () => trigger.kill();
  }, []);

  return (
    <header className="border-line bg-paper/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          condensed ? "py-2" : "py-4"
        }`}
      >
        <Link href="/" className="font-mono text-sm">
          TEXDALE
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link
          href="/contact?reason=quote"
          className="border-ink hover:bg-ink hover:text-paper rounded-md border px-4 py-2 text-sm transition-colors"
        >
          Request a quote
        </Link>
      </div>
    </header>
  );
}
