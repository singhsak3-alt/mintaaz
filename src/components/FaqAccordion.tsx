"use client";

import { useId, useState } from "react";

export type Faq = { q: string; a: string };

/** FAQ rows with a 32px round +/− icon. One row open at a time. */
export function FaqAccordion({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={f.q} className="overflow-hidden rounded-[22px] border border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="box-border flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-7 py-6 text-left font-[inherit] text-[19px] font-bold tracking-[-0.015em] text-ink"
            >
              {f.q}
              <span
                aria-hidden="true"
                className={`inline-flex size-8 flex-none items-center justify-center rounded-pill border text-xl font-medium ${
                  isOpen ? "border-ink bg-ink text-paper" : "border-line-strong bg-paper text-ink"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div id={panelId} hidden={!isOpen}>
              <p className="m-0 max-w-[640px] px-7 pb-[26px] text-base leading-[1.65] text-text-2">
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
