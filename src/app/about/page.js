import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description:
    "Texdale is a UK manufacturer of textile chemicals for pretreatment, dyeing, finishing and denim washing, supplying mills and finishers across the UK and internationally.",
};

const milestones = [
  {
    year: "2004",
    text: "Texdale founded in the North of England as a small-batch textile auxiliaries producer.",
  },
  {
    year: "2009",
    text: "First export orders shipped, opening our initial markets in Europe.",
  },
  {
    year: "2013",
    text: "ISO 9001 certification achieved, formalising our quality management system.",
  },
  {
    year: "2018",
    text: "Production and lab facility expanded to increase batch capacity and testing throughput.",
  },
  {
    year: "2022",
    text: "REACH compliance programme extended across the full raw material supply chain.",
  },
];

const values = [
  {
    name: "Quality",
    desc: "Every batch is lab-tested against specification before it leaves the facility.",
  },
  {
    name: "Technical partnership",
    desc: "We work alongside mills and finishers to solve process problems, not just supply chemicals.",
  },
  {
    name: "Sustainability",
    desc: "We reduce Substances of Very High Concern and buy only from REACH-compliant suppliers.",
  },
  {
    name: "Reliability",
    desc: "Consistent formulations and dependable lead times, order after order.",
  },
];

const regions = ["United Kingdom", "Europe", "Middle East", "Asia"];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <h1 className="text-h1 mt-4">About Texdale</h1>
        <p className="text-ink/70 mt-3 max-w-xl">
          Texdale is a UK manufacturer of textile chemicals, formulating pretreatment, dyeing,
          finishing and denim-washing auxiliaries for mills and finishers. We combine an in-house
          lab with REACH-compliant sourcing to deliver consistent, technically supported products
          across our export markets.
        </p>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Our story</h2>
          <ol className="mt-8 space-y-6">
            {milestones.map((m) => (
              <li key={m.year} className="flex gap-4">
                <span className="text-accent w-16 shrink-0 font-mono text-sm font-medium">
                  {m.year}
                </span>
                <span className="text-ink/70 text-sm">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
          <div className="bg-line/40 h-64 rounded-lg" />
          <div>
            <h2 className="text-h2">Our facility</h2>
            <p className="text-ink/70 mt-3">
              Our production and lab facility in the North of England houses formulation, batch
              manufacturing and quality testing under one roof. This lets our technical team move
              quickly from a customer trial to a repeatable, specification-checked production batch.
            </p>
          </div>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">What we value</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.06}>
                <Card>
                  <h3 className="text-h4">{v.name}</h3>
                  <p className="text-ink/70 mt-2 text-sm">{v.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Global reach</h2>
          <p className="text-ink/70 mt-3 max-w-xl">
            From our UK base, we supply mills and finishers across the following regions.
          </p>
          <div className="bg-line/40 mt-8 h-64 rounded-lg" />
          <div className="mt-6 flex flex-wrap gap-3">
            {regions.map((r) => (
              <Chip key={r}>{r}</Chip>
            ))}
          </div>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <Reveal className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-h2">Want to know more?</h2>
          <p className="text-ink/70 mt-2">
            Get in touch with our team to discuss your requirements.
          </p>
          <Button href="/contact?reason=general" variant="primary" className="mt-6">
            Get in touch
          </Button>
        </Reveal>
      </section>
    </>
  );
}
