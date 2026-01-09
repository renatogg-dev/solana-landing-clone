import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BuildHero } from "@/components/build/BuildHero";
import { GetStartedSection } from "@/components/build/GetStartedSection";
import { DigDeeperSection } from "@/components/build/DigDeeperSection";
import { GoToSourceSection } from "@/components/build/GoToSourceSection";
import { ChangelogSection } from "@/components/build/ChangelogSection";
import { NewsletterSection } from "@/components/build/NewsletterSection";

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative flex flex-col pt-28">
        <BuildHero />
        <GetStartedSection />
        <DigDeeperSection />
        <GoToSourceSection />
        <ChangelogSection />
        <NewsletterSection />
        <Footer />
      </main>
    </div>
  );
}
