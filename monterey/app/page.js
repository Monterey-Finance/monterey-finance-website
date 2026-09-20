import Image from "next/image";
import FirstPrinciples from "@/components/FirstPrinciples";
import Hero from "@/components/Hero";
import LiveFundPerformance from "@/components/LiveFundPerformance";
import ResearchLab from "@/components/ResearchLab";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="figma-frame flex min-h-full flex-1 flex-col bg-background text-foreground">
      <Hero />
      <div className="below-hero">
        <FirstPrinciples />
        <LiveFundPerformance />
        <ResearchLab />

        <main className="flex-1">
          <section id="universe" className="mx-auto w-full max-w-[1297px] scroll-mt-24 px-6 py-16 md:px-10">
            <h2 className="font-display text-3xl md:text-[40px]">Universe</h2>
            <p className="mt-4 max-w-3xl leading-[1.32] text-white/85">
              Phase 1 defines a documented Sharia-compliant stock universe with compliance rules applied before any strategy is tested.
            </p>
          </section>

          <section id="strategies" className="mx-auto w-full max-w-[1297px] scroll-mt-24 px-6 py-16 md:px-10">
            <h2 className="font-display text-3xl md:text-[40px]">Strategies</h2>
            <p className="mt-4 max-w-3xl leading-[1.32] text-white/85">
              Strategies are specified with clear entry, exit, and risk rules, then backtested on historical market data with standard performance metrics.
            </p>
          </section>
        </main>

        <footer className="mt-auto border-t border-white/10">
          <div className="mx-auto flex w-full max-w-[1704px] flex-col gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">
            <div className="max-w-xl">
              <Image
                src={site.logo.src}
                alt={site.logo.alt}
                width={site.logo.width}
                height={site.logo.height}
                className="h-10 w-auto"
              />
              <p className="mt-4 text-sm leading-[1.48] text-white/80">{site.shortDescription}</p>
            </div>
            <p className="text-sm text-muted">© {new Date().getFullYear()} {site.name}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
