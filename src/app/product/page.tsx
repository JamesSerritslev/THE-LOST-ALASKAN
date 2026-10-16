import type { Metadata } from "next";
import { AppLinks } from "@/components/AppLinks";
import { JsonLd } from "@/components/JsonLd";
import { MenuBoard } from "@/components/MenuBoard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "../content.module.css";

const description =
  "It started in Alaska—where coffee isn’t cute, it’s necessary. For early mornings, long days, cold rain, open doors, and neighbors who don’t knock.";

// Title target ≤ 60 chars (with "| BrandName" template); description 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: "Menu",
  description,
  path: "/product",
});

export default function ProductPage() {
  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "CollectionPage",
      path: "/product",
      name: `Menu | ${siteConfig.name}`,
      description,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/product" },
      ],
    }),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Menu</p>
          <h1>Lorem ipsum</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <AppLinks />
          <MenuBoard />
        </div>
      </header>

      <section className="section" aria-labelledby="product-overview-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.split}`}>
          <div className="prose-block">
            <h2 id="product-overview-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <PlaceholderImage
            id={5}
            src="/images/drive-download-20261014T165720Z-1-001/Deadman_s%20Reach%2012oz_coffee%20ice%20cubes.jpg"
            alt="Milk poured over coffee ice cubes beside a bag of Deadman's Reach"
            width={900}
            height={720}
            priority
          />
        </div>
      </section>

      <section className="section" aria-labelledby="product-gallery-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 id="product-gallery-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
            Lorem ipsum
          </h2>
          <div className={styles.gallery}>
            <PlaceholderImage
              id={7}
              src="/images/drive-download-20261014T165810Z-1-001/Walk-Up.JPG"
              alt="Walk-up window with cups, a La Marzocco machine, and syrup bottles"
              width={800}
              height={560}
            />
            <div className="prose-block" style={{ alignSelf: "center" }}>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
