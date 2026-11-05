"use client";

import { useState } from "react";
import { Button } from "../Button";

/**
 * Showreel placeholder: dashed 16:8 box with a "Play reel" button.
 * Until the 1-minute reel is supplied, clicking shows "Showreel coming soon".
 */
export function Showreel() {
  const [open, setOpen] = useState(false);
  return (
    <section aria-label="Showreel" className="container-site pt-24">
      <div className="box-border flex aspect-[16/8] w-full flex-col items-center justify-center gap-5 rounded-card-lg border-[1.5px] border-dashed border-line-strong p-6 text-center">
        <Button onClick={() => setOpen((o) => !o)} aria-expanded={open} icon="none">
          {open ? "Close" : "Play reel"}
        </Button>
        <p role="status" className="eyebrow m-0" hidden={!open}>
          Showreel coming soon
        </p>
      </div>
    </section>
  );
}
