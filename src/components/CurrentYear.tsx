"use client";

/** Ағымдағы жыл — бет статикалық жиналса да, браузерде әрдайым жаңартылады. */
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
