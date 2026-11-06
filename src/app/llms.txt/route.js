import { categories, getProductsByCategory, products } from "@/lib/products";
import { CONTACT, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// llms.txt: a plain-text summary for AI assistants, built from the same product
// data as the site so it never drifts out of date.
export function GET() {
  const ranges = categories
    .map((c) => {
      const items = getProductsByCategory(c.slug)
        .map((p) => `  - ${p.name}: ${p.functionSummary}`)
        .join("\n");
      return `### ${c.name} (${SITE_URL}/products/${c.slug}/)\n\n${c.intro}\n\n${items || "  - Formulated to specification on request."}`;
    })
    .join("\n\n");

  const body = `# Texdale Chemicals

> Texdale is a UK manufacturer of textile chemicals, based in Reddish, Stockport, in the North of England. It formulates ${products.length} products across ${categories.length} ranges for textile mills and finishers, and supplies internationally.

## Key facts

- What: textile chemicals for wet processing: pretreatment, dyeing auxiliaries, printing, finishing, softening, denim washing, special finishes and special yarn lubricants.
- Where: Unit 1, 45 Lambeth Road, Reddish, Stockport SK5 6TW, United Kingdom.
- Registered office: ${CONTACT.registeredOffice}.
- Compliance: raw materials bought only from EU and international REACH-compliant suppliers; no new substances form during formulation; any SVHC is listed in the product's Material Safety Data Sheet.
- Bespoke: products can be developed to a client's exact requirement.
- Contact: ${CONTACT.phone}, ${CONTACT.email}, ${SITE_URL}/contact/

## Key pages

- [Home](${SITE_URL}/): overview and frequently asked questions about textile chemicals
- [All products](${SITE_URL}/products/): searchable catalogue of all ${products.length} products
- [About](${SITE_URL}/about/): company, manufacturing approach and facility
- [Sustainability](${SITE_URL}/sustainability/): sustainability framework, REACH and SVHC position
- [Contact](${SITE_URL}/contact/): quotes, samples, TDS and MSDS requests

## Product ranges

${ranges}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
