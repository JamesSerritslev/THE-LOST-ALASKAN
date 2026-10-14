import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

/**
 * Generated app icons from brand initial + themeColor.
 * To use real artwork instead: delete icon.tsx / apple-icon.tsx and place
 * icon.png + apple-icon.png (or .ico) in src/app/ or public/.
 */
export function createBrandIcon(size: number) {
  const initial = siteConfig.name.trim().charAt(0).toUpperCase() || "B";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: siteConfig.themeColor,
          color: "#f4faf7",
          fontSize: size * 0.55,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 600,
        }}
      >
        {initial}
      </div>
    ),
    { width: size, height: size },
  );
}
