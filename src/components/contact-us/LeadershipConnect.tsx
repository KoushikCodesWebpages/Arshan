"use client";

import React from "react";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";

export default function LeadershipConnect() {
  return (
    <section className="py-20 border-t border-slate-100">
      <div className="w-full mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-8">
            <FadeInStagger className="space-y-8">
              <FadeItem>
                {/* Bumped from 10px to 12px for better readability at px-28 scale */}
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-tertiary">
                  Connect with our leadership
                </span>
              </FadeItem>

              <FadeItem>
                {/* Main heading scale maintained as it was already quite large, 
                    but refined leading for the split line */}
                <h2 className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] ${theme.text.brand}`}>
                  Strategic guidance for your next move.
                </h2>
              </FadeItem>

              <FadeItem>
                {/* Increased from text-lg/xl to text-xl/2xl */}
                <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${theme.text.muted}`}>
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