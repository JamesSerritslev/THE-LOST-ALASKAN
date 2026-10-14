import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ParallaxHero from "@/components/ParallaxHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WordCountNote } from "@/components/WordCountNote";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "./page.module.css";

// Title target ≤ 60 chars; description target 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description:
    "Homepage SEO description (120–160 characters). Introduce your business, primary offer, and location or audience clearly.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "WebPage",
      path: "/",
      name: `${siteConfig.name} | Home`,
      description: siteConfig.description,
    }),
  );

  return (
    <main>
      <JsonLd data={jsonLd} />
      <ParallaxHero />

      <section className="section" aria-labelledby="home-intro-heading">
        <div className={`container ${styles.split}`}>
          <div className="prose-block">
            <p className="section-label">Introduction</p>
            <WordCountNote target="150–200 words for the homepage intro" />
            <h2 id="home-intro-heading" className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", margin: "0 0 1rem" }}>
              Welcome visitors with a clear promise
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
              egestas semper. Aenean ultricies mi vitae est. Mauris placerat
              eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
              Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
              amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
              ipsum rutrum orci, sagittis tempus lacus enim ac dui.
            </p>
          </div>
          <PlaceholderImage
            id={2}
            alt="Placeholder image showing your product or service in context"
            width={900}
            height={700}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="home-features-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label">Why choose us</p>
          <WordCountNote target="80–120 words per feature block (3 blocks)" />
          <h2 id="home-features-heading" className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", margin: "0 0 1.75rem" }}>
            Three reasons customers stay
          </h2>
          <div className={styles.grid3}>
            <article>
              <PlaceholderImage
                id={3}
                alt="Placeholder image for feature one"
                width={640}
                height={420}
              />
              <h3 className={styles.featureTitle}>Reliable delivery</h3>
              <div className="prose-block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
            </article>
            <article>
              <PlaceholderImage
                id={4}
                alt="Placeholder image for feature two"
                width={640}
                height={420}
              />
              <h3 className={styles.featureTitle}>Thoughtful support</h3>
              <div className="prose-block">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur.
                </p>
              </div>
            </article>
            <article>
              <PlaceholderImage
                id={11}
                alt="Placeholder image for feature three"
                width={640}
                height={420}
              />
              <h3 className={styles.featureTitle}>Measurable results</h3>
              <div className="prose-block">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
