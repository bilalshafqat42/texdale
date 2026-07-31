import Link from "next/link";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import { categories } from "@/lib/products";

const faqs = [
  {
    question: "Is Texdale REACH compliant?",
    answer:
      "Texdale does not manufacture new chemical substances that require REACH registration in their own right — our products are the result of raw materials sourced from EU and international REACH-compliant suppliers, whose registration status we verify before use.",
  },
  {
    question: "Where are Texdale products manufactured?",
    answer:
      "At our production and lab facility based in the North of England, with distribution across our export markets.",
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
        <Reveal onMount>
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
          <div className="mt-6 flex gap-4">
            <Button href="/products" variant="primary">
              Explore products
            </Button>
            <Button href="/contact?reason=sample" variant="secondary">
              Request a sample
            </Button>
          </div>
        </Reveal>
        <Reveal onMount delay={0.15}>
          <div className="bg-line/40 mt-10 h-64 rounded-lg" />
        </Reveal>
      </section>

      <section className="border-line bg-accent-light/40 border-t py-10">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6">
          <Badge>REACH compliant sourcing</Badge>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-h2">Product families</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.06}>
              <Card>
                <h3 className="text-h4">{category.name}</h3>
                <p className="text-ink/70 mt-2 text-sm">{category.summary}</p>
                <Link
                  href={`/products/${category.slug}`}
                  className="text-accent mt-4 inline-block text-sm font-medium"
                >
                  View range →
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-line bg-paper border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Our process</h2>
          <Reveal className="mt-8 flex flex-wrap gap-3">
            <Chip active>01 Source</Chip>
            <Chip>02 Formulate</Chip>
            <Chip>03 Lab test</Chip>
            <Chip>04 Produce</Chip>
            <Chip>05 Deliver</Chip>
          </Reveal>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <Reveal>
            <h2 className="text-h2">Sustainability &amp; compliance</h2>
            <p className="text-ink/70 mt-3">
              It is our aim to reduce the use of Substances of Very High Concern across our range,
              sourcing only from REACH-compliant suppliers, EU and international.
            </p>
            <Button href="/sustainability" variant="secondary" className="mt-4">
              View compliance
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-line/40 h-40 rounded-lg" />
          </Reveal>
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
        <Reveal className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-h2">Need a tailored formulation?</h2>
          <p className="text-paper/70 mt-2">Talk to our technical team about your process.</p>
          <Button
            href="/contact?reason=general"
            variant="secondary"
            className="border-paper text-paper hover:bg-paper/10 mt-6"
          >
            Talk to our technical team
          </Button>
        </Reveal>
      </section>
    </>
  );
}
