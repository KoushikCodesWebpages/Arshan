import { theme } from "@/lib/theme";

export default function MarketingFinalCTA() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="w-full mx-auto px-28 text-center">
        <div className="space-y-8">
          
          {/* Headline matches Finance styling for brand unity */}
          <h2 className={`text-5xl md:text-6xl font-bold tracking-tight ${theme.text.brand}`}>
            Ready to scale?
          </h2>

          <p className={`text-lg md:text-xl leading-relaxed ${theme.text.muted} max-w-2xl mx-auto`}>
            Partner with Arshan for professional social media management that 
            transforms your digital presence into a consistent, high-authority brand asset.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              className={`text-xs ${theme.buttons.primary} min-w-[240px] py-4 shadow-xl hover:shadow-primary/20 transition-all`}
            >
              REQUEST ACCOUNT AUDIT
            </button>
            
            <button 
              className="min-w-[200px] py-4 border border-primary text-primary font-bold text-xs tracking-widest uppercase hover:bg-slate-50 transition-colors"
            >
              OUR CASE STUDIES
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}