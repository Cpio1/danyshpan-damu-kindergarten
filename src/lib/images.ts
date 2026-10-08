import fs from "node:fs";
import path from "node:path";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

/** Бас беттегі негізгі фото: public/images/main-page.(jpg|jpeg|png|webp) */
const MAIN_BASENAME = "main-page";
/** «Балабақша туралы» бөліміне арналған фото: public/images/about.(jpg|jpeg|png|webp) */
const ABOUT_BASENAME = "about";

export type SiteImages = {
  main: string | null;
  about: string | null;
  gallery: string[];
};

function readImageFiles(): string[] {
  try {
    return fs
      .readdirSync(IMAGES_DIR, { withFileTypes: true })
      .filter((entry) => entry.isFile() && IMAGE_EXT.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

function baseName(file: string) {
  return file.replace(IMAGE_EXT, "").toLowerCase();
}

function toSrc(file: string) {
  return `/images/${encodeURIComponent(file)}`;
}

export function getSiteImages(): SiteImages {
  const files = readImageFiles();
  const main = files.find((f) => baseName(f) === MAIN_BASENAME) ?? null;
  const about = files.find((f) => baseName(f) === ABOUT_BASENAME) ?? null;

  // Негізгі және «туралы» суреттері галереяда қайталанбайды.
  const reserved = new Set([MAIN_BASENAME, ABOUT_BASENAME]);
  const gallery = files.filter((f) => !reserved.has(baseName(f)));

  return {
    main: main ? toSrc(main) : null,
    about: about ? toSrc(about) : null,
    gallery: gallery.map(toSrc),
  };
}
