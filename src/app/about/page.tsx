import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { WordCountNote } from "@/components/WordCountNote";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "../content.module.css";

// Title target ≤ 60 chars (with "| BrandName" template); description 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About page SEO description (120–160 characters). Share who you are, your mission, and trust signals for brand queries.",
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "AboutPage",
      path: "/about",
      name: `About | ${siteConfig.name}`,
      description:
        "About page SEO description (120–160 characters). Share who you are, your mission, and trust signals for brand queries.",
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
          <h1>Our story</h1>
          <p className="lead">
            Introduce the business, the people, and the reason you exist — this
            page builds trust and brand search relevance.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="about-story-heading" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.split}`}>
          <div className="prose-block">
            <WordCountNote target="350–450 words for the company story" />
            <h2 id="about-story-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              Built with care for the people we serve
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              sagittis nisl at nulla rhoncus, at tincidunt arcu tincidunt.
              Integer at libero sit amet nisl fringilla aliquet. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
              sit amet ligula. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Nulla porttitor accumsan tincidunt.
            </p>
            <p>
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Pellentesque in ipsum id orci porta dapibus.
              Vivamus suscipit tortor eget felis porttitor volutpat. Donec
              rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
            <p>
              Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut
              libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia
              in, elementum id enim. Vestibulum ac diam sit amet quam vehicula
              elementum sed sit amet dui. Proin eget tortor risus. Donec
              sollicitudin molestie malesuada. Curabitur aliquet quam id dui
              posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus. Nulla porttitor accumsan tincidunt. Curabitur
              non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
          </div>
          <PlaceholderImage
            id={8}
            alt="Placeholder image of your team or workplace"
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
            alt="Placeholder image representing company values or community"
            width={900}
            height={700}
          />
          <div className="prose-block">
            <WordCountNote target="180–220 words for values / mission" />
            <h2 id="about-values-heading" className="display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", margin: "0 0 1rem" }}>
              Values that guide every decision
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
