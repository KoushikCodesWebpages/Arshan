import Image from "next/image";
import { theme } from "@/lib/theme";

export default function MarketingIntro() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="w-full mx-auto px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className={`uppercase tracking-widest text-[10px] font-bold ${theme.text.brand} opacity-70 border-l-2 border-tertiary pl-3`}>
                Elevate Your Digital Presence
              </span>
              
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] ${theme.text.brand}`}>
                Professional <br />
                Social Media <br />
                Management.
              </h2>
              
              <p className={`text-lg leading-relaxed max-w-xl ${theme.text.muted}`}>
                We manage your brand&apos;s digital narrative through consistent 
                posting, strategic scheduling, and professional account 
                maintenance. Build authority and scale your influence.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-2">
            <button className="bg-primary text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest rounded-sm hover:opacity-90 transition">
            View Services
            </button>
              
              <button className="px-12 py-3 border border-primary text-primary font-semibold text-sm rounded-sm hover:bg-primary/5 transition-colors">
                Our Pricing
              </button>
            </div>
          </div>

          {/* Right Side: Cinematic Image Card */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-137.5 aspect-square mx-auto">
              
              {/* Outer Glow / Shadow */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />

              {/* The Image Container with Lens Effects */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" // Representing digital flow/social data
                  alt="Digital Presence Visualization"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 blur-[1px] group-hover:blur-0"
                />

                {/* 1. THE "HOLE": Central clarity and deep vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.85)_100%)] mix-blend-multiply" />

                {/* 2. CYAN LIGHT LEAK: Matching the image's palette */}
                <div className="absolute inset-0 mix-blend-screen opacity-40 bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,255,0.3)_0%,transparent_50%)]" />

                {/* 3. CHROMATIC ABERRATION: Prismatic artifacts */}
                <div className="absolute inset-0 mix-blend-screen opacity-20 bg-[linear-gradient(135deg,transparent_20%,rgba(0,255,255,0.2)_30%,transparent_40%,rgba(255,0,255,0.1)_60%,transparent_70%)]" />

                {/* 4. DUST & GRAIN */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                {/* Card Polish */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}