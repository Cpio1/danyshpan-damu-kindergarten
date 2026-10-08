"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, ChevronsDown, ChevronsUp, X } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { GalleryImage } from "@/lib/images";
import { Cloud, Flower, Leaf, Sparkle, Star } from "./decor/Decor";

const INITIAL_COUNT = 6;

/**
 * Фотолардың кезектесетін пішіндері. Әр фото өзінің түпнұсқа пропорциясын сақтайды:
 * қатардағы фотолар бірдей биіктікте, ені — суреттің ені/биіктігі қатынасына сай.
 */
const TILE_SHAPES = [
  "shape-arch",
  "shape-oval",
  "shape-wave",
  "shape-leaf",
  "shape-pebble",
  "shape-cloud",
  "shape-leaf-alt",
];

const altFor = (i: number) => `Балабақша өмірінен көрініс ${i + 1}`;

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const hasMore = images.length > INITIAL_COUNT;
  const visible = expanded ? images : images.slice(0, INITIAL_COUNT);

  const collapse = () => {
    setExpanded(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} id="gallery" aria-labelledby="gallery-title" className="relative overflow-hidden bg-mist py-16 sm:py-20">
      <Cloud className="absolute top-14 left-[6%] hidden h-10 w-20 animate-float md:block" />
      <Flower className="absolute top-20 right-[7%] hidden h-10 w-10 animate-sway md:block" />

      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow="Галерея"
            icon={<Camera className="h-4 w-4" aria-hidden />}
            title="Балабақша өмірінен көріністер"
            subtitle="Балалардың қызықты сәттері мен балабақшамыздың жайлы ортасы."
          />
        </Reveal>

        {images.length === 0 ? (
          <EmptyGallery />
        ) : (
          <>
            <ul className="flex flex-wrap justify-center gap-3 [--row-h:120px] sm:gap-5 sm:[--row-h:160px] lg:[--row-h:200px]">
              {visible.map((img, i) => {
                const shape = TILE_SHAPES[i % TILE_SHAPES.length];
                const ratio = img.width / img.height;
                const isNew = i >= INITIAL_COUNT;
                return (
                  <li
                    key={img.src}
                    className={isNew ? "animate-gallery-in" : undefined}
                    style={{
                      flex: `${ratio} 1 calc(var(--row-h) * ${ratio})`,
                      // Толық емес қатардағы фотолар тым үлкейіп кетпеуі үшін
                      maxWidth: `calc(var(--row-h) * ${ratio} * 1.35)`,
                      ...(isNew ? { animationDelay: `${(i - INITIAL_COUNT) * 70}ms` } : {}),
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`${altFor(i)} — үлкейтіп көру`}
                      className={`group relative block w-full overflow-hidden bg-white p-1.5 shadow-[0_14px_30px_-18px_rgba(53,91,50,0.55)] ring-1 ring-gold/30 transition duration-300 hover:shadow-[0_20px_36px_-18px_rgba(53,91,50,0.6)] hover:ring-gold/70 ${shape}`}
                    >
                      <span
                        className={`relative block w-full overflow-hidden bg-leaf-light/20 ${shape}`}
                        style={{ aspectRatio: `${img.width} / ${img.height}` }}
                      >
                        <Image
                          src={img.src}
                          alt={altFor(i)}
                          fill
                          sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 90vw"
                          className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                        />
                      </span>
                      {i % 3 === 0 && <Star className="absolute top-4 right-6 h-4 w-4 opacity-0 transition group-hover:opacity-100" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            {hasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => (expanded ? collapse() : setExpanded(true))}
                  aria-expanded={expanded}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-gold bg-white px-7 py-3 font-extrabold text-leaf-dark transition hover:-translate-y-0.5 hover:bg-gold-light/60"
                >
                  {expanded ? (
                    <>
                      Жасыру <ChevronsUp className="h-4 w-4" aria-hidden />
                    </>
                  ) : (
                    <>
                      Тағы көрсету <ChevronsDown className="h-4 w-4" aria-hidden />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox images={images.map((img) => img.src)} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}

function EmptyGallery() {
  return (
    <div className="shape-pebble relative mx-auto flex max-w-xl flex-col items-center gap-3 border-2 border-dashed border-gold/50 bg-cream px-8 py-12 text-center">
      <Leaf className="absolute top-6 left-8 h-8 w-8 animate-sway" />
      <Sparkle className="absolute right-10 bottom-8 h-5 w-5 animate-twinkle" />
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-light/40 text-leaf">
        <Camera className="h-7 w-7" aria-hidden />
      </span>
      <p className="text-lg font-extrabold text-leaf-dark">Фотолар жақында қосылады</p>
      <p className="max-w-sm text-ink/70">Балабақшамыздың қызықты сәттерін көп ұзамай осы жерден көре аласыз.</p>
    </div>
  );
}

type LightboxProps = {
  images: string[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
};

function Lightbox({ images, index, onChange, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;

  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange]);
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const navBtn =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-leaf-dark shadow-lg transition hover:bg-gold-light";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={altFor(index)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-leaf-dark/85 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Жабу"
        className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-leaf-dark shadow-lg transition hover:bg-gold-light"
      >
        <X className="h-6 w-6" aria-hidden />
      </button>

      <div className="relative h-full max-h-[82vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <Image
          key={images[index]}
          src={images[index]}
          alt={altFor(index)}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="rounded-[28px] object-contain"
        />
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Алдыңғы фото"
            className={`${navBtn} left-3 sm:left-6`}
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Келесі фото"
            className={`${navBtn} right-3 sm:right-6`}
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cream/90 px-4 py-1 text-sm font-bold text-leaf-dark">
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>
  );
}
