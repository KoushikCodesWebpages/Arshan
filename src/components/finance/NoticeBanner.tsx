import { theme } from "@/lib/theme";

export default function NoticeBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-28">
        <div className="relative bg-neutral border border-border-light rounded-sm p-8 md:p-10 flex items-start gap-6">
          
          {/* Vertical Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary" />

          <div className="space-y-2">
            <h4 className={`text-xs font-bold uppercase tracking-widest ${theme.text.brand}`}>
              Notice of Services
            </h4>
            <p className={`text-base italic leading-loose ${theme.text.muted}`}>
            Arshan Consulting Group provides administrative bookkeeping and financial record management.
           
            We are not a licensed accounting firm and do not provide audit, tax, or legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}