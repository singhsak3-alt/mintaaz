import { homeHero } from "@/content/home";
import { MediaImage } from "../Media";

/**
 * Home hero: centred H1 + lead, with the pencil-and-stone artwork below.
 * Styles: "Home hero" in globals.css.
 */
export function HomeHero() {
  const [a, b, c] = homeHero.title;

  return (
    <section className="container-site pt-2">
      <div className="hero-stage">
        <div className="hero-copy">
          <h1 className="hero-title text-ink">
            {a}
            <span className="serif-accent tracking-[-0.02em]">{b}</span>
            {c}
          </h1>
          <p className="hero-lead text-text-1">{homeHero.lead}</p>
        </div>
        <div className="hero-art">
          <MediaImage src={homeHero.art.src} alt={homeHero.art.alt} fill preload sizes="(max-width: 480px) 100vw, 440px" />
        </div>
      </div>
    </section>
  );
}
