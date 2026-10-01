"use client";

import Link from "next/link";
import {
  attribution,
  books,
  calendarYears,
  credits,
  examples,
  fcfPaper,
  findings,
  friction,
  levers,
  limits,
} from "@/lib/research";
import EnsembleFan from "@/components/research/EnsembleFan";
import EquityScene from "@/components/research/EquityScene";
import FunnelScene from "@/components/research/FunnelScene";
import ProgressBar from "@/components/research/ProgressBar";
import QuintileScene from "@/components/research/QuintileScene";
import ResearchNav from "@/components/research/ResearchNav";
import SectorScene from "@/components/research/SectorScene";
import SketchFilters from "@/components/research/SketchFilters";

function Arrow() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
      <path
        d="M2 9L9 2M9 2H3.5M9 2V7.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Reading({ children }) {
  return (
    <div className="mx-auto max-w-[640px] px-5 py-16 text-[19px] leading-[1.55] md:px-8 md:py-24 md:text-[21px]">
      {children}
    </div>
  );
}

function MosaicFrame({ children }) {
  return (
    <div className="relative mx-auto my-8 max-w-[920px] px-5 md:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[12px] opacity-80"
        aria-hidden
      >
        <div
          className="grid h-full gap-[3px] p-2"
          style={{ gridTemplateColumns: "repeat(16, minmax(0, 1fr))" }}
        >
          {Array.from({ length: 96 }, (_, i) => (
            <div
              key={i}
              className="aspect-square rounded-[2px]"
              style={{
                background:
                  i % 7 === 0
                    ? "var(--augmented)"
                    : i % 5 === 0
                      ? "var(--modest)"
                      : "var(--unchanged)",
                opacity: 0.35 + ((i * 17) % 40) / 100,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative px-6 py-16 text-center md:px-16 md:py-24">
        {children}
      </div>
    </div>
  );
}

export default function CashGenerationStory() {
  return (
    <div className="research-root paper-grid relative pt-[72px]">
      <SketchFilters />
      <ProgressBar />
      <ResearchNav current={fcfPaper.href} />

      <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <EnsembleFan className="pointer-events-none absolute inset-x-0 top-8 h-[320px] w-full md:h-[420px]" />
        <div className="relative mx-auto grid max-w-[1240px] items-end gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="research-ui text-[13px] uppercase tracking-[0.16em] text-[color:var(--ink)]/50">
              Paper 01 · {fcfPaper.version} · {fcfPaper.date}
            </p>
            <h1 className="font-display mt-4 max-w-[18ch] text-[40px] leading-[1.05] tracking-[-0.01em] md:text-[64px]">
              {fcfPaper.question}
            </h1>
          </div>
          <div className="max-w-[420px] justify-self-end">
            <p className="text-[18px] leading-[1.5] md:text-[20px]">
              After banned businesses and AAOIFI debt limits, keep names that turn a large share of sales into free cash flow. Own them in proportion to size. This page is a reading of that backtest — not a forecast, and not a live-return target.
            </p>
            <div className="research-ui mt-6 flex flex-wrap gap-3 text-[14px]">
              <a href={fcfPaper.pdf} target="_blank" rel="noopener noreferrer" className="ghost-pill">
                Read technical report
                <Arrow />
              </a>
              <a href="#explorer" className="ink-pill">
                Jump to findings
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
        <p className="research-ui relative mt-16 text-center text-[13px] text-[color:var(--ink)]/45">
          Scroll to read
        </p>
      </section>

      <Reading>
        <p className="drop-cap">
          Cash generation is a quality signal. Free cash flow is cash from operations minus capital spending. FCF margin is that cash divided by sales. A high margin means the business turns a large share of revenue into cash after reinvestment. That is not the same as cheapness.
        </p>
        <p className="mt-6">
          Islamic equity screens add a second filter. AAOIFI caps interest-bearing debt, cash, and receivables relative to market value, and a separate activity screen removes banks, conventional insurance, alcohol, tobacco, gambling, and weapons. The hope is that those caps already strip out highly indebted firms, so that among what remains, cash generation is a cleaner quality signal.
        </p>
        <p className="mt-6">
          That hope is not automatic. The screens change the sector mix. Any backtest that looks good after them may simply be riding the same mega-cap platform names that dominated 2023 and 2024.
        </p>
      </Reading>

      <MosaicFrame>
        <h2 className="font-display text-[32px] leading-tight tracking-[-0.01em] md:text-[44px]">
          How a Halal quality book is built
        </h2>
      </MosaicFrame>

      <FunnelScene />

      <Reading>
        <p>
          The original design ranked Halal names by cheapness: free cash flow divided by enterprise value. That book missed Apple and Nvidia and lost to SPUS in the same window. The live rule dropped cheapness. It keeps cash generation, then cap-weights.
        </p>
        <p className="mt-6">
          That rewrite used 2023–2024, so the headline results are partly in-sample. I keep that fact in view throughout.
        </p>
      </Reading>

      <section className="mx-auto grid max-w-[1040px] gap-4 px-5 py-8 md:grid-cols-2 md:px-8">
        {examples.map((ex) => (
          <article key={ex.ticker} className="research-card px-5 py-5">
            <p className="research-ui text-[12px] uppercase tracking-[0.14em] text-[color:var(--ink)]/45">
              {ex.status === "kept" ? "Held" : "Not bought"}
            </p>
            <h3 className="research-ui mt-1 text-[22px] font-bold">{ex.ticker}</h3>
            <p className="mt-2 text-[17px] leading-[1.45] text-[color:var(--ink)]/85">{ex.note}</p>
          </article>
        ))}
      </section>

      <MosaicFrame>
        <h2 className="font-display text-[32px] leading-tight tracking-[-0.01em] md:text-[44px]">
          Three books, one window
        </h2>
      </MosaicFrame>

      <EquityScene />

      <section id="explorer" className="scroll-mt-24">
        <MosaicFrame>
          <h2 className="font-display text-[32px] leading-tight tracking-[-0.01em] md:text-[44px]">
            What the two years actually show
          </h2>
        </MosaicFrame>
      </section>

      <FindingBlock finding={findings[0]}>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[books.fcf, books.spus, books.spy].map((row) => (
            <div key={row.id} className="research-card px-5 py-5">
              <p className="research-ui text-[12px] uppercase tracking-[0.12em] text-[color:var(--ink)]/45">
                {row.short}
              </p>
              <p className="research-ui mt-2 text-[42px] font-bold leading-none" style={{ color: row.color }}>
                {row.cagr.toFixed(1)}%
              </p>
              <p className="research-ui mt-2 text-[13px] text-[color:var(--ink)]/55">
                CAGR · max DD {row.maxDd}%
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[15px]">
            <caption className="research-ui sr-only">Calendar-year total returns</caption>
            <thead className="research-ui text-[12px] uppercase tracking-[0.12em] text-[color:var(--ink)]/45">
              <tr>
                <th className="py-2 font-medium">Year</th>
                <th className="py-2 font-medium">FCF quality</th>
                <th className="py-2 font-medium">S&P 500</th>
                <th className="py-2 font-medium">SPUS</th>
              </tr>
            </thead>
            <tbody>
              {calendarYears.map((row) => (
                <tr key={row.year} className="border-t border-[color:var(--card-border)]">
                  <td className="py-3">{row.year}</td>
                  <td className="py-3 font-semibold">{row.fcf.toFixed(1)}%</td>
                  <td className="py-3">{row.spy.toFixed(1)}%</td>
                  <td className="py-3">{row.spus.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FindingBlock>

      <QuintileScene />

      <FindingBlock finding={findings[1]} />

      <SectorScene />

      <FindingBlock finding={findings[2]}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <StatCard label="Alpha vs SPY" value={`${attribution.spy.alpha}%`} note={`β ${attribution.spy.beta} · R² ${attribution.spy.r2}`} />
          <StatCard label="Alpha vs SPUS" value={`${attribution.spus.alpha}%`} note={`β ${attribution.spus.beta} · R² ${attribution.spus.r2}`} />
        </div>
      </FindingBlock>

      <FindingBlock finding={findings[3]}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <StatCard label="Turnover, annualized" value={`${friction.turnover}%`} note="First build included. Later months often a few percent." />
          <StatCard label="Cost drag at 10 bp" value={`${friction.costDrag}%`} note={`Net CAGR ${friction.cagrNet}%`} />
          <StatCard label="Purification drag" value={`${friction.purification}%`} note="Lower bound on available tags." />
          <StatCard label="Rebalances with holdings" value={`${friction.rebalances}`} note={`Average names ${friction.avgNames}`} />
        </div>
      </FindingBlock>

      <Reading>
        <h2 className="font-display text-[32px] tracking-[-0.01em] md:text-[40px]">Robustness</h2>
        <p className="mt-5">
          Dropping the jumpiest fifth of the quality names cut CAGR from 42.4% to 34.3% and maximum drawdown from −11.9% to −9.4%. Calmar stayed similar (3.65 versus 3.56). That overlay still beat SPY and SPUS. It is a robustness check, not a second live product.
        </p>
        <p className="mt-6">
          Quintiles inside the Halal pool are the other check. The top half leads. The bottom bucket is not last. If a later paper adds a sector-capped twin and that twin still beats SPUS, the quality claim has more to stand on. If it does not, the 42% CAGR in this sample is mostly the 2023–2024 technology tape.
        </p>
      </Reading>

      <section className="mx-auto max-w-[920px] px-5 py-12 md:px-8">
        <h2 className="font-display text-[32px] tracking-[-0.01em] md:text-[40px]">Levers</h2>
        <p className="mt-3 max-w-[640px] text-[18px] leading-[1.5] text-[color:var(--ink)]/80">
          The whole rule runs on a handful of named choices. Each row is marked data or assumption.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead className="research-ui text-[12px] uppercase tracking-[0.12em] text-[color:var(--ink)]/45">
              <tr>
                <th className="py-2 font-medium">Lever</th>
                <th className="py-2 font-medium">Value</th>
                <th className="py-2 font-medium">Kind</th>
                <th className="py-2 font-medium">Basis</th>
              </tr>
            </thead>
            <tbody>
              {levers.map((row) => (
                <tr key={row.lever} className="border-t border-[color:var(--card-border)]">
                  <td className="py-3">{row.lever}</td>
                  <td className="py-3">{row.value}</td>
                  <td className="research-ui py-3 text-[12px] uppercase tracking-[0.08em] text-[color:var(--ink)]/55">
                    {row.kind}
                  </td>
                  <td className="py-3 text-[color:var(--ink)]/75">{row.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-12 md:px-8">
        <h2 className="font-display text-[32px] tracking-[-0.01em] md:text-[40px]">
          What this does not capture
        </h2>
        <ul className="mt-6 space-y-3 text-[18px] leading-[1.5]">
          {limits.map((item) => (
            <li key={item} className="pl-4" style={{ borderLeft: "2px solid var(--card-border)" }}>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[18px] leading-[1.5]">
          A cap-weighted book of AAOIFI-screened S&P 500 names with FCF margins in the top half beat SPY and SPUS in 2023–2024. The product shape is coherent. It was not a construction bug. It is also a mega-cap technology book, the quintiles are noisy, and the live rule was chosen after a cheapness sort failed in the same sample. The idea is worth a second paper. It is not ready to promote to a live mandate.
        </p>
      </section>

      <footer className="relative overflow-hidden px-5 pb-10 pt-16 md:px-8">
        <EnsembleFan flip className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] w-full opacity-80" />
        <div className="relative mx-auto max-w-[720px] pb-28">
          <p className="research-ui text-[13px] uppercase tracking-[0.14em] text-[color:var(--ink)]/45">
            {credits.version}
          </p>
          <p className="mt-4 text-[17px] leading-[1.5]">
            Model and writing: {credits.writing}. {credits.lab}.
          </p>
          <div className="research-ui mt-6 flex flex-wrap gap-3 text-[14px]">
            <a href={fcfPaper.notebook} target="_blank" rel="noopener noreferrer" className="ghost-pill">
              Replication notebook
              <Arrow />
            </a>
            <a href={fcfPaper.folder} target="_blank" rel="noopener noreferrer" className="ghost-pill">
              Paper folder
              <Arrow />
            </a>
            <Link href="/research" className="ghost-pill">
              All research
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FindingBlock({ finding, children }) {
  return (
    <section className="mx-auto max-w-[720px] px-5 py-14 md:px-8">
      <p className="research-ui text-[13px] font-medium text-[color:var(--ink)]/50">
        {finding.kicker}
      </p>
      <h2 className="font-display mt-2 text-[30px] leading-[1.15] tracking-[-0.01em] md:text-[40px]">
        {finding.claim}
      </h2>
      {children}
      <p className="mt-6 text-[18px] leading-[1.5]">{finding.reading}</p>
      <p className="mt-4 text-[16px] leading-[1.5] text-[color:var(--ink)]/65">{finding.caveat}</p>
    </section>
  );
}

function StatCard({ label, value, note }) {
  return (
    <div className="research-card px-5 py-4">
      <p className="research-ui text-[12px] uppercase tracking-[0.12em] text-[color:var(--ink)]/45">{label}</p>
      <p className="research-ui mt-1 text-[28px] font-bold">{value}</p>
      <p className="mt-1 text-[14px] text-[color:var(--ink)]/60">{note}</p>
    </div>
  );
}
