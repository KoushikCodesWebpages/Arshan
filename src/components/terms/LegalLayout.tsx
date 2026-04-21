"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import LegalSidebar from "./LegalSidebar";
import TermsContent from "./TermsContent"; 
import PrivacyContent from "./PrivacyContent";
import LegalInquiriesCTA from "./LegalInquiriesCTA";

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
        <p className="text-slate-500">Email: Inquiries@arshan.de</p>
        <p className="text-slate-500">VAT ID: Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG liegt nicht vor.</p>
      </div>
    ),
  },
];

export default function LegalLayout() {
  return (
    /* Adjusted vertical padding for mobile consistency */
    <section className="py-16 md:py-24 min-h-screen bg-background overflow-hidden">
      
      {/* MOBILE FIX: px-6 for mobile, md:px-28 preserves your desktop design */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* GRID: Stacks on mobile, 12-column grid on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: SIDEBAR 
              Modified to only be sticky on large screens (lg:) to avoid mobile layout issues.
          */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <FadeItem>
                <LegalSidebar />
              </FadeItem>
            </div>
          </div>

          {/* RIGHT: CONTENT AREA */}
          <div className="lg:col-span-9 space-y-16 md:space-y-24">
              
            {/* 1. IMPRESSUM SECTION */}
            <div id="impressum" className="scroll-mt-24 space-y-8 md:space-y-12">
              <FadeItem className="flex items-center gap-4">
                <div className="w-1 h-8 bg-tertiary shrink-0" />
                <h1 className={`text-3xl md:text-4xl font-bold tracking-tight ${theme.text.brand}`}>
                  Legal Disclosure (Impressum)
                </h1>
              </FadeItem>

              <FadeItem>
                {/* 2-column grid on tablets, 1 on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sections.map((section, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/50 border border-slate-100 p-6 md:p-8 rounded-xl shadow-sm hover:bg-white transition-colors duration-300"
                    >
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 md:mb-6">
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

            {/* 2. TERMS SECTION 
                Increased scroll-mt for mobile anchor link precision
            */}
            <div id="terms" className="scroll-mt-12 md:scroll-mt-24 border-t border-slate-200 pt-12 md:pt-16">
              <TermsContent />
            </div>

            {/* 3. PRIVACY SECTION */}
            <div id="privacy" className="scroll-mt-12 md:scroll-mt-24 border-t border-slate-200 pt-12 md:pt-16">
              <PrivacyContent />
            </div>

            {/* 4. LegalInquiries */}
            <div className="border-t border-slate-200 pt-12 md:pt-16 pb-12">
              <LegalInquiriesCTA />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}