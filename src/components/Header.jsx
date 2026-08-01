"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import SiteMenu from "./SiteMenu";

export default function Header() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <header className="border-line bg-paper/95 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
            condensed ? "py-2" : "py-4"
          }`}
        >
          <Link href="/" className="shrink-0">
            <Image
              src="/texdale-dark.svg"
              alt="Texdale"
              width={91}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/contact?reason=quote"
              className="border-ink hover:bg-ink hover:text-paper hidden rounded-md border px-4 py-2 text-sm transition-colors sm:inline-block"
            >
              Request a quote
            </Link>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="border-ink flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
            >
              Menu
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M1 4h14M1 8h14M1 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
