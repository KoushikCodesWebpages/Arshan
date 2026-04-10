import { theme } from "@/lib/theme";
import AboutIntegrity from "@/components/about-us/About-Integrity";
import MissionStatement from "@/components/about-us/MissionStatement";
import Philosophy from "@/components/about-us/Philosophy";
import ExecutiveCouncil from "@/components/about-us/ExecutiveCouncil";
import LegacyCTA from "@/components/about-us/LegacyCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <AboutIntegrity />
      <MissionStatement />
      <Philosophy />
      <ExecutiveCouncil />
      <LegacyCTA />
    </main>
  );
}