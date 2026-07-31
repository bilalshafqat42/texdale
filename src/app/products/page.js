import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import { categories } from "@/lib/products";

export const metadata = {
  title: "Products",
  description:
    "Browse Texdale's range of pretreatment, dyeing, finishing and denim-washing chemicals for textile mills and finishers.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <h1 className="text-h1 mt-4">Products</h1>
      <p className="text-ink/70 mt-3 max-w-xl">
        Six ranges covering the textile wet-processing chain, from pretreatment through to finishing
        and denim washing.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal key={category.slug} delay={i * 0.06}>
            <Card>
              <h3 className="text-h4">{category.name}</h3>
              <p className="text-ink/70 mt-2 text-sm">{category.summary}</p>
              <Link
                href={`/products/${category.slug}`}
                className="text-accent mt-4 inline-block text-sm font-medium"
              >
                View range →
              </Link>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
