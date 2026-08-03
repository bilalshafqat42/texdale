import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { categories } from "@/lib/products";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "X (Twitter)",
    href: "https://twitter.com/texdaleukltd",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export default function Footer() {
  return (
    <footer className="border-line bg-paper border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/texdale-dark.svg"
              alt="Texdale"
              width={91}
              height={32}
              className="h-7 w-auto"
            />
            <p className="text-ink/70 mt-4 text-sm">
              Textile chemicals for pretreatment, dyeing and finishing, manufactured in the UK and
              supplied internationally.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="border-line text-ink/70 hover:text-accent hover:border-accent flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} fill="currentColor" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-caption text-ink/70 tracking-wide uppercase">Products</p>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="text-ink/70 hover:text-accent transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption text-ink/70 tracking-wide uppercase">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption text-ink/70 tracking-wide uppercase">Get in touch</p>
            <div className="text-ink/70 mt-4 space-y-2 text-sm">
              <p>{CONTACT.address}</p>
              <p>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-line text-ink/70 mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Texdale Chemicals. All rights reserved.</p>
          <p>Registered office: {CONTACT.registeredOffice}</p>
        </div>
      </div>
    </footer>
  );
}
