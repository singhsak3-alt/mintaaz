"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping, inline video. React does not render the `muted` attribute in
 * server HTML, so it is set here before play() to make autoplay reliable.
 * Under prefers-reduced-motion the video stays paused on its poster.
 */
export function LoopVideo(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    v.play()?.catch(() => {});
  }, []);

  return <video ref={ref} muted loop playsInline autoPlay preload="metadata" {...props} />;
}
