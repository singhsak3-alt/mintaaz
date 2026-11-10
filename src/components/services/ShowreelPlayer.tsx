"use client";

import { useEffect, useRef, useState } from "react";
import { Expand, Pause, Play, Shrink } from "../icons";

/**
 * Services showreel: muted autoplay loop in a 16:9 frame, 900px wide at most.
 * Controls (play/pause, seek, time, fullscreen) fade in on hover or keyboard
 * focus, stay visible while paused, and are always shown on touch screens.
 * Fullscreen letterboxes the video (object-contain).
 * Under prefers-reduced-motion the reel starts paused on its poster.
 */

type VideoWithWebkit = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

const fmt = (s: number) => {
  const t = Math.max(0, Math.floor(s || 0));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
};

const btn =
  "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-pill border-0 bg-paper/15 text-paper backdrop-blur-sm transition-colors hover:bg-paper/30";

export function ShowreelPlayer({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<VideoWithWebkit>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [full, setFull] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    v.muted = true;
    // Metadata can load before hydration, so onLoadedMetadata may never fire.
    if (v.readyState >= 1) setDuration(v.duration);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.play()?.catch(() => {});
    const onFs = () => setFull(document.fullscreenElement === wrap.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play()?.catch(() => {});
    else v.pause();
  };

  const toggleFull = () => {
    const el = wrap.current;
    const v = video.current;
    if (!el || !v) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen();
    else v.webkitEnterFullscreen?.(); // iOS Safari: native fullscreen player
  };

  const shown = playing ? "opacity-0" : "opacity-100";

  return (
    <div
      ref={wrap}
      className="group relative mx-auto aspect-video w-full max-w-[900px] overflow-hidden rounded-card-lg bg-ink [&:fullscreen]:max-w-none [&:fullscreen]:rounded-none"
    >
      <video
        ref={video}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        className={`absolute inset-0 block size-full cursor-pointer ${full ? "object-contain" : "object-cover"}`}
      />

      {/* Control bar */}
      <div
        className={`absolute inset-x-0 bottom-0 flex items-center gap-3 bg-linear-to-t from-ink/70 to-transparent px-5 pb-4 pt-12 text-paper transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 ${shown}`}
      >
        <button type="button" onClick={toggle} aria-label={playing ? "Pause showreel" : "Play showreel"} className={btn}>
          {playing ? <Pause size={18} /> : <Play size={18} strokeWidth={0} />}
        </button>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={time}
          onChange={(e) => {
            const v = video.current;
            if (v) v.currentTime = Number(e.target.value);
          }}
          aria-label="Seek"
          aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
          className="h-1 min-w-0 flex-1 cursor-pointer accent-paper"
        />
        <span className="eyebrow shrink-0 tabular-nums text-paper">
          {fmt(time)} / {fmt(duration)}
        </span>
        <button
          type="button"
          onClick={toggleFull}
          aria-label={full ? "Exit fullscreen" : "Fullscreen"}
          className={btn}
        >
          {full ? <Shrink size={18} /> : <Expand size={18} />}
        </button>
      </div>
    </div>
  );
}
