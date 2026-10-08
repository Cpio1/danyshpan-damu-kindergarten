import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { SITE } from "@/config/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — балабақша`,
  description: SITE.description,
  keywords: ["балабақша", "Данышпан Даму бала", "қазақ тілді балабақша", "балалар", "мектепке дейінгі тәрбие"],
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    siteName: SITE.name,
    title: `${SITE.name} — балабақша`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk" className={nunito.variable}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
