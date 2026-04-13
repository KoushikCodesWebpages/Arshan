import { theme } from "@/lib/theme";
import FinanceIntro from "@/components/finance/services/FinanceIntro";
import NoticeBanner from "@/components/finance/services/NoticeBanner";
import FunctionalDisciplines from "@/components/finance/services/FunctionalDisciplines";
import ProtocolStability from "@/components/finance/services/ProtocolStabilty";
import FinalCTA from "@/components/finance/services/FinalCTA";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      
      {/* Hero Section - Animates immediately */}

          <FinanceIntro />


      {/* Notice Banner - Animates when scrolled to */}

          <NoticeBanner />

      
      {/* Main Content - Animates when scrolled to */}

          <FunctionalDisciplines />


      {/* Technical/Stability Section */}

          <ProtocolStability />

      
      {/* Closing Section */}

          <FinalCTA />


      
    </main>
  );
}