import { categories, getProductsByCategory } from "./products";

const TEXTILE = ["pretreatment", "dyeing-auxiliaries", "printing", "finishing", "softening"];

function categoryLink(slug) {
  const category = categories.find((c) => c.slug === slug);
  return {
    label: category.name,
    href: `/products/${slug}`,
    count: getProductsByCategory(slug).length,
  };
}

// A range with sub-groups becomes its own column, one link per group.
function groupedColumn(slug, label) {
  const category = categories.find((c) => c.slug === slug);
  return {
    label: label ?? category.name,
    href: `/products/${slug}`,
    items: category.groups.map((g) => ({
      label: g.name,
      href: `/products/${slug}?group=${g.slug}`,
      count: getProductsByCategory(slug, g.slug).length,
    })),
  };
}

// Columns for the desktop mega menu and the mobile site menu, in that order.
export const PRODUCT_GROUPS = [
  { label: "Textile", href: "/products", items: TEXTILE.map(categoryLink) },
  groupedColumn("denim-washing"),
  groupedColumn("special-finishes"),
  groupedColumn("special-yarn-lubricants", "Yarn lubricants"),
];
