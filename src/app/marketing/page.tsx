"use client";

import { useEffect, useRef, use } from "react";
import ManagementEngine from "@/components/marketing/services/ManagementEngine";
import MarketingCoreExpertise from "@/components/marketing/services/MarketingCoreExpertise";
import MarketingFinalCTA from "@/components/marketing/services/MarketingFinalCTA";
import MarketingIntro from "@/components/marketing/services/MarketingIntro";
import PricingSection from "@/components/marketing/services/PricingSection";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default function MarketingPage({ params }: PageProps) {
  // 1. Unwrap the params promise using React's 'use' hook
  const resolvedParams = use(params);
  const expertiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 2. Check if the URL looks like /marketing/expertise
    const isExpertiseRoute = resolvedParams.slug?.includes("expertise");

    if (isExpertiseRoute) {
      // Small timeout ensures the DOM has fully rendered before scrolling
      const timer = setTimeout(() => {
        if (expertiseRef.current) {
          expertiseRef.current.scrollIntoView({ 
            behavior: "smooth",
            block: "start" 
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [resolvedParams.slug]);

  return (
    <main className="flex flex-col w-full">
      <MarketingIntro />

      {/* 3. Attach the ref so the code knows where to scroll */}
      <div ref={expertiseRef} id="expertise" className="scroll-mt-10">
        <MarketingCoreExpertise />
      </div>

      <PricingSection />
      <ManagementEngine />
      <MarketingFinalCTA />
    </main>
  );
}