"use client";

import { useState } from "react";
import HeroBackground from "./HeroBackground";
import BubbleAccent from "./BubbleAccent";
import HeroText from "./HeroText";
import ContactModal from "./ContactModal";

export default function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-24">
      <HeroBackground />
      <BubbleAccent className="absolute top-6 right-6 h-40 w-52 md:top-10 md:right-10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <HeroText onOpenContact={() => setContactOpen(true)} />
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
