/**
 * Сайттың барлық негізгі мәліметтері осы жерде.
 * Байланыс деректерін, сілтемелерді және картаны осы файлдан өзгертіңіз.
 */

/**
 * Google Drive папкасына сілтеме.
 */
export const DOCUMENTS_URL = "https://drive.google.com/drive/folders/1bgcj1QKHdnR2R7aoCGXXdIi6knCSCfMx";

export const SITE = {
  name: "Данышпан Даму бала",
  tagline: "Бақытты балалық шақ мекені",
  description:
    "Данышпан Даму бала — 1,5 жастан 6 жасқа дейінгі балаларға арналған балабақша. Тәрбие және оқыту тілі — қазақ тілі.",

  phone: {
    display: "+7 701 711 69 27",
    href: "tel:+77017116927",
  },

  instagram: {
    handle: "@danyshpan_sadik",
    url: "https://www.instagram.com/danyshpan_sadik/",
  },

  address: "Жароков көшесі, 137/1",
  workingHours: "08:00–18:30",
  groups: "2 топ",
  ageRange: "1,5–6 жас",
  language: "Қазақ тілі",
  meals: "Күніне 5 рет",
} as const;

/**
 * Карта баптаулары.
 *
 * Қала көрсетілмегендіктен, карта мекенжай бойынша іздеу сұрауымен ашылады.
 * Нысанды нақтылау үшін:
 *  - `city` өрісіне қаланы жазыңыз (мысалы, "Алматы"), немесе
 *  - `coordinates` өрісіне нақты координаттарды енгізіңіз: { lat: 43.2, lng: 76.9 }.
 * Координаттар берілсе, олар іздеу сұрауынан басым болады.
 */
export const MAP_CONFIG: {
  city: string;
  coordinates: { lat: number; lng: number } | null;
  zoom: number;
} = {
  city: "",
  coordinates: null,
  zoom: 16,
};

export const NAV_ITEMS = [
  { id: "home", label: "Басты бет" },
  { id: "about", label: "Балабақша туралы" },
  { id: "info", label: "Ақпарат" },
  { id: "gallery", label: "Галерея" },
  { id: "documents", label: "Құжаттар" },
  { id: "contacts", label: "Байланыс" },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]["id"];
