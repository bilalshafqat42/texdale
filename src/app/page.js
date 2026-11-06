import Link from "next/link";
import PageMotion, { SplitWords } from "@/components/PageMotion";
import { Arrow, ContactStack, EdHead, RowArrow, Shot, TextLink } from "@/components/Editorial";
import { categories, products } from "@/lib/products";

const FACTS = [
  { k: String(products.length), v: "Products in the range" },
  { k: "REACH", v: "Compliant sourcing" },
  { k: "On site", v: "Testing & evaluation" },
  { k: "Bespoke", v: "Built to your cloth" },
];

const STAGES = [
  {
    colour: "var(--tx-blue)",
    title: "Pretreatment",
    body: "The fibre comes out clean, even and absorbent. Nothing downstream holds without it.",
    sub: ["Desizing · Scouring", "Bleaching · Wetting agents"],
  },
  {
    colour: "var(--tx-yellow)",
    title: "Dyeing",
    body: "Shade holds through the cycle. Fastness holds long after it.",
    sub: ["Washing · Levelling", "Dispersing · Fixing"],
  },
  {
    colour: "var(--tx-green)",
    title: "Finishing",
    body: "Where the cloth gets the hand a buyer feels and the performance a spec demands.",
    sub: ["Softeners · Silicones", "Resins · Repellents"],
  },
];

const STEPS = [
  { title: "Consult", body: "Your cloth, your machinery, your target result." },
  { title: "Formulate", body: "Developed to the requirement, on decades of research." },
  { title: "Test", body: "Evaluated in our own on-site facility before supply." },
  { title: "Supply", body: "Raw materials held in stock, so we can make to order fast." },
];

const PILLARS = [
  {
    title: "Health, Safety & Security",
    body: "Safe handling from the plant floor to your dye house.",
  },
  {
    title: "Environmental Performance",
    body: "Eco-friendly formulations, with substances of very high concern reduced wherever we can.",
  },
  {
    title: "Energy Efficiencies",
    body: "Lean manufacturing methods that keep waste and cost down.",
  },
];

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <PageMotion>
      {/* ================= MASTHEAD ================= */}
      <section className="mast">
        <div className="tx-wrap">
          <div className="mast-meta">
            <span className="mono">Texdale Chemicals</span>
            <span className="mono">Textile chemicals</span>
            <span className="mono">Stockport, England</span>
            <span className="mono">REACH-compliant sourcing</span>
          </div>
          <div className="rule" data-rule />
          <h1 data-split>
            <SplitWords text="Chemistry for the wet process." />
          </h1>
          <div className="mast-foot">
            <p className="lede">
              Pretreatment, dyeing, finishing and denim. Formulated in England, supplied to mills
              worldwide.
            </p>
            <div className="mast-links">
              <a className="lk" href="#range">
                The range <Arrow />
              </a>
              <a className="lk" href="#contact">
                Talk to a technician <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Shot
        fig="Fig. 01"
        title="Indigo denim"
        spec="Pretreatment to finish"
        src="/home/hero.jpg"
        alt="Folded indigo denim in several shades of blue"
        priority
        wide
      />

      {/* ================= COMPANY ================= */}
      <section className="band" id="company">
        <div className="tx-wrap">
          <EdHead label="01 — Company" title="A no-compromise policy on manufacturing.">
            <p className="lede" data-fade style={{ maxWidth: "46ch" }}>
              Quality control sits at every stage of production, not at the end of it. Our on-site
              facility evaluates every crucial textile process, from construction to finishing.
            </p>
            <div data-fade>
              <TextLink href="/about">About Texdale</TextLink>
            </div>
          </EdHead>
          <div className="facts" style={{ marginTop: "clamp(44px,5vw,76px)" }}>
            {FACTS.map((f) => (
              <div className="fact" data-fade key={f.v}>
                <div className="k">{f.k}</div>
                <div className="v">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="band" id="process" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead label="02 — Process" title="One supplier, the whole chain." />
          <div className="stages" style={{ marginTop: "clamp(42px,5vw,72px)" }}>
            {STAGES.map((s, i) => (
              <div className="stage" data-fade key={s.title}>
                <span className="mk" style={{ background: s.colour }} />
                <span className="mono">Stage {String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <p className="sub">
                  {s.sub[0]}
                  <br />
                  {s.sub[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tx-wrap">
        <div className="shot-duo">
          <Shot
            fig="Fig. 02"
            title="Colour that holds"
            src="/home/colour.jpg"
            alt="Hand-dyed yarn skeins in blues, purples and rust"
            sizes="(max-width: 680px) 100vw, 50vw"
          />
          <Shot
            fig="Fig. 03"
            title="Formulation"
            src="/home/laboratory.jpg"
            alt="Laboratory flasks of blue and green liquid"
            sizes="(max-width: 680px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* ================= RANGE ================= */}
      <section className="band" id="range">
        <div className="tx-wrap">
          <EdHead
            label="03 — Range"
            title="Eight ranges."
            style={{ marginBottom: "clamp(38px,4.4vw,64px)" }}
          />
          <div className="idx">
            {categories.map((c, i) => (
              <Link className="idx-row" href={`/products/${c.slug}`} data-row key={c.slug}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <span className="nm">{c.name}</span>
                <span className="sub">{c.tags}</span>
                <RowArrow />
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "clamp(30px,3.6vw,48px)" }} data-fade>
            <TextLink href="/products">Search all {products.length} products</TextLink>
          </div>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="band stmt">
        <div className="tx-wrap">
          <span className="mono" data-fade>
            Company statement
          </span>
          <blockquote data-split>
            <SplitWords text="A symbol of quality, efficiency and globally recognised standards." />
          </blockquote>
          <div className="attr" data-fade>
            <span className="bar" />
            <span className="mono">Texdale, Stockport</span>
          </div>
        </div>
      </section>

      {/* ================= METHOD ================= */}
      <section className="band">
        <div className="tx-wrap">
          <EdHead label="04 — Method" title="Sample in. Bulk out." />
          <div className="steps" style={{ marginTop: "clamp(40px,4.8vw,66px)" }}>
            {STEPS.map((s, i) => (
              <div className="stp" data-fade key={s.title}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <span className="d">{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Shot
        fig="Fig. 04"
        title="Thread and yarn"
        spec="Yarn lubricants"
        src="/home/thread.jpg"
        alt="Spools of blue and green thread stacked on a shelf"
        wide
      />

      {/* ================= SUSTAINABILITY ================= */}
      <section className="band dark" id="sustainability">
        <div className="tx-wrap">
          <EdHead label="05 — Sustainability" title="Lower impact. Same performance." dark />
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div className="pil" data-fade key={p.title}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <b>{p.title}</b>
                <span className="d">{p.body}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "clamp(34px,4vw,52px)" }} data-fade>
            <TextLink href="/sustainability" dark>
              Read our REACH position
            </TextLink>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="band" id="contact">
        <div className="tx-wrap">
          <div className="contact-grid">
            <div>
              <span className="mono" data-fade>
                06 — Contact
              </span>
              <h2 data-split style={{ marginTop: 22, maxWidth: "13ch" }}>
                <SplitWords text="Send us the cloth." />
              </h2>
              <p className="lede" data-fade style={{ marginTop: 28, maxWidth: "38ch" }}>
                We will tell you what is possible, what it costs and how fast we can supply it.
              </p>
            </div>
            <ContactStack />
          </div>
        </div>
      </section>
    </PageMotion>
  );
}
