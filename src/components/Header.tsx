"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE, type SectionId } from "@/config/site";
import { Sun } from "./decor/Decor";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Белсенді бөлімді анықтау
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Мобильді мәзір: Escape арқылы жабу және экран өлшемі өзгергенде жабу
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const linkClass = (id: SectionId) =>
    `relative rounded-full px-3 py-2 text-[0.95rem] font-bold transition-colors duration-200 ${
      active === id ? "bg-gold-light/60 text-leaf-dark" : "text-leaf hover:bg-leaf-light/25 hover:text-leaf-dark"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[box-shadow,background-color,border-color] duration-300 ${
        scrolled
          ? "border-gold/40 bg-cream/95 shadow-[0_6px_24px_-12px_rgba(53,91,50,0.35)] backdrop-blur"
          : "border-gold/20 bg-cream"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-lg font-extrabold whitespace-nowrap text-leaf-dark sm:text-xl"
        >
          <Sun className="h-8 w-8 shrink-0" />
          {SITE.name}
        </a>

        <nav aria-label="Негізгі мәзір" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass(item.id)} aria-current={active === item.id ? "true" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-white text-leaf-dark transition hover:bg-gold-light/50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        inert={!open}
      >
        <nav aria-label="Мобильді мәзір" className="min-h-0">
          <ul className="mx-4 mb-4 flex flex-col gap-1 rounded-[28px] border border-gold/30 bg-white/90 p-3 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(item.id)} px-4 py-3`}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
