"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { photoSrc } from "@/lib/placeholders";
import { siteConfig } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f2f5f3]/90 backdrop-blur-md transition-all duration-300 motion-reduce:transition-none ${
        scrolled ? "h-14 shadow-md" : "h-24"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className={`relative block shrink-0 overflow-hidden rounded-sm transition-all duration-300 motion-reduce:transition-none ${
            scrolled ? "h-8 w-24 sm:w-28" : "h-12 w-36 sm:h-14 sm:w-44"
          }`}
        >
          <Image
            src={photoSrc("logo", 352, 112)}
            alt={`${siteConfig.name} logo`}
            fill
            priority
            sizes="176px"
            className="object-cover object-left"
          />
        </Link>

        <div className={styles.actions}>
          <Link
            href="/contact"
            className={styles.contactCta}
            aria-label="Contact us"
          >
            <Mail className={styles.contactIcon} strokeWidth={1.75} aria-hidden="true" />
            <span className={styles.contactLabel}>Contact us</span>
          </Link>

          <div className={`${styles.menuWrap} md:hidden`}>
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
              className={`${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ""}`}
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
            className={`hidden font-medium text-[var(--color-ink)] md:flex md:items-center md:gap-6 ${
              scrolled ? "md:text-xs uppercase tracking-[0.12em]" : "md:text-sm"
            }`}
            aria-label="Primary"
          >
            {siteConfig.nav
              .filter((item) => item.href !== "/contact")
              .map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-[var(--color-accent)] ${
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-ink-muted)]"
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
