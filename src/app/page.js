import Image from "next/image";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import ProcessStep from "@/components/ProcessStep";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
import IntroSection from "@/components/IntroSection";
import HeroSection from "@/components/HeroSection";
import ProductsCarousel from "@/components/ProductsCarousel";

const PROCESS_STEPS = [
  {
    icon: "source",
    number: "01",
    label: "Source",
    description:
      "Raw materials sourced from REACH-compliant suppliers in the EU and internationally.",
  },
  {
    icon: "formulate",
    number: "02",
    label: "Formulate",
    description: "Formulated in our lab to match your process, substrate and finish.",
  },
  {
    icon: "labTest",
    number: "03",
    label: "Lab test",
    description: "Trialled and tested for performance before it leaves the lab.",
  },
  {
    icon: "produce",
    number: "04",
    label: "Produce",
    description: "Manufactured at our production facility in the North of England.",
  },
  {
    icon: "deliver",
    number: "05",
    label: "Deliver",
    description: "Despatched to mills and finishers across the UK and export markets.",
  },
];

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
      <IntroSection />
      <HeroSection />

      <section className="border-line border-t py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-caption text-accent tracking-wide uppercase">About Texdale</p>
            <h2 className="text-h2 mt-3">
              Textile chemicals for pretreatment, dyeing and finishing — UK manufactured, REACH
              compliant.
            </h2>
            <p className="text-ink/70 mt-4 max-w-xl">
              Texdale formulates and supplies pretreatment, dyeing, finishing and denim-washing
              chemicals to mills and finishers across the UK and internationally.
            </p>
            <Button href="/products" variant="primary" className="mt-6">
              Explore products
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-brand-blue flex h-64 w-full items-center justify-center rounded-2xl sm:h-72 md:h-80 lg:h-96">
              <Image
                src="/texdale-light.svg"
                alt="Texdale"
                width={280}
                height={98}
                className="h-auto w-40 sm:w-48 md:w-56"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-line bg-accent-light/40 border-t py-10">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap gap-4 px-6">
          <Badge>REACH compliant sourcing</Badge>
        </Reveal>
      </section>

      <ProductsCarousel />

      <section className="border-line bg-paper border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Our process</h2>
          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
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
