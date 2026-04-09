import { theme } from "@/lib/theme";
import FinanceIntro from "@/components/finance/FinanceIntro";
import NoticeBanner from "@/components/finance/NoticeBanner";
import FunctionalDisciplines from "@/components/finance/FunctionalDisciplines";
import ProtocolStability from "@/components/finance/ProtocolStabilty";
import FinalCTA from "@/components/finance/FinalCTA";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      
      {/* Hero Section - Animates immediately */}
      <FadeInStagger>
        <FadeItem>
          <FinanceIntro />
        </FadeItem>
      </FadeInStagger>

      {/* Notice Banner - Animates when scrolled to */}
      <FadeInStagger>
        <FadeItem>
          <NoticeBanner />
        </FadeItem>
      </FadeInStagger>
      
      {/* Main Content - Animates when scrolled to */}
      <FadeInStagger>
        <FadeItem>
          <FunctionalDisciplines />
        </FadeItem>
      </FadeInStagger>

      {/* Technical/Stability Section */}
      <FadeInStagger>
        <FadeItem>
          <ProtocolStability />
        </FadeItem>
      </FadeInStagger>
      
      {/* Closing Section */}
      <FadeInStagger>
        <FadeItem>
          <FinalCTA />
        </FadeItem>
      </FadeInStagger>
      
    </main>
  );
}