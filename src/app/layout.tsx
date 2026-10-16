import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import { PageTransition } from "@/components/PageTransition";
import { buildMetadata, htmlLang, siteConfig } from "@/lib/site";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

// Shared home metadata fields (canonical, OG, Twitter). Title template kept separate below.
const rootMeta = buildMetadata({
  // Target: final title ≤ 60 characters.
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  // Target: 120–160 characters.
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: rootMeta.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  alternates: rootMeta.alternates,
  openGraph: rootMeta.openGraph,
  twitter: rootMeta.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(siteConfig.verification.google || siteConfig.verification.bing
    ? {
        verification: {
          ...(siteConfig.verification.google
            ? { google: siteConfig.verification.google }
            : {}),
          ...(siteConfig.verification.bing
            ? { other: { "msvalidate.01": siteConfig.verification.bing } }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={htmlLang()} className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">
            <div className="pt-24 pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0">
              <PageTransition>{children}</PageTransition>
            </div>
          </main>
          <Footer />
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
