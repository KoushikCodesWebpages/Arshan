"use client";

import React, { useState, useEffect } from "react";
import OnboardingHeader from "@/components/marketing/onboarding/OnboardingHeader";
import PlanSummary from "@/components/marketing/onboarding/PlanSummary";
import BrandIdentityForm from "@/components/marketing/onboarding/BrandIdentityForm";
import PrimaryContactForm from "@/components/marketing/onboarding/PrimaryContactForm";
import SocialConnectivity from "@/components/marketing/onboarding/SocialConnectivity";
import VoiceGoalsForm from "@/components/marketing/onboarding/VoiceGoalsForm";
import OnboardingFooter from "@/components/marketing/onboarding/OnboardingFooter";

// Import the Plan type
import { type Plan } from "@/components/marketing/onboarding/PlanSelectionModal";

// Define the shape of our master data object
export interface MarketingOnboardingData {
  brand: any;
  contact: any;
  socials: any;
  goals: any;
}

export default function OnboardingPage() {
  // 1. Plan State (Handles the billing/selection context)
  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    name: "Starter",
    price: "250",
    desc: "Essential social presence",
    features: ["2 Social Platforms", "8 Posts Per Month", "Basic Monthly Report"],
  });

  // 2. Form Content State (The modular data blocks)
  const [formData, setFormData] = useState<MarketingOnboardingData>({
    brand: {},
    contact: {},
    socials: {},
    goals: {},
  });

  // 3. EFFECT: Load initial plan from Service Page & restore draft data
  useEffect(() => {
    // Restore Plan Selection
    const savedPlan = localStorage.getItem("selectedOnboardingPlan");
    if (savedPlan) {
      try {
        const parsedPlan = JSON.parse(savedPlan);
        setSelectedPlan({
          name: parsedPlan.name,
          price: parsedPlan.price,
          desc: parsedPlan.subtitle || parsedPlan.desc,
          features: parsedPlan.features,
        });
        localStorage.removeItem("selectedOnboardingPlan");
      } catch (e) { console.error("Plan Restore Error", e); }
    }

    // Restore Form Draft (Persistence)
    const savedDraft = localStorage.getItem("arshan_marketing_draft");
    if (savedDraft) {
      try {
        setFormData(JSON.parse(savedDraft));
      } catch (e) { console.error("Draft Restore Error", e); }
    }
  }, []);

  // 4. HANDLER: Update specific sections and sync with LocalStorage
  const updateSection = (section: keyof MarketingOnboardingData, data: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [section]: data };
      localStorage.setItem("arshan_marketing_draft", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-24 px-6 md:px-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Institutional Branding & Context */}
        <OnboardingHeader />
        
        {/* Pricing/Billing Context */}
        <PlanSummary 
          selectedPlan={selectedPlan} 
          setSelectedPlan={setSelectedPlan} 
        />

        <hr className="my-16 border-slate-200" />

        {/* Modular Form Stack */}
        <div className="space-y-4">
          <BrandIdentityForm 
            values={formData.brand} 
            onChange={(data) => updateSection("brand", data)} 
          />
          
          <PrimaryContactForm 
            values={formData.contact} 
            onChange={(data) => updateSection("contact", data)} 
          />
          
          <SocialConnectivity 
            values={formData.socials} 
            onChange={(data) => updateSection("socials", data)} 
          />
          
          <VoiceGoalsForm 
            values={formData.goals} 
            onChange={(data) => updateSection("goals", data)} 
          />
          
          {/* Submission Logic: 
              Passes everything (Plan + Form Data) to the footer 
          */}
          <OnboardingFooter 
            allData={{ 
              ...formData, 
              plan: selectedPlan 
            }} 
          />
        </div>
      </div>
    </main>
  );
}