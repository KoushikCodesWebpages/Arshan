import { theme } from "@/lib/theme";
import HRHero from "@/components/hr/HrHero";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <FadeInStagger>
        <FadeItem>
          <HRHero />
          
        </FadeItem>
      </FadeInStagger>
    </main>
  );
}