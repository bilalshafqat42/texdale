import Link from "next/link";
import PageMotion from "@/components/PageMotion";
import ProductFinder from "@/components/ProductFinder";
import { CtaBand, EdHead, PageHead, RowArrow } from "@/components/Editorial";
import { categories, getProductsByCategory, products } from "@/lib/products";

export const metadata = {
  alternates: { canonical: "/products/" },
  title: "Textile Chemicals: Full Product Range",
  description:
    "Browse 87 Texdale textile chemicals across eight ranges, from pretreatment and dyeing auxiliaries to finishing, denim washing and yarn lubricants.",
};

export default function ProductsPage() {
  const rangeFilters = categories.map((c) => ({ slug: c.slug, name: c.name }));

  return (
    <PageMotion>
      <PageHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title={`Eight ranges. ${products.length} products.`}
        lede="Textile chemicals for the whole wet-processing chain, from pretreatment to the final finish, with denim washing and yarn lubricants alongside."
      />

      <section className="band" style={{ paddingTop: "clamp(30px,4vw,64px)" }}>
        <div className="tx-wrap">
          <div className="idx with-count">
            {categories.map((c, i) => {
              const count = getProductsByCategory(c.slug).length;
              return (
                <Link className="idx-row" href={`/products/${c.slug}`} data-row key={c.slug}>
                  <span className="no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nm">{c.name}</span>
                  <span className="sub">{c.tags}</span>
                  <span className="ct">{count ? `${count} products` : "To specification"}</span>
                  <RowArrow />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="tx-wrap">
          <EdHead
            label="Catalogue"
            title="Search every product."
            style={{ marginBottom: "clamp(36px,4vw,56px)" }}
          />
          <ProductFinder products={products} groups={rangeFilters} groupKey="category" />
        </div>
      </section>

      <CtaBand
        title="Not in the list?"
        lede="We also develop products to a client's exact requirement. Tell us about your cloth and your process."
      />
    </PageMotion>
  );
}
