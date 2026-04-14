import ArchitectCTA from "@/components/hr/architecture/ArchitectCTA";
import GermanOperationalExcellence from "@/components/hr/architecture/GermanOperationalExellence";
import GlobalHero from "@/components/hr/architecture/GlobalHero";
import IndiaStrategicCluster from "@/components/hr/architecture/IndiaStrategicCluster";
import WhyArshanHR from "@/components/hr/architecture/WhyArshanHR";
import { theme } from "@/lib/theme";


export default function HRArchitecturePage() {
  return (
    <main className="flex flex-col w-full"  >
        <GlobalHero />
        <IndiaStrategicCluster />
        <GermanOperationalExcellence />
        <WhyArshanHR />
        <ArchitectCTA />
    </main>
  );
}