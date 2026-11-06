import FAQAccordion from "@/components/FAQAccordion";
import PageMotion from "@/components/PageMotion";
import { CtaBand, EdHead, PageHead } from "@/components/Editorial";

export const metadata = {
  alternates: { canonical: "/sustainability/" },
  title: "Sustainability & compliance",
  description:
    "How Texdale approaches sustainability, REACH compliance and SVHC disclosure across its textile chemical range.",
};

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

const faqs = [
  {
    question: "Is Texdale REACH compliant?",
    answer:
      "Our products are blended from raw materials, and no new substances are formed during formulation, so our current range does not itself require REACH registration. We buy only from EU and international REACH-compliant suppliers and confirm they hold the documentation for registration and compliance.",
  },
  {
    question: "How do you disclose Substances of Very High Concern (SVHC)?",
    answer:
      "We aim to reduce the use of SVHCs. Where a product does contain one, it is listed in that product's Material Safety Data Sheet, and our technical team can recommend alternatives where practical.",
  },
  {
    question: "Can I request data sheets or compliance documents?",
    answer:
      "Yes. Ask for the technical data sheet or safety data sheet for any product and our technical team will send it directly.",
  },
];

export default function SustainabilityPage() {
  return (
    <PageMotion>
      <PageHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
        title="Lower impact. Same performance."
        lede="We are committed to reducing our effect on the planet and offering more sustainable products and solutions to our customers."
      />

      <section className="band dark">
        <div className="tx-wrap">
          <EdHead label="01 — Framework" title="Three commitments." dark />
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div className="pil" data-fade key={p.title}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <b>{p.title}</b>
                <span className="d">{p.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="tx-wrap">
          <EdHead label="02 — REACH" title="Registered suppliers. Documented materials.">
            <div className="prose" data-fade>
              <p>
                Every Texdale product is made from raw materials bought from our suppliers. No new
                substances or compounds form when we formulate, blend and mix them, so our current
                range does not need REACH registration of its own.
              </p>
              <p>
                We do confirm that each supplier holds the documentation for registration and
                compliance. We buy only from EU and international REACH-compliant firms, and we keep
                alternative registered suppliers, local and international, so the range stays on the
                shelf.
              </p>
            </div>
          </EdHead>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead label="03 — SVHC" title="Less of what matters least.">
            <div className="prose" data-fade>
              <p>
                We aim to reduce the use of Substances of Very High Concern across the range. Where
                a product contains an SVHC, it is listed in the product&apos;s Material Safety Data
                Sheet.
              </p>
              <p>
                We also help our clients understand the alternatives, wherever that is practical.
              </p>
            </div>
          </EdHead>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead label="04 — Questions" title="Frequently asked." />
          <div style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Need compliance documents?"
        lede="Ask for a technical data sheet or safety data sheet and a technician will send it."
        links={[
          { href: "/contact/?reason=msds", label: "Request a safety data sheet" },
          { href: "/contact/?reason=tds", label: "Request a technical data sheet" },
        ]}
      />
    </PageMotion>
  );
}
