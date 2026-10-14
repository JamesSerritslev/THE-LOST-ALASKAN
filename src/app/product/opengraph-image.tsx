import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Product`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function ProductOpenGraphImage() {
  return createOgImage({
    title: "Product",
    subtitle: siteConfig.tagline,
  });
}
