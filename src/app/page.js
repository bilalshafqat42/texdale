import Image from "next/image";
import Link from "next/link";
import HomeMotion, { SplitWords } from "@/components/HomeMotion";
import { CONTACT } from "@/lib/site";

const FACTS = [
  { k: "Six", v: "Product families" },
  { k: "REACH", v: "Compliant as standard" },
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
    sub: ["Levelling · Dispersing", "Sequestering · Fixing"],
  },
  {
    colour: "var(--tx-green)",
    title: "Finishing",
    body: "Where the cloth gets the hand a buyer feels and the performance a spec demands.",
    sub: ["Softeners · Silicones", "Resins · Repellents"],
  },
];

const RANGE = [
  {
    name: "Pretreatment",
    href: "/products/pretreatment",
    sub: "Desizing · Scouring · Bleaching · Wetting agents",
  },
  {
    name: "Dyeing Auxiliaries",
    href: "/products/dyeing-auxiliaries",
    sub: "Levelling · Dispersing · Sequestering · Fixers",
  },
  { name: "Finishing", href: "/products/finishing", sub: "Softeners · Silicones · Hand builders" },
  {
    name: "Special Finishes",
    href: "/products/special-finishes",
    sub: "Water & oil repellents · Flame retardants · Resins",
  },
  {
    name: "Denim Washing",
    href: "/products/denim-washing",
    sub: "Enzymes · Reducing agents · Anti back-staining · Fixers",
  },
  {
    name: "Yarn Lubricants",
    href: "/products/special-yarn-lubricants",
    sub: "DALEROL coning oils · Water-free · Lick-roll or pump",
  },
];

const STEPS = [
  { title: "Consult", body: "Your cloth, your machinery, your target result." },
  { title: "Formulate", body: "Developed to the requirement, on decades of research." },
  { title: "Test", body: "Run through our own facility before a drum ships." },
  { title: "Supply", body: "Stock held, so lead times follow your production." },
];

const PILLARS = [
  {
    title: "Health, Safety & Security",
    body: "Safe handling from the plant floor to your dye house.",
  },
  {
    title: "Environmental Performance",
    body: "Eco-friendly formulations as the default, not the premium.",
  },
  {
    title: "Energy Efficiencies",
    body: "Lean manufacturing that cuts energy load and cost together.",
  },
];

function Arrow() {
  return (
    <svg className="ar" width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M.8 6h14m0 0L10.3 1.3M14.8 6l-4.5 4.7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function RowArrow() {
  return (
    <svg className="ar" width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden="true">
      <path d="M0 8h24m0 0-7-7m7 7-7 7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// An image chapter. Shows the "Image to supply" placeholder until `src` is set.
function Shot({ fig, title, spec, src, wide = false, sizes = "100vw" }) {
  return (
    <figure className={`shot ${wide ? "shot-xl" : "shot-sq"}`} data-shot>
      {src ? (
        <Image src={src} alt={title} fill sizes={sizes} />
      ) : (
        <div className="await">
          <span>Image to supply</span>
        </div>
      )}
      <span className="tick" />
      {wide && <span className="tick r" />}
      <figcaption className="ph">
        <div className="cap">
          <span className="mono">{fig}</span>
          <span className="t">{title}</span>
          {spec && <span className="mono">{spec}</span>}
        </div>
      </figcaption>
    </figure>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div className="ed-label">
      <span className="mono">{children}</span>
      <div className={`rule${dark ? " rule-dk" : ""}`} data-rule style={{ maxWidth: 90 }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <HomeMotion>
      {/* ================= MASTHEAD ================= */}
      <section className="mast">
        <div className="tx-wrap">
          <div className="mast-meta">
            <span className="mono">Texdale Ltd</span>
            <span className="mono">Textile chemicals</span>
            <span className="mono">Stockport, England</span>
            <span className="mono">Est. North of England</span>
          </div>
          <div className="rule" data-rule />
          <h1 data-split>
            <SplitWords text="Chemistry for the wet process." />
          </h1>
          <div className="mast-foot">
            <p className="lede">
              Pretreatment, dyeing, finishing and denim — formulated in England, supplied to mills
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
        title="The finishing line, Reddish works"
        spec="Full bleed · 2880 × 1234"
        wide
      />

      {/* ================= COMPANY ================= */}
      <section className="band" id="company">
        <div className="tx-wrap">
          <div className="ed">
            <SectionLabel>01 — Company</SectionLabel>
            <div className="ed-body">
              <h2 data-split>
                <SplitWords text="A no-compromise policy on manufacturing." />
              </h2>
              <p className="lede" data-fade style={{ maxWidth: "46ch" }}>
                Quality control sits at every stage of production, not at the end of it. Nothing
                leaves the site that has not been through our own evaluation facility.
              </p>
            </div>
          </div>
          <div className="facts" style={{ marginTop: "clamp(44px,5vw,76px)" }}>
            {FACTS.map((f) => (
              <div className="fact" data-fade key={f.k}>
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
          <div className="ed">
            <SectionLabel>02 — Process</SectionLabel>
            <div className="ed-body">
              <h2 data-split>
                <SplitWords text="One supplier, the whole chain." />
              </h2>
            </div>
          </div>
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
          <Shot fig="Fig. 02" title="Dye house" sizes="(max-width: 680px) 100vw, 50vw" />
          <Shot fig="Fig. 03" title="Laboratory" sizes="(max-width: 680px) 100vw, 50vw" />
        </div>
      </div>

      {/* ================= RANGE ================= */}
      <section className="band" id="range">
        <div className="tx-wrap">
          <div className="ed" style={{ marginBottom: "clamp(38px,4.4vw,64px)" }}>
            <SectionLabel>03 — Range</SectionLabel>
            <div className="ed-body">
              <h2 data-split>
                <SplitWords text="Six families." />
              </h2>
            </div>
          </div>
          <div className="idx">
            {RANGE.map((r, i) => (
              <Link className="idx-row" href={r.href} data-row key={r.href}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <span className="nm">{r.name}</span>
                <span className="sub">{r.sub}</span>
                <RowArrow />
              </Link>
            ))}
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
          <div className="ed">
            <SectionLabel>04 — Method</SectionLabel>
            <div className="ed-body">
              <h2 data-split>
                <SplitWords text="Sample in. Bulk out." />
              </h2>
            </div>
          </div>
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

      <Shot fig="Fig. 04" title="Drum store and dispatch" spec="Full bleed · 2880 × 1234" wide />

      {/* ================= SUSTAINABILITY ================= */}
      <section className="band dark" id="sustainability">
        <div className="tx-wrap">
          <div className="ed">
            <SectionLabel dark>05 — Sustainability</SectionLabel>
            <div className="ed-body">
              <h2 data-split>
                <SplitWords text="Lower impact. Same performance." />
              </h2>
            </div>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div className="pil" data-fade key={p.title}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <b>{p.title}</b>
                <span className="d">{p.body}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "clamp(34px,4vw,52px)" }}>
            <Link className="lk on-dark" href="/sustainability" data-fade>
              Read our REACH position <Arrow />
            </Link>
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
            <div className="cstack">
              <div className="cblock" data-fade>
                <span className="mono">Telephone</span>
                <a className="v" href={`tel:${CONTACT.phoneHref}`}>
                  {CONTACT.phone}
                </a>
              </div>
              <div className="cblock" data-fade>
                <span className="mono">Email</span>
                <a className="v" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </div>
              <div className="cblock" data-fade>
                <span className="mono">Works</span>
                <address>
                  Unit 1, 45 Lambeth Road
                  <br />
                  Reddish, Stockport
                  <br />
                  SK5 6TW, United Kingdom
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
