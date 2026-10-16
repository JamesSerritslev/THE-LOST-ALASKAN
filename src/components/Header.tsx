"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 20 : y > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    const y = window.scrollY;
    setScrolled((prev) => (prev ? y > 20 : y > 80));
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const fit = () => {
      el.style.fontSize = "";
      el.style.letterSpacing = "";
      if (window.matchMedia("(min-width: 768px)").matches) return;

      const available = el.clientWidth;
      if (available <= 0) return;

      let size = 13;
      el.style.fontSize = `${size}px`;
      while (size < 40 && el.scrollWidth <= available) {
        size += 0.5;
        el.style.fontSize = `${size}px`;
      }
      while (size > 13 && el.scrollWidth > available) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }

      const extra = available - el.scrollWidth;
      const gaps = Math.max((el.textContent?.length ?? 1) - 1, 1);
      if (extra > 2) el.style.letterSpacing = `${extra / gaps}px`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, [scrolled]);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (menuRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <header
      className={`nav-art-bg fixed inset-x-0 top-0 z-50 ${styles.bar} ${
        scrolled ? styles.barScrolled : styles.barTall
      }`}
    >
      <div className="mx-auto flex h-full w-full min-w-0 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className={styles.brand}
        >
          <span
            className={`relative block shrink-0 overflow-hidden rounded-md bg-[var(--color-cream)] transition-all duration-300 motion-reduce:transition-none ${
              scrolled ? "h-8 w-8 sm:h-9 sm:w-9" : "h-10 w-10 sm:h-14 sm:w-14"
            }`}
          >
            <Image
              src="/apple-icon.png"
              alt=""
              fill
              priority
              sizes="56px"
              className="object-cover"
            />
          </span>
          <span ref={nameRef} className={styles.brandName}>
            {siteConfig.name}
          </span>
        </Link>

        <div className={styles.actions}>
          <a
            href={siteConfig.orderUrl}
            className={styles.contactCta}
            aria-label="Order online"
          >
            <span className={styles.contactLabel}>Order online</span>
          </a>

          <div ref={menuRef} className={`${styles.menuWrap} md:hidden`}>
            <button
              type="button"
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </button>

            <nav
              id="mobile-menu"
              className={`nav-art-bg ${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ""}`}
              aria-label="Mobile menu"
              aria-hidden={!menuOpen}
            >
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`${styles.dropdownLink} ${
                      active ? styles.dropdownLinkActive : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <nav
            className={`hidden font-medium text-[var(--color-cream)] md:flex md:items-center md:gap-6 ${
              scrolled ? "md:text-xs uppercase tracking-[0.14em]" : "md:text-sm"
            }`}
            aria-label="Primary"
          >
            {siteConfig.nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-[#f0d2b0] ${
                      active ? "text-[#f0d2b0]" : "text-[var(--color-cream)]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </nav>
        </div>
      </div>
    </header>
  );
}
