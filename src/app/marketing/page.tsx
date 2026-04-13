import ManagementEngine from "@/components/marketing/services/ManagementEngine";
import MarketingCoreExpertise from "@/components/marketing/services/MarketingCoreExpertise";
import MarketingFinalCTA from "@/components/marketing/services/MarketingFinalCTA";
import MarketingIntro from "@/components/marketing/services/MarketingIntro";
import PricingSection from "@/components/marketing/services/PricingSection";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero Section - Animates immediately on load */}

          <MarketingIntro />

      {/* 2. Core Expertise - Animates when scrolled into view */}

          <MarketingCoreExpertise />

      
      {/* 3. Pricing - Animates when scrolled into view */}

          <PricingSection />

      
      {/* 4. Management Engine - Animates when scrolled into view */}

          <ManagementEngine />


      {/* 5. Final CTA - Animates when reaching the bottom */}

          <MarketingFinalCTA />
    </main>
  );
}