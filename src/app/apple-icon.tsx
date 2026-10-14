import { createBrandIcon } from "@/lib/icon-image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Generated Apple touch icon from siteConfig. Replace with apple-icon.png
 * in this folder (and delete this file) for a real logo.
 */
export default function AppleIcon() {
  return createBrandIcon(180);
}
