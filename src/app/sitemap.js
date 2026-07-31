import { categories, products } from "@/lib/products";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/sustainability", "/products", "/insights", "/contact"];

  const categoryRoutes = categories.map((c) => `/products/${c.slug}`);
  const productRoutes = products.map((p) => `/products/${p.category}/${p.slug}`);
  const articleRoutes = articles.map((a) => `/insights/${a.slug}`);

  const allRoutes = [...staticRoutes, ...categoryRoutes, ...productRoutes, ...articleRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
