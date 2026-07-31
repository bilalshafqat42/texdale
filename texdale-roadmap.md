# Texdale website rebuild — build roadmap

Stack: Next.js (App Router, TypeScript), Tailwind CSS, GSAP + ScrollTrigger/Flip, Inter + IBM Plex Mono (next/font), Sanity as headless CMS, Vercel hosting.

## How to use this file

Each phase below is written so you can paste the whole phase into your VS Code AI addon (Copilot Chat, Cursor, Continue, Cline, etc.) and ask it to carry out the steps in your open `texdale-web` project. Work one phase at a time, check the "Checkpoint" before moving on, and tell me the result — I'll update this file to match wherever we land, so it stays the single source of truth for both of us instead of drifting from the chat.

Placeholder note: the colours in Phase 1 are a stand-in until we have Texdale's actual brand colours/logo. They live in one place (`tailwind.config.ts`), so swapping them later is a one-file change.

---

## Phase 0 — Environment & repo setup — done

- [x] Node.js LTS installed, `create-next-app` scaffolded with TypeScript, Tailwind, ESLint, App Router, `src` dir
- [x] `npm run dev` confirmed working on localhost:3000

---

## Phase 1 — Design foundations

Paste this whole phase to your VS Code addon: "Create/update the following files in this Next.js project exactly as specified below."

### 1. `src/lib/fonts.ts` (create)

```ts
import { Inter, IBM_Plex_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
```

### 2. `tailwind.config.ts` (replace theme section)

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1c1a",
        paper: "#faf9f6",
        line: "#e4e2dc",
        accent: {
          DEFAULT: "#1f5f52",
          light: "#e6efec",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.1", fontWeight: "600" }],
        h2: ["2rem", { lineHeight: "1.15", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.2", fontWeight: "500" }],
        h4: ["1.25rem", { lineHeight: "1.3", fontWeight: "500" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};
export default config;
```

### 3. `src/app/globals.css` (replace)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-paper text-ink font-sans antialiased;
}
```

Do not add `scroll-behavior: smooth` here — it conflicts with GSAP's ScrollTrigger, which we add in Phase 4.

### 4. `src/components/Header.tsx` (create)

```tsx
export default function Header() {
  return (
    <header className="border-line border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm">TEXDALE</span>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/sustainability">Sustainability</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact</a>
        </nav>
        <a href="/contact" className="border-ink rounded-md border px-4 py-2 text-sm">
          Request a quote
        </a>
      </div>
    </header>
  );
}
```

### 5. `src/components/Footer.tsx` (create)

```tsx
export default function Footer() {
  return (
    <footer className="border-line border-t py-10">
      <div className="text-ink/70 mx-auto max-w-6xl px-6 text-sm">
        Texdale Chemicals · Unit 1, 45 Lambeth Road, Reddish, Stockport SK5 6TW, United Kingdom
      </div>
    </footer>
  );
}
```

### 6. `src/app/layout.tsx` (replace)

```tsx
import type { Metadata } from "next";
import { inter, plexMono } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Texdale Chemicals | UK Textile Chemical Manufacturer",
    template: "%s | Texdale Chemicals",
  },
  description:
    "Texdale manufactures pretreatment, dyeing, finishing and denim-washing chemicals for the textile industry, UK-made and REACH compliant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### 7. `src/app/page.tsx` (replace, temporary smoke test)

```tsx
export default function HomePage() {
  return <h1 className="text-h1 p-10">Texdale</h1>;
}
```

**Checkpoint:** `npm run dev` shows "Texdale" in Inter, off-white background, dark ink text, header/footer visible, skip link appears on Tab press.

### 8. Shared component set — create these five files as-is

`src/components/Button.tsx`

```tsx
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-ink text-paper hover:bg-ink/90",
    secondary: "border border-ink text-ink hover:bg-ink/5",
    ghost: "text-ink hover:bg-ink/5",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
```

`src/components/Chip.tsx`

```tsx
export default function Chip({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${
        active ? "border-accent bg-accent-light text-accent" : "border-line text-ink/70"
      }`}
    >
      {children}
    </span>
  );
}
```

`src/components/Badge.tsx`

```tsx
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-accent-light text-accent inline-flex items-center rounded px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}
```

`src/components/Card.tsx`

```tsx
export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-line bg-paper rounded-lg border p-5 ${className}`}>{children}</div>
  );
}
```

`src/components/Breadcrumb.tsx`

```tsx
type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-caption text-ink/60">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1">
            {item.href ? (
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

Note: this gets paired with BreadcrumbList JSON-LD in Phase 5 — the visible breadcrumb and the schema markup both read from the same `items` array so they can't drift out of sync.

`src/components/FAQAccordion.tsx`

```tsx
"use client";
import { useState } from "react";

type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-line border-line divide-y border-y">
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
            {isOpen && <p className="text-ink/70 pb-4 text-sm">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
```

Note: plain open/close toggle for now. In Phase 4 this becomes the GSAP height-animated version (interaction #13 in the wireframe key) — same props, so nothing above it needs to change.

**Checkpoint:** project builds with no TypeScript errors (`npm run build`), and all six components can be imported without errors.

---

## Phase 2 — Content and data layer

- [ ] Stand up a free-tier Sanity Studio project (`npm create sanity@latest`)
- [ ] Define schemas: `product`, `category`, `article`, `faq`
- [ ] Migrate the existing product tables from texdale.co.uk into this schema
- [ ] Set up the Sanity client and typed GROQ queries in the Next.js app

**Checkpoint:** a test product created in Sanity Studio renders on a placeholder Next.js page.

_(We'll expand this phase into full addon-ready steps when we get here.)_

---

## Phase 3 — Build the seven page types

We're pulling the homepage forward, out of order, right after Phase 1 — Bilal needs to see something matching the wireframe before going further. This replaces the Phase 1 step-7 smoke test.

### Homepage — `src/app/page.tsx` (replace)

```tsx
import Link from "next/link";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import FAQAccordion from "@/components/FAQAccordion";

const productFamilies = [
  {
    name: "Pretreatment",
    desc: "Detergents, sequestrants and peroxide stabilisers for scouring and bleaching.",
    href: "/products/pretreatment",
  },
  {
    name: "Dyeing auxiliaries",
    desc: "Levelling, dispersing and fixing agents for consistent, fast colour.",
    href: "/products/dyeing-auxiliaries",
  },
  {
    name: "Finishing",
    desc: "Softeners and functional finishes for handle, feel and performance.",
    href: "/products/finishing",
  },
  {
    name: "Special finishes",
    desc: "Water and oil repellents, flame retardants, resins.",
    href: "/products/special-finishes",
  },
  {
    name: "Denim washing",
    desc: "Enzymes, reducing agents, fixers and anti-back-staining agents.",
    href: "/products/denim-washing",
  },
  {
    name: "Yarn lubricants",
    desc: "Water-free lubricants and coning oils for lick-roll or precision pump.",
    href: "/products/yarn-lubricants",
  },
];

const faqs = [
  {
    question: "Is Texdale REACH compliant?",
    answer:
      "Yes. All raw materials are sourced from REACH-registered suppliers in the EU and internationally, and any SVHC content is disclosed in our Material Safety Data Sheets.",
  },
  {
    question: "Where are Texdale products manufactured?",
    answer:
      "At our production and lab facility in the North of England, with distribution across our export markets.",
  },
  {
    question: "Can I request a sample before ordering?",
    answer:
      "Yes. Use the request-a-sample button on any product page, or contact our technical team directly.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-caption text-accent mb-3 tracking-wide uppercase">
          Eco-friendly textile chemicals
        </p>
        <h1 className="text-h1 max-w-2xl">
          Textile chemicals for pretreatment, dyeing and finishing — UK manufactured, REACH
          compliant.
        </h1>
        <p className="text-ink/70 mt-4 max-w-xl">
          Texdale formulates and supplies pretreatment, dyeing, finishing and denim-washing
          chemicals to mills and finishers across the UK and internationally.
        </p>
        <div className="mt-6 flex gap-3">
          <Button variant="primary">Explore products</Button>
          <Button variant="secondary">Request a sample</Button>
        </div>
        <div className="bg-line/40 mt-10 h-64 rounded-lg" />
      </section>

      <section className="border-line bg-accent-light/40 border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6">
          <Badge>REACH compliant</Badge>
          <Badge>ISO 9001</Badge>
          <Badge>Oeko-Tex</Badge>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-h2">Product families</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((p) => (
            <Card key={p.name}>
              <h3 className="text-h4">{p.name}</h3>
              <p className="text-ink/70 mt-2 text-sm">{p.desc}</p>
              <Link href={p.href} className="text-accent mt-4 inline-block text-sm font-medium">
                View range →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-line bg-paper border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Our process</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Chip active>01 Source</Chip>
            <Chip>02 Formulate</Chip>
            <Chip>03 Lab test</Chip>
            <Chip>04 Produce</Chip>
            <Chip>05 Deliver</Chip>
          </div>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-h2">Sustainability &amp; compliance</h2>
            <p className="text-ink/70 mt-3">
              We reduce Substances of Very High Concern across our range and buy only from
              REACH-compliant suppliers, EU and international.
            </p>
            <Link href="/sustainability" className="mt-4 inline-block">
              <Button variant="secondary">View compliance</Button>
            </Link>
          </div>
          <div className="bg-line/40 h-40 rounded-lg" />
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Frequently asked</h2>
          <div className="mt-6">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-line bg-ink text-paper border-t py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-h2">Need a tailored formulation?</h2>
          <p className="text-paper/70 mt-2">Talk to our technical team about your process.</p>
          <Button variant="secondary" className="border-paper text-paper hover:bg-paper/10 mt-6">
            Talk to our technical team
          </Button>
        </div>
      </section>
    </>
  );
}
```

Everything here is static and content is placeholder (real copy and images come from Sanity in Phase 2, motion comes in Phase 4) — the point of this step is purely to confirm the section structure matches the wireframe.

**Checkpoint:** localhost:3000 shows a full homepage — hero, trust badges, six product-family cards, process chips, sustainability split, FAQ accordion, dark final CTA band — using the same fonts/colours/components as the wireframe's structure, just without images or motion yet.

- [ ] About (`/about`)
- [ ] Sustainability & compliance (`/sustainability`)
- [ ] Product category (`/products/[category]`)
- [ ] Product detail (`/products/[category]/[product]`)
- [ ] Insights listing (`/insights`) and article (`/insights/[slug]`)
- [ ] Contact (`/contact`)

**Checkpoint:** every route from the wireframe exists, is navigable, and pulls real content from Sanity where applicable.

---

## Phase 4 — GSAP interactions

`npm install gsap` (all plugins free since 2025 — ScrollTrigger, SplitText, Flip included, no licence key needed).

- [ ] Global `prefers-reduced-motion` guard
- [ ] Sticky nav condense on scroll
- [ ] Hero headline SplitText stagger-in
- [ ] Scroll-triggered card/row stagger reveals
- [ ] Stat counters (count-up on scroll into view)
- [ ] Product finder filter re-flow via Flip
- [ ] FAQ accordion height animation (upgrade from Phase 1's plain toggle)
- [ ] Pinned horizontal "our process" rail (desktop only)
- [ ] Certification icon line-draw (stroke-dashoffset)
- [ ] Drag-to-scroll carousels via GSAP Observer/Draggable

**Checkpoint:** Lighthouse "reduced motion" emulation shows a fully usable, mostly static site; motion on by default feels smooth, not gimmicky.

---

## Phase 5 — SEO and AEO implementation

- [ ] Next.js Metadata API: unique title/description per page type
- [ ] JSON-LD: `Organization`+`WebSite` (root), `BreadcrumbList` (all non-home), `Product`+`additionalProperty` (category/detail), `FAQPage` (home/category/product/compliance/contact), `Article` (insights)
- [ ] `sitemap.ts` / `robots.ts` — confirm AI-crawler allow/block list with the client before this ships
- [ ] `llms.txt` — accurate, low-cost, not a ranking lever today
- [ ] Open Graph + Twitter card images per page type
- [ ] Canonical tags on filtered/sorted product-listing URLs

**Checkpoint:** Google's Rich Results Test and `validator.schema.org` show zero errors on one page of each type.

---

## Phase 6 — Performance and accessibility

- [ ] `next/image` everywhere, AVIF/WebP, explicit width/height
- [ ] Lighthouse mobile: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Keyboard nav + visible focus states on every interactive element
- [ ] Skip-to-content link (done in Phase 1), semantic landmarks, one `h1` per page
- [ ] WCAG 2.2 AA colour contrast check
- [ ] Form spam protection (honeypot or hCaptcha) and inline validation

**Checkpoint:** Lighthouse scores 90+ across Performance, Accessibility, Best Practices, SEO on mobile.

---

## Phase 7 — QA

- [ ] Cross-browser: Chrome, Safari, Edge, Firefox
- [ ] Responsive check across breakpoints on every page type
- [ ] Form submission end-to-end test
- [ ] Broken-link/404 sweep across the migrated catalogue
- [ ] Client content review in Sanity Studio before launch

---

## Phase 8 — Deployment

- [ ] Deploy to Vercel, connect `texdale.co.uk`, confirm SSL
- [ ] Staging previews on every PR
- [ ] Environment variables set in Vercel
- [ ] 301 redirects from every old URL to its new equivalent
- [ ] Submit new sitemap in Google Search Console and Bing Webmaster Tools

---

## Phase 9 — Post-launch

- [ ] Analytics (GA4 or Plausible) with goals on quote requests, MSDS downloads, sample requests
- [ ] Handover note for the Texdale team on adding a product/article/FAQ in Sanity Studio
- [ ] 30-day check: Core Web Vitals, indexing, schema errors
- [ ] Quarterly review of the robots.txt AI-crawler list

---

## Getting started (already done for Phase 0)

```bash
npx create-next-app@latest texdale-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd texdale-web
npm install gsap
git init && git add . && git commit -m "chore: scaffold project"
```
