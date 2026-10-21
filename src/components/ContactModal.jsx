"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ContactForm from "./ContactForm";
import { prefersReducedMotion } from "@/lib/motion";

export default function ContactModal({ open, onClose, title = "Contact us", reason = "general" }) {
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
      className="tx-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tx-modal-title"
        className="tx-modal-card"
      >
        <button type="button" onClick={onClose} aria-label="Close" className="tx-modal-close">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </button>

        <span className="tx-modal-kicker">Texdale technical team</span>
        <h2 id="tx-modal-title" className="tx-modal-title">
          {title}
        </h2>
        <p className="tx-modal-copy">
          Tell us about your cloth, your process and the result you need. A technician will reply
          directly.
        </p>

        <ContactForm defaultReason={reason} />
      </div>
    </div>
  );
}
