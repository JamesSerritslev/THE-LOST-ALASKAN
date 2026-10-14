import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WordCountNote } from "@/components/WordCountNote";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "../content.module.css";

// Title target ≤ 60 chars (with "| BrandName" template); description 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: "Product",
  description:
    "Product page SEO description (120–160 characters). Name the offer, who it helps, and the primary benefit for commercial intent.",
  path: "/product",
});

export default function ProductPage() {
  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "CollectionPage",
      path: "/product",
      name: `Product | ${siteConfig.name}`,
      description:
        "Product page SEO description (120–160 characters). Name the offer, who it helps, and the primary benefit for commercial intent.",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
      ],
    }),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Product</p>
          <h1>What we offer</h1>
          <p className="lead">
            Replace this overview with your product or service positioning,
            primary keywords, and a short proof point.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="product-overview-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.split}`}>
          <div className="prose-block">
            <WordCountNote target="300–400 words for the product overview" />
            <h2 id="product-overview-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              A complete solution built around outcomes
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.
              Sed dui lorem, adipiscing in adipiscing et, interdum nec metus.
              Mauris ultrices, justo at tempus ornare, lectus eros tincidunt
              nisl, at fermentum magna erat nec magna. Nulla facilisi. Sed
              ullamcorper nisl nec eros vestibulum, sed consequat magna
              sollicitudin. Integer at nisl auctor, fermentum nisl a, dictum
              nisl. Vivamus at magna eget magna feugiat tincidunt.
            </p>
            <p>
              Curabitur blandit tempus porttitor. Nullam quis risus eget urna
              mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Donec ullamcorper
              nulla non metus auctor fringilla. Maecenas sed diam eget risus
              varius blandit sit amet non magna. Cras mattis consectetur purus
              sit amet fermentum. Vestibulum id ligula porta felis euismod
              semper. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et.
            </p>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Donec id elit non
              mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Integer posuere erat a ante venenatis dapibus posuere
              velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam.
            </p>
          </div>
          <PlaceholderImage
            id={5}
            alt="Placeholder product hero image"
            width={900}
            height={720}
            priority
          />
        </div>
      </section>

      <section className="section" aria-labelledby="product-details-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.splitReverse}`}>
          <PlaceholderImage
            id={6}
            alt="Placeholder image showing product detail or workflow"
            width={900}
            height={700}
          />
          <div className="prose-block">
            <WordCountNote target="200–250 words for features and benefits" />
            <h2 id="product-details-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              Features that map to real benefits
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="product-gallery-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <WordCountNote target="120–160 words for use-case / gallery copy" />
          <h2 id="product-gallery-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
            See it in context
          </h2>
          <div className={`prose-block ${styles.stack}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          </div>
          <div className={styles.gallery} style={{ marginTop: "1.5rem" }}>
            <PlaceholderImage
              id={7}
              alt="Placeholder gallery image of the product in use"
              width={800}
              height={560}
            />
            <div className="prose-block" style={{ alignSelf: "center" }}>
              <p>
                Ready to tailor this offer for your audience? Reach out and we
                will walk through the next steps together.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "0.75rem" }}>
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
