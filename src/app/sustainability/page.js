import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Sustainability & compliance",
  description:
    "How Texdale approaches REACH compliance, SVHC disclosure and third-party certification across its textile chemical range.",
};

const certifications = [
  {
    name: "REACH compliant",
    scope: "All raw material suppliers, EU and international",
  },
  {
    name: "ISO 9001",
    scope: "Quality management system",
  },
  {
    name: "Oeko-Tex",
    scope: "Product-level textile safety standard",
  },
];

const faqs = [
  {
    question: "Is Texdale registered under REACH?",
    answer:
      "Texdale sources exclusively from REACH-registered suppliers, both in the EU and internationally. We work with our supply chain to confirm registration status before any raw material is approved for use in our formulations.",
  },
  {
    question: "How do you disclose Substances of Very High Concern (SVHC)?",
    answer:
      "Where a formulation contains an SVHC as identified on the REACH candidate list, this is disclosed in the relevant Material Safety Data Sheet. If you need clarification on a specific product, our technical team can talk you through the data sheet in detail.",
  },
  {
    question: "Can I request certification documents or data sheets?",
    answer:
      "Yes. Get in touch with our technical team and we'll send the relevant certificates, technical data sheets or safety data sheets directly.",
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
          registration through to what goes on the label of every safety data sheet we issue.
        </p>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">REACH and SVHC</h2>
          <p className="text-ink/70 mt-3 max-w-2xl">
            Texdale sources raw materials exclusively from REACH-registered suppliers, both within
            the EU and internationally. Before a material is approved for use in any of our
            formulations, we work with our supply chain to confirm its registration status under the
            relevant regulatory framework.
          </p>
          <p className="text-ink/70 mt-3 max-w-2xl">
            Where a product contains a Substance of Very High Concern (SVHC) as identified on the
            REACH candidate list, this is disclosed in the corresponding Material Safety Data Sheet.
            If you need guidance on a specific formulation, our technical team is available to talk
            through the documentation with you.
          </p>
        </div>
      </section>

      <section className="border-line border-t py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-h2">Certifications</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {certifications.map((c) => (
              <Badge key={c.name}>{c.name}</Badge>
            ))}
          </div>
          <div className="border-line mt-8 overflow-x-auto rounded-lg border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-line border-b">
                  <th scope="col" className="px-4 py-3 font-medium">
                    Certification
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Scope
                  </th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((c, i) => (
                  <tr
                    key={c.name}
                    className={i < certifications.length - 1 ? "border-line border-b" : ""}
                  >
                    <td className="px-4 py-3 font-medium">{c.name}</td>
                    <td className="text-ink/70 px-4 py-3">{c.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            Request certificates, technical data sheets or safety data sheets and our technical team
            will send them directly.
          </p>
          <Link href="/contact?reason=general" className="mt-6 inline-block">
            <Button variant="primary">Request documentation</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
