"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { PRODUCT_GROUPS } from "@/lib/navGroups";
import { products, categories } from "@/lib/products";

const OPEN_DELAY = 80;
const CLOSE_DELAY = 160;

// Desktop "Products" mega menu. Opens on hover (with a short intent delay) or
// on click, closes on Escape, an outside click, or following any link in it.
export default function MegaMenu({ onRequestSample }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);
  const panelId = useId();

  function schedule(next, delay) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(next), delay);
  }

  function close() {
    clearTimeout(timer.current);
    setOpen(false);
  }

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    }
    function onPointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) close();
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <div
        ref={wrapRef}
        className="tx-mega-wrap"
        onMouseEnter={() => schedule(true, OPEN_DELAY)}
        onMouseLeave={() => schedule(false, CLOSE_DELAY)}
      >
        <button
          ref={triggerRef}
          type="button"
          className="tx-mega-trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => (open ? close() : setOpen(true))}
        >
          Products
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" />
          </svg>
        </button>

        <div id={panelId} className={`tx-mega${open ? " is-open" : ""}`} inert={!open}>
          <div className="tx-wrap tx-mega-grid">
            <div className="tx-mega-intro">
              <span className="mono">The range</span>
              <p className="tx-mega-title">
                {products.length} products across {categories.length} ranges.
              </p>
              <p className="tx-mega-copy">
                Pretreatment to final finish, formulated in the North of England.
              </p>
              <Link className="tx-mega-all" href="/products" onClick={close}>
                View all products
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path
                    d="M.8 6h14m0 0L10.3 1.3M14.8 6l-4.5 4.7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </Link>
            </div>

            {PRODUCT_GROUPS.map((group) => (
              <div className="tx-mega-col" key={group.label}>
                <Link className="tx-mega-head" href={group.href} onClick={close}>
                  {group.label}
                </Link>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={close}>
                        <span>{item.label}</span>
                        {item.count > 0 && (
                          <span className="n">{String(item.count).padStart(2, "0")}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="tx-mega-foot">
            <div className="tx-wrap">
              <span>Not sure which product fits? We also formulate to specification.</span>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    close();
                    onRequestSample();
                  }}
                >
                  Request a sample
                </button>
                <Link href="/contact/?reason=general" onClick={close}>
                  Talk to a technician
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tx-mega-scrim${open ? " is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
    </>
  );
}
