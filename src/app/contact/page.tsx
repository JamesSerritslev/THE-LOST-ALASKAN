import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WordCountNote } from "@/components/WordCountNote";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "../content.module.css";

// Title target ≤ 60 chars (with "| BrandName" template); description 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact page SEO description (120–160 characters). Include how to reach you, service area, and a clear invite to inquire.",
  path: "/contact",
});

export default function ContactPage() {
  const { email, phone, address } = siteConfig;

  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "ContactPage",
      path: "/contact",
      name: `Contact | ${siteConfig.name}`,
      description:
        "Contact page SEO description (120–160 characters). Include how to reach you, service area, and a clear invite to inquire.",
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
          <h1>Get in touch</h1>
          <p className="lead">
            Tell visitors how to reach you and what happens after they submit
            the form.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="contact-intro-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.contactGrid}`}>
          <div>
            <WordCountNote target="150–200 words for the contact introduction" />
            <h2 id="contact-intro-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              We would love to hear from you
            </h2>
            <div className="prose-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere, nisl in tristique dignissim, mi lorem fermentum elit,
                vitae tincidunt arcu metus sit amet tellus. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Mauris viverra diam vitae dolor. Donec auctor, nisl eget
                ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl
                nisl eget nisl. Praesent sapien massa, convallis a pellentesque
                nec, egestas non nisi.
              </p>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Nulla porttitor accumsan tincidunt. Vivamus magna justo,
                lacinia eget consectetur sed, convallis at tellus. Proin eget
                tortor risus. Donec sollicitudin molestie malesuada.
              </p>
            </div>

            <div style={{ marginTop: "1.75rem" }}>
              <ContactForm />
            </div>
          </div>

          <aside className={styles.aside}>
            <PlaceholderImage
              id={10}
              alt="Placeholder image of your office, storefront, or service area"
              width={800}
              height={560}
              priority
            />
            <ul className={styles.asideList}>
              <li>
                <strong>Email:</strong> {email}
              </li>
              <li>
                <strong>Phone:</strong> {phone}
              </li>
              <li>
                <strong>Address:</strong> {address.street}, {address.city},{" "}
                {address.region} {address.postalCode}
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
