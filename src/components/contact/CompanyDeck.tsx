import { companyDeck } from "@/content/contact";
import { resolveFile } from "@/lib/media";
import { Button, buttonClass } from "../Button";
import { Download } from "../icons";
import { Accent } from "../SectionHeader";
import { DeckBook } from "./DeckBook";

/** Deck cover on the left, title + download button on the right. */
export function CompanyDeck() {
  const file = resolveFile(companyDeck.file);
  return (
    <section id="deck" aria-labelledby="deck-title" className="container-site pt-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-14 gap-y-10 rounded-card-lg border border-line p-[clamp(20px,3vw,40px)]">
        <DeckBook src={companyDeck.cover.src} alt={companyDeck.cover.alt} label={companyDeck.coverLabel} />
        <div>
          <h2
            id="deck-title"
            className="m-0 text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.045em]"
          >
            {companyDeck.title[0]}
            <Accent>{companyDeck.title[1]}</Accent>
          </h2>
          <p className="m-0 mt-5 max-w-[460px] text-[17px] leading-[1.6] text-text-2">{companyDeck.text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {file ? (
              <a href={file} download={companyDeck.fileName} className={buttonClass("primary", "md")} data-solo>
                Download deck
                <Download size={16} strokeWidth={2.2} />
              </a>
            ) : (
              <Button disabled icon="none" solo>
                Deck coming soon
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
