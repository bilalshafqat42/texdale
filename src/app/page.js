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
