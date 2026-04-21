"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function GermanyValueBlocks() {
  return (
    /* py-16 (Mobile) -> md:py-20 (PC) */
    <section className="py-10 md:py-10 bg-[#F8FAFC] overflow-hidden">
      {/* MOBILE FIX: px-6 for mobile, md:px-28 for your original desktop design */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* Main Container with Left Accent */}
        <div className="relative border border-border-light bg-white rounded-brand overflow-hidden shadow-sm">
          {/* Arshan Left Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

          {/* Grid Logic: Stacked on mobile, 2-col on MD+ 
              divide-y for mobile separation, md:divide-y-0 for desktop
          */}
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border-light">
            
            {/* Column 01 */}
            <FadeItem className="p-8 md:p-16">
              <h3 className={`text-base md:text-lg font-bold uppercase tracking-widest mb-6 ${theme.text.brand}`}>
                Navigating the German Labor Landscape
              </h3>
              <p className={`text-[14px] md:text-[15px] leading-relaxed ${theme.text.muted}`}>
                For new businesses entering the DACH region, the administrative burden can be 
                prohibitive. Arshan's "Sovereign Ledger" methodology simplifies this by consolidating 
                all employment variables into a single, predictable investment structure. We handle 
                the intricacies of German notice periods, vacation entitlements, and social benefits, 
                allowing you to focus on market penetration.
              </p>
            </FadeItem>

            {/* Column 02 */}
            <FadeItem className="p-8 md:p-16">
              <h3 className={`text-base md:text-lg font-bold uppercase tracking-widest mb-6 ${theme.text.brand}`}>
                Financial Precision & Auditing
              </h3>
              <p className={`text-[14px] md:text-[15px] leading-relaxed ${theme.text.muted}`}>
                Our Lexware-integrated systems provide continuous auditing capabilities. This 
                ensures that every Euro allocated to payroll is traceable and fully compliant with 
                German tax laws. Our German infrastructure is built to withstand the most rigorous 
                scrutiny from local authorities, providing peace of mind for institutional investors and

global headquarters. 
              </p>
            </FadeItem>

          </FadeInStagger>
        </div>

      </div>
    </section>
  );
}