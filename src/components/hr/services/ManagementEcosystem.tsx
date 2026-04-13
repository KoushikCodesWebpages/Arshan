"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function ManagementEcosystem() {
  const steps = [
    {
      number: "01",
      title: "Strategic Talent Acquisition",
      desc: "We don't just fill seats; we architect roles. Our hiring process identifies candidates who possess the technical aptitude and cultural alignment necessary for long-term integration into your firm.",
    },
    {
      number: "02",
      title: "Lifecycle Employee Care",
      desc: "From first-day onboarding to ongoing performance management, Arshan provides the human touch in a digital-first global environment, ensuring high retention and morale.",
    },
    {
      number: "03",
      title: "Regulatory Shielding",
      desc: "Arshan acts as the legal employer of record (EOR) in India, absorbing all liability related to local labor contracts, benefits administration, and statutory filings.",
    },
  ];

  return (
    <section className="py-24 ">
      <div className="w-full mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <FadeInStagger>
              <FadeItem>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-[1.1] tracking-tight">
                  Comprehensive <br />
                  Management <br />
                  Ecosystem
                </h2>
              </FadeItem>
            </FadeInStagger>
          </div>

          {/* Right Column: Numbered List */}
          <div className="lg:col-span-7">
            <FadeInStagger className="flex flex-col space-y-16">
              {steps.map((step, index) => (
                <FadeItem key={index} className="flex gap-8 lg:gap-12">
                  {/* Large Stylized Number */}
                  <span className="text-primary/10 text-6xl lg:text-7xl font-bold  select-none leading-none -mt-2">
                    {step.number}
                  </span>

                  <div className="flex flex-col space-y-3">
                    <h3 className="text-2xl font-bold text-primary tracking-tight">
                      {step.title}
                    </h3>
                    <p className={`${theme.text.muted} text-lg leading-relaxed max-w-xl`}>
                      {step.desc}
                    </p>
                  </div>
                </FadeItem>
              ))}
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}