"use client";

import React, { useState, useEffect } from "react";
import OnboardingHeader from "@/components/marketing/onboarding/OnboardingHeader";
import PlanSummary from "@/components/marketing/onboarding/PlanSummary";
import BrandIdentityForm from "@/components/marketing/onboarding/BrandIdentityForm";
import PrimaryContactForm from "@/components/marketing/onboarding/PrimaryContactForm";
import SocialConnectivity from "@/components/marketing/onboarding/SocialConnectivity";
import VoiceGoalsForm from "@/components/marketing/onboarding/VoiceGoalsForm";
import OnboardingFooter from "@/components/marketing/onboarding/OnboardingFooter";

// Import the Plan type from your Modal component
import { type Plan } from "@/components/marketing/onboarding/PlanSelectionModal";

export default function OnboardingPage() {
  // 1. Initialize with a default 'Starter' plan
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    name: "Starter",
    price: "250",
    desc: "Essential social presence",
    features: ["2 Social Platforms", "8 Posts Per Month", "Basic Monthly Report"],
  });

  // 2. Check for plan passed from the Service Page via localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("selectedOnboardingPlan");
    
    if (savedPlan) {
      try {
        const parsedPlan = JSON.parse(savedPlan);
        
        // Map the PricingSection data format to the Onboarding Plan type
        setSelectedPlan({
          name: parsedPlan.name,
          price: parsedPlan.price,
          desc: parsedPlan.subtitle || parsedPlan.desc,
          features: parsedPlan.features,
        });

        // Optional: Clear storage so refresh doesn't reset manual changes later
        localStorage.removeItem("selectedOnboardingPlan");
      } catch (error) {
        console.error("Error parsing saved plan:", error);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-24 px-6 md:px-28">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header context */}
        <OnboardingHeader />
        
        {/* 2. Plan Context - Reflects the data from the Service Page immediately */}
        <PlanSummary 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />

        <hr className="my-16 border-slate-200" />

        {/* 3. The Onboarding Form Stack */}
        <div className="space-y-4">
          <BrandIdentityForm />
          <PrimaryContactForm />
          <SocialConnectivity />
          <VoiceGoalsForm />
          
          {/* 4. Security & Submission */}
          <OnboardingFooter />
        </div>
      </div>
    </main>
  );
}