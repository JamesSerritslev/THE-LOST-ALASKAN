import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

/** Default social preview: brand name + tagline. */
export default function OpenGraphImage() {
  return createOgImage({
    title: siteConfig.name,
    subtitle: siteConfig.tagline,
  });
}
