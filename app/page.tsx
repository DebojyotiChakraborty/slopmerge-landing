import OverlayProvider from "@/components/overlays/OverlayProvider";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import CharacterMarquee from "@/components/sections/CharacterMarquee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <OverlayProvider>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Stats />
        <CharacterMarquee />
        <FinalCTA />
      </main>
      <Footer />
    </OverlayProvider>
  );
}
