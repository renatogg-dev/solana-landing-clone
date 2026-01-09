import { CommunitySection } from "@/components/CommunitySection";
import { DeveloperResources } from "@/components/DeveloperResources";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative flex flex-col pt-28">
        <Hero />
        <LogoTicker />
        <StatsSection />
        <FeatureGrid />
        <DeveloperResources />
        <CommunitySection />
        <Footer />
      </main>
    </div>
  );
}
