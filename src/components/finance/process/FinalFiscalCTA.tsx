"use client";

import React from "react";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function FinalFiscalCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="w-full mx-auto px-28">
        <FadeInStagger>
          <FadeItem>
            <div className="bg-primary rounded-4xl p-20 md:p-32 text-center shadow-2xl relative overflow-hidden">
              
              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                  Achieve Fiscal Clarity
                </h2>
                
                <p className="text-slate-300/80 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
                  Connect with our team to establish a transparent, robust financial <br className="hidden md:block" />
                  management system designed for your peace of mind.
                </p>

                <Link
                  href="/contact-us"
                  className="bg-[#FFD978] hover:bg-[#FFD978]/90 text-primary px-12 py-5 font-bold rounded-sm shadow-xl transition-all active:scale-95 text-lg"
                >
                  Schedule a Consultation
                </Link>
              </div>

              {/* Background Depth - very subtle radial gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}