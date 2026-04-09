"use client";

import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function PayrollSystems() {
  const features = [
    { title: "Lexware Sync", desc: "Seamless integration with your existing Lexware payroll workflows.", icon: "⚙️" },
    { title: "Treasury Grade", desc: "Financial security protocols that meet international banking standards.", icon: "🏛️" },
    { title: "Real-time Data", desc: "Instant reporting and automated salary distribution across borders.", icon: "📈" },
    { title: "Employee Portal", desc: "Self-service dashboard for employees to manage documents.", icon: "👥" },
  ];

  const checklist = [
    "Automated Lexware Data Export/Import",
    "Local Tax Compliance & Deductions",
    "Multi-currency Settlement Logic",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-28 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: 2x2 Feature Grid */}
          <div className="lg:col-span-6">
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <FadeItem key={i}>
                  <div className={`${theme.ui.card} p-8 h-full hover:shadow-md transition-shadow duration-300 border-border-light`}>
                    <div className="mb-4 text-primary text-xl">
                      {/* Using text icons for now, but you can swap for SVGs */}
                      <span className="opacity-80">{f.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2 tracking-tight">
                      {f.title}
                    </h4>
                    <p className={`${theme.text.muted} text-sm leading-relaxed`}>
                      {f.desc}
                    </p>
                  </div>
                </FadeItem>
              ))}
            </FadeInStagger>
          </div>

          {/* Right: Content Section */}
          <div className="lg:col-span-6">
            <FadeInStagger>
              <FadeItem>
                <span className={`uppercase tracking-[0.2em] text-xs font-bold ${theme.brand.accent} mb-4 block`}>
                  Systems Integration
                </span>
              </FadeItem>

              <FadeItem>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
                  Payroll Without Borders.
                </h2>
              </FadeItem>

              <FadeItem>
                <p className={`${theme.text.main} text-lg mb-10 leading-relaxed opacity-90`}>
                  Arshan bridges the gap between international employment and local financial systems. 
                  Our Lexware-enabled payroll module ensures that your team in India is paid 
                  with the same precision and punctuality as your domestic office.
                </p>
              </FadeItem>

              {/* Checklist */}
              <FadeItem>
                <ul className="space-y-4">
                  {checklist.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-tertiary rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <span className="text-primary font-semibold text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeItem>
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}