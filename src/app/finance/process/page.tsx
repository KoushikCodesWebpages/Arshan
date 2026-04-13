import FinalFiscalCTA from "@/components/finance/process/FinalFiscalCTA";
import FinanceProcessSteps from "@/components/finance/process/FinanceProcessSteps";
import FiscalClarity from "@/components/finance/process/FiscalClarity";
import TransparencyBanner from "@/components/finance/process/TransparencyBanner";

export default function FinanceProcess() {
  return (
    <main className="flex flex-col w-full">
      <FiscalClarity />
      <FinanceProcessSteps />
      <TransparencyBanner />
      <FinalFiscalCTA />
      
    </main>
  );
}