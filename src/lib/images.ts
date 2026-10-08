import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

/** Бас беттегі негізгі фото: public/images/main-page.(jpg|jpeg|png|webp) немесе public/main-page.* */
const MAIN_BASENAME = "main-page";
/**
 * Арка пішінді үлкен блоктағы фото («Балабақша туралы»):
 * public/images/about.* немесе main-page2.* (public/images/ не public/ ішінде).
 */
const ABOUT_BASENAME = "about";
const ABOUT_FALLBACK_BASENAME = "main-page2";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

export type SiteImages = {
  main: string | null;
  about: string | null;
  gallery: GalleryImage[];
};

function readImageFiles(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
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

function fileHash(buffer: Buffer): string {
  return crypto.createHash("md5").update(buffer).digest("hex");
}

function readFile(filePath: string): Buffer | null {
  try {
    return fs.readFileSync(filePath);
  } catch {
    return null;
  }
}

/** Суреттің нақты өлшемдері (EXIF бағдары ескеріледі). Оқу мүмкін болмаса — null. */
function dimensions(buffer: Buffer): { width: number; height: number } | null {
  try {
    const { width, height, orientation } = imageSize(buffer);
    if (!width || !height) return null;
    // EXIF 5–8: телефон фотосы 90° бұрылған — ені мен биіктігін ауыстырамыз
    return orientation && orientation >= 5 ? { width: height, height: width } : { width, height };
  } catch {
    return null;
  }
}

type Found = { src: string; filePath: string };

function findByBaseName(name: string): Found | null {
  const candidates = [
    { dir: IMAGES_DIR, prefix: "/images/" },
    { dir: PUBLIC_DIR, prefix: "/" },
  ];
  for (const { dir, prefix } of candidates) {
    const file = readImageFiles(dir).find((f) => baseName(f) === name);
    if (file) return { src: prefix + encodeURIComponent(file), filePath: path.join(dir, file) };
  }
  return null;
}

export function getSiteImages(): SiteImages {
  const main = findByBaseName(MAIN_BASENAME);
  const about = findByBaseName(ABOUT_BASENAME) ?? findByBaseName(ABOUT_FALLBACK_BASENAME);

  // Негізгі және «туралы» суреттері галереяда қайталанбайды —
  // атауы басқа болса да, мазмұны бірдей файлдар да алынып тасталады.
  const seen = new Set<string>();
  for (const found of [main, about]) {
    const buffer = found && readFile(found.filePath);
    if (buffer) seen.add(fileHash(buffer));
  }

  const reserved = new Set([MAIN_BASENAME, ABOUT_BASENAME, ABOUT_FALLBACK_BASENAME]);
  const gallery: GalleryImage[] = [];
  for (const file of readImageFiles(IMAGES_DIR)) {
    if (reserved.has(baseName(file))) continue;
    const buffer = readFile(path.join(IMAGES_DIR, file));
    if (!buffer) continue;
    const hash = fileHash(buffer);
    if (seen.has(hash)) continue;
    const size = dimensions(buffer);
    if (!size) continue; // бүлінген файл галереяны бұзбауы үшін өткізіледі
    seen.add(hash);
    gallery.push({ src: `/images/${encodeURIComponent(file)}`, ...size });
  }

  return {
    main: main?.src ?? null,
    about: about?.src ?? null,
    gallery,
  };
}
