import { inter, plexMono, playfair, strasua } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/site";

const description =
  "Texdale manufactures pretreatment, dyeing, finishing and denim-washing chemicals for the textile industry, UK-made and REACH compliant.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Texdale Chemicals | UK Textile Chemical Manufacturer",
    template: "%s | Texdale Chemicals",
  },
  description,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1, 45 Lambeth Road, Reddish",
    addressLocality: "Stockport",
    postalCode: "SK5 6TW",
    addressCountry: "GB",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${playfair.variable} ${strasua.variable}`}
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
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main" className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
