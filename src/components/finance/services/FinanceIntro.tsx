"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import finance1 from "../../../../public/finance1.svg";

export default function FinanceIntro() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-background">
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* 👉 Main Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ✅ LEFT — 60% */}
          <FadeInStagger className="w-full lg:flex-[0_0_60%] space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <FadeItem>
              <span
                className={`uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}
              >
                Strategic Management
              </span>
            </FadeItem>

            <FadeItem>
              <h1
                className={`
                  text-4xl md:text-7xl font-bold 
                  leading-[1.1] md:leading-[1.05] 
                  tracking-tight 
                  ${theme.text.brand}
                  mx-auto lg:mx-0
                `}
              >
                <span className="block">Structural Precision</span>
                <span className="block">for Financial</span>
                <span className="block">Excellence.</span>
              </h1>
            </FadeItem>

            <FadeItem>
              <p className={`text-base md:text-lg leading-relaxed ${theme.text.muted} w-full md:w-[90%]`}>
                Arshan provides high-fidelity financial record management and
                administrative bookkeeping designed for clarity, scale, and
                uncompromising accuracy.
              </p>
            </FadeItem>

            <FadeItem>
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const el = document.getElementById("solutions");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${theme.buttons.primary} w-full sm:w-auto px-8 py-4 shadow-xl hover:shadow-primary/20 rounded-sm transition-all active:scale-95 flex justify-center items-center`}
                >
                  View Solutions
                </button>

                <Link
                  href="/finance/process/"
                  className={`flex items-center justify-center gap-2 font-bold text-md ${theme.text.main} group transition-colors hover:text-primary`}
                >
                  Our Process
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeItem>
          </FadeInStagger>

          {/* ✅ RIGHT — 40% */}
          <FadeInStagger className="w-full lg:flex-[0_0_40%]">
            <FadeItem className="relative w-full group">
              
              <div className="relative w-full scale-120 sm:max-w-125 aspect-square mx-auto lg:mx-0 lg:-ml-12">
                
                {/* Back Layer */}
                <div className="absolute inset-0 bg-primary rounded-md rotate-2 md:rotate-3 translate-x-2 md:translate-x-4 translate-y-2 opacity-90 shadow-xl transition-transform duration-700 group-hover:rotate-1 group-hover:translate-x-2" />
                
                {/* Image Layer */}
                <div className="absolute inset-0 rounded-md overflow-hidden -rotate-3 md:-rotate-5 translate-x-2 md:translate-x-4 translate-y-1 md:translate-y-2 shadow-2xl border border-white/10 bg-slate-900">
                  <Image
                    src={finance1}
                    alt="Financial Growth Chart"
                    fill
                    className="object-cover scale-150 rotate-6 transition-transform duration-1000 ease-out group-hover:scale-[1.6] group-hover:rotate-3"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />
                </div>

              </div>

            </FadeItem>
          </FadeInStagger>

        </div>
      </div>
    </section>
  );
}