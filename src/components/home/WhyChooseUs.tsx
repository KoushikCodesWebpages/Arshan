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
    <section className="py-32 bg-white overflow-hidden">
        <div className="w-full mx-auto px-28">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <FadeInStagger className="space-y-10">
                <div className="space-y-4">
                  <FadeItem>
                    <h2 className={`text-3xl md:text-5xl font-bold ${theme.text.brand}`}>
                        Why Choose us?
                    </h2>
                  </FadeItem>

                  <FadeItem>
                    <p className={`text-secondary text-[18px]  font-medium leading-snug w-[90%]`}>
                        We specialize in building the high-performance foundations that
                        propel newly established SMBs. Our methodology combines modern
                        regulatory agility with global talent advantages to scale your
                        vision from day one.
                    </p>
                  </FadeItem>
                </div>

                {/* Features */}
                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {features.map((feature, index) => (
                    <FadeItem key={index} className="flex gap-4">
                    <feature.icon className="w-6 h-6 text-primary mt-1" strokeWidth={2.5} />
                    <div>
                        <h3 className={`font-bold text-lg ${theme.text.main}`}>
                        {feature.title}
                        </h3>
                        <p className={`w-[80%] text-sm mt-1 leading-snug font-medium text-secondary`}>
                        {feature.description}
                        </p>
                    </div>
                    </FadeItem>
                ))}
                </FadeInStagger>
            </FadeInStagger>

            {/* Right Image */}
            <FadeInStagger className="w-full">
                <FadeItem className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Subtle Brand Overlay to match Hero/Intro style */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none" />
                  
                  <Image
                      src={home2}
                      alt="Strategic planning"
                      width={800}
                      height={600}
                      className="w-full h-125 object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Lens/Vignette Overlay for depth consistency */}
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] mix-blend-multiply z-10" />
                </FadeItem>
            </FadeInStagger>

            </div>
        </div>
        </section>
  );
}