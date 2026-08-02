import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
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

      {category.image && (
        <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg md:h-80">
          <Image
            src={category.image}
            alt={`${category.name} textile chemicals`}
            fill
            sizes="(min-width: 768px) 1152px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="mt-10">
        {products.length > 0 ? (
          <ProductFinder products={products} groups={category.groups || []} />
        ) : (
          <div className="border-line rounded-lg border p-6">
            <p className="text-ink/70 text-sm">
              We formulate {category.name.toLowerCase()} products to specification rather than off a
              fixed catalogue. Tell us what you need and our technical team will recommend a
              formulation.
            </p>
            <Button
              href={`/contact?reason=general&product=${encodeURIComponent(category.name)}`}
              variant="secondary"
              className="mt-4"
            >
              Talk to our technical team
            </Button>
          </div>
        )}
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
