import { createBrandIcon } from "@/lib/icon-image";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Generated favicon from siteConfig. Replace with a static icon.png in this
 * folder (and delete this file) when you have real brand artwork.
 */
export default function Icon() {
  return createBrandIcon(32);
}
