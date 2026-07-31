import Link from "next/link";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Breadcrumb from "@/components/Breadcrumb";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Insights",
  description:
    "Technical articles from Texdale on pretreatment, dyeing auxiliaries, finishing and denim washing.",
};

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
      <h1 className="text-h1 mt-4">Insights</h1>
      <p className="text-ink/70 mt-3 max-w-xl">
        Technical notes from our lab and applications team on pretreatment, dyeing, finishing and
        denim-washing chemistry.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedArticles.map((article) => (
          <Card key={article.slug}>
            <Badge>{article.category}</Badge>
            <h2 className="text-h4 mt-3">
              <Link href={`/insights/${article.slug}`} className="hover:underline">
                {article.title}
              </Link>
            </h2>
            <p className="text-caption text-ink/60 mt-2">{formatDate(article.date)}</p>
            <p className="text-ink/70 mt-3 text-sm">{article.excerpt}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
