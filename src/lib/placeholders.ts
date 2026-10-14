/**
 * Deterministic photo placeholders via picsum.photos.
 * Replace with real assets when cloning for a client.
 */
export function photoSrc(id: number | string, width: number, height: number): string {
  return `https://picsum.photos/seed/wtmpl-${id}/${width}/${height}`;
}
