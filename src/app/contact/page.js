import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import PageMotion from "@/components/PageMotion";
import { ContactStack, EdHead, PageHead } from "@/components/Editorial";
import { CONTACT } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Texdale for a quote, a sample, a technical data sheet or a safety data sheet.",
};

const faqs = [
  {
    question: "Can I request a TDS or MSDS without placing an order?",
    answer:
      "Yes. Choose the data sheet you need in the form and our technical team will send it directly.",
  },
  {
    question: "Do you supply outside the UK?",
    answer:
      "Yes. We manufacture in the North of England and supply mills and finishers internationally.",
  },
  {
    question: "Can you develop a product for our process?",
    answer:
      "Yes. Tell us about your cloth, your machinery and the result you need, and we can develop a product tailored to your requirement.",
  },
];

export default function ContactPage() {
  return (
    <PageMotion>
      <PageHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Send us the cloth."
        lede="A quote, a sample, a data sheet or a technical question. Tell us what you need and a technician will reply directly."
      />

      <section className="band" style={{ paddingTop: "clamp(30px,4vw,64px)" }}>
        <div className="tx-wrap">
          <div className="contact-grid" style={{ alignItems: "start" }}>
            <div data-fade>
              <ContactForm />
            </div>
            <div>
              <ContactStack />
              <div className="cblock" data-fade>
                <span className="mono">Registered office</span>
                <address>{CONTACT.registeredOffice}</address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead label="Questions" title="Frequently asked." />
          <div style={{ marginTop: "clamp(36px,4vw,56px)" }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </PageMotion>
  );
}
