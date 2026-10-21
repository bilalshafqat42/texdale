import PageMotion, { SplitWords } from "@/components/PageMotion";
import { CtaBand, EdHead, PageHead, TextLink } from "@/components/Editorial";

export const metadata = {
  title: "About",
  description:
    "Texdale is a UK manufacturer of textile chemicals for pretreatment, dyeing, finishing and denim washing, based in the North of England and supplying mills internationally.",
};

const FACTS = [
  { k: "Decades", v: "Of research behind the range" },
  { k: "Bespoke", v: "Products to your requirement" },
  { k: "In stock", v: "Raw materials on hand" },
  { k: "Lean", v: "Manufacturing methods" },
];

const HOW = [
  {
    title: "People",
    body: "A seasoned technical team, backed by a sales team that knows the mill floor.",
  },
  {
    title: "Facility",
    body: "On-site evaluation of every crucial textile process, from construction to finishing.",
  },
  {
    title: "Stock",
    body: "A wide range of raw materials held, so fresh product is made quickly once you order.",
  },
  {
    title: "Price",
    body: "Lean methods and long experience keep our products competitively priced.",
  },
];

export default function AboutPage() {
  return (
    <PageMotion>
      <PageHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Company" }]}
        title="Made in the North of England."
        lede="Texdale formulates and manufactures textile chemicals for pretreatment, dyeing, finishing and denim washing, and supplies mills and finishers across continents."
      >
        <TextLink href="/products">Our range</TextLink>
        <TextLink href="/contact/?reason=general">Talk to a technician</TextLink>
      </PageHead>

      <section className="band" style={{ paddingTop: "clamp(40px,5vw,80px)" }}>
        <div className="tx-wrap">
          <EdHead label="01 — Approach" title="A no-compromise policy on manufacturing.">
            <div className="prose" data-fade>
              <p>
                Product development stays in the spotlight at Texdale. We hold every product to the
                same high standard at every step of production, so what reaches you is the best we
                can make.
              </p>
              <p>
                Our on-site facility evaluates and examines every crucial textile process, whether
                construction or finishing. Technical information and documentation reach you
                promptly, by whatever channel suits you.
              </p>
            </div>
          </EdHead>
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

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead label="02 — How we work" title="Built around the people who use it." />
          <div className="steps" style={{ marginTop: "clamp(40px,4.8vw,66px)" }}>
            {HOW.map((s, i) => (
              <div className="stp" data-fade key={s.title}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <span className="d">{s.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="band">
        <div className="tx-wrap">
          <EdHead label="03 — Partnership" title="Tailored to your process.">
            <div className="prose" data-fade>
              <p>
                Our range is the result of decades of research, and we can develop products to match
                a client&apos;s exact requirement. Our staff know the company&apos;s manufacturing
                standards and are motivated to meet them.
              </p>
              <p>
                We aim to be responsive and to support our customers beyond the norm, and we look
                for a long-term relationship with every client.
              </p>
            </div>
            <div data-fade>
              <TextLink href="/sustainability">Our REACH position</TextLink>
            </div>
          </EdHead>
        </div>
      </section>

      <CtaBand />
    </PageMotion>
  );
}
