import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Card from "@/components/Card";
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
    description: product.functionSummary,
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.category, resolvedParams.product);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);
  const relatedProducts = getRelatedProducts(product);
  const encodedName = encodeURIComponent(product.name);

  const ctas = [
    { label: "Request a quote", reason: "quote" },
    { label: "Request TDS", reason: "tds" },
    { label: "Request MSDS", reason: "msds" },
    { label: "Talk to our technical team", reason: "general" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category?.name ?? product.category, href: `/products/${product.category}` },
          { label: product.name },
        ]}
      />
      <h1 className="text-h1 mt-4">{product.name}</h1>
      <p className="text-ink/70 mt-3 max-w-xl">{product.functionSummary}</p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full max-w-xl text-left text-sm">
          <thead>
            <tr className="border-line border-b">
              <th scope="col" className="py-2 pr-4 font-medium">
                Property
              </th>
              <th scope="col" className="py-2 font-medium">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-line divide-y">
            {product.specs.map((spec) => (
              <tr key={spec.label}>
                <td className="py-3 pr-4 align-top font-medium whitespace-nowrap">{spec.label}</td>
                <td className="text-ink/70 py-3 align-top">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {ctas.map((cta) => (
          <Link key={cta.reason} href={`/contact?reason=${cta.reason}&product=${encodedName}`}>
            <Button variant={cta.reason === "quote" ? "primary" : "secondary"}>{cta.label}</Button>
          </Link>
        ))}
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-h2">Related products</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((related) => (
              <Card key={related.slug}>
                <h3 className="text-h4">{related.name}</h3>
                <p className="text-ink/70 mt-2 text-sm">{related.functionSummary}</p>
                <Link
                  href={`/products/${related.category}/${related.slug}`}
                  className="text-accent mt-4 inline-block text-sm font-medium"
                >
                  View product →
                </Link>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
