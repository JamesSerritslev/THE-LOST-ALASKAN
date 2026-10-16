import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "../content.module.css";

const description =
  "It started in Alaska—where coffee isn’t cute, it’s necessary. For early mornings, long days, cold rain, open doors, and neighbors who don’t knock.";

// Title target ≤ 60 chars (with "| BrandName" template); description 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description,
  path: "/contact",
});

export default function ContactPage() {
  const { address, email, orderUrl, phone } = siteConfig;

  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "ContactPage",
      path: "/contact",
      name: `Contact | ${siteConfig.name}`,
      description,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ],
    }),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Contact</p>
          <h1>Lorem ipsum</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="contact-intro-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.contactGrid}`}>
          <div>
            <h2 id="contact-intro-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              Lorem ipsum
            </h2>
            <div className="prose-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div style={{ marginTop: "1.75rem" }}>
              <ContactForm />
            </div>
          </div>

          <aside className={styles.aside}>
            <ul className={styles.asideList}>
              <li>
                <strong>Address:</strong> {address.street}, {address.city},{" "}
                {address.region} {address.postalCode}
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+13853584851">{phone}</a>
              </li>
              <li>
                <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <strong>Order:</strong> <a href={orderUrl}>Order online</a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
