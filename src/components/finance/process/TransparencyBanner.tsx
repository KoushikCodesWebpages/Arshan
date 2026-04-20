"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { Info } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function TransparencyBanner() {
  return (
    /* py-8 (Mobile) -> md:py-12 (PC) */
    <section className="py-8 md:py-12 bg-white">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger>
          <FadeItem>
            <div className="relative bg-neutral border-l-4 border-tertiary p-8 md:p-12 shadow-sm group">
              {/* sm:flex-row ensures icon stays next to text on larger phones */}
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 relative z-10">
                
                {/* Icon Container */}
                <div className="mt-1 shrink-0">
                  <Info className={`w-6 h-6 ${theme.brand.accent}`} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className={`text-md md:text-lg font-bold ${theme.text.brand} tracking-tight`}>
                    Supportive Administrative Transparency
                  </h4>
                  <p className={`text-sm md:text-base leading-relaxed max-w-5xl text-secondary`}>
                    Our Business Services provides administrative infrastructure and financial record management. 
                    We operate with full transparency in our processes, though we are not a licensed accounting 
                    firm and do not provide audit, tax, or legal advice. Our mission is to provide 
                    collaborative and clear management of your essential fiscal data.
                  </p>
                </div>

              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}