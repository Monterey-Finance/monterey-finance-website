"use client";

import { useMemo } from "react";
import { funnel } from "@/lib/research";
import { mulberry32 } from "@/lib/useScroll";
import ScrollStage from "@/components/research/ScrollStage";

const COLS = 12;
const ROWS = 8;
const TOTAL = COLS * ROWS;

const FUNNEL_STEPS = [
  {
    title: "Start with the S&P 500",
    body: "503 names. This is the listed universe, not yet Halal, not yet a quality book.",
  },
  {
    title: "Drop banned businesses",
    body: "64 names leave: banks, conventional insurance, alcohol, tobacco, gambling, weapons. 439 remain.",
  },
  {
    title: "Apply AAOIFI ratio limits",
    body: "Debt, cash, and receivables are capped against market value. Keep names with positive free cash flow. About 233 pass.",
  },
  {
    title: "Keep the top half by FCF margin",
    body: "Free cash flow divided by sales. Not cheapness. The live cut is cash generation, owned in proportion to size.",
  },
  {
    title: "Size becomes the weight",
    body: "Cap-weighting makes Apple, Nvidia, and Microsoft large. The tiles that remain are a Halal mega-cap quality book.",
  },
];

function tileState(tile, step) {
  if (step === 0) return { fill: "var(--tile)", scale: 1, opacity: 1 };
  if (step === 1) {
    return tile.activity
      ? { fill: "var(--tile)", scale: 1, opacity: 1 }
      : { fill: "var(--tile)", scale: 0.72, opacity: 0.12 };
  }
  if (step === 2) {
    if (!tile.activity) return { fill: "var(--tile)", scale: 0.62, opacity: 0.08 };
    return tile.halal
      ? { fill: "var(--augmented)", scale: 1, opacity: 1 }
      : { fill: "var(--tile)", scale: 0.78, opacity: 0.18 };
  }
  if (step === 3) {
    if (!tile.halal) return { fill: "var(--tile)", scale: 0.58, opacity: 0.08 };
    return tile.kept
      ? { fill: "var(--kept)", scale: 1.05, opacity: 1 }
      : { fill: "var(--augmented)", scale: 0.82, opacity: 0.22 };
  }
  if (!tile.kept) return { fill: "var(--tile)", scale: 0.5, opacity: 0.06 };
  return { fill: "var(--kept)", scale: 0.85 + tile.cap * 0.38, opacity: 1 };
}

export default function FunnelScene() {
  const tiles = useMemo(() => {
    const rand = mulberry32(11011);
    return Array.from({ length: TOTAL }, (_, i) => {
      const activity = rand() < 439 / 503;
      const halal = activity && rand() < 233 / 439;
      const kept = halal && rand() < 116 / 233;
      return {
        i,
        delay: rand() * 0.6,
        activity,
        halal,
        kept,
        cap: 0.7 + rand() * 2.4,
      };
    });
  }, []);

  return (
    <ScrollStage steps={FUNNEL_STEPS} heightVh={420}>
      {({ stepIndex }) => (
        <div className="flex h-full flex-col justify-center px-5 md:px-8">
          <div className="mx-auto w-full max-w-[920px]">
            <p className="research-ui mb-4 text-[12px] uppercase tracking-[0.14em] text-[color:var(--ink)]/50">
              {funnel[Math.min(stepIndex, funnel.length - 1)]?.label ?? "Live book"}
            </p>
            <div
              className="grid gap-[6px] md:gap-2"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
            >
              {tiles.map((tile) => {
                const state = tileState(tile, stepIndex);
                return (
                  <div
                    key={tile.i}
                    className="aspect-square rounded-[4px] sketch-mark"
                    style={{
                      background: state.fill,
                      opacity: state.opacity,
                      transform: `scale(${state.scale})`,
                      transition: `background var(--dur-step) var(--ease-soft) ${tile.delay}s, opacity var(--dur-step) var(--ease-soft) ${tile.delay}s, transform var(--dur-step) var(--ease-soft) ${tile.delay}s`,
                      filter: "url(#research-wash)",
                    }}
                  />
                );
              })}
            </div>
            <p className="research-ui mt-5 text-[13px] text-[color:var(--ink)]/55">
              One change per step. Same tiles, new rule.
            </p>
          </div>
        </div>
      )}
    </ScrollStage>
  );
}
