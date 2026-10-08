import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { MAP_CONFIG, SITE } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Balloon, Cloud, InstagramIcon, Sparkle } from "./decor/Decor";

function getMapQuery() {
  if (MAP_CONFIG.coordinates) return `${MAP_CONFIG.coordinates.lat},${MAP_CONFIG.coordinates.lng}`;
  return MAP_CONFIG.city ? `${MAP_CONFIG.city}, ${SITE.address}` : SITE.address;
}

export default function Contacts() {
  const query = encodeURIComponent(getMapQuery());
  const embedUrl = `https://maps.google.com/maps?q=${query}&z=${MAP_CONFIG.zoom}&output=embed`;
  const googleLink = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const twoGisLink = `https://2gis.kz/search/${query}`;

  const rows = [
    { label: "Мекенжай", value: SITE.address, icon: MapPin },
    { label: "Телефон", value: SITE.phone.display, icon: Phone, href: SITE.phone.href },
    { label: "Instagram", value: SITE.instagram.handle, icon: InstagramIcon, href: SITE.instagram.url, external: true },
    { label: "Жұмыс уақыты", value: SITE.workingHours, icon: Clock },
  ];

  return (
    <section id="contacts" aria-labelledby="contacts-title" className="relative overflow-hidden bg-mist pt-16 pb-24 sm:pt-20 sm:pb-28">
      <Cloud className="absolute top-16 right-[6%] hidden h-10 w-20 animate-float-slow md:block" />
      <Balloon className="absolute bottom-20 left-[3%] hidden h-16 w-8 animate-float xl:block" />

      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="contacts-title"
            eyebrow="Байланыс"
            icon={<Sparkle className="h-3.5 w-3.5" />}
            title="Бізбен байланысыңыз"
            subtitle="Сұрақтарыңыз болса, бізге хабарласыңыз!"
          />
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative">
            <div className="flex h-full flex-col rounded-[48px_24px_48px_24px] border border-gold/30 bg-cream p-6 shadow-[0_16px_36px_-24px_rgba(53,91,50,0.5)] sm:p-8">
              <ul className="flex flex-col gap-4">
                {rows.map((row) => {
                  const Icon = row.icon;
                  const content = (
                    <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-leaf-light/40 text-leaf transition group-hover:bg-gold-light">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-ink/60">{row.label}:</span>
                        <span className="block text-[1.05rem] font-extrabold break-words text-leaf-dark">{row.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group -m-2 flex items-center gap-4 rounded-3xl p-2 transition hover:bg-gold-light/25"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:flex-col lg:pt-8 xl:flex-row">
                <a
                  href={SITE.phone.href}
                  className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full whitespace-nowrap bg-gold px-6 py-3 font-extrabold text-leaf-dark shadow-[0_10px_24px_-10px_rgba(212,175,55,0.9)] transition hover:-translate-y-0.5 hover:bg-[#c9a42c]"
                >
                  <Phone className="h-5 w-5 transition group-hover:rotate-12" aria-hidden />
                  Қоңырау шалу
                </a>
                <a
                  href={SITE.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full whitespace-nowrap border-2 border-leaf px-6 py-3 font-extrabold text-leaf transition hover:-translate-y-0.5 hover:bg-leaf hover:text-cream"
                >
                  <InstagramIcon className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[24px_56px_24px_56px] border-4 border-white bg-white shadow-[0_16px_36px_-24px_rgba(53,91,50,0.5)] ring-2 ring-gold/40">
              <iframe
                title={`Карта: ${SITE.address}`}
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-end">
              <a
                href={googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-leaf transition hover:bg-gold-light/60"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Google Maps-та ашу
              </a>
              <a
                href={twoGisLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-leaf transition hover:bg-gold-light/60"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                2GIS-та ашу
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
