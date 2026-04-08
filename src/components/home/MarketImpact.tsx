import { theme } from "@/lib/theme";

const stats = [
  {
    value: "99.8%",
    label: "COMPLIANCE RATE",
  },
  {
    value: "€2.4B",
    label: "MANAGED ASSETS",
  },
  {
    value: "15+",
    label: "GLOBAL MARKETS",
  },
];

export default function MarketImpact() {
  return (
    <section className="py-20 bg-white ">
      <div className="w-full mx-auto px-28">

        <div className="grid lg:grid-cols-4 gap-10 items-center">

          {/* Left Text */}
          <div className="space-y-3">
            <p className="text-xs tracking-widest text-tertiary font-semibold uppercase">
              Market Impact
            </p>

            <h3 className={`text-2xl font-semibold ${theme.text.main}`}>
              Proven results across global industries.
            </h3>
          </div>

          {/* Stats */}
          {stats.map((stat, index) => (
            <div key={index} className="text-left lg:text-center">

              <div className={`text-3xl font-bold ${theme.text.brand}`}>
                {stat.value}
              </div>

              <p className="text-xs mt-2 tracking-widest text-text-muted uppercase">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}