"use client";

import React, { useState } from "react";
import OnboardingHeader from "@/components/marketing/onboarding/OnboardingHeader";
import PlanSummary from "@/components/marketing/onboarding/PlanSummary";
import BrandIdentityForm from "@/components/marketing/onboarding/BrandIdentityForm";
import PrimaryContactForm from "@/components/marketing/onboarding/PrimaryContactForm";
import SocialConnectivity from "@/components/marketing/onboarding/SocialConnectivity";
import VoiceGoalsForm from "@/components/marketing/onboarding/VoiceGoalsForm";
import OnboardingFooter from "@/components/marketing/onboarding/OnboardingFooter";

// Define the Plan type locally or import it from PlanSummary
import type { Plan } from "@/components/marketing/onboarding/PlanSelectionModal";

export default function OnboardingPage() {
  // 1. Initialize with the default 'Starter' plan
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    name: "Starter",
    price: "250",
    desc: "Essential social presence",
    features: ["2 Social Platforms", "8 Posts Per Month", "Basic Monthly Report"],
  });

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-24 px-28">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header & Strategy Context */}
        <OnboardingHeader />
        
        {/* 2. Financial/Plan Context - Now passing state props */}
        <PlanSummary 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />

        {/* 3. The Onboarding Form Stack */}
        {/* Note: We removed the outer <form> tag because each sub-form 
           (BrandIdentityForm, etc.) now handles its own individual API submission.
        */}
        <div className="space-y-4">
          <BrandIdentityForm />
          <PrimaryContactForm />
          <SocialConnectivity />
          <VoiceGoalsForm />
          
          {/* 4. Security & Submission (Final Step) */}
          <OnboardingFooter />
        </div>
      </div>
    </main>
  );
}