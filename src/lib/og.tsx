import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

const SIZE = { width: 1200, height: 630 };

type OgImageOptions = {
  /** Large title line (brand or page name). */
  title: string;
  /** Supporting line under the title. */
  subtitle?: string;
};

/**
 * Shared Open Graph / Twitter image renderer — no external assets or font fetches.
 * Used by app/opengraph-image.tsx and per-route opengraph-image files.
 */
export function createOgImage({ title, subtitle }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: `linear-gradient(145deg, ${siteConfig.themeColor} 0%, #1a322c 55%, #12241f 100%)`,
          color: "#f4faf7",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: title.length > 40 ? 56 : 68,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.4,
                opacity: 0.9,
                maxWidth: 900,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    ),
    { ...SIZE },
  );
}

export const ogImageSize = SIZE;
export const ogImageContentType = "image/png";
