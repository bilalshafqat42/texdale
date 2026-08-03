import Link from "next/link";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import ProcessStep from "@/components/ProcessStep";
import Card from "@/components/Card";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import HeroSection from "@/components/HeroSection";
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
      <HeroSection />

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
              <Link href={`/products/${category.slug}`} className="block h-full">
                <Card
                  image={category.image}
                  imageAlt={`${category.name} textile chemicals`}
                  className="h-full"
                >
                  <h3 className="text-h4">{category.name}</h3>
                  <p className="text-ink/70 mt-2 text-sm">{category.summary}</p>
                  <span className="text-accent mt-4 inline-block text-sm font-medium">
                    View range →
                  </span>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-line bg-paper border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Our process</h2>
          <Reveal className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5 sm:gap-6">
            <ProcessStep icon="source" number="01" label="Source" active />
            <ProcessStep icon="formulate" number="02" label="Formulate" />
            <ProcessStep icon="labTest" number="03" label="Lab test" />
            <ProcessStep icon="produce" number="04" label="Produce" />
            <ProcessStep icon="deliver" number="05" label="Deliver" />
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
          <Button href="/contact?reason=general" variant="light-outline" className="mt-6">
            Talk to our technical team
          </Button>
        </Reveal>
      </section>
    </>
  );
}
