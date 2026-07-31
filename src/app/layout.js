import { inter, plexMono } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Texdale Chemicals | UK Textile Chemical Manufacturer",
    template: "%s | Texdale Chemicals",
  },
  description:
    "Texdale manufactures pretreatment, dyeing, finishing and denim-washing chemicals for the textile industry, UK-made and REACH compliant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
