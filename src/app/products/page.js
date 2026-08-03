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
        Eight ranges covering the textile wet-processing chain, from pretreatment through to
        finishing and denim washing.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal key={category.slug} delay={i * 0.06}>
            <Link href={`/products/${category.slug}`} className="block h-full">
              <Card
                image={category.image}
                imageAlt={`${category.name} textile chemicals`}
                className="h-full"
              >
                <h3 className="text-h4">{category.name}</h3>
                <p className="text-ink/70 mt-2 text-sm">{category.summary}</p>
                <span className="text-accent mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  View range
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7h11M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
