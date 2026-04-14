import { theme } from "@/lib/theme";
import HRHero from "@/components/hr/services/HrHero";
import StructuralHero from "@/components/hr/structure/StructuralHero";
import ClusterDetails from "@/components/hr/structure/ClusterDetails";
import PricingGrid from "@/components/hr/structure/PricingGrid";
import StrategicNotes from "@/components/hr/structure/StrategicNotes";
import GermanyOperations from "@/components/hr/structure/GermanOperations";
import GermanyValueBlocks from "@/components/hr/structure/GermanyValueBlocks";
import GermanyCTA from "@/components/hr/structure/GermanyCTA";


export default function HRPage() {
  return (
    <main className="flex flex-col w-full"  >
      <StructuralHero />
      <ClusterDetails />
      <PricingGrid />
      <StrategicNotes />
      <GermanyOperations />
      <GermanyValueBlocks />
      <GermanyCTA />
    </main>
  );
}