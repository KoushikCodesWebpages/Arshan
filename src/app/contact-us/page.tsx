import ContactStrategySection from "@/components/contact-us/ContactStrategySection";
import LeadershipConnect from "@/components/contact-us/LeadershipConnect";
import { theme } from "@/lib/theme";


export default function ContactUsPage() {
  return (
    <main className="flex flex-col w-full">
      <LeadershipConnect />
      <ContactStrategySection />
    </main>
  );
}