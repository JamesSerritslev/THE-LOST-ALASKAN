import type { Metadata } from "next";

/**
 * Site configuration — edit these values when cloning for a new business.
 * Prefer env vars only for secrets / deploy-specific verification tokens.
 */
export const siteConfig = {
  /** Public brand / site name (titles, nav, OG, schema). */
  name: "THE LOST ALASKAN",
  /** Legal entity name for footer + Organization schema. */
  legalName: "The Lost Alaskan",
  /** Short value proposition shown in hero + default titles. */
  tagline: "Not Good... Damn Good",
  /** Default meta description target: 120–160 characters. */
  description:
    "It started in Alaska—where coffee isn’t cute, it’s necessary. For early mornings, long days, cold rain, open doors, and neighbors who don’t knock.",
  /** Canonical origin with protocol, no trailing slash (e.g. https://www.example.com). */
  url: "https://thelostalaskan.com",
  /** BCP 47 / Open Graph locale, underscore form (e.g. en_US). */
  locale: "en_US",
  /** Extra locales for hreflang when you add translations; leave empty for single-locale sites. */
  alternateLocales: [] as string[],
  /** Online ordering page. */
  orderUrl: "https://thelostalaskan.craverapp.com/",
  nav: [
    { href: "/", label: "Home" },
    { href: "/product", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  /** Alt text for default Open Graph / Twitter share images. */
  ogImageAlt: "The Lost Alaskan coffee trailer",
  /** Twitter/X handle with @, optional; used for twitter:site / creator when set. */
  twitterHandle: undefined as string | undefined,
  /** Public social profile URLs for Organization.sameAs (LinkedIn, Instagram, etc.). */
  sameAs: ["https://thelostalaskan.craverapp.com/"],
  /**
   * Path to logo image for schema.org ImageObject (absolute via absoluteUrl).
   */
  logoPath: "/apple-icon.png",
  /** Browser chrome / PWA theme color (hex). Keep in sync with brand accent. */
  themeColor: "#6b4f3b",
  /** Optional founding year for Organization.foundingDate (YYYY). */
  foundingYear: undefined as number | undefined,
  /**
   * Optional on-site search path for WebSite SearchAction (e.g. "/search?q={search_term_string}").
   * Leave undefined to omit SearchAction from JSON-LD.
   */
  searchPath: undefined as string | undefined,
  /**
   * AI crawler policy for robots.txt:
   * - "allow": permit common AI bots
   * - "block-training": block training-oriented bots (e.g. GPTBot, Google-Extended)
   * - "block-all": block known AI bots
   */
  aiCrawlerPolicy: "allow" as "allow" | "block-training" | "block-all",
  /**
   * Search Console / Bing verification tokens from env (omit meta tags when unset).
   * Set NEXT_PUBLIC_GSC_VERIFICATION and NEXT_PUBLIC_BING_VERIFICATION in .env.local.
   */
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || undefined,
  },
};

export type SiteConfig = typeof siteConfig;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** HTML lang attribute value derived from siteConfig.locale (en_US → en). */
export function htmlLang(): string {
  return siteConfig.locale.split(/[_-]/)[0] || "en";
}

type BuildMetadataInput = {
  /** Document title segment; root template appends "| {name}" unless absoluteTitle is set. Target ≤ 60 chars for the final title. */
  title: string;
  /** Meta description; target 120–160 characters. */
  description: string;
  /** Site-relative path for canonical + og:url (e.g. "/" or "/about"). */
  path: string;
  /** Optional override for OG/Twitter image URL (absolute or site-relative). File-based opengraph-image.tsx is used when omitted. */
  ogImage?: string;
  /** When true, use `title` as the full document title (homepage). */
  absoluteTitle?: boolean;
};

/**
 * Consistent per-page Metadata: title, description, canonical, Open Graph, Twitter.
 * Pair with route-level opengraph-image.tsx for automatic share images.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const pageUrl = absoluteUrl(canonical);
  const ogLocale = siteConfig.locale;
  const imageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : undefined;

  const images = imageUrl
    ? [{ url: imageUrl, alt: siteConfig.ogImageAlt }]
    : undefined;

  const twitterSite = siteConfig.twitterHandle;

  const languages =
    siteConfig.alternateLocales.length > 0
      ? Object.fromEntries([
          [ogLocale.replace("_", "-"), canonical],
          ...siteConfig.alternateLocales.map((loc) => [
            loc.replace("_", "-"),
            canonical,
          ]),
        ])
      : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      url: pageUrl,
      siteName: siteConfig.name,
      title,
      description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images: [imageUrl!] } : {}),
      ...(twitterSite ? { site: twitterSite, creator: twitterSite } : {}),
    },
  };
}
