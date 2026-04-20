"use client";

import React from "react";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function FinalFiscalCTA() {
  return (
    /* py-16 (Mobile) -> md:py-24 (PC) */
    <section className="py-16 md:py-24 bg-background">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger>
          <FadeItem>
            {/* rounded-3xl (Mobile) -> md:rounded-4xl (PC) */}
            {/* p-12 (Mobile) -> md:p-32 (PC) */}
            <div className="bg-primary rounded-3xl md:rounded-4xl p-12 md:p-32 text-center shadow-2xl relative overflow-hidden">
              
              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center">
                {/* text-3xl (Mobile) -> md:text-6xl (PC) */}
                <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight mb-6">
                  Achieve Fiscal Clarity
                </h2>
                
                <p className="text-slate-300/80 text-base md:text-xl max-w-3xl leading-relaxed mb-10 md:mb-12">
                  Connect with our team to establish a transparent, robust financial <br className="hidden md:block" />
                  management system designed for your peace of mind.
                </p>

                <Link
                  href="/contact-us"
                  className="bg-[#ca9c2a] hover:bg-[#FFD978]/90 text-primary px-8 md:px-12 py-4 md:py-5 font-bold rounded-sm shadow-xl transition-all active:scale-95 text-md md:text-lg w-full sm:w-auto"
                >
                  Schedule a Consultation
                </Link>
              </div>

              {/* Background Depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}