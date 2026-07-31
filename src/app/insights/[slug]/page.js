import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { articles, getArticle } from "@/lib/articles";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Insights" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
      />
      <h1 className="text-h1 mt-4 max-w-2xl">{article.title}</h1>
      <p className="text-caption text-ink/70 mt-3">
        {article.author} · {formatDate(article.date)} · {article.category}
      </p>
      <div className="mt-8 max-w-2xl space-y-4">
        {article.body.map((paragraph, index) => (
          <p key={index} className="text-ink/80">
            {paragraph}
          </p>
        ))}
      </div>
      <Link href="/insights" className="text-accent mt-10 inline-block text-sm font-medium">
        ← Back to insights
      </Link>
    </div>
  );
}
