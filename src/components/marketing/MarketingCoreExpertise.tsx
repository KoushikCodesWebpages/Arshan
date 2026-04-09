import { theme } from "@/lib/theme";
import { Share2, BookOpen, ShieldCheck } from "lucide-react";

const expertise = [
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    icon: Share2,
    description: "Comprehensive management of your social profiles including regular posting, active engagement, and organic platform growth.",
    points: ["REGULAR DAILY POSTING", "COMMUNITY ENGAGEMENT", "ORGANIC GROWTH STRATEGY"]
  },
  {
    title: "CONTENT STRATEGY",
    icon: BookOpen,
    description: "Planning and scheduling relevant, high-impact content that aligns with your brand's voice and resonates with your target audience.",
    points: ["EDITORIAL CALENDARS", "VISUAL STORYTELLING", "CONTENT SCHEDULING"]
  },
  {
    title: "ACCOUNT MAINTENANCE",
    icon: ShieldCheck,
    description: "Ensuring a consistent and professional brand presence. We handle profile optimization, security, and aesthetic continuity across all channels.",
    points: ["PROFILE OPTIMIZATION", "BRAND CONSISTENCY", "PLATFORM SYNCING"]
  }
];

export default function MarketingCoreExpertise() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-28">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="space-y-4">
            <h2 className={`text-5xl font-bold ${theme.text.brand}`}>
              Our Core Expertise.
            </h2>
            <p className={`${theme.text.muted} max-w-xl text-lg`}>
              End-to-end social media solutions designed to maintain a consistent, 
              professional brand presence across all major digital channels.
            </p>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">
            Services / 01-03
          </span>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-3 border border-slate-100 rounded-sm">
          {expertise.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 space-y-8 transition-colors hover:bg-slate-50/50 
                ${index !== expertise.length - 1 ? 'border-b md:border-b-0 md:border-r border-slate-100' : ''}`}
            >
              <item.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              
              <div className="space-y-4">
                <h3 className={`text-lg font-bold tracking-tight ${theme.text.brand}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed opacity-80 ${theme.text.muted}`}>
                  {item.description}
                </p>
              </div>

              <ul className="space-y-3">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-tertiary rounded-full" />
                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}