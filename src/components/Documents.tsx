import { ExternalLink, FileText } from "lucide-react";
import { DOCUMENTS_URL } from "@/config/site";
import Reveal from "./Reveal";
import { Leaf, Pencil, Sparkle, Star } from "./decor/Decor";

export default function Documents() {
  return (
    <section id="documents" aria-labelledby="documents-title" className="relative overflow-hidden bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <Reveal className="relative mx-auto max-w-3xl">
          <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-3 rounded-[64px_32px_64px_32px] bg-gold-light/50" />
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[64px_32px_64px_32px] border-2 border-gold/40 bg-leaf-light/25 px-6 py-10 text-center sm:flex-row sm:px-12 sm:text-left">
            <div aria-hidden className="absolute -top-10 -right-10 h-32 w-32 rounded-full border-[10px] border-gold-light/70" />
            <Star className="absolute top-6 left-8 h-4 w-4 animate-twinkle" />
            <Sparkle className="absolute right-12 bottom-6 h-4 w-4 animate-twinkle [animation-delay:1.2s]" />
            <Leaf className="absolute bottom-4 left-6 h-7 w-7 animate-sway" />

            <div className="relative shrink-0">
              <span className="shape-blob flex h-28 w-28 items-center justify-center bg-cream text-leaf shadow-[0_14px_28px_-16px_rgba(53,91,50,0.6)]">
                <FileText className="h-12 w-12" strokeWidth={1.6} aria-hidden />
              </span>
              <Pencil className="absolute -right-6 -bottom-1 h-4 w-16 -rotate-[30deg]" />
            </div>

            <div className="relative">
              <h2 id="documents-title" className="text-[1.75rem] font-extrabold text-leaf-dark sm:text-[2.1rem]">
                Құжаттар
              </h2>
              <p className="mt-2 text-base leading-relaxed text-ink/75 sm:text-lg">
                Балабақша құжаттарымен танысу үшін төмендегі батырманы басыңыз.
              </p>
              <a
                href={DOCUMENTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-extrabold text-leaf-dark shadow-[0_10px_24px_-10px_rgba(212,175,55,0.9)] transition hover:-translate-y-0.5 hover:bg-[#c9a42c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-dark sm:w-auto"
              >
                <FileText className="h-5 w-5 shrink-0" aria-hidden />
                Құжаттарды қарау
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                <span className="sr-only">(жаңа бетте ашылады)</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
