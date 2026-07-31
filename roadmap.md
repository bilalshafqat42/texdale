# Texdale website rebuild — build roadmap

Stack: Next.js (App Router, TypeScript), Tailwind CSS, GSAP + ScrollTrigger/Flip, Inter (next/font), Sanity as headless CMS, Vercel hosting.

How we'll work: you run commands and write files in VS Code, paste me the file or the error, and I give you the next diff or fix. Each phase below ends with a working, deployable state — never a half-finished app.

---

## Phase 0 — Environment & repo setup

- [ ] Install Node.js LTS and confirm `node -v` / `npm -v` in the VS Code terminal
- [ ] `npx create-next-app@latest texdale-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] Init git, create a private GitHub repo, first commit
- [ ] VS Code extensions: ESLint, Prettier, Tailwind CSS IntelliSense, GitLens
- [ ] Add `.editorconfig`, Prettier config, and a pre-commit hook (Husky + lint-staged) so formatting never drifts
- [ ] Create `.env.local` (git-ignored) for future API keys — Sanity project ID, form provider key, analytics ID

**Checkpoint:** `npm run dev` shows the default Next.js page at localhost:3000.

---

## Phase 1 — Design foundations

- [ ] Add Inter via `next/font/google`, latin subset, `display: swap`; set as the default body font in `tailwind.config.ts`
- [ ] Add IBM Plex Mono the same way, mapped to a `font-mono` Tailwind class for spec tables and product codes
- [ ] Define the Tailwind theme: colour palette (neutral base + one accent, matching Texdale's brand), spacing scale, and a type scale for h1–h6/body/caption
- [ ] Build the base layout: `<Header>` (sticky nav + product search + "Request a quote"), `<Footer>` (NAP, sitemap links, newsletter), `<main>` wrapper
- [ ] Build a small shared component set: Button, Chip, Badge, Card, Breadcrumb, FAQAccordion — these get reused across every page type in the wireframe

**Checkpoint:** a styled shell with header/footer renders on every route, matching the wireframe's grayscale structure but in real type and colour.

---

## Phase 2 — Content and data layer

- [ ] Stand up a free-tier Sanity Studio project (`npm create sanity@latest`) — gives Texdale's own team a login to add products, articles, and swap TDS/MSDS PDFs without touching code
- [ ] Define schemas: `product` (name, category, function summary, spec fields, TDS/MSDS file, related products), `category` (name, intro copy, FAQ entries), `article` (title, author, date, body, category tags), `faq` (question, answer, page association)
- [ ] Migrate the existing product tables from texdale.co.uk into this schema (I can help script this from the pages we already extracted)
- [ ] Set up the Sanity client and typed queries (GROQ) in the Next.js app

**Checkpoint:** a test product created in Sanity Studio renders on a placeholder Next.js page.

---

## Phase 3 — Build the seven page types

Build in this order, each against the matching wireframe frame from `texdale-wireframes-v2.html`:

- [ ] Homepage (`/`) — hero, trust strip, product families, process, sustainability band, industries, testimonials, FAQ, insights carousel, final CTA
- [ ] About (`/about`) — story timeline, facility, values, global reach map
- [ ] Sustainability & compliance (`/sustainability`) — REACH/SVHC statements, certifications table, FAQ
- [ ] Product category (`/products/[category]`) — product finder (search + filters + compare), product table, category FAQ
- [ ] Product detail (`/products/[category]/[product]`) — spec table, four CTAs (quote/TDS/MSDS/chat), related products
- [ ] Insights listing (`/insights`) and article (`/insights/[slug]`)
- [ ] Contact (`/contact`) — enquiry form, office/map, distributor list, FAQ

**Checkpoint:** every route from the wireframe exists, is navigable, and pulls real content from Sanity where applicable.

---

## Phase 4 — GSAP interactions

Install: `npm install gsap`. All plugins are free (Webflow/GreenSock, 2025), so ScrollTrigger, SplitText, and Flip are all available without a licence key.

Implement in this order (lowest effort/highest impact first):

- [ ] Global: `prefers-reduced-motion` check that disables non-essential motion sitewide
- [ ] Sticky nav condense on scroll
- [ ] Hero headline SplitText stagger-in on load
- [ ] Scroll-triggered card/table-row stagger reveals (product families, category grids)
- [ ] Stat counters (count-up on scroll into view)
- [ ] Product finder filter re-flow using Flip
- [ ] FAQ accordion height animation
- [ ] Pinned horizontal "our process" rail (desktop only, static stack on mobile)
- [ ] Certification icon line-draw (stroke-dashoffset) on the compliance band
- [ ] Drag-to-scroll carousels (insights, related products) via GSAP Observer/Draggable

**Checkpoint:** Lighthouse "reduced motion" emulation shows a fully usable, mostly static site; motion on by default feels smooth, not gimmicky.

---

## Phase 5 — SEO and AEO implementation

- [ ] Next.js Metadata API: unique title/description per page type, per the pattern in the wireframe's meta panels
- [ ] JSON-LD structured data components: `Organization` + `WebSite` (root layout), `BreadcrumbList` (all non-home pages), `Product` with `additionalProperty` for specs (category/detail pages), `FAQPage` (home, category, product, compliance, contact), `Article` (insights)
- [ ] `sitemap.xml` and `robots.txt` via Next.js's built-in `sitemap.ts`/`robots.ts` — confirm with you which AI crawlers to allow/block before this ships
- [ ] `llms.txt` — a short, accurate summary of the site and key pages (low cost, future-proofing, not a ranking lever today)
- [ ] Open Graph + Twitter card images per page type
- [ ] Canonical tags on filtered/sorted product-listing URLs

**Checkpoint:** Google's Rich Results Test and `validator.schema.org` show zero errors on one page of each type.

---

## Phase 6 — Performance and accessibility

- [ ] Image optimisation: `next/image` everywhere, AVIF/WebP, explicit width/height to protect CLS
- [ ] Lighthouse pass on mobile: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Keyboard navigation and visible focus states on every interactive element (nav, filters, accordion, form)
- [ ] Skip-to-content link, semantic landmarks (`nav`/`main`/`article`/`footer`), one `h1` per page
- [ ] Colour contrast check (WCAG 2.2 AA) on all text/background pairs, including chips and badges
- [ ] Contact and enquiry forms: spam protection (honeypot or hCaptcha) and clear inline validation

**Checkpoint:** Lighthouse scores 90+ across Performance, Accessibility, Best Practices, SEO on mobile.

---

## Phase 7 — QA

- [ ] Cross-browser check: Chrome, Safari, Edge, Firefox
- [ ] Responsive check: mobile, tablet, desktop breakpoints on every page type
- [ ] Form submission end-to-end test (enquiry, quote request, MSDS request)
- [ ] Broken-link and 404 sweep across the migrated product catalogue
- [ ] Client content review in Sanity Studio (Texdale team confirms product data is accurate before launch)

---

## Phase 8 — Deployment

- [ ] Deploy to Vercel, connect the `texdale.co.uk` domain, confirm SSL
- [ ] Set up staging (preview deployments on every PR) so the client can review before anything goes live
- [ ] Environment variables set in Vercel (Sanity, form provider, analytics)
- [ ] 301 redirects from every old texdale.co.uk URL to its new equivalent, so existing Google rankings aren't lost
- [ ] Submit the new sitemap in Google Search Console and Bing Webmaster Tools

---

## Phase 9 — Post-launch

- [ ] Analytics in place (GA4 or Plausible) with goals on quote requests, MSDS downloads, and sample requests
- [ ] A short handover note for the Texdale team on how to add a product, article, or FAQ in Sanity Studio
- [ ] 30-day check: Core Web Vitals in Search Console, first indexing pass, any schema errors
- [ ] Quarterly review of the robots.txt AI-crawler list — new bots launch often and existing ones change their user-agent strings

---

## Getting started today

```bash
npx create-next-app@latest texdale-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd texdale-web
npm install gsap
git init && git add . && git commit -m "chore: scaffold project"
```

Once that's running locally, come back with the terminal output and we'll start Phase 1.
