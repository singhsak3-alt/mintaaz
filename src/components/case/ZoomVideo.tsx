import { resolveImage, resolveVideo } from "@/lib/media";
import { ZoomVideoClient } from "./ZoomVideoClient";

/** Server wrapper: resolves the files in /public, then renders the zoomable video. */
export function ZoomVideo({
  src,
  poster,
  label,
  w,
  h,
  frameBg = "#FFFFFF",
  videoClass = "mx-auto block h-auto w-full",
  inline,
}: {
  src: string;
  poster?: string;
  label: string;
  w: number;
  h: number;
  frameBg?: string;
  videoClass?: string;
  inline?: boolean;
}) {
  return (
    <ZoomVideoClient
      src={resolveVideo(src)}
      poster={poster ? resolveImage(poster) : null}
      label={label}
      width={w}
      height={h}
      frameBg={frameBg}
      inline={inline}
      videoClass={videoClass}
    />
  );
}
