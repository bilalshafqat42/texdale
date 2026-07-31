import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Texdale for a quote, a sample, a technical data sheet or a safety data sheet.",
};

const faqs = [
  {
    question: "How quickly do you respond to enquiries?",
    answer: "We aim to respond to all enquiries within one working day.",
  },
  {
    question: "Can I request a TDS or MSDS without placing an order?",
    answer:
      "Yes. Select the relevant option in the form below and our technical team will send the documents directly.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="text-h1 mt-4">Contact us</h1>
      <p className="text-ink/70 mt-3 max-w-xl">
        Tell us what you need — a quote, a sample, a data sheet, or just a question for our
        technical team — and we&apos;ll get back to you directly.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <Card>
          <ContactForm />
        </Card>

        <div className="space-y-8">
          <div>
            <h2 className="text-h4">Our office</h2>
            <p className="text-ink/70 mt-2 text-sm">
              Texdale Chemicals
              <br />
              Unit 1, 45 Lambeth Road
              <br />
              Reddish, Stockport SK5 6TW
              <br />
              United Kingdom
            </p>
            <div className="bg-line/40 mt-4 h-48 rounded-lg" />
          </div>

          <div>
            <h2 className="text-h4">Distributors</h2>
            <p className="text-ink/70 mt-2 text-sm">
              Looking for a regional distributor? Let us know your location in the form and
              we&apos;ll point you to the nearest partner.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-h2">Frequently asked</h2>
        <div className="mt-6">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
