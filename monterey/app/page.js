import CorePrinciples from "@/components/CorePrinciples";
import CtaBanner from "@/components/CtaBanner";
import FirstPrinciples from "@/components/FirstPrinciples";
import Hero from "@/components/Hero";
import LiveFundPerformance from "@/components/LiveFundPerformance";
import ModelsMethodology from "@/components/ModelsMethodology";
import ResearchLab from "@/components/ResearchLab";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="figma-frame flex min-h-full flex-1 flex-col bg-background text-foreground">
      <Hero />
      <div className="below-hero">
        <FirstPrinciples />
        <LiveFundPerformance />
        <ResearchLab />
        <ModelsMethodology />
        <CorePrinciples />

        <main className="flex-1">
          <section id="universe" className="mx-auto w-full max-w-[1297px] scroll-mt-24 px-6 py-16 md:px-10">
            <h2 className="font-display text-3xl md:text-[40px]">Universe</h2>
            <Reveal className="mt-4 max-w-3xl leading-[1.32] text-white/85">
              Phase 1 defines a documented Sharia-compliant stock universe with compliance rules applied before any strategy is tested.
            </Reveal>
          </section>
        </main>

        <CtaBanner />
        <SiteFooter />
      </div>
    </div>
  );
}
