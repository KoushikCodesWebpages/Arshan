"use client";

import React from "react";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function WorkflowCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeItem>
          <div className="bg-slate-50/50 rounded-sm p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-100">
            
            {/* Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                Ready to Elevate Your Presence?
              </h2>
              <p className={`text-lg lg:text-xl opacity-70 ${theme.text.muted} max-w-xl`}>
                Join elite enterprises who trust Arshan for their 
                global social architecture.
              </p>
            </div>

            {/* Action Button */}
            <Link 
              href="/contact-us" 
              className="whitespace-nowrap bg-[#031933] text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
            >
              Schedule a Consultation
            </Link>

          </div>
        </FadeItem>
      </div>
    </section>
  );
}