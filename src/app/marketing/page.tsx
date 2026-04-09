import ManagementEngine from "@/components/marketing/ManagementEngine";
import MarketingCoreExpertise from "@/components/marketing/MarketingCoreExpertise";
import MarketingFinalCTA from "@/components/marketing/MarketingFinalCTA";
import MarketingIntro from "@/components/marketing/MarketingIntro";
import PricingSection from "@/components/marketing/PricingSection";
import { theme } from "@/lib/theme";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">

      <MarketingIntro />
      <MarketingCoreExpertise />
      <PricingSection />
      <ManagementEngine />
      <MarketingFinalCTA />
    </main>

  );
}