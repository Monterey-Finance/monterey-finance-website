"use client";

import { quintiles } from "@/lib/research";
import ScrollStage from "@/components/research/ScrollStage";

const STEPS = [
  {
    title: "Five Halal buckets",
    body: "Same universe, cap-weighted, split by FCF margin. Q1 is the highest cash generation. Q5 is the lowest.",
  },
  {
    title: "The top half leads",
    body: "Q1 and Q2 are the two best CAGRs. That is why the live rule keeps the top half, not a single quintile.",
  },
  {
    title: "Not a stair-step",
    body: "Q5 still beat Q3 and Q4. Q2 had the best Sharpe and Calmar. Cash generation helped. It did not line up as a clean factor.",
  },
];

function barOpacity(index, step) {
  if (step === 0) return 0.35;
  if (step === 1) return index <= 1 ? 1 : 0.28;
  if (index === 0 || index === 1 || index === 4) return 1;
  return 0.28;
}

export default function QuintileScene() {
  const max = 40;

  return (
    <ScrollStage steps={STEPS} heightVh={320}>
      {({ stepIndex }) => (
        <div className="flex h-full items-center justify-center px-5 md:px-8">
          <div className="w-full max-w-[880px]">
            <p className="research-ui mb-6 text-[13px] font-bold tracking-[-0.05em]">
              FCF-margin quintiles, CAGR %, live window
            </p>
            <div className="flex items-end gap-3 md:gap-5" style={{ height: 240 }}>
              {quintiles.map((q, i) => {
                const h = (q.cagr / max) * 100;
                const op = barOpacity(i, stepIndex);
                const fill =
                  i <= 1 ? "var(--fcf)" : i === 4 ? "var(--tech)" : "var(--spy)";
                return (
                  <div key={q.id} className="flex h-full flex-1 flex-col items-center justify-end">
                    <span
                      className="research-ui mb-2 text-[18px] font-bold md:text-[22px]"
                      style={{ opacity: op, transition: "opacity 600ms var(--ease-soft)" }}
                    >
                      {q.cagr.toFixed(1)}%
                    </span>
                    <div
                      className="w-full max-w-[88px] rounded-t-[4px] sketch-mark"
                      style={{
                        height: `${h}%`,
                        background: fill,
                        opacity: op,
                        filter: "url(#research-wash)",
                        transition: "opacity 600ms var(--ease-soft), height 600ms var(--ease-soft)",
                      }}
                    />
                    <span className="research-ui mt-2 text-[11px] text-[color:var(--ink)]/55">
                      {q.id}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="research-ui mt-4 text-[12px] text-[color:var(--ink)]/50">
              Q1 highest FCF/sales · Q5 lowest. Live book ≈ Q1–Q2.
            </p>
          </div>
        </div>
      )}
    </ScrollStage>
  );
}
