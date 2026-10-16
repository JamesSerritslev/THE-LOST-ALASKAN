import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = siteConfig;
  const destination = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(destination)}&z=16&output=embed`;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <iframe
            className={styles.map}
            title="Map to The Lost Alaskan at 232 N Main St, Kaysville"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className={styles.address}>
            {address.street}, {address.city}, {address.region} {address.postalCode}
          </p>
          <a className={`btn btn-primary ${styles.directions}`} href={directionsUrl} rel="noopener noreferrer">
            Get directions
          </a>
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
