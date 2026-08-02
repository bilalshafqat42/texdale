"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";
import SiteMenu from "./SiteMenu";
import ContactModal from "./ContactModal";
import Button from "./Button";
import ProductsDropdown from "./ProductsDropdown";

const NAV_LINKS_AFTER_PRODUCTS = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const pathname = usePathname();

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

  // The homepage hero is the only dark/colourful backdrop the header ever
  // sits on transparently — everywhere else, and once scrolled, the header
  // sits on plain light content, so it should read dark there.
  const onLight = pathname !== "/" || condensed;
  const navLinkClass = onLight
    ? "text-ink hover:text-accent transition-colors"
    : "text-paper hover:text-paper/70 transition-colors";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          condensed
            ? "border-line bg-paper/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 transition-all duration-300 ${
            condensed ? "py-3" : "py-5"
          }`}
        >
          <Link href="/" className="shrink-0">
            <Image
              src={onLight ? "/texdale-dark.svg" : "/texdale-light.svg"}
              alt="Texdale"
              width={91}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-8 text-sm md:flex">
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <ProductsDropdown light={!onLight} />
            {NAV_LINKS_AFTER_PRODUCTS.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Button
              type="button"
              onClick={() => setDemoOpen(true)}
              variant={onLight ? "secondary" : "light-outline"}
              className="hidden sm:inline-flex"
            >
              Request a demo
            </Button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm md:hidden ${
                onLight ? "border-ink text-ink" : "border-paper text-paper"
              }`}
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
      <ContactModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
