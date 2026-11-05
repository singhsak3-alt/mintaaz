"use client";

import { useRef } from "react";
import { LoopVideo } from "../LoopVideo";

/**
 * A looping video that opens larger in a modal when clicked (Interaction case study).
 * Uses <dialog>: Esc closes it, focus is trapped, the backdrop click closes it.
 */
export function ZoomVideoClient({
  src,
  poster,
  label,
  width,
  height,
  frameBg,
  videoClass,
  inline,
}: {
  src: string | null;
  poster: string | null;
  label: string;
  width: number;
  height: number;
  frameBg: string;
  videoClass: string;
  /** inline-block button sized by the video (stat icons) */
  inline?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={`Enlarge animation: ${label}`}
        className={`group relative box-border cursor-zoom-in rounded-[16px] border-0 bg-transparent p-0 ${
          inline ? "inline-block max-w-full" : "block w-full"
        }`}
      >
        {src ? (
          <LoopVideo src={src} poster={poster ?? undefined} width={width} height={height} aria-label={label} className={videoClass} />
        ) : (
          <span className="eyebrow flex aspect-video w-full items-end bg-surface-2 p-4 text-[11px]">[{label}]</span>
        )}
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 flex size-9 items-center justify-center rounded-pill border border-line-strong bg-paper opacity-75 transition-[opacity,transform] duration-200 group-hover:scale-[1.08] group-hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </button>

      <dialog
        ref={ref}
        aria-label={label}
        onClick={(e) => {
          if (e.target === ref.current) close();
        }}
        className="m-auto max-h-full max-w-full cursor-zoom-out border-0 bg-transparent p-6 backdrop:bg-[rgba(10,10,10,0.82)]"
      >
        <div
          className="relative box-border flex max-h-full max-w-full cursor-default flex-col items-center gap-4 rounded-card p-[clamp(16px,3vw,40px)]"
          style={{ background: frameBg }}
        >
          {src && (
            <LoopVideo
              src={src}
              poster={poster ?? undefined}
              width={width}
              height={height}
              aria-label={label}
              className="block h-auto"
              style={{ width: `min(${width}px, 86vw, calc(78vh * ${width} / ${height}))` }}
            />
          )}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-11 cursor-pointer items-center justify-center rounded-pill border border-line-strong bg-paper p-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
}
