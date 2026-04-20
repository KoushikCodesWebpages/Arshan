"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { 
  Building2, 
  LineChart, 
  Users2, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const services = [
  {
    title: "Financial Management & Bookkeeping",
    description: "Secure your company's future with precise financial, professional bookkeeping, and advanced tax optimization strategies tailored for the European market.",
    icon: Building2,
    highlights: ["Monthly Financial Reporting", "Cash Flow Optimization"],
    linkText: "Explore Financial Services",
    href: "/finance/"
  },
  {
    title: "Data-Driven Marketing & Brand Strategy",
    description: "Boost your brand awareness with integrated marketing solutions. We specialize in social media management, SEO content production, and high-conversion digital advertising.",
    icon: LineChart,
    highlights: ["Social Media Strategy", "Multi-Channel Campaigns"],
    linkText: "View Marketing Solutions",
    href: "/marketing/"
  },
  {
    title: "Strategic HR & Global Talent Solutions",
    description: "Modernize your workforce with scalable payroll management, rigorous HR compliance audits, and offshore talent acquisition from our high-performance hubs in India.",
    icon: Users2,
    highlights: ["Digital Employee Management", "Global Recruiting Pipeline"],
    linkText: "See HR Capabilities",
    href: "/hr/"
  }
];

export default function ServicePillars() {
  return (
    /* py-16 (Mobile) -> md:py-20 (PC) */
    <section id="pillars" className="scroll-mt-8 py-16 md:py-20 bg-background overflow-hidden">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* Header: text-center (Mobile) -> md:text-left (PC) */}
        <FadeInStagger className="mb-12 md:mb-16 space-y-4 text-center md:text-left">
          <FadeItem>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme.text.brand}`}>
              Our Core Service Pillars
            </h2>
          </FadeItem>
          <FadeItem>
            {/* mx-auto (Mobile) -> md:mx-0 (PC) */}
            <p className={`max-w-2xl text-md font-medium text-secondary mx-auto md:mx-0`}>
              Comprehensive business infrastructure designed for performance, growth and further visibilty.
            </p>
          </FadeItem>
        </FadeInStagger>

        {/* Cards Grid: Stays 1 column on mobile, moves to 3 columns on md (768px+) */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <FadeItem key={index} className="h-full">
              <div 
                className={`${theme.cards.base} p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full`}
              >
                {/* Icon Header: justify-center (Mobile) -> md:justify-start (PC) */}
                <div className="mb-6 md:mb-8 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content: text-center (Mobile) -> md:text-left (PC) */}
                <div className="space-y-4 flex-1 text-center md:text-left">
                  {/* Changed w-[80%] to w-full for mobile to prevent narrow text columns */}
                  <h3 className={`w-full md:w-[80%] text-xl md:text-2xl font-bold leading-tight ${theme.text.main}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm lg:text-md leading-relaxed font-medium text-secondary`}>
                    {service.description}
                  </p>

                  {/* Highlights: items-center (Mobile) -> items-start (PC) */}
                  <ul className="space-y-3 pt-4 inline-block md:block text-left">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-tertiary shrink-0" />
                        <span className={`text-sm font-medium ${theme.text.main}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link: justify-center (Mobile) -> md:justify-start (PC) */}
                <div className="mt-8 md:mt-10 pt-6 border-t border-border-light">
                  <a 
                    href={service.href} 
                    className={`flex items-center justify-center md:justify-start gap-2 text-sm font-bold ${theme.text.brand} hover:gap-3 transition-all`}
                  >
                    {service.linkText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}