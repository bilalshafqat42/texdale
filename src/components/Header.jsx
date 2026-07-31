"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import ProductsMegaMenu from "./ProductsMegaMenu";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <ProductsMegaMenu />
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?reason=quote"
            className="border-ink hover:bg-ink hover:text-paper hidden rounded-md border px-4 py-2 text-sm transition-colors md:inline-block"
          >
            Request a quote
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              ) : (
                <path
                  d="M2 5h16M2 10h16M2 15h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-line bg-paper border-t px-6 py-4 md:hidden">
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/products" onClick={() => setMobileOpen(false)}>
                Products
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact?reason=quote"
                onClick={() => setMobileOpen(false)}
                className="border-ink inline-block rounded-md border px-4 py-2"
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
