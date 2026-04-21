"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { LayoutGrid, MessageSquareQuote } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import blueprint from '../../../../public/financeworkflow2.svg';

export default function ContentArchitecture() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="w-full mx-auto px-6 md:px-28">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
          
          {/* Right Content */}
          <FadeInStagger className="flex-1 space-y-8">
            
            {/* Index & Header */}
            <FadeItem className="space-y-4">
              <div className="relative">
                <span className="text-[120px] font-bold text-slate-200/50 leading-none">
                  02
                </span>
                <hr className="absolute top-1/2 left-45 right-0 border-slate-200" />
              </div>

              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                Content Architecture
              </h2>
            </FadeItem>

            {/* Subtitle & Description */}
            <FadeItem className="space-y-6">
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#A48626]">
                Strategy Phase
              </span>
              
              <p className={`text-lg leading-relaxed max-w-xl opacity-70 ${theme.text.muted}`}>
                We treat content as infrastructure. This phase defines the structural pillars of
                your social presence: thematic clusters, visual language, and narrative arcs that
                ensure long-term scalability and brand consistency.
              </p>
            </FadeItem>

            {/* Feature Cards Grid */}
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <FadeItem className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-md transition-shadow">
                <LayoutGrid className="w-6 h-6 text-primary" />
                <span className={`text-sm font-bold uppercase tracking-widest ${theme.text.brand}`}>
                  Visual Framework
                </span>
              </FadeItem>

              <FadeItem className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 flex flex-col gap-4 group hover:shadow-md transition-shadow">
                <MessageSquareQuote className="w-6 h-6 text-primary" />
                <span className={`text-sm font-bold uppercase tracking-widest ${theme.text.brand}`}>
                  Tone Governance
                </span>
              </FadeItem>
            </FadeInStagger>

          </FadeInStagger>

          {/* Left Image Block */}
          <FadeItem className="flex-1 w-full">
            <div className="relative w-full aspect-4/3 rounded-sm overflow-hidden shadow-2xl group">
              <Image
                src={blueprint}
                alt="Architectural blueprints and notebook on a desk"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent pointer-events-none" />
            </div>
          </FadeItem>

        </div>
      </div>
    </section>
  );
}