import Link from "next/link";
import { siteConfig } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.brand}>{siteConfig.name}</p>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className={styles.copy}>
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
