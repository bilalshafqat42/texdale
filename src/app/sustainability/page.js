import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Sustainability & compliance",
  description:
    "How Texdale approaches REACH compliance and SVHC disclosure across its textile chemical range.",
};

const faqs = [
  {
    question: "Is Texdale REACH compliant?",
    answer:
      "Texdale does not manufacture new chemical substances that require REACH registration in their own right — our products are the result of raw materials sourced from EU and international REACH-compliant suppliers, whose registration status we verify before approving a material for use.",
  },
  {
    question: "How do you disclose Substances of Very High Concern (SVHC)?",
    answer:
      "It is our aim to reduce the use of such materials. Where a formulation contains an SVHC identified on the REACH candidate list, this is disclosed in the relevant Material Safety Data Sheet, and our technical team can recommend alternatives.",
  },
  {
    question: "Can I request certification documents or data sheets?",
    answer:
      "Yes. Get in touch with our technical team and we'll send the relevant technical data sheets or safety data sheets directly.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sustainability" }]} />
        <h1 className="text-h1 mt-4">Sustainability &amp; compliance</h1>
        <p className="text-ink/70 mt-3 max-w-xl">
          We take a cautious, transparent approach to chemical compliance, from supplier
          verification through to what goes on the label of every safety data sheet we issue.
        </p>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">REACH and SVHC</h2>
          <p className="text-ink/70 mt-3 max-w-2xl">
            All products manufactured at Texdale are the result of raw materials obtained from
            various suppliers — we do not form new compounds that would themselves require REACH
            registration. Instead, we verify that our suppliers, sourced from EU and international
            REACH-compliant firms, hold the necessary documentation before any material is approved
            for use in our formulations.
          </p>
          <p className="text-ink/70 mt-3 max-w-2xl">
            It is our aim to reduce the use of Substances of Very High Concern (SVHC) across our
            range. Where a product does contain an SVHC identified on the REACH candidate list, this
            is disclosed in the corresponding Material Safety Data Sheet, and our technical team
            actively promotes alternatives to clients.
          </p>
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

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-h2">Need compliance documentation?</h2>
          <p className="text-ink/70 mx-auto mt-2 max-w-xl">
            Request technical data sheets or safety data sheets and our technical team will send
            them directly.
          </p>
          <Button href="/contact?reason=general" variant="primary" className="mt-6">
            Request documentation
          </Button>
        </div>
      </section>
    </>
  );
}
