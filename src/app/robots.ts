import type { MetadataRoute } from "next";
import { AI_ALL_BOTS, AI_TRAINING_BOTS } from "@/lib/ai-crawlers";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const rules: MetadataRoute.Robots["rules"] = [
    {
      userAgent: "*",
      allow: "/",
    },
  ];

  // AI policy from siteConfig — easy to change when cloning.
  if (siteConfig.aiCrawlerPolicy === "block-training") {
    for (const userAgent of AI_TRAINING_BOTS) {
      rules.push({ userAgent, disallow: "/" });
    }
  } else if (siteConfig.aiCrawlerPolicy === "block-all") {
    for (const userAgent of AI_ALL_BOTS) {
      rules.push({ userAgent, disallow: "/" });
    }
  }

  return {
    rules,
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
