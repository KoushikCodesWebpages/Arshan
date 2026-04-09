import Hero from "@/components/home/Hero";
import { theme } from "@/lib/theme";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CoreServicePillars from "@/components/home/CoreServicePillar";
import CTASection from "@/components/home/CTASection";
import ExpertiseFAQ from "@/components/home/ExpertiseFAQ";
import MarketImpact from "@/components/home/MarketImpact";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Hero & Initial Content - Should animate almost immediately */}

          <Hero />

          <WhyChooseUs />


      {/* 2. Service Pillars - Triggers as you scroll down */}

          <CoreServicePillars />


      {/* 3. Call to Action - Keeps the momentum going */}

          <CTASection />


      {/* 4. FAQ Section - Often further down, needs its own trigger */}

          <ExpertiseFAQ />


      {/* 5. Market Impact - The final reveal at the bottom */}

 
          <MarketImpact />

    </main>
  );
}