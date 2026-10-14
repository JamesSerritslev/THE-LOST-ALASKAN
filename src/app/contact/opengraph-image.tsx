import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Contact`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function ContactOpenGraphImage() {
  return createOgImage({
    title: "Contact",
    subtitle: siteConfig.tagline,
  });
}
