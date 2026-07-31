"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const GROUPS = [
  {
    label: "Textile",
    href: "/products",
    items: [
      { label: "Pretreatment", href: "/products/pretreatment" },
      { label: "Dyeing auxiliaries", href: "/products/dyeing-auxiliaries" },
      { label: "Printing", href: "/products/printing" },
      { label: "Finishing", href: "/products/finishing" },
      { label: "Softening", href: "/products/softening" },
    ],
  },
  {
    label: "Denim washing",
    href: "/products/denim-washing",
    items: [{ label: "Enzymes", href: "/products/denim-washing?group=enzymes" }],
    note: "Also draws on reducing agents, resins, fixers, anti-back-staining agents and silicones.",
  },
  {
    label: "Special finishes",
    href: "/products/special-finishes",
    items: [
      { label: "Resins", href: "/products/special-finishes?group=resins" },
      { label: "Water repellent", href: "/products/special-finishes?group=water-repellent" },
      { label: "Flame retardant", href: "/products/special-finishes?group=flame-retardant" },
      { label: "Anti-microbial", href: "/products/special-finishes?group=anti-microbial" },
    ],
  },
  {
    label: "Special yarn lubricants",
    href: "/products/special-yarn-lubricants",
    items: [],
  },
];

export default function ProductsMegaMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  function openMenu() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  }

  function scheduleClose() {
    closeTimeout.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1"
      >
        Products
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
        </svg>
      </button>

      <div
        className={`border-line bg-paper absolute top-full left-1/2 z-50 mt-3 w-[640px] -translate-x-1/2 rounded-lg border p-6 shadow-lg transition-all ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid grid-cols-4 gap-6">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <Link
                href={group.href}
                className="text-ink hover:text-accent text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                {group.label}
              </Link>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-ink/70 hover:text-accent text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {group.note && <p className="text-ink/70 mt-3 text-xs">{group.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
