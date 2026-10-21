import Link from "next/link";
import PageMotion from "@/components/PageMotion";
import { CtaBand, PageHead, RowArrow } from "@/components/Editorial";
import { articles, formatDate } from "@/lib/articles";

export const metadata = {
  title: "Insights",
  description:
    "Technical articles from Texdale on pretreatment, dyeing auxiliaries, finishing and denim washing.",
};

export default function InsightsPage() {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <PageMotion>
      <PageHead
        crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
        title="Notes from the lab."
        lede="Technical notes from our team on pretreatment, dyeing, finishing and denim-washing chemistry."
      />

      <section className="band" style={{ paddingTop: "clamp(30px,4vw,64px)" }}>
        <div className="tx-wrap">
          <ul className="arows idx">
            {sortedArticles.map((article) => (
              <li key={article.slug} data-row>
                <Link className="arow" href={`/insights/${article.slug}`}>
                  <span className="meta">
                    <span className="mono">{formatDate(article.date)}</span>
                    <span className="mono">{article.category}</span>
                  </span>
                  <div>
                    <span className="ttl">{article.title}</span>
                    <p className="ex">{article.excerpt}</p>
                  </div>
                  <RowArrow />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Have a process question?"
        lede="Our technicians work through pretreatment, dyeing and finishing problems with mills every day."
      />
    </PageMotion>
  );
}
