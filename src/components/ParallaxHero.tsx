"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

export default function ParallaxHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, []);

  return (
    <section className="hero-art relative -mt-24 flex h-svh w-full flex-col overflow-hidden px-3 pt-[6.6rem] pb-[calc(4.6rem+env(safe-area-inset-bottom,0px))] sm:px-5 md:block md:px-0 md:pt-0 md:pb-0">
      <div className="hero-video-frame min-h-0 w-full flex-1">
        <div className="h-full w-full overflow-hidden rounded-xl bg-black shadow-[0_18px_50px_rgba(23,16,12,0.4)] sm:rounded-2xl">
          <video
            ref={videoRef}
            className="h-full w-full object-cover md:object-top"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-poster.jpg"
            aria-label="The Lost Alaskan coffee trailer"
          >
            <source src="/images/Smuggler_Cove_Ed.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="hero-copy relative z-10 mx-auto mt-3 w-full max-w-5xl shrink-0 rounded-xl bg-[#f6f0e8]/95 px-4 py-3 text-center text-[var(--color-ink)] shadow-[0_12px_32px_rgba(23,16,12,0.28)] sm:mt-3.5 sm:rounded-2xl sm:px-6 sm:py-3.5">
        <h1 className="text-sm font-normal sm:text-lg">{siteConfig.tagline}</h1>
        <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--color-ink)] sm:mt-1.5 sm:text-base">
          Business 6AM – 5PM
          <span className="mx-1.5 text-[var(--color-ink-muted)]" aria-hidden="true">
            ·
          </span>
          Vibes 7AM – 5PM
        </p>
        <p className="mt-1 text-xs text-[var(--color-ink-muted)] sm:text-sm">
          Damn good coffee, matcha, and chai.
          <span className="mt-0.5 block text-center">
            Walk up, drive through, or order online!
          </span>
        </p>
        <div className="mt-2.5 flex w-full flex-col items-stretch gap-2 sm:mt-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/product"
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] sm:min-h-11 sm:px-6 sm:text-base"
          >
            See the menu
          </Link>
          <a
            href={siteConfig.orderUrl}
            className="inline-flex min-h-10 items-center justify-center rounded-lg border border-[var(--color-ink)]/25 bg-white px-5 py-2 text-sm font-semibold text-[var(--color-ink)] sm:min-h-11 sm:px-6 sm:text-base"
          >
            Order online
          </a>
        </div>
      </div>
    </section>
  );
}
