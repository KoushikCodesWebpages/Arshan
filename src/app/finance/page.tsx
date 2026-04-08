import { theme } from "@/lib/theme";
import FinanceIntro from "@/components/finance/FinanceIntro";
import NoticeBanner from "@/components/finance/NoticeBanner";
import FunctionalDisciplines from "@/components/finance/FunctionalDisciplines";
import ProtocolStability from "@/components/finance/ProtocolStabilty";
import FinalCTA from "@/components/finance/FinalCTA";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <FinanceIntro />
      <NoticeBanner />
      <FunctionalDisciplines />
      <ProtocolStability />
      <FinalCTA />

    </main>

  );
}