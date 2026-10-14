"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { photoSrc } from "@/lib/placeholders";

type PlaceholderImageProps = {
  id: number;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  /** Fade in when scrolled into view. Disable for the hero (default true). */
  fadeIn?: boolean;
};

/**
 * Deterministic photo placeholders via picsum.photos.
 * Replace `src` with your own assets when cloning for a client.
 */
export function PlaceholderImage({
  id,
  alt,
  width,
  height,
  priority = false,
  className,
  fadeIn = true,
}: PlaceholderImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!fadeIn);

  useEffect(() => {
    if (!fadeIn) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [fadeIn]);

  return (
    <div
      ref={ref}
      className={`media-frame ${fadeIn ? "media-fade" : ""} ${visible ? "is-visible" : ""} ${className ?? ""}`}
    >
      <Image
        src={photoSrc(id, width, height)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
