"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { PRODUCT_GROUPS } from "@/lib/navGroups";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
  { label: "Products", href: "/products", groups: PRODUCT_GROUPS },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

// Full-screen menu for tablet and phone widths, where the header nav is hidden.
export default function SiteMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

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
    closeRef.current?.focus();

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
    <div ref={panelRef} className="tx-menu" role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="tx-wrap tx-menu-top">
        <Image src="/texdale-light.svg" alt="Texdale" width={91} height={32} />
        <button ref={closeRef} type="button" onClick={handleClose} className="tx-menu-close">
          Close
        </button>
      </div>

      <nav className="tx-wrap tx-menu-nav">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              {item.groups ? (
                <>
                  <button
                    type="button"
                    className="tx-menu-link"
                    aria-expanded={expanded}
                    onClick={() => setExpanded((e) => !e)}
                  >
                    {item.label}
                    <span className="tx-menu-plus" aria-hidden="true">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                  {expanded && (
                    <div className="tx-menu-groups">
                      <Link href="/products" onClick={handleClose} className="tx-menu-all">
                        All products
                      </Link>
                      {item.groups.map((group) => (
                        <div key={group.label}>
                          <Link href={group.href} onClick={handleClose} className="tx-menu-head">
                            {group.label}
                          </Link>
                          <ul>
                            {group.items.map((sub) => (
                              <li key={sub.href}>
                                <Link href={sub.href} onClick={handleClose}>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={handleClose} className="tx-menu-link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link href="/contact/?reason=sample" onClick={handleClose} className="tx-menu-cta">
          Request a sample
        </Link>
      </nav>

      <div className="tx-wrap tx-menu-foot">
        <span>Pretreatment · Dyeing · Finishing</span>
        <span>Made in the North of England</span>
      </div>
    </div>
  );
}
