import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — About`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function AboutOpenGraphImage() {
  return createOgImage({
    title: "About",
    subtitle: siteConfig.tagline,
  });
}
