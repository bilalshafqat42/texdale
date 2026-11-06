import Link from "next/link";
import { notFound } from "next/navigation";
import FAQAccordion from "@/components/FAQAccordion";
import PageMotion from "@/components/PageMotion";
import ProductFinder from "@/components/ProductFinder";
import { CtaBand, EdHead, PageHead, RowArrow, Shot, TextLink } from "@/components/Editorial";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = getCategory(resolvedParams.category);

  if (!category) {
    return { title: "Product range" };
  }

  return {
    title: category.name,
    description: category.summary,
    alternates: { canonical: `/products/${category.slug}/` },
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = getCategory(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const index = categories.indexOf(category);
  const products = getProductsByCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);
  const hasFaqs = category.faqs && category.faqs.length > 0;
  const enquiry = encodeURIComponent(category.name);

  return (
    <PageMotion>
      <PageHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
        title={category.name}
        lede={category.intro}
      >
        <TextLink href={`/contact/?reason=sample&product=${enquiry}`}>Request a sample</TextLink>
        <TextLink href={`/contact/?reason=general&product=${enquiry}`}>
          Talk to a technician
        </TextLink>
      </PageHead>

      {category.image && (
        <Shot
          fig={`Range ${String(index + 1).padStart(2, "0")}`}
          title={category.name}
          spec={category.tags}
          src={category.image}
          alt={`${category.name} textile chemicals`}
          srcWidth={category.imageWidth}
          wide
          priority
        />
      )}

      <section className="band">
        <div className="tx-wrap">
          {products.length > 0 ? (
            <>
              <EdHead
                label="Products"
                title={`${products.length} in the range.`}
                style={{ marginBottom: "clamp(36px,4vw,56px)" }}
              />
              <ProductFinder products={products} groups={category.groups || []} />
            </>
          ) : (
            <EdHead label="Products" title="Made to specification.">
              <div className="prose" data-fade>
                <p>
                  We formulate {category.name.toLowerCase()} products to each customer&apos;s
                  specification rather than from a fixed catalogue. Tell us your substrate, process
                  and target result, and our technical team will recommend a formulation.
                </p>
              </div>
              <div data-fade>
                <TextLink href={`/contact/?reason=general&product=${enquiry}`}>
                  Talk to a technician
                </TextLink>
              </div>
            </EdHead>
          )}
        </div>
      </section>

      {hasFaqs && (
        <section className="band" style={{ paddingTop: 0 }}>
          <div className="tx-wrap">
            <EdHead label="Questions" title="Frequently asked." />
            <div style={{ marginTop: "clamp(36px,4vw,56px)" }}>
              <FAQAccordion items={category.faqs} />
            </div>
          </div>
        </section>
      )}

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead
            label="Other ranges"
            title="Across the chain."
            style={{ marginBottom: "clamp(36px,4vw,56px)" }}
          />
          <div className="idx">
            {others.map((c) => (
              <Link className="idx-row" href={`/products/${c.slug}`} data-row key={c.slug}>
                <span className="no">{String(categories.indexOf(c) + 1).padStart(2, "0")}</span>
                <span className="nm">{c.name}</span>
                <span className="sub">{c.tags}</span>
                <RowArrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand product={category.name} />
    </PageMotion>
  );
}
