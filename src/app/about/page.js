import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description:
    "Texdale is a UK manufacturer of textile chemicals for pretreatment, dyeing, finishing and denim washing, supplying mills and finishers across the UK and internationally.",
};

const values = [
  {
    name: "No-compromise manufacturing",
    desc: "We hold a no-compromise policy for the manufacturing process, across every batch we produce.",
  },
  {
    name: "Lean and environmentally safe",
    desc: "We observe lean manufacturing methods to ensure environmental safety throughout production.",
  },
  {
    name: "Technical partnership",
    desc: "Decades of experience and commitment, with the ability to develop bespoke products to a client's specification.",
  },
  {
    name: "On-site evaluation",
    desc: "Our facility includes on-site evaluation and examination capabilities, so formulations are tested before they reach a customer.",
  },
];

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
          <h2 className="text-h2">Our approach</h2>
          <p className="text-ink/70 mt-3 max-w-2xl">
            With decades of experience and commitment, Texdale positions its name as a symbol of
            quality, efficiency and globally recognised standards. We develop bespoke products to a
            client&apos;s specification, backed by an on-site facility for evaluation and
            examination.
          </p>
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
