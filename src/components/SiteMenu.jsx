"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Button from "./Button";
import { prefersReducedMotion } from "@/lib/motion";
import HeroBackground from "./HeroBackground";
import { PRODUCT_GROUPS } from "@/lib/navGroups";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", groups: PRODUCT_GROUPS },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function SiteMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef(null);

  function handleClose() {
    setExpanded(false);
    onClose();
  }

  const handleCloseRef = useRef(handleClose);
  useEffect(() => {
    handleCloseRef.current = handleClose;
  });

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") handleCloseRef.current();
    }
    document.addEventListener("keydown", onKeyDown);

    if (!prefersReducedMotion() && panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div ref={panelRef} className="bg-ink fixed inset-0 z-[100] overflow-y-auto">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative flex flex-col justify-between px-8 py-8 md:px-16 md:py-10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close menu"
              className="border-paper/40 text-paper flex h-11 w-11 items-center justify-center border"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path
                  d="M1 1l16 16M17 1L1 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </button>
            <Image
              src="/texdale-light.svg"
              alt="Texdale"
              width={91}
              height={32}
              className="h-7 w-auto"
            />
          </div>

          <nav className="mt-10 md:mt-0">
            <ul className="space-y-2 md:space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.groups ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setExpanded((e) => !e)}
                        className="font-display text-paper hover:text-accent-light flex items-center gap-3 text-4xl transition-colors md:text-6xl"
                      >
                        {item.label}
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          aria-hidden="true"
                          className={`mt-2 shrink-0 transition-transform md:mt-4 ${expanded ? "rotate-45" : ""}`}
                        >
                          <path
                            d="M9 1v16M1 9h16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      </button>
                      {expanded && (
                        <div className="mt-3 mb-4 grid gap-4 sm:grid-cols-2">
                          {item.groups.map((group) => (
                            <div key={group.label}>
                              <Link
                                href={group.href}
                                onClick={handleClose}
                                className="text-paper/90 hover:text-accent-light text-sm font-semibold"
                              >
                                {group.label}
                              </Link>
                              {group.items.length > 0 && (
                                <ul className="mt-2 space-y-1.5">
                                  {group.items.map((sub) => (
                                    <li key={sub.label}>
                                      <Link
                                        href={sub.href}
                                        onClick={handleClose}
                                        className="text-paper/60 hover:text-accent-light text-sm"
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleClose}
                      className="font-display text-paper hover:text-accent-light block text-4xl transition-colors md:text-6xl"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Button
              href="/contact?reason=quote"
              onClick={handleClose}
              variant="light-outline"
              className="mt-8"
            >
              Request a quote
            </Button>
          </nav>

          <div className="text-paper/50 mt-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs tracking-wide uppercase md:mt-0">
            <span>Pretreatment · Dyeing · Finishing</span>
            <span>UK manufactured · Supplied internationally</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <HeroBackground />
        </div>
      </div>
    </div>
  );
}
