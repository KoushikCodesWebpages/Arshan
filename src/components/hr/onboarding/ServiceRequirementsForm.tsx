"use client";

import React, { useState, useEffect } from "react";
import FormSection from "@/components/marketing/onboarding/FormSection";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

interface RequirementsData {
  employeeCount: number;
  specificRoles: string;
}

interface ServiceRequirementsFormProps {
  onChange: (data: RequirementsData) => void;
}

export default function ServiceRequirementsForm({ onChange }: ServiceRequirementsFormProps) {
  const [loading, setLoading] = useState(false);
  
  // 1. Local State Node
  const [formData, setFormData] = useState<RequirementsData>({
    employeeCount: 5,
    specificRoles: "",
  });

  // 2. Protocol Handshake: Push changes to HROnboardingPage
  const handleUpdate = (updates: Partial<RequirementsData>) => {
    const newData = { ...formData, ...updates };
    setFormData(newData);
    onChange(newData);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate strategic computation
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <form onSubmit={handleSave}>
      <FadeInStagger>
        <FormSection
          title="Service Configuration"
          description="Define the scope of personnel requirements and specific technical mandates for this deployment cycle."
        >
          <div className="space-y-12">

            {/* CAPACITY SLIDER */}
            <FadeItem>
              <div className="group">
                <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-8 transition-colors group-focus-within:text-[#0d2649]">
                  Personnel Capacity Required
                </label>

                <div className="flex items-center gap-10">
                  <div className="flex-1 relative py-4">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={formData.employeeCount}
                      onChange={(e) => handleUpdate({ employeeCount: parseInt(e.target.value) })}
                      className="w-full h-[2px] bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0d2649] hover:accent-[#a48626] transition-all"
                    />
                  </div>

                  <div className="bg-[#0d2649] text-white w-10 h-10 rounded-sm flex flex-col items-center justify-center shadow-[0_12px_24px_-8px_rgba(13,38,73,0.3)] transition-all duration-500">
                    <span className="text-sm font-bold leading-none">{formData.employeeCount}</span>
                    
                  </div>
                </div>
              </div>
            </FadeItem>

            {/* STRATEGIC ROLES TEXTAREA */}
            <FadeItem>
              <div className="group">
                <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-4 transition-colors group-focus-within:text-[#0d2649]">
                  Technical & Strategic Role Mandates
                </label>

                <div className="relative">
                  <textarea
                    value={formData.specificRoles}
                    onChange={(e) => handleUpdate({ specificRoles: e.target.value })}
                    className={`
                      w-full h-44 py-5 px-5
                      bg-slate-50/40 backdrop-blur-[2px]
                      border border-slate-100 rounded-sm 
                      text-[13px] text-slate-600 leading-relaxed
                      placeholder:text-slate-300 outline-none 
                      transition-all duration-500 resize-none
                      focus:bg-white focus:border-slate-300
                      focus:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]
                    `}
                    placeholder="Describe the required stack, seniority, and specific responsibilities for the assets being requested..."
                  />
                  
                  {/* Subtle focus accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#0d2649] transition-all duration-700 ease-in-out group-focus-within:w-full" />
                </div>
              </div>
            </FadeItem>

            {/* COMMIT ACTION */}
            <FadeItem>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    text-[10px] font-bold uppercase tracking-[0.3em] 
                    text-slate-400 hover:text-[#0d2649] 
                    transition-all duration-500
                    disabled:opacity-30 flex items-center gap-2
                    relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#0d2649] after:transition-all hover:after:w-full
                  "
                >
                  {loading ? "Processing..." : "Commit Requirements"}
                </button>
              </div>
            </FadeItem>

          </div>
        </FormSection>
      </FadeInStagger>
    </form>
  );
}