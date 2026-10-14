import { absoluteUrl, siteConfig } from "@/lib/site";

export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
};

export const orgId = () => `${siteConfig.url}/#organization`;
export const websiteId = () => `${siteConfig.url}/#website`;

function organizationNode(): Record<string, unknown> {
  const logoUrl = absoluteUrl(siteConfig.logoPath);

  return {
    "@type": "Organization",
    "@id": orgId(),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
    ...(siteConfig.foundingYear
      ? { foundingDate: String(siteConfig.foundingYear) }
      : {}),
  };
}

function websiteNode(): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": websiteId(),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": orgId() },
    inLanguage: siteConfig.locale.replace("_", "-"),
  };

  // SearchAction only when searchPath is configured on the clone.
  if (siteConfig.searchPath) {
    node.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl(siteConfig.searchPath),
      },
      "query-input": "required name=search_term_string",
    };
  }

  return node;
}

type PageSchemaInput = {
  /** schema.org @type for the page entity. */
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
  /** Include BreadcrumbList for non-home pages. */
  breadcrumbs?: { name: string; path: string }[];
};

/** Sitewide Organization + WebSite graph nodes (shared @ids). */
export function buildSiteGraph(): Record<string, unknown>[] {
  return [organizationNode(), websiteNode()];
}

/** Per-page WebPage subtype + optional breadcrumbs, linked to WebSite/Organization. */
export function buildPageGraph({
  type,
  path,
  name,
  description,
  breadcrumbs,
}: PageSchemaInput): Record<string, unknown>[] {
  const pageUrl = absoluteUrl(path);
  const pageId = `${pageUrl}#webpage`;

  const pageNode: Record<string, unknown> = {
    "@type": type,
    "@id": pageId,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@id": websiteId() },
    about: { "@id": orgId() },
    inLanguage: siteConfig.locale.replace("_", "-"),
  };

  const nodes: Record<string, unknown>[] = [...buildSiteGraph(), pageNode];

  if (breadcrumbs && breadcrumbs.length > 0) {
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
    pageNode.breadcrumb = { "@id": `${pageUrl}#breadcrumb` };
  }

  return nodes;
}

export function toJsonLd(graph: Record<string, unknown>[]): JsonLdGraph {
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
