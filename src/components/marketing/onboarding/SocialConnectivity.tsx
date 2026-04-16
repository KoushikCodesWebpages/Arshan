"use client";

import React from "react";
import { Link2, Camera, Leaf } from "lucide-react";
import FormSection from "./FormSection";
import InputField from "./InputField";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

interface SocialProps {
  values: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  onChange: (data: any) => void;
}

export default function SocialConnectivity({ values, onChange }: SocialProps) {
  
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
          title="Social Connectivity"
          description="Share your existing channels to synchronize our management efforts."
        >
          <div className="space-y-4">
            
            {/* GRID ROW: LinkedIn & Instagram */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeItem className="bg-white p-6 rounded-sm border border-slate-50 shadow-sm">
                <InputField 
                  name="linkedin"
                  label="Linkedin Handle" 
                  icon={<Link2 className="w-4 h-4" />}
                  placeholder="@companyname" 
                  value={values?.linkedin || ""}
                  onChange={handleInputChange}
                />
              </FadeItem>

              <FadeItem className="bg-white p-6 rounded-sm border border-slate-50 shadow-sm">
                <InputField 
                  name="instagram"
                  label="Instagram Handle" 
                  icon={<Camera className="w-4 h-4" />} // Camera icon as per your screenshot
                  placeholder="@brand_social" 
                  value={values?.instagram || ""}
                  onChange={handleInputChange}
                />
              </FadeItem>
            </div>

            {/* FULL WIDTH: X (Twitter) */}
            <FadeItem className="bg-white p-6 rounded-sm border border-slate-50 shadow-sm">
              <InputField 
                name="twitter"
                label="X (Twitter) Handle" 
                icon={<Leaf className="w-4 h-4" />}
                placeholder="@brand_x" 
                value={values?.twitter || ""}
                onChange={handleInputChange}
              />
            </FadeItem>

            {/* Arshan Status */}
            <FadeItem>
              <div className="flex justify-end pt-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/30">
                  Synchronizing social nodes...
                </span>
              </div>
            </FadeItem>

          </div>
        </FormSection>
      </FadeInStagger>
    </div>
  );
}