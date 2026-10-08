import { Apple, Blocks, BookOpen, Clock, Sun as SunIcon, type LucideIcon } from "lucide-react";
import { SITE } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Blocks as BlocksDecor, Pencil, Sparkle } from "./decor/Decor";

type InfoItem = {
  title: string;
  value: string;
  icon: LucideIcon;
  bg: string;
  iconBg: string;
  shape: string;
};

const ITEMS: InfoItem[] = [
  {
    title: "Жұмыс уақыты",
    value: SITE.workingHours,
    icon: Clock,
    bg: "bg-leaf-light/35",
    iconBg: "bg-leaf text-cream",
    shape: "rounded-[56px_24px_56px_24px]",
  },
  {
    title: "Топ саны",
    value: SITE.groups,
    icon: Blocks,
    bg: "bg-mist",
    iconBg: "bg-gold text-leaf-dark",
    shape: "rounded-[24px_56px_24px_56px]",
  },
  {
    title: "Балалардың жасы",
    value: SITE.ageRange,
    icon: SunIcon,
    bg: "bg-gold-light/50",
    iconBg: "bg-white text-gold",
    shape: "rounded-[48px_48px_20px_48px]",
  },
  {
    title: "Тәрбие және оқыту тілі",
    value: SITE.language,
    icon: BookOpen,
    bg: "bg-mist",
    iconBg: "bg-leaf-dark text-gold-light",
    shape: "rounded-[24px_56px_24px_56px]",
  },
  {
    title: "Тамақтану",
    value: SITE.meals,
    icon: Apple,
    bg: "bg-leaf-light/35",
    iconBg: "bg-gold-light text-leaf-dark",
    shape: "rounded-[56px_24px_56px_24px]",
  },
];

export default function Info() {
  return (
    <section id="info" aria-labelledby="info-title" className="relative overflow-hidden bg-cream py-16 sm:py-20">
      <Pencil className="absolute top-12 right-[8%] hidden h-5 w-20 -rotate-12 md:block" />
      <BlocksDecor className="absolute bottom-10 left-[5%] hidden h-14 w-14 animate-float-slow md:block" />

      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="info-title"
            eyebrow="Ақпарат"
            icon={<Sparkle className="h-3.5 w-3.5" />}
            title="Балабақша туралы ақпарат"
            subtitle="Біздің балабақша туралы негізгі мәліметтер"
          />
        </Reveal>

        <ul className="flex flex-wrap justify-center gap-4">
          {ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 80}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
            >
              <div
                className={`group relative flex h-full items-center gap-4 border border-gold/25 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-20px_rgba(53,91,50,0.5)] ${item.bg} ${item.shape}`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[40%_60%_55%_45%/50%_45%_55%_50%] shadow-sm transition duration-300 group-hover:rotate-6 ${item.iconBg}`}
                >
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink/65">{item.title}</p>
                  <p className="mt-0.5 text-xl font-extrabold text-leaf-dark">{item.value}</p>
                </div>
                <Sparkle className="absolute top-3 right-5 h-3 w-3 opacity-70" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
