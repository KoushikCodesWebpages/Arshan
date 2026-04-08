import { theme } from "@/lib/theme";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container w-full mx-auto px-28 text-center ">
        <div className="space-y-8">
          
          {/* Main Heading */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${theme.text.brand}`}>
            Ready to secure your fiscal foundation?
          </h2>

          {/* Supporting Subtext */}
          <p className={`text-lg md:text-xl leading-relaxed ${theme.text.muted} max-w-2xl mx-auto`}>
            Join the organizations that trust Arshan for architectural-grade 
            financial record management.
          </p>

          {/* Final Conversion Button */}
          <div className="pt-6">
            <button 
              className={`${theme.buttons.primary} px-10 py-4 text-lg rounded-sm transition-transform hover:scale-105 active:scale-95`}
            >
              Schedule a Consultation
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}