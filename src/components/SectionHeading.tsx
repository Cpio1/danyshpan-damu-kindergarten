import type { ReactNode } from "react";
import { Squiggle } from "./decor/Decor";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "center" | "left";
};

export default function SectionHeading({ id, eyebrow, title, subtitle, icon, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-2 inline-flex items-center gap-2 text-sm font-bold text-leaf ${centered ? "justify-center" : ""}`}>
          {icon}
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-[1.75rem] leading-tight font-extrabold text-leaf-dark sm:text-[2.1rem]">
        {title}
      </h2>
      <Squiggle className={`mt-3 h-3 w-24 ${centered ? "mx-auto" : ""}`} />
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
