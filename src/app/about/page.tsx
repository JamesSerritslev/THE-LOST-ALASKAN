import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "../content.module.css";

const description =
  "It started in Alaska—where coffee isn’t cute, it’s necessary. For early mornings, long days, cold rain, open doors, and neighbors who don’t knock.";

// Title target ≤ 60 chars (with "| BrandName" template); description 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: "About",
  description,
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "AboutPage",
      path: "/about",
      name: `About | ${siteConfig.name}`,
      description,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ],
    }),
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <header className={styles.pageHero}>
        <div className="container">
          <p className="section-label">About</p>
          <h1>The Lost Alaskan</h1>
          <p className="lead">
            It started in Alaska—where coffee isn’t cute, it’s necessary. For
            early mornings, long days, cold rain, open doors, and neighbors
            who don’t knock. If you showed up, you drank coffee. If the spoon
            didn’t stand up, we tried again. Sometimes there was Baileys.
            Sometimes there wasn’t. Either way, the coffee was on.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="about-story-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.split}`}>
          <div className="prose-block">
            <h2 id="about-story-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              That mindset followed us south.
            </h2>
            <p>
              From tiny coffee carts to years behind the bar; dabbling here,
              mixing this and that, too mastering the craft, we learned one
              thing fast: good coffee takes a lot of effort. Damn Good coffee,
              takes obsession.
            </p>
            <p>
              So we built The Lost Alaskan for real life for us to gather,
              because community doesn’t just magically happen—all of us build
              this experience, one cup at a time.
            </p>
          </div>
          <PlaceholderImage
            id={8}
            src="/images/drive-download-20261014T165720Z-1-001/WOLF%202LB_PINK%20WITH%20FERN%20LEAVES.jpg"
            alt="A two-pound bag of Raven's Brew Wicked Wolf on a wood round with fern leaves"
            width={900}
            height={720}
            priority
          />
        </div>
      </section>

      <section className="section" aria-labelledby="about-values-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.splitReverse}`}>
          <PlaceholderImage
            id={9}
            src="/images/drive-download-20261014T165810Z-1-001/GeenHouse.JPG"
            alt="Glass greenhouse with cushioned benches, wicker chairs, and string lights"
            width={900}
            height={700}
          />
          <div className="prose-block">
            <h2 id="about-values-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
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
        </div>
      </section>
    </>
  );
}
