"use client";

import React from "react";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function LeadershipConnect() {
  return (
    <section className="py-15 border-t border-slate-100">
      <div className="w-full mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-8">
            <FadeInStagger className="space-y-6">
              <FadeItem>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">
                  Connect with our leadership
                </span>
              </FadeItem>

              <FadeItem>
                <h2 className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] ${theme.text.brand}`}>
                  Strategic guidance for your <br />
                  <span className="text-slate-400">next move.</span>
                </h2>
              </FadeItem>

              <FadeItem>
                <p className={`text-lg md:text-xl max-w-2xl leading-relaxed ${theme.text.muted}`}>
                  Skip the queue. Connect directly with our strategic partners to 
                  discuss high-level growth operations across the globe.
                </p>
              </FadeItem>
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}