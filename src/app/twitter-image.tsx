import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

/** Twitter/X large card image (same composition as Open Graph default). */
export default function TwitterImage() {
  return createOgImage({
    title: siteConfig.name,
    subtitle: siteConfig.tagline,
  });
}
