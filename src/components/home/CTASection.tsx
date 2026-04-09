"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { BarChartHorizontal } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import home3 from '../../../public/home3.svg';

export default function CTASection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full mx-auto px-28">
        <FadeInStagger>
          <FadeItem>
            <div className="relative overflow-hidden rounded-2xl bg-primary shadow-2xl flex flex-col md:flex-row items-stretch">
              
              {/* Subtle Hexagon Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern-hex.png')] bg-repeat" />

              {/* Left Content Side */}
              <div className="flex-1 p-10 md:p-16 z-10 flex flex-col justify-center">
                <FadeInStagger className="space-y-6">
                  <FadeItem>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      Request a Technical <br /> 
                      Business Infrastructure <br /> 
                      Audit
                    </h2>
                  </FadeItem>
                  
                  <FadeItem>
                    <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                      Our technical audit provides a 360-degree review of your current 
                      business infrastructure, identifying critical vulnerabilities in 
                      finance, marketing, and HR. Gain actionable insights to improve 
                      compliance and operational efficiency.
                    </p>
                  </FadeItem>

                  <FadeItem>
                    <div>
                      <button className={`${theme.buttons.tertiary} flex items-center gap-3 px-8 py-4 text-base group active:scale-95 transition-all`}>
                        Start Your Free Audit
                        <BarChartHorizontal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </FadeItem>
                </FadeInStagger>
              </div>

              {/* Right Image Side */}
              <FadeItem className="flex-1 min-h-100 relative group overflow-hidden">
                <Image
                  src={home3}
                  alt="Professional Office Setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Gradient Overlay for mobile to ensure text readability if it stacks */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent md:hidden" />
                
                {/* Subtle Lens Overlay for consistency with other intro sections */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] mix-blend-multiply" />
              </FadeItem>

            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}