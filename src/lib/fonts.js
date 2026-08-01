import { Inter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Used only for the large nav words in the full-screen site menu — the rest
// of the site stays on Inter.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Strasua (Typodermic Fonts) — public domain, free for commercial use.
// Used only for the large "TEXDALE" wordmark treatment in the homepage hero.
export const strasua = localFont({
  src: "../fonts/Strasua.otf",
  variable: "--font-strasua",
  display: "swap",
});
