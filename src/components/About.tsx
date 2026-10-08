import { HeartHandshake, House, Sprout } from "lucide-react";
import { SITE } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ShapedPhoto from "./ShapedPhoto";
import { Balloon, Flower, Rainbow, Star } from "./decor/Decor";

const VALUES = [
  { title: "Мейірім мен қамқорлық", icon: HeartHandshake, bg: "bg-gold-light/55", shape: "rounded-[28px_48px_28px_48px]" },
  { title: "Жайлы орта", icon: House, bg: "bg-leaf-light/40", shape: "rounded-[48px_28px_48px_28px]" },
  { title: "Баланың жан-жақты дамуы", icon: Sprout, bg: "bg-cream", shape: "rounded-[28px_48px_28px_48px]" },
];

export default function About({ image }: { image: string | null }) {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-mist py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative order-2 mx-auto w-full max-w-[360px] lg:order-1">
          <div aria-hidden className="shape-arch absolute inset-0 -translate-x-4 translate-y-4 border-2 border-dashed border-gold/70" />
          <div className="shape-arch relative bg-white p-2.5 shadow-[0_20px_40px_-24px_rgba(53,91,50,0.5)]">
            <ShapedPhoto
              src={image}
              alt={`${SITE.name} балабақшасындағы орта`}
              shapeClass="shape-arch"
              className="aspect-[3/4] w-full"
              sizes="(min-width: 1024px) 360px, 80vw"
              placeholderLabel="Фото жақында қосылады"
            />
          </div>
          <Rainbow className="absolute -top-4 -right-6 h-12 w-20" />
          <Balloon className="absolute bottom-16 -left-8 h-16 w-8 animate-float" />
          <Flower className="absolute -right-3 bottom-6 h-10 w-10 animate-sway" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow="Балабақша туралы"
              icon={<Star className="h-4 w-4" />}
              title="Біздің балабақша туралы"
              align="left"
            />
            <p className="-mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
              <strong className="font-extrabold text-leaf-dark">{SITE.name}</strong> — балалардың қуанышы мен
              жан-жақты дамуына ерекше көңіл бөлетін балабақша. Біз әр баланың өзін еркін сезінуіне, жаңа нәрселерді
              қызығушылықпен үйренуіне және достарымен бірге бақытты балалық шақ өткізуіне мән береміз.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3" aria-label="Біздің құндылықтар">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100}>
                <div className={`flex h-full items-center gap-3 border border-gold/25 px-4 py-4 sm:flex-col sm:text-center ${v.bg} ${v.shape}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-leaf shadow-sm">
                    <v.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-[0.95rem] leading-snug font-bold text-leaf-dark">{v.title}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
