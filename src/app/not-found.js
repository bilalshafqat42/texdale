import PageMotion from "@/components/PageMotion";
import { PageHead, TextLink } from "@/components/Editorial";

export const metadata = {
  title: "Page not found",
  description:
    "This page has moved or no longer exists. Browse Texdale textile chemicals or contact our team.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageMotion>
      <div className="nf">
        <PageHead
          crumbs={[{ label: "Home", href: "/" }, { label: "Not found" }]}
          title="Page not found."
          lede="The page you were looking for has moved or no longer exists. Our products and team are a click away."
        >
          <TextLink href="/products">Browse products</TextLink>
          <TextLink href="/contact">Contact us</TextLink>
        </PageHead>
      </div>
    </PageMotion>
  );
}
