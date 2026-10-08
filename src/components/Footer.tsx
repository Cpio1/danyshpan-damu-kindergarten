import { MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/config/site";
import CurrentYear from "./CurrentYear";
import { InstagramIcon, Leaf, Star, Sun, Wave } from "./decor/Decor";

export default function Footer() {
  return (
    <footer className="relative bg-leaf-dark text-cream">
      <Wave fill="#355B32" className="absolute -top-10 left-0 sm:-top-14" />
      <div className="relative mx-auto grid max-w-[1120px] gap-10 px-4 pt-10 pb-8 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-xl font-extrabold">
            <Sun className="h-8 w-8" />
            {SITE.name}
          </p>
          <p className="mt-2 text-gold-light">{SITE.tagline}</p>
          <div className="mt-4 flex gap-2" aria-hidden>
            <Star className="h-4 w-4" />
            <Leaf className="h-5 w-5" />
            <Star className="h-3 w-3" />
          </div>
        </div>

        <nav aria-label="Төменгі мәзір">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[0.95rem] md:grid-cols-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-cream/80 transition hover:text-gold-light">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col gap-3 text-[0.95rem]">
          <li>
            <a href={SITE.phone.href} className="inline-flex items-center gap-2 transition hover:text-gold-light">
              <Phone className="h-4 w-4 text-gold" aria-hidden />
              <span>Телефон: {SITE.phone.display}</span>
            </a>
          </li>
          <li>
            <a
              href={SITE.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-gold-light"
            >
              <InstagramIcon className="h-4 w-4 text-gold" />
              <span>Instagram: {SITE.instagram.handle}</span>
            </a>
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            <span>Мекенжай: {SITE.address}</span>
          </li>
        </ul>
      </div>
      <div className="border-t border-gold/25">
        <p className="mx-auto max-w-[1120px] px-4 py-4 text-center text-sm text-cream/70 sm:px-6">
          © <CurrentYear /> {SITE.name}
        </p>
      </div>
    </footer>
  );
}
