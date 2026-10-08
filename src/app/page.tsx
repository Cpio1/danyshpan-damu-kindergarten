import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Info from "@/components/Info";
import Gallery from "@/components/Gallery";
import Documents from "@/components/Documents";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { Wave } from "@/components/decor/Decor";
import { getSiteImages } from "@/lib/images";

const CREAM = "#FFFDF5";
const MIST = "#F8F9F0";

/** Екі секция арасындағы толқынды өту */
function Divider({ from, to, flip }: { from: string; to: string; flip?: boolean }) {
  return (
    <div style={{ backgroundColor: from }} className="-mb-px">
      <Wave fill={to} flip={flip} />
    </div>
  );
}

export default function Home() {
  const images = getSiteImages();

  return (
    <>
      <Header />
      <main>
        <Hero image={images.main} />
        <Divider from={CREAM} to={MIST} />
        <About image={images.about} />
        <Divider from={MIST} to={CREAM} flip />
        <Info />
        <Divider from={CREAM} to={MIST} />
        <Gallery images={images.gallery} />
        <Divider from={MIST} to={CREAM} flip />
        <Documents />
        <Divider from={CREAM} to={MIST} />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
