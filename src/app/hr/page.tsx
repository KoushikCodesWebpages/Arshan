"use client";

import React, { useEffect } from "react";
import { theme } from "@/lib/theme";
import StructuralHero from "@/components/hr/structure/StructuralHero";
import ClusterDetails from "@/components/hr/structure/ClusterDetails";
import PricingGrid from "@/components/hr/structure/PricingGrid";
import StrategicNotes from "@/components/hr/structure/StrategicNotes";
import GermanyOperations from "@/components/hr/structure/GermanOperations";
import GermanyValueBlocks from "@/components/hr/structure/GermanyValueBlocks";
import GermanyCTA from "@/components/hr/structure/GermanyCTA";

export default function HRPage() {
  
  useEffect(() => {
    // This handles the "pointing" when coming from a different page (e.g., the Global Hero)
    if (window.location.hash === "#hr-pricing") {
      const timer = setTimeout(() => {
        const element = document.getElementById("hr-pricing");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Buffer to allow PricingGrid to mount
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="flex flex-col w-full bg-white">
      {/* Pass a local scroll handler to the Hero so the button works 
          instantly if the user is already on this page.
      */}
      <StructuralHero />
      
      <ClusterDetails />

      {/* The ID is placed here. PricingGrid internal section also has it, 
          but wrapping it ensures the anchor hits the top of the component.
      */}
      <div id="hr-pricing" className="scroll-mt-20">
        <PricingGrid />
      </div>

      <StrategicNotes />
      <GermanyOperations />
      <GermanyValueBlocks />
      <GermanyCTA />
    </main>
  );
}