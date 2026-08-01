"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

const BLOBS = [
  { color: "#0062C8", size: 520, top: "5%", left: "15%", duration: 9 },
  { color: "#FFD800", size: 380, top: "50%", left: "72%", duration: 7 },
  { color: "#00A450", size: 440, top: "62%", left: "10%", duration: 10 },
  { color: "#D46060", size: 380, top: "10%", left: "78%", duration: 8 },
  { color: "#0062C8", size: 320, top: "38%", left: "42%", duration: 11 },
];

export default function HeroBackground() {
  const blobRefs = useRef([]);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const canPlayVideo = !prefersReducedMotion() && window.matchMedia("(min-width: 768px)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowVideo(canPlayVideo);

    if (canPlayVideo || prefersReducedMotion()) return;

    const tweens = blobRefs.current.map((el, i) => {
      if (!el) return null;
      const blob = BLOBS[i];
      return gsap.to(el, {
        x: `random(-160, 160)`,
        y: `random(-120, 120)`,
        scale: "random(0.7, 1.5)",
        duration: blob.duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => tweens.forEach((t) => t?.kill());
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #16294f 0%, #0062C8 55%, #0a4fa3 100%)" }}
    >
      {!showVideo &&
        BLOBS.map((blob, i) => (
          <div
            key={i}
            ref={(el) => {
              blobRefs.current[i] = el;
            }}
            className="absolute rounded-full opacity-70 mix-blend-screen"
            style={{
              width: blob.size,
              height: blob.size,
              top: blob.top,
              left: blob.left,
              background: blob.color,
              filter: "blur(55px)",
            }}
          />
        ))}

      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/texdale-video.mp4" type="video/mp4" />
        </video>
      )}

      <div
        className={`absolute inset-0 ${showVideo ? "" : "bg-ink/10"}`}
        style={showVideo ? { background: "rgba(10, 32, 66, 0.55)" } : undefined}
      />
    </div>
  );
}
