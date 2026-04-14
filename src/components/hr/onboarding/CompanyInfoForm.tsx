"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import FormSection from "@/components/marketing/onboarding/FormSection";
import InputField from "@/components/marketing/onboarding/InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function CompanyInfoForm() {
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleSave}>
      
      {/* 🔥 STAGGER WRAPPER */}
      <FadeInStagger>
        
        <FormSection 
          title="Company Information" 
          description="Provide the formal identification details for your organization. Used for legal contracting."
        >
          
          <div className="space-y-6">
            
            {/* ENTITY NAME */}
            <FadeItem>
              <InputField 
                label="Legal Entity Name" 
                placeholder="e.g. Arshan Global Holdings Ltd." 
              />
            </FadeItem>

            {/* GRID */}
            <FadeItem>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <InputField 
                  label="Website" 
                  placeholder="https://www.arshan.com" 
                />

                {/* SELECT */}
                <div className="relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                    Industry
                  </label>

                  <div className="relative group">
                    <select className="w-full bg-slate-50/50 border border-slate-100 rounded-sm py-3 px-4 text-xs text-slate-600 appearance-none outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all cursor-pointer">
                      <option>Financial Services</option>
                      <option>Technology & Software</option>
                      <option>Healthcare & Life Sciences</option>
                      <option>Manufacturing</option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-primary transition-colors" />
                  </div>
                </div>

              </div>
            </FadeItem>

            {/* BUTTON */}
            <FadeItem>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    text-[10px] font-bold uppercase tracking-widest 
                    text-primary/40 hover:text-primary 
                    transition-colors 
                    disabled:opacity-30
                  "
                >
                  {loading ? "Saving..." : "Save Company Details"}
                </button>
              </div>
            </FadeItem>

          </div>

        </FormSection>

      </FadeInStagger>

    </form>
  );
}