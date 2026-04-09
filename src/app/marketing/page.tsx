import ManagementEngine from "@/components/marketing/ManagementEngine";
import MarketingCoreExpertise from "@/components/marketing/MarketingCoreExpertise";
import MarketingFinalCTA from "@/components/marketing/MarketingFinalCTA";
import MarketingIntro from "@/components/marketing/MarketingIntro";
import PricingSection from "@/components/marketing/PricingSection";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero Section - Animates immediately on load */}
      <FadeInStagger>
        <FadeItem>
          <MarketingIntro />
        </FadeItem>
      </FadeInStagger>
      
      {/* 2. Core Expertise - Animates when scrolled into view */}
      <FadeInStagger>
        <FadeItem>
          <MarketingCoreExpertise />
        </FadeItem>
      </FadeInStagger>
      
      {/* 3. Pricing - Animates when scrolled into view */}
      <FadeInStagger>
        <FadeItem>
          <PricingSection />
        </FadeItem>
      </FadeInStagger>
      
      {/* 4. Management Engine - Animates when scrolled into view */}
      <FadeInStagger>
        <FadeItem>
          <ManagementEngine />
        </FadeItem>
      </FadeInStagger>

      {/* 5. Final CTA - Animates when reaching the bottom */}
      <FadeInStagger>
        <FadeItem>
          <MarketingFinalCTA />
        </FadeItem>
      </FadeInStagger>
    </main>
  );
}