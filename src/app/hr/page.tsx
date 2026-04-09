import { theme } from "@/lib/theme";
import HRHero from "@/components/hr/HrHero";

import IndiaTalentNexus from "@/components/hr/IndiaTalentNexus";
import PayrollSystems from "@/components/hr/PayRollSystem";
import ManagementEcosystem from "@/components/hr/ManagementEcosystem";
import HRContactCTA from "@/components/hr/HrContactCTA";
export default function AboutPage() {
  return (
    <main className="flex flex-col w-full"  >
      <HRHero />
      <IndiaTalentNexus />  
      <PayrollSystems />
      <ManagementEcosystem />
      <HRContactCTA />  

    </main>
  );
}