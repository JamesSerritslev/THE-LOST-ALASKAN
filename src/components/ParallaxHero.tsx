"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { photoSrc } from "@/lib/placeholders";
import { siteConfig } from "@/lib/site";

export default function ParallaxHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = layerRef.current;
    if (!section || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const factor = isCoarse || window.innerWidth < 768 ? 0.15 : 0.3;

    const update = () => {
      const y = Math.min(window.scrollY, section.offsetHeight);
      layer.style.transform = `translate3d(0, ${y * factor}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-24 h-svh min-h-svh w-full overflow-hidden"
    >
      <div
        ref={layerRef}
        className="absolute inset-x-0 -top-[30%] h-[130%] will-change-transform"
      >
        <Image
          src={photoSrc(1, 1920, 1200)}
          alt={`${siteConfig.name} hero image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-10 pt-28 text-center text-white sm:px-6 sm:pt-24">
        <h1 className="max-w-[18ch] text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-3 max-w-xl text-base sm:mt-4 sm:text-lg md:text-xl">
          {siteConfig.tagline}
        </p>
        <p className="mt-3 hidden max-w-xl text-sm text-white/90 sm:mt-4 sm:block sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere, nisl in tristique dignissim, mi lorem fermentum elit, vitae
          tincidunt arcu metus sit amet tellus.
        </p>
        <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <Link
            href="/product"
            className="min-h-12 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Explore product
          </Link>
          <Link
            href="/contact"
            className="min-h-12 rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-center font-semibold text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
