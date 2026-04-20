"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { 
  ShieldCheck, 
  Rocket, 
  Globe, 
  BarChart3 
} from "lucide-react"; 
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import home2 from '../../../public/home2.svg';

const features = [
  {
    title: "HGB Compliance",
    description: "Expert adherence to German Commercial Code standards.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Tech Stack",
    description: "Future-proof digital workflows designed for rapid growth and agility.",
    icon: Rocket,
  },
  {
    title: "India-Based Talent",
    description: "Access to elite technical and creative skillsets at scale.",
    icon: Globe,
  },
  {
    title: "Scalable Infrastructure",
    description: "Systems designed to grow from 10 to 500+ employees.",
    icon: BarChart3,
  },
];

export default function WhyChooseUs() {
  return (
    /* py-16 (Mobile) -> md:py-32 (PC) */
    <section className="py-16 md:py-32 bg-white overflow-hidden">
        {/* px-6 (Mobile) -> md:px-28 (PC) */}
        <div className="w-full mx-auto px-6 md:px-28">

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Left Content: text-center (Mobile) -> lg:text-left (PC) */}
            <FadeInStagger className="space-y-10 text-center lg:text-left">
                <div className="space-y-4">
                  <FadeItem>
                    <h2 className={`text-3xl md:text-5xl font-bold ${theme.text.brand}`}>
                        Why Choose us?
                    </h2>
                  </FadeItem>

                  <FadeItem>
                    {/* Removed w-[90%] fixed width for better mobile flow; mx-auto centers it */}
                    <p className={`text-secondary text-[16px] md:text-[18px] font-medium leading-snug lg:w-[90%] mx-auto lg:mx-0`}>
                        We specialize in building the high-performance foundations that
                        propel newly established SMBs. Our methodology combines modern
                        regulatory agility with global talent advantages to scale your
                        vision from day one.
                    </p>
                  </FadeItem>
                </div>

                {/* Features: gap-y-8 (Mobile) -> gap-y-12 (PC) */}
                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12 text-left">
                {features.map((feature, index) => (
                    <FadeItem key={index} className="flex gap-4 items-start">
                    <feature.icon className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={2.5} />
                    <div>
                        <h3 className={`font-bold text-lg ${theme.text.main}`}>
                        {feature.title}
                        </h3>
                        {/* Adjusted w-[80%] to w-full for mobile clarity */}
                        <p className={`w-full lg:w-[80%] text-sm mt-1 leading-snug font-medium text-secondary`}>
                        {feature.description}
                        </p>
                    </div>
                    </FadeItem>
                ))}
                </FadeInStagger>
            </FadeInStagger>

            {/* Right Image Container */}
            <FadeInStagger className="w-full mt-8 lg:mt-0">
                <FadeItem className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none" />
                  
                  <Image
                      src={home2}
                      alt="Strategic planning"
                      width={800}
                      height={600}
                      /* h-80 (Mobile) -> md:h-125 (PC) */
                      className="w-full h-80 md:h-125 object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] mix-blend-multiply z-10" />
                </FadeItem>
            </FadeInStagger>

            </div>
        </div>
        </section>
  );
}