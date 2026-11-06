import { notFound } from "next/navigation";
import PageMotion from "@/components/PageMotion";
import { CtaBand, PageHead, TextLink } from "@/components/Editorial";
import { articles, formatDate, getArticle } from "@/lib/articles";
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
    title: { absolute: article.title },
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}/` },
  };
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
    <PageMotion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHead
        compact
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: article.category },
        ]}
        title={article.title}
        lede={article.excerpt}
      />

      <section className="band" style={{ paddingTop: "clamp(30px,4vw,64px)" }}>
        <div className="tx-wrap">
          <div className="ed">
            <div className="ed-label">
              <span className="mono">{formatDate(article.date)}</span>
              <span className="mono">{article.author}</span>
              <div className="rule" data-rule style={{ maxWidth: 90 }} />
            </div>
            <div className="ed-body">
              <div className="prose" data-fade>
                {article.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div data-fade>
                <TextLink href="/insights">All insights</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a process question?"
        lede="Our technicians work through pretreatment, dyeing and finishing problems with mills every day."
      />
    </PageMotion>
  );
}
