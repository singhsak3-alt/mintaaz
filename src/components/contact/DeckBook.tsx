import { logos } from "@/content/site";
import { MediaImage } from "../Media";

/**
 * Company deck shown as a closed hardcover book with the deck sliding halfway
 * out of it. The cover is a deep ink→indigo board with a bound spine and a
 * white "foil" Mintaaz logo; the deck's first page pokes out from inside and
 * slides further out on hover. Styles: "Deck book" in globals.css.
 */
export function DeckBook({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="deck-stage">
      <span className="deck-shadow" aria-hidden="true" />
      <div className="deck-scene">
        <div className="deck-sheet">
          <MediaImage src={src} alt={alt} fill sizes="(max-width: 900px) 80vw, 460px" className="object-cover" />
        </div>
        <div className="deck-case" aria-hidden="true">
          <span className="deck-case-spine" />
          <div className="deck-case-face">
            <MediaImage
              src={logos.footer.src}
              alt=""
              width={logos.footer.width}
              height={logos.footer.height}
              className="deck-case-logo"
            />
            <span className="deck-case-label">{label}</span>
          </div>
          <span className="deck-case-sheen" />
        </div>
      </div>
    </div>
  );
}
