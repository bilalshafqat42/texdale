"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteMenu from "./SiteMenu";
import ContactModal from "./ContactModal";
import MegaMenu from "./MegaMenu";

const NAV_LINKS_AFTER_PRODUCTS = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);

  return (
    <>
      <header className="tx-header">
        <div className="tx-wrap">
          <Link href="/" className="logo shrink-0" aria-label="Texdale home">
            <Image src="/texdale-dark.svg" alt="Texdale" width={91} height={32} priority />
          </Link>

          <nav className="tx-nav">
            <Link href="/about">Company</Link>
            <MegaMenu onRequestSample={() => setSampleOpen(true)} />
            {NAV_LINKS_AFTER_PRODUCTS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button type="button" className="tx-head-cta" onClick={() => setSampleOpen(true)}>
            Request a sample
          </button>
          <button
            type="button"
            className="tx-menu-btn"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ContactModal
        open={sampleOpen}
        onClose={() => setSampleOpen(false)}
        title="Request a sample"
        reason="sample"
      />
    </>
  );
}
