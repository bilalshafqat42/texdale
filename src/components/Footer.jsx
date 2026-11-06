import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { categories } from "@/lib/products";

const COMPANY_LINKS = [
  { label: "About Texdale", href: "/about" },
  { label: "All products", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="tx-foot">
      <div className="tx-wrap">
        <div className="tx-foot-lead">
          <p className="tx-foot-statement">
            Chemistry for the wet process, made in the North of England.
          </p>
          <div className="tx-foot-actions">
            <Link className="tx-foot-btn" href="/contact/?reason=sample">
              Request a sample
            </Link>
            <a className="tx-foot-mail" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="tx-foot-cols">
          <div>
            <h2>Range</h2>
            <ul>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/products/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Company</h2>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Works</h2>
            <address className="addr">
              Unit 1, 45 Lambeth Road
              <br />
              Reddish, Stockport
              <br />
              SK5 6TW, United Kingdom
            </address>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/texdaleukltd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="tx-foot-mark">
          <Image src="/texdale-light.svg" alt="Texdale" width={742} height={260} />
        </div>

        <div className="tx-foot-bottom">
          <span>© {new Date().getFullYear()} Texdale Chemicals. All rights reserved.</span>
          <span>Registered office: {CONTACT.registeredOffice}</span>
          <a
            className="tx-foot-credit"
            href="https://bilalshafqat.com/"
            target="_blank"
            rel="noopener"
          >
            Designed and developed by Bilal Shafqat
          </a>
          <a className="tx-foot-top-link" href="#main">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
