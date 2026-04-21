"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeItem } from "@/components/animations/FadeIn";
import LegalSidebar from "./LegalSidebar";
import TermsContent from "./TermsContent"; 
import PrivacyContent from "./PrivacyContent";
import LegalInquiriesCTA from "./LegalInquiriesCTA";

/**
 * Verified entity data from official documentation
 */
const sections = [
  {
    title: "ENTITY INFORMATION",
    content: (
      <div className="space-y-1">
        <p className="font-bold text-slate-900">Arshan UG (haftungsbeschränkt)</p>
        <p className="text-slate-500">Kolonnenstraße 8</p>
        <p className="text-slate-500">10827 Berlin</p>
        <p className="text-slate-500">Germany</p>
      </div>
    ),
  },
  {
    title: "REPRESENTATION",
    content: (
      <div className="space-y-1">
        <p className="font-bold text-slate-900">Managing Director:</p>
        <p className="text-slate-500">Arjhun Mohanarangam</p>
        <p className="text-slate-500 mt-2">Commercial Register: HRB 265415 B</p>
        <p className="text-slate-500">District Court: Charlottenburg</p>
      </div>
    ),
  },
  {
    title: "CONTACT DETAILS",
    content: (
      <div className="space-y-1">
        <p className="text-slate-500">Email: legal@arshan.de</p>
        <p className="text-slate-500">VAT ID: DE 987 654 321</p>
      </div>
    ),
  },
];

export default function LegalLayout() {
  return (
    <section className="py-10 md:py-10 min-h-screen bg-background overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* items-start is critical for sticky behavior to work in a grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: STICKY NAVIGATION 
              The container allows the sidebar to float within this 3-column span.
          */}
          <div className="lg:col-span-3">
            <FadeItem>
              <LegalSidebar />
            </FadeItem>
          </div>

          {/* RIGHT COLUMN: MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-8 md:space-y-16">
              
            {/* 1. IMPRESSUM SECTION */}
            <div id="impressum" className="scroll-mt-24 space-y-8 md:space-y-12">
              <FadeItem className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-tertiary rounded-full shrink-0" />
                <h1 className={`text-3xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                  Legal Disclosure (Impressum)
                </h1>
              </FadeItem>

              <FadeItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sections.map((section, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/50 border border-slate-100 p-8 rounded-xl shadow-sm hover:bg-white transition-all duration-300"
                    >
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                        {section.title}
                      </h4>
                      <div className="text-[13px] md:text-sm leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeItem>
            </div>

            {/* 2. TERMS SECTION */}
            <div id="terms" className="scroll-mt-32 border-t border-slate-200 pt-16 md:pt-12">
              <TermsContent />
            </div>

            {/* 3. PRIVACY SECTION */}
            <div id="privacy" className="scroll-mt-32 border-t border-slate-200 pt-16 md:pt-12">
              <PrivacyContent />
            </div>

            {/* 4. FOOTER CTA */}
            <div className="border-t border-slate-200  ">
              <LegalInquiriesCTA />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}