"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactForm from "./ContactForm";
import { prefersReducedMotion } from "@/lib/motion";

export default function ContactModal({ open, onClose }) {
  const cardRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") onCloseRef.current();
    }
    document.addEventListener("keydown", onKeyDown);

    if (!prefersReducedMotion() && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" },
      );
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="bg-ink/60 fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 py-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-label="Contact us"
        className="bg-paper relative w-full max-w-lg rounded-lg p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="text-ink/60 hover:text-ink absolute top-4 right-4"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>

        <h2 className="text-h3">Contact us</h2>
        <p className="text-ink/70 mt-2 mb-6 text-sm">
          Tell us what you need and we&apos;ll get back to you directly.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
