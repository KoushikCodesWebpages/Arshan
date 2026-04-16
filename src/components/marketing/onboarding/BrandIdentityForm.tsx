"use client";

import React from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

interface BrandIdentityProps {
  values: {
    brandName?: string;
    websiteUrl?: string;
  };
  onChange: (data: any) => void;
}

export default function BrandIdentityForm({ values, onChange }: BrandIdentityProps) {
  
  // Generic handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
      <FadeInStagger>
        <FormSection 
          title="Brand Identity" 
          description="The foundational elements that define how the world recognizes you."
        >
          <div className="space-y-6">
            
            {/* INPUT 1: Brand Name */}
            <FadeItem>
              <InputField 
                name="brandName" // Matches the key in your state
                label="Official Brand Name" 
                placeholder="e.g. Atrium Financial" 
                value={values?.brandName || ""}
                onChange={handleInputChange}
                required
              />
            </FadeItem>

            {/* INPUT 2: Website URL */}
            <FadeItem>
              <InputField 
                name="websiteUrl" // Matches the key in your state
                label="Website URL" 
                placeholder="https://atrium.com" 
                value={values?.websiteUrl || ""}
                onChange={handleInputChange}
              />
            </FadeItem>

            {/* NOTE: We remove the 'Save' button here because 
               the OnboardingFooter handles the final submission.
               The data is automatically saved to LocalStorage 
               via the parent's updateSection handler.
            */}
            <FadeItem>
              <div className="flex justify-end pt-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/30">
                  Auto-saving to draft...
                </span>
              </div>
            </FadeItem>

          </div>
        </FormSection>
      </FadeInStagger>
    </div>
  );
}