"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      const isOpen = i === openIndex;
      if (reduced) {
        gsap.set(el, { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 });
        return;
      }
      gsap.to(el, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.3,
        ease: "power1.inOut",
      });
    });
  }, [openIndex]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="divide-line border-line divide-y border-y">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.question}
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="overflow-hidden"
              style={{ height: 0, opacity: 0 }}
              aria-hidden={!isOpen}
            >
              <p className="text-ink/70 pb-4 text-sm">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
