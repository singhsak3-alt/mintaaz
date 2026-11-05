import { homeHero } from "@/content/home";
import { resolveImage } from "@/lib/media";
import { MediaImage } from "../Media";
import { PlaneSync } from "./PlaneSync";

/**
 * Home hero: centred H1 + lead over a 1920×990 stage (max 1200px).
 * An indigo plane floats on a 6s loop. Inside the plane-shaped window
 * a white copy of the text runs the inverse animation on the same clock,
 * so the words appear to stay still while the plane passes over them.
 *
 * Positions are in container units (cqw) taken from the 1200px reference,
 * so they scale with the stage. Styles: "Home hero" in globals.css.
 */

function HeroCopy({ white }: { white?: boolean }) {
  const [a, b, c] = homeHero.title;
  const Title = white ? "p" : "h1";
  return (
    <div className="hero-copy">
      <Title className={`hero-title ${white ? "text-paper" : "text-ink"}`}>
        {a}
        <span className="serif-accent tracking-[-0.02em]">{b}</span>
        {c}
      </Title>
      <p className={`hero-lead ${white ? "text-paper" : "text-text-1"}`}>{homeHero.lead}</p>
    </div>
  );
}

export function HomeHero() {
  const plane = resolveImage(homeHero.plane.src);

  return (
    <section className="container-site pt-2">
      <div className="hero-stage">
        <HeroCopy />

        <div className="hero-scene">
          <div className="hero-shadow" aria-hidden="true">
            <MediaImage src={homeHero.plane.shadow} alt="" fill preload sizes="36vw" />
          </div>

          {plane && (
            <div
              className="hero-plane"
              role="img"
              aria-label={homeHero.plane.label}
              style={{ maskImage: `url(${plane})`, WebkitMaskImage: `url(${plane})` }}
            >
              <MediaImage src={homeHero.plane.src} alt="" fill preload sizes="43vw" />
              <div className="hero-plane-inner" aria-hidden="true">
                <HeroCopy white />
              </div>
            </div>
          )}
        </div>
        <PlaneSync />
      </div>
    </section>
  );
}
