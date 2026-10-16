"use client";

import { Coffee, Info, Mail, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  "/about": Info,
  "/product": Coffee,
  "/contact": Mail,
};

const itemOrder = ["/about", "/product", "/contact"];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const items = itemOrder.map((href) => siteConfig.nav.find((item) => item.href === href)!);

  return (
    <nav
      className="mobile-nav md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Mobile"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-3">
        {items.map(({ href, label }) => {
          const Icon = icons[href];
          const active = pathname.startsWith(href);

          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 px-2 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  className="h-5 w-5"
                  strokeWidth={active ? 2.25 : 1.75}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
