import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import ProductFinder from "@/components/ProductFinder";
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
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = getCategory(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);
  const hasFaqs = category.faqs && category.faqs.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
      />
      <h1 className="text-h1 mt-4">{category.name}</h1>
      <p className="text-ink/70 mt-3 max-w-xl">{category.intro}</p>

      <div className="mt-10">
        <ProductFinder products={products} />
      </div>

      {hasFaqs && (
        <section className="mt-16">
          <h2 className="text-h2">Frequently asked</h2>
          <div className="mt-6">
            <FAQAccordion items={category.faqs} />
          </div>
        </section>
      )}
    </div>
  );
}
