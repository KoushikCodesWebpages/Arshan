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
        <p className="text-slate-500">Email: legal@arshan.de</p>
        <p className="text-slate-500">VAT ID: DE 987 654 321</p>
      </div>
    ),
  },
  {
    title: "EDITORIAL RESPONSIBILITY",
    content: (
      <div className="space-y-1 text-[13px] leading-relaxed">
        <p className="text-slate-500 italic">Responsible for content according to § 18 MStV:</p>
        <p className="text-slate-900 font-medium">Sarah Miller</p>
        <p className="text-slate-500">Arshan UG (haftungsbeschränkt)</p>
      </div>
    ),
  },
];

export default function LegalLayout() {
  return (
    <section className="py-24 min-h-screen">
      <div className="w-full mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: STICKY SIDEBAR */}
          <div className="lg:col-span-3">
            {/* Added a basic FadeItem here so the sidebar also animates in on load */}
            <div className="sticky top-32">
              <FadeItem>
                <LegalSidebar />
              </FadeItem>
            </div>
          </div>

          {/* RIGHT: SCROLLABLE CONTENT */}
          <div className="lg:col-span-9">
            {/* By default, FadeInStagger usually listens for scroll. 
                If your component supports it, ensure 'initial' and 'animate' are 
                inherited from the parent page or passed as props.
            */}
            
            
              
              {/* 1. IMPRESSUM SECTION */}
              <div id="impressum" className="scroll-mt-24 space-y-12">
                <FadeItem className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-tertiary" />
                  <h1 className={`text-4xl font-bold tracking-tight ${theme.text.brand}`}>
                    Legal Disclosure (Impressum)
                  </h1>
                </FadeItem>

                <FadeItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((section, idx) => (
                      <div key={idx} className="bg-white/50 border border-slate-100 p-8 rounded-xl shadow-sm hover:bg-white transition-colors duration-300">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                          {section.title}
                        </h4>
                        <div className="text-sm">{section.content}</div>
                      </div>
                    ))}
                  </div>
                </FadeItem>
              </div>

              {/* 2. TERMS SECTION */}
              <div id="terms" className="scroll-mt-12 border-t border-slate-200 pt-12">
                <TermsContent />
              </div>

             {/* 3. PRIVACY SECTION */}
            <div id="privacy" className="scroll-mt-12 border-t border-slate-200 pt-12">
                <PrivacyContent />
            </div>

            {/* 4. LegalInquiries */}
            <div className="border-t border-slate-200 pt-12">
                <LegalInquiriesCTA />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}