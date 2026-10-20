import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { categories } from "@/lib/products";

const COMPANY_LINKS = [
  { label: "About Texdale", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="tx-foot">
      <div className="tx-wrap">
        <div className="tx-foot-top">
          <div className="tx-foot-brand">
            <Image src="/texdale-light.svg" alt="Texdale" width={97} height={34} />
            <p>
              Textile chemicals for pretreatment, dyeing, finishing and denim. Manufactured in the
              North of England.
            </p>
          </div>

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

          <div>
            <h2>Contact</h2>
            <address className="addr">
              Unit 1, 45 Lambeth Road
              <br />
              Reddish, Stockport
              <br />
              SK5 6TW, United Kingdom
              <br />
              <br />
              <b>
                <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
              </b>
              <br />
              <b>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </b>
            </address>
          </div>
        </div>

        <div className="tx-foot-bottom">
          <span>© {new Date().getFullYear()} Texdale</span>
          <span>Registered office — {CONTACT.registeredOffice}</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
