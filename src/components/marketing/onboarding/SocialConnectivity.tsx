"use client";

import React, { useState } from "react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function BrandIdentityForm() {
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Saving Brand Identity data...");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form onSubmit={handleSave}>
      
      {/* 🔥 STAGGER WRAPPER */}
      <FadeInStagger>
        
        <FormSection 
          title="Brand Identity" 
          description="The foundational elements that define how the world recognizes you."
        >
          
          <div className="space-y-6">
            
            {/* INPUT 1 */}
            <FadeItem>
              <InputField 
                label="Official Brand Name" 
                placeholder="e.g. Atrium Financial" 
                required
              />
            </FadeItem>

            {/* INPUT 2 */}
            <FadeItem>
              <InputField 
                label="Website URL" 
                placeholder="https://atrium.com" 
              />
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
                  {loading ? "Saving..." : "Save Identity Details"}
                </button>
              </div>
            </FadeItem>

          </div>

        </FormSection>

      </FadeInStagger>

    </form>
  );
}