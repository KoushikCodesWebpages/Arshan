import { theme } from "@/lib/theme";
import HRHero from "@/components/hr/services/HrHero";

import IndiaTalentNexus from "@/components/hr/services/IndiaTalentNexus";
import PayrollSystems from "@/components/hr/services/PayRollSystem";
import ManagementEcosystem from "@/components/hr/services/ManagementEcosystem";
import HRContactCTA from "@/components/hr/services/HrContactCTA";
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