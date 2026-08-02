"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PRODUCT_GROUPS } from "@/lib/navGroups";

export default function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

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

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="text-ink hover:text-accent flex items-center gap-1.5 transition-colors"
      >
        Products
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
        </svg>
      </button>

      <div
        className={`border-line bg-paper absolute top-full left-1/2 z-50 mt-3 w-[560px] -translate-x-1/2 rounded-xl border p-6 shadow-xl transition-all duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {PRODUCT_GROUPS.map((group) => (
            <div key={group.label}>
              <Link
                href={group.href}
                onClick={() => setOpen(false)}
                className="text-ink hover:text-accent text-sm font-semibold transition-colors"
              >
                {group.label}
              </Link>
              {group.items.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-ink/70 hover:text-accent text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="border-line mt-6 border-t pt-4">
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className="text-accent text-sm font-medium"
          >
            View all products →
          </Link>
        </div>
      </div>
    </div>
  );
}
