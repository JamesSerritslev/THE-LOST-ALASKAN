type JsonLdProps = {
  /** Arbitrary JSON-LD object (usually `{ "@context", "@graph" }`). */
  data: Record<string, unknown> | { "@context": string; "@graph": unknown[] };
};

/**
 * Reusable JSON-LD script tag. Pass a single @graph document per page.
 * Safe to omit/delete on routes that should not expose structured data.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
