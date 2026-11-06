import { archivo, inter, plexMono, plexSans } from "@/lib/fonts";
import "./globals.css";
import "./texdale.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LogoIntro from "@/components/LogoIntro";
import { SITE_URL, SITE_NAME, CONTACT, ORG_ID } from "@/lib/site";
import { categories } from "@/lib/products";

const description =
  "Texdale manufactures pretreatment, dyeing, finishing and denim-washing chemicals for the textile industry. Made in England, with REACH-compliant sourcing.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Textile Chemicals Manufacturer UK | Texdale Chemicals",
    template: "%s | Texdale Chemicals",
  },
  description,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Who Texdale is, in the form search engines and AI assistants read: identity,
// location, contact routes, subject areas and the product catalogue.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Texdale",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/texdale-dark.svg`,
  image: `${SITE_URL}/opengraph-image.png`,
  description,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1, 45 Lambeth Road, Reddish",
    addressLocality: "Stockport",
    addressRegion: "Greater Manchester",
    postalCode: "SK5 6TW",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    areaServed: "Worldwide",
    availableLanguage: "en",
  },
  sameAs: ["https://twitter.com/texdaleukltd"],
  knowsAbout: [
    "Textile chemicals",
    "Textile pretreatment",
    "Dyeing auxiliaries",
    "Textile printing thickeners",
    "Textile finishing",
    "Textile softeners",
    "Denim washing chemicals",
    "Water and oil repellent finishes",
    "Flame retardant finishes",
    "Yarn lubricants",
    "REACH compliance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Textile chemicals",
    itemListElement: categories.map((c) => ({
      "@type": "OfferCatalog",
      name: c.name,
      url: `${SITE_URL}/products/${c.slug}/`,
    })),
  },
};

// Flags the document before first paint: tx-motion enables the CSS masthead
// entrance, tx-first holds it back while the logo intro plays.
const MOTION_FLAG_SCRIPT =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('tx-motion','tx-first')";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-GB",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plexMono.variable} ${plexSans.variable} ${archivo.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: MOTION_FLAG_SCRIPT }} />
        <LogoIntro />
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
