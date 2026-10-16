import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <img
            className={styles.logo}
            src="/images/drive-download-20261014T165754Z-1-001/TLA%20LOGO%20Not%20Good%20Damn%20Good.png"
            alt="The Lost Alaskan bear with a coffee, saying not good, damn good coffee."
          />
          <p className={styles.brand}>{siteConfig.name}</p>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.follow}>Follow us!</p>
          <nav className={styles.social} aria-label="Social media">
            {siteConfig.social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                rel="noopener noreferrer"
              >
                <SocialIcon name={item.label} />
              </a>
            ))}
          </nav>
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
