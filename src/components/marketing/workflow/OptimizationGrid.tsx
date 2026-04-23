"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { Clock, LineChart } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function OptimizationGrid() {
  return (
    <section className="pt-20 pb-10">
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 04: Algorithmic Scheduling */}
          <FadeItem className="bg-white border border-slate-100 p-12 lg:p-16 rounded-sm shadow-sm flex flex-col justify-between">
            <div className="space-y-8">
              <div className="relative">
                <span className="text-5xl font-bold text-slate-200 leading-none">
                  04
                </span>
                <hr className="absolute top-1/2 left-20 right-0 border-slate-50" />
              </div>

              <div className="space-y-4">
                <h3 className={`text-3xl font-bold tracking-tight ${theme.text.brand}`}>
                  Algorithmic Scheduling
                </h3>
                <span className="block uppercase tracking-[0.3em] text-[10px] font-bold text-[#A48626]">
                  Daily Posting
                </span>
              </div>

              <p className={`text-lg leading-relaxed opacity-70 ${theme.text.muted}`}>
                Timing is everything. We utilize proprietary data modeling to
                identify peak engagement windows, ensuring your message
                reaches the maximum audience when they are most receptive to
                professional insights.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className={`text-sm font-bold tracking-widest uppercase ${theme.text.brand}`}>
                Precision Delivery
              </span>
            </div>
          </FadeItem>

          {/* Card 05: Performance Monitoring */}
          <FadeItem className="bg-[#031933] p-12 lg:p-16 rounded-sm shadow-2xl flex flex-col justify-between text-white">
            <div className="space-y-8">
              <div className="relative">
                <span className="text-5xl font-bold text-slate-200 leading-none">
                  05
                </span>
                <hr className="absolute top-1/2 left-20 right-0 border-white/5" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  Performance Monitoring
                </h3>
                <span className="block uppercase tracking-[0.3em] text-[10px] font-bold text-[#A48626]">
                  Analytics
                </span>
              </div>

              <p className="text-lg leading-relaxed text-slate-300 opacity-90">
                Data is the foundation of growth. Every campaign is tracked
                through our Google analytics suite, providing you with
                transparent, actionable insights into ROI, audience sentiment, and
                brand velocity.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-3">
              <LineChart className="w-5 h-5 text-[#A48626]" />
              <span className="text-sm font-bold tracking-widest uppercase text-white">
                Data Sovereignty
              </span>
            </div>
          </FadeItem>

        </FadeInStagger>
      </div>
    </section>
  );
}