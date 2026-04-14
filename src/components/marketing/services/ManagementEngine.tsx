"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function ManagementEngine() {
  const stats = [
    { label: "BRAND CONSISTENCY", value: "100%" },
    { label: "ACCOUNT MONITORING", value: "24/7" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className=" w-full mx-auto px-28 ">
        <FadeInStagger>
          <div className="flex flex-col lg:flex-row min-h-125 rounded-sm overflow-hidden shadow-2xl border border-border-light">
            
            {/* Left: Text & Metrics */}
            <FadeItem className="flex-1 bg-primary p-12 lg:p-16 flex flex-col justify-center space-y-8 z-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Data-Driven <br />
                  Management <br />
                  Engine.
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-md opacity-90">
                  Our management approach uses real-time platform data to ensure 
                  your content is always delivered at the optimal time for maximum engagement.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <FadeItem>
                <Link href="/marketing/workflow">
                  <button className="flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase group transition-all hover:gap-5">
                    Explore Our Workflow 
                    <ArrowRight className={`w-5 h-5 ${theme.brand.accent}`} />
                  </button>
                </Link>
              </FadeItem>
            </FadeItem>

            {/* Right: Cinematic Visualization */}
            <FadeItem className="flex-[1.2] relative min-h-100 group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Real-time analytics engine"
                fill
                className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                priority
              />
              
              {/* Arshan Lens Overlays */}
              {/* 1. Deep Shadow Vignette - Blending the image into the primary navy block */}
              <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/20 to-transparent hidden lg:block" />
              
              {/* 2. The "Hole" and Black Blurs for the Premium UI feel */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.9)_100%)] mix-blend-multiply" />
              
              {/* 3. Color Depth Layer */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              
              {/* 4. Subtle Glass Highlight */}
              <div className="absolute inset-0 border-l border-white/10 pointer-events-none" />
            </FadeItem>

          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}