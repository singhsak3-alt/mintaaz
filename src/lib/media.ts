import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * Resolves a media path from content files to a real file in /public.
 *
 * Content can reference images without an extension, as image-map.csv does
 * (e.g. "/images/tenx/tenx-app-icon-558458"). The first matching extension
 * on disk is used. When no file exists yet, `null` is returned and the UI
 * shows a placeholder tile, so pages render before assets are exported.
 */

const IMAGE_EXT = [".webp", ".png", ".jpg", ".jpeg", ".avif", ".gif", ".svg"];
const VIDEO_EXT = [".mp4", ".webm"];
const PUBLIC_DIR = path.join(process.cwd(), "public");

const cache = new Map<string, string | null>();

function resolve(src: string, exts: string[]): string | null {
  const key = `${src}|${exts.join()}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  const candidates = path.extname(src) ? [src] : exts.map((e) => src + e);
  const found =
    candidates.find((c) => fs.existsSync(path.join(PUBLIC_DIR, c))) ?? null;
  cache.set(key, found);
  return found;
}

export const resolveImage = (src: string) => resolve(src, IMAGE_EXT);
export const resolveVideo = (src: string) => resolve(src, VIDEO_EXT);

/* ---------------------------------------------------------------------------
   Intrinsic size from the file header (PNG, JPEG, WebP, GIF). Used when the
   content doesn't give width/height, so layout space is reserved correctly.
   ------------------------------------------------------------------------ */

const sizeCache = new Map<string, { width: number; height: number } | null>();

function readSize(buf: Buffer): { width: number; height: number } | null {
  // PNG
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // GIF
  if (buf.toString("ascii", 0, 3) === "GIF") {
    return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
  }
  // WebP
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const b = buf.readUInt32LE(21);
      return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8X") return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
  }
  // JPEG: walk markers to the first SOFn
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  return null;
}

/** Pixel size of a resolved public image path, or null if unknown. */
export function imageSize(publicPath: string) {
  const hit = sizeCache.get(publicPath);
  if (hit !== undefined) return hit;
  let size: { width: number; height: number } | null = null;
  try {
    size = readSize(fs.readFileSync(path.join(PUBLIC_DIR, publicPath)));
  } catch {}
  sizeCache.set(publicPath, size);
  return size;
}
