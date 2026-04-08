import Hero from "@/components/home/Hero";
import { theme } from "@/lib/theme";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CoreServicePillars from "@/components/home/CoreServicePillar";
import CTASection from "@/components/home/CTASection";
import ExpertiseFAQ from "@/components/home/ExpertiseFAQ";
import MarketImpact from "@/components/home/MarketImpact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Block 1: The Hero (White Background Block) */}
      <Hero />

      <WhyChooseUs />

      <CoreServicePillars />

      <CTASection />

      <ExpertiseFAQ />

      <MarketImpact />
    </main>
  );
}