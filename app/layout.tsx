import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted Google Fonts: no external requests, no layout shift.
// Jersey 25 is used for H1 only; Hanken Grotesk for H2 and all other text.
const display = localFont({
  src: "./fonts/Jersey25.woff2",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const body = localFont({
  src: "./fonts/HankenGrotesk.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Web Development Company | Fast, SEO-Ready Sites | GlobDevs",
    template: "%s | GlobDevs",
  },
  description:
    "GlobDevs builds fast, secure, SEO-ready websites and web apps that turn visitors into customers. See our work and get a free quote.",
  openGraph: { type: "website", siteName: "GlobDevs", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F6F1" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

// Applies a saved theme before first paint, so there is no flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: `${site.url}/icon.svg`,
            email: site.contact.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: site.contact.city,
              addressCountry: site.contact.country,
            },
            sameAs: Object.values(site.social).filter(Boolean),
          }}
        />
      </body>
    </html>
  );
}
