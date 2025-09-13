// src/app/page.js

import HeroSection from "@/components/HeroSection";
import CosmicJourney from "@/components/CosmicJourney";

export default function Home() {
  return (
    <main className="bg-black">
      {/* The new Hero Section with the interactive 3D model */}
      <HeroSection />

      {/* The original scroll-based animation */}
      <section id="cosmic-journey">
        <CosmicJourney />
      </section>
    </main>
  );
}
