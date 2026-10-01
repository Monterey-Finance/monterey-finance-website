import Image from "next/image";
import Link from "next/link";
import EnsembleFan from "@/components/research/EnsembleFan";
import ProgressBar from "@/components/research/ProgressBar";
import ResearchNav from "@/components/research/ResearchNav";
import SketchFilters from "@/components/research/SketchFilters";
import { papers, RESEARCH_FOLDER, RESEARCH_REPO } from "@/lib/research";

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

export default function ResearchHub() {
  const featured = papers[0];
  const rest = papers.slice(1);

  return (
    <div className="research-root paper-grid relative pt-[72px]">
      <SketchFilters />
      <ProgressBar />
      <ResearchNav current="/research" />

      <section className="relative overflow-hidden px-5 pb-12 pt-10 md:px-10 md:pb-20 md:pt-16">
        <EnsembleFan className="pointer-events-none absolute inset-x-0 top-6 h-[280px] w-full opacity-90 md:h-[380px]" />
        <div className="relative mx-auto max-w-[1240px]">
          <p className="research-ui text-[13px] uppercase tracking-[0.16em] text-[color:var(--ink)]/50">
            Halal Quant Research Lab · Phase 1
          </p>
          <h1 className="font-display mt-4 max-w-[16ch] text-[42px] leading-[1.05] tracking-[-0.01em] md:text-[68px]">
            Open research, written as a working notebook.
          </h1>
          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.4] md:text-[20px]">
            Monterey Finance tests Halal equity rules on historical market data and publishes the notes. Steady growth is the mandate. Beating SPUS is interesting. It is not the point. No live capital is deployed here.
          </p>
          <div className="research-ui mt-7 flex flex-wrap gap-3 text-[14px]">
            <Link href={featured.href} className="ink-pill">
              Read paper 01
              <span aria-hidden>↓</span>
            </Link>
            <a href={RESEARCH_FOLDER} target="_blank" rel="noopener noreferrer" className="ghost-pill">
              Lab on Github
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <article className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-8 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-16">
        <Link href={featured.href} className="group block justify-self-center" aria-label={featured.title}>
          <div
            className="relative h-[280px] w-[210px] transition-transform duration-[600ms] ease-[var(--ease-soft)] group-hover:-translate-y-2 md:h-[420px] md:w-[320px]"
            style={{ transform: `rotate(${featured.rotate})` }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="320px"
              className="object-cover object-top drop-shadow-[0_18px_30px_rgba(20,20,19,0.18)]"
            />
          </div>
        </Link>
        <div>
          <p className="research-ui text-[13px] uppercase tracking-[0.16em] text-[color:var(--ink)]/50">
            Paper {featured.number} · {featured.status}
          </p>
          <h2 className="font-display mt-3 max-w-[22ch] text-[32px] leading-[1.12] tracking-[-0.01em] md:text-[44px]">
            {featured.title}
          </h2>
          <p className="mt-3 max-w-[540px] text-[18px] leading-[1.4] text-[color:var(--ink)]/80">
            {featured.subtitle}. After AAOIFI debt limits, a cap-weighted slice of high FCF-margin names returned 42.4% a year in 2023–2024, versus 31.1% for SPUS. The book is Halal mega-cap quality and technology. The sample is short. The rule was rewritten in-sample.
          </p>
          <div className="research-ui mt-6 flex flex-wrap gap-3 text-[14px]">
            <Link href={featured.href} className="ink-pill">
              Open the page
            </Link>
            <a href={featured.pdf} target="_blank" rel="noopener noreferrer" className="ghost-pill">
              Technical report
              <Arrow />
            </a>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-[1240px] px-5 py-16 md:px-10">
        <h2 className="font-display text-[28px] tracking-[-0.01em] md:text-[36px]">More notes</h2>
        <p className="mt-3 max-w-[640px] text-[17px] leading-[1.4] text-[color:var(--ink)]/75">
          Papers 02–06 are still read as PDFs in the lab folder. Each one is an exploratory backtest, not a finished proof.
        </p>
        <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((paper) => (
            <li key={paper.slug} className="flex flex-col items-center text-center">
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div
                  className="relative h-[220px] w-[164px] transition-transform duration-[600ms] ease-[var(--ease-soft)] group-hover:-translate-y-2"
                  style={{ transform: `rotate(${paper.rotate})` }}
                >
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    fill
                    sizes="164px"
                    className="object-cover object-top drop-shadow-[0_14px_24px_rgba(20,20,19,0.16)]"
                  />
                </div>
                <h3 className="font-display mt-6 max-w-[240px] text-[20px] leading-snug tracking-[-0.01em]">
                  {paper.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-[14px] leading-[1.32] text-[color:var(--ink)]/65">
                  {paper.subtitle}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[720px] px-5 py-12 md:px-10">
        <h2 className="font-display text-[28px] tracking-[-0.01em] md:text-[36px]">
          What the lab is optimizing for
        </h2>
        <ul className="mt-6 space-y-4 text-[18px] leading-[1.4]">
          <li>
            <span className="font-semibold">Steady growth.</span> Compound over time with drawdowns we can live with.
          </li>
          <li>
            <span className="font-semibold">Halal first.</span> AAOIFI and activity screens are hard constraints.
          </li>
          <li>
            <span className="font-semibold">Runnable rules.</span> Entry, exit, sizing, breach handling, purification.
          </li>
          <li>
            <span className="font-semibold">Honest friction.</span> Turnover, costs, and purification drag are reported.
          </li>
        </ul>
        <p className="mt-8 text-[16px] text-[color:var(--ink)]/55">
          Code and parameters live in{" "}
          <a href={RESEARCH_REPO} className="underline decoration-[color:var(--card-border)] underline-offset-4">
            Monterey-Finance/Monterey-Finance
          </a>
          . Version tag: research lab index, October 2026.
        </p>
      </section>
    </div>
  );
}
