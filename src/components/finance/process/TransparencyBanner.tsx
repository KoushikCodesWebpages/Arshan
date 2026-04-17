"use client";

import { theme } from "@/lib/theme";
import { Info } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function TransparencyBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-28">
        <FadeInStagger>
          <FadeItem>
            <div className="relative bg-neutral border-l-4 border-tertiary p-10 md:p-12 shadow-sm group">
              <div className="flex items-start gap-6">
                
                {/* Icon Container */}
                <div className="mt-1">
                  <Info className={`w-6 h-6 ${theme.brand.accent}`} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className={`text-lg font-bold ${theme.text.brand} tracking-tight`}>
                    Supportive Administrative Transparency
                  </h4>
                  <p className={`text-base leading-relaxed max-w-5xl text-secondary`}>
                    Our Business Services provides administrative infrastructure and financial record management. 
                    We operate with full transparency in our processes, though we are not a licensed accounting 
                    firm and do not provide audit, tax, or legal advice. Our mission is to provide 
                    collaborative and clear management of your essential fiscal data.
                  </p>
                </div>

              </div>

              {/* Subtle hover effect to match your premium feel */}
              <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}