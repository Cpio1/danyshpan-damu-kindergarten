import { Phone, ArrowDown } from "lucide-react";
import { SITE } from "@/config/site";
import ShapedPhoto from "./ShapedPhoto";
import { Cloud, Leaf, Sparkle, Star, Sun } from "./decor/Decor";

export default function Hero({ image }: { image: string | null }) {
  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden bg-cream pt-[68px]">
      {/* Фондағы жұмсақ дақтар */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold-light/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-leaf-light/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-20">
        <div className="relative text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-4 py-1.5 text-sm font-bold text-leaf">
            <Sparkle className="h-3.5 w-3.5" />
            Балабақша · 1,5–6 жас
          </p>

          <h1 id="home-title" className="text-[2.4rem] leading-[1.1] font-extrabold text-leaf-dark sm:text-5xl">
            Данышпан <span className="relative inline-block text-leaf">
              Даму бала
              <svg aria-hidden viewBox="0 0 200 14" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M3 9c40-8 100-9 194-3" stroke="#D4AF37" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-xl leading-snug font-bold text-ink sm:text-2xl">
            Балаңыздың жарқын болашағына бастар алғашқы қадам!
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg lg:mx-0">
            Балаңыздың бақытты балалық шағы үшін мейірім мен қамқорлыққа толы жайлы орта.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={SITE.phone.href}
              aria-label={`Бізбен байланысу: ${SITE.phone.display}`}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-7 py-3 font-extrabold text-leaf-dark shadow-[0_10px_24px_-10px_rgba(212,175,55,0.9)] transition hover:-translate-y-0.5 hover:bg-[#c9a42c] hover:shadow-[0_14px_28px_-10px_rgba(212,175,55,0.9)]"
            >
              <Phone className="h-5 w-5 transition group-hover:rotate-12" aria-hidden />
              Бізбен байланысу
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-leaf px-7 py-3 font-extrabold text-leaf transition hover:-translate-y-0.5 hover:bg-leaf hover:text-cream"
            >
              Балабақша туралы
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* Фото композициясы */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px]">
          <div aria-hidden className="absolute -top-3 -left-3 h-24 w-24 rounded-full bg-gold-light/60" />
          <div aria-hidden className="absolute -right-2 bottom-8 h-16 w-16 rounded-full border-4 border-dashed border-leaf-light" />
          <div aria-hidden className="shape-blob-2 absolute inset-0 translate-x-3 translate-y-4 bg-leaf-light/40" />

          <div className="shape-hero relative border-[6px] border-gold-light p-2 shadow-[0_24px_48px_-24px_rgba(53,91,50,0.55)] ring-2 ring-gold/60 ring-offset-4 ring-offset-cream">
            <ShapedPhoto
              src={image}
              alt={`${SITE.name} балабақшасы`}
              shapeClass="shape-hero"
              className="aspect-[4/5] w-full"
              imageClassName="object-[50%_45%]"
              sizes="(min-width: 640px) 400px, 340px"
              priority
              placeholderLabel="Балабақшаның фотосы жақында қосылады"
            />
          </div>

          <Sun className="absolute -top-6 right-4 h-16 w-16 animate-spin-slow sm:h-20 sm:w-20" />
          <Cloud className="absolute top-10 -left-8 h-10 w-20 animate-float sm:-left-12" />
          <Cloud className="absolute -right-6 bottom-24 h-8 w-14 animate-float-slow" />
          <Leaf className="absolute -bottom-3 left-6 h-10 w-10 animate-sway" />
          <Leaf className="absolute right-10 -bottom-5 h-7 w-7 rotate-90 animate-sway" />
          <Star className="absolute top-1/3 -right-4 h-5 w-5 animate-twinkle" />
          <Star className="absolute bottom-1/4 -left-3 h-4 w-4 animate-twinkle [animation-delay:1s]" />
          <Sparkle className="absolute top-2 left-1/3 h-4 w-4 animate-twinkle [animation-delay:.5s]" />
        </div>
      </div>
    </section>
  );
}
