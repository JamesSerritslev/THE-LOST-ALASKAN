import type { Metadata } from "next";
import { AppLinks } from "@/components/AppLinks";
import { JsonLd } from "@/components/JsonLd";
import ParallaxHero from "@/components/ParallaxHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { buildPageGraph, toJsonLd } from "@/lib/schema";
import { buildMetadata, siteConfig } from "@/lib/site";
import styles from "./page.module.css";

const description =
  "It started in Alaska—where coffee isn’t cute, it’s necessary. For early mornings, long days, cold rain, open doors, and neighbors who don’t knock.";

const coffeePhotos = [
  {
    src: "/images/drive-download-20261014T165720Z-1-001/cold%20brew%20on%20yellow%20%281%29.jpg",
    alt: "Milk poured from a steel pitcher into an iced coffee on a yellow background",
  },
  {
    src: "/images/drive-download-20261014T165720Z-1-001/Deadman_s%20Reach%2012oz_cold%20brew%20picnic.jpg",
    alt: "Deadman's Reach coffee and iced cups on a yellow picnic blanket",
  },
  {
    src: "/images/drive-download-20261014T165720Z-1-001/DMR%20COFFEE%20EQUIP.jpg",
    alt: "A bag of Deadman's Reach surrounded by a French press, moka pot, and coffee beans",
  },
  {
    src: "/images/drive-download-20261014T165720Z-1-001/WOLF%20FIRE.jpg",
    alt: "A bag of Wicked Wolf dark roast coffee beside a campfire",
  },
  {
    src: "/images/drive-download-20261014T165720Z-1-001/DMR%20FALL.jpg",
    alt: "A bag of Deadman's Reach dark roast laid over red and gold autumn leaves",
  },
  {
    src: "/images/drive-download-20261014T165720Z-1-001/CWW%20GR%20FALL%20APPLE%20BASKET.jpg",
    alt: "A bag of Wicked Wolf coffee standing in a basket of red apples",
  },
];

const trailerPhotos = [
  {
    src: "/images/drive-download-20261014T165810Z-1-001/Greenhouse%20and%20Coffee%20Trailer.JPG",
    alt: "The white Lost Alaskan trailer beside a glass greenhouse, with patio umbrellas and mountains behind",
  },
  {
    src: "/images/drive-download-20261014T165810Z-1-001/Coffee%20Cart.JPG",
    alt: "White coffee trailer with the service window open, string lights, and the Lost Alaskan sign",
  },
  {
    src: "/images/drive-download-20261014T165810Z-1-001/Walk_up_W_Menu.JPG",
    alt: "Walk-up window with stacked cups, syrup pumps, and the drink menu board",
  },
  {
    src: "/images/drive-download-20261014T165810Z-1-001/Drive-Thru.JPG",
    alt: "The Lost Alaskan trailer with an open sign, wooden steps, and snowy mountains behind",
  },
  {
    src: "/images/drive-download-20261014T165810Z-1-001/Parking%20Lot%20View.JPG",
    alt: "The white trailer and glass greenhouse from the parking lot",
  },
  {
    src: "/images/drive-download-20261014T165810Z-1-001/Close%20up%20Drive_Thru.JPG",
    alt: "Drive-up side of the trailer with the open sign, service window, and menu board",
  },
  {
    src: "/images/drive-download-20261014T165810Z-1-001/DSC_0011.JPG",
    alt: "Side of the white trailer with the service window, hours sign, and menu board",
  },
];

// Title target ≤ 60 chars; description target 120–160 chars.
export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Not Good... Damn Good`,
  description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  const jsonLd = toJsonLd(
    buildPageGraph({
      type: "WebPage",
      path: "/",
      name: `${siteConfig.name} | Home`,
      description,
    }),
  );

  return (
    <main>
      <JsonLd data={jsonLd} />
      <ParallaxHero />

      <section className="section" aria-label="App Links" style={{ paddingBottom: 0 }}>
        <div className="container">
          <AppLinks />
        </div>
      </section>

      <section className="section" aria-labelledby="home-intro-heading">
        <div className={`container ${styles.split}`}>
          <div className="prose-block">
            <p className="section-label">The Lost Alaskan</p>
            <h2 id="home-intro-heading" className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", margin: "0 0 1rem" }}>
              The Lost Alaskan
            </h2>
            <p>
              It started in Alaska—where coffee isn’t cute, it’s necessary. For
              early mornings, long days, cold rain, open doors, and neighbors
              who don’t knock. If you showed up, you drank coffee. If the spoon
              didn’t stand up, we tried again. Sometimes there was Baileys.
              Sometimes there wasn’t. Either way, the coffee was on.
            </p>
            <p>That mindset followed us south.</p>
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
            id={2}
            src="/images/drive-download-20261014T165720Z-1-001/DMR%20WATERSIDE.jpg"
            alt="A bag of Deadman's Reach dark roast standing on a rock beside blue water"
            width={900}
            height={700}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="home-features-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label">Lorem ipsum</p>
          <h2 id="home-features-heading" className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", margin: "0 0 1.75rem" }}>
            Lorem ipsum dolor sit amet
          </h2>
          <div className={styles.grid3}>
            <article>
              <PlaceholderImage
                id={3}
                src="/images/drive-download-20261014T165720Z-1-001/Wicked%20Wolf%202lb%20%26%2012oz_human%20holding%20basket%20in%20woods.jpg"
                alt="Three bags of Raven's Brew Wicked Wolf held in a basket in the woods"
                width={640}
                height={420}
              />
              <h3 className={styles.featureTitle}>Lorem ipsum</h3>
              <div className="prose-block">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
            <article>
              <PlaceholderImage
                id={4}
                src="/images/drive-download-20261014T165720Z-1-001/cold%20brew%20on%20pink.jpg"
                alt="Two glasses of iced coffee with cream swirling through, on a pink background"
                width={640}
                height={420}
              />
              <h3 className={styles.featureTitle}>Lorem ipsum</h3>
              <div className="prose-block">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </article>
            <article>
              <PlaceholderImage
                id={11}
                src="/images/drive-download-20261014T165720Z-1-001/Coffee%20Culture_chemex%20and%20coffee.jpg"
                alt="A glass mug of black coffee beside a Chemex brewer"
                width={640}
                height={420}
              />
              <h3 className={styles.featureTitle}>Lorem ipsum</h3>
              <div className="prose-block">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-coffee-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label">Lorem ipsum</p>
          <h2 id="home-coffee-heading" className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", margin: "0 0 1.75rem" }}>
            Lorem ipsum dolor sit amet
          </h2>
          <div className={styles.photoGrid}>
            {coffeePhotos.map((photo, index) => (
              <PlaceholderImage
                key={photo.src}
                id={20 + index}
                src={photo.src}
                alt={photo.alt}
                width={640}
                height={420}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-trailer-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label">Lorem ipsum</p>
          <h2 id="home-trailer-heading" className="display" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", margin: "0 0 1.75rem" }}>
            Lorem ipsum dolor sit amet
          </h2>
          <div className={styles.photoGrid}>
            {trailerPhotos.map((photo, index) => (
              <PlaceholderImage
                key={photo.src}
                id={30 + index}
                src={photo.src}
                alt={photo.alt}
                width={640}
                height={420}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
