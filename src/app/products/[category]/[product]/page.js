import Link from "next/link";
import { notFound } from "next/navigation";
import PageMotion from "@/components/PageMotion";
import { CtaBand, EdHead, PageHead, RowArrow, TextLink } from "@/components/Editorial";
import { ORG_ID, SITE_URL } from "@/lib/site";
import { getCategory, getProduct, getRelatedProducts, products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.category, resolvedParams.product);

  if (!product) {
    return { title: "Product" };
  }

  return {
    title: product.name,
    description: productDescription(product),
    alternates: { canonical: `/products/${product.category}/${product.slug}/` },
  };
}

// Search snippet: the function summary plus the product and range names,
// keeping as much context as fits in about 160 characters.
function productDescription(product) {
  const range = getCategory(product.category)?.name.toLowerCase() ?? "textile";
  const options = [
    `${product.functionSummary} ${product.name} from Texdale's ${range} range. TDS and MSDS on request.`,
    `${product.functionSummary} ${product.name} from Texdale's ${range} range.`,
    `${product.functionSummary} From Texdale's ${range} range.`,
  ];
  return options.find((d) => d.length <= 160) ?? product.functionSummary;
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.category, resolvedParams.product);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);
  const group = category.groups?.find((g) => g.slug === product.group);
  const sharedWith = (product.alsoIn ?? []).map((a) => getCategory(a.category)).filter(Boolean);
  const relatedProducts = getRelatedProducts(product);
  const encodedName = encodeURIComponent(product.name);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.functionSummary,
    url: `${SITE_URL}/products/${category.slug}/${product.slug}/`,
    category: `Textile chemicals > ${category.name}`,
    ...(category.image ? { image: `${SITE_URL}${category.image}` } : {}),
    brand: { "@type": "Brand", name: "Texdale" },
    manufacturer: { "@id": ORG_ID },
  };

  return (
    <PageMotion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <PageHead
        compact
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name, href: `/products/${category.slug}` },
          { label: product.name },
        ]}
        title={product.name}
        lede={product.functionSummary}
      >
        <TextLink href={`/contact/?reason=quote&product=${encodedName}`}>Request a quote</TextLink>
        <TextLink href={`/contact/?reason=sample&product=${encodedName}`}>
          Request a sample
        </TextLink>
      </PageHead>

      <section className="band" style={{ paddingTop: "clamp(30px,4vw,64px)" }}>
        <div className="tx-wrap">
          <dl className="spec">
            <div data-fade>
              <dt>Range</dt>
              <dd>
                <Link href={`/products/${category.slug}`}>{category.name}</Link>
              </dd>
            </div>
            <div data-fade>
              <dt>{group ? "Type" : "Samples"}</dt>
              <dd>{group ? group.name : "Available on request"}</dd>
            </div>
            <div data-fade>
              <dt>{sharedWith.length ? "Also used in" : "Made in"}</dt>
              <dd>
                {sharedWith.length
                  ? sharedWith.map((c, i) => (
                      <span key={c.slug}>
                        {i > 0 && ", "}
                        <Link href={`/products/${c.slug}`}>{c.name}</Link>
                      </span>
                    ))
                  : "North of England"}
              </dd>
            </div>
            <div data-fade>
              <dt>Documents</dt>
              <dd>TDS · MSDS on request</dd>
            </div>
          </dl>

          <div className="two-col" style={{ marginTop: "clamp(44px,5vw,76px)" }}>
            <div className="prose" data-fade>
              <p>
                The full technical specification, including appearance, dosage and ionic character,
                is on the technical data sheet. Handling and any listed substances are on the
                material safety data sheet.
              </p>
            </div>
            <div className="mast-links" data-fade style={{ alignContent: "flex-start" }}>
              <TextLink href={`/contact/?reason=tds&product=${encodedName}`}>Request TDS</TextLink>
              <TextLink href={`/contact/?reason=msds&product=${encodedName}`}>
                Request MSDS
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="band" style={{ paddingTop: 0 }}>
          <div className="tx-wrap">
            <EdHead
              label="Related"
              title={`More from ${category.name.toLowerCase()}.`}
              style={{ marginBottom: "clamp(36px,4vw,56px)" }}
            />
            <ul className="prows">
              {relatedProducts.map((related) => (
                <li key={related.slug}>
                  <Link className="prow" href={`/products/${related.category}/${related.slug}`}>
                    <span className="nm">{related.name}</span>
                    <span className="fn">{related.functionSummary}</span>
                    <span className="tag mono">
                      {category.groups?.find((g) => g.slug === related.group)?.name ?? ""}
                    </span>
                    <RowArrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand product={product.name} />
    </PageMotion>
  );
}
