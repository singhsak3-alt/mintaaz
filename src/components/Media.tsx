import Image, { type ImageProps } from "next/image";
import { imageSize, resolveImage, resolveVideo } from "@/lib/media";
import { LoopVideo } from "./LoopVideo";

/**
 * Image and video wrappers that every page uses.
 * - Paths can omit the extension; the real file in /public is found automatically.
 * - Until a file is exported, a #F2F2F2 placeholder tile with the alt text is shown.
 */

type MediaImageProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt: string;
  /** Intrinsic size. Omit to read it from the file. */
  width?: number;
  height?: number;
};

export function MediaImage({
  src,
  alt,
  width: widthProp,
  height: heightProp,
  className,
  style,
  fill,
  ...rest
}: MediaImageProps) {
  const resolved = resolveImage(src);
  // Use the given size, else the file's real size, else a stable default.
  const real = resolved && (!widthProp || !heightProp) ? imageSize(resolved) : null;
  const width = widthProp ?? real?.width ?? 1600;
  const height = heightProp ?? real?.height ?? 1000;

  if (!resolved) {
    return (
      <Placeholder
        label={alt || src.split("/").pop() || "Image"}
        className={className}
        style={fill ? { ...style, position: "absolute", inset: 0 } : { aspectRatio: `${width} / ${height}`, ...style }}
        decorative={!alt}
      />
    );
  }

  return fill ? (
    <Image src={resolved} alt={alt} fill className={className} style={style} {...rest} />
  ) : (
    <Image
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      {...rest}
    />
  );
}

type MediaVideoProps = {
  src: string;
  poster?: string;
  /** Accessible label. Omit for purely decorative loops. */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
};

/** Autoplaying, muted, looping, inline video with a poster image. */
export function MediaVideo({ src, poster, label, className, style, width, height }: MediaVideoProps) {
  const video = resolveVideo(src);
  const posterSrc = poster ? resolveImage(poster) : null;

  if (!video) {
    return (
      <Placeholder
        label={label || "Video"}
        className={className}
        style={style}
        decorative={!label}
      />
    );
  }

  return (
    <LoopVideo
      src={video}
      poster={posterSrc ?? undefined}
      width={width}
      height={height}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={style}
    />
  );
}

function Placeholder({
  label,
  className,
  style,
  decorative,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  decorative?: boolean;
}) {
  return (
    <div
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
      className={className}
      style={{
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        background: "var(--color-surface-2)",
        padding: 16,
        boxSizing: "border-box",
        ...style,
      }}
    >
      <span className="eyebrow" style={{ fontSize: 11 }}>
        [{label}]
      </span>
    </div>
  );
}
