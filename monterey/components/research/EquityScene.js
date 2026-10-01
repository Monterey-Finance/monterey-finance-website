"use client";

import { useMemo } from "react";
import { books } from "@/lib/research";
import { mulberry32 } from "@/lib/useScroll";
import ScrollStage from "@/components/research/ScrollStage";

const EQUITY_STEPS = [
  {
    title: "Axes first",
    body: "Growth of $1 from 3 January 2023 to 30 December 2024. The sample is two calendar years, not a cycle.",
  },
  {
    title: "Without a quality cut",
    body: "SPY, the all-stock benchmark, finishes near $1.59. That is 25.9% compound annual growth.",
  },
  {
    title: "The Halal index",
    body: "SPUS is the Halal large-cap comparison. It finishes near $1.72. Beating SPUS is not the same as beating “the” Sharia market.",
  },
  {
    title: "Cash generation, cap-weighted",
    body: "The live book finishes near $2.00 — 42.4% CAGR. It led in both 2023 and 2024. These are two-year annualized figures from a mega-cap bull market.",
  },
  {
    title: "A quieter twin",
    body: "Dropping the jumpiest fifth of names cuts CAGR to 34.3% and drawdown to −9.4%. Calmar stays similar. A robustness check, not a second product.",
  },
];

const W = 920;
const H = 420;
const PAD = { l: 52, r: 118, t: 28, b: 48 };

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function makeSeries(seed, endNav, dipAt = 0.68, dipDepth = 0.11) {
  const rand = mulberry32(seed);
  const n = 48;
  const pts = [];
  for (let i = 0; i <= n; i += 1) {
    const t = i / n;
    let v = lerp(1, endNav, t);
    const dip = Math.exp(-((t - dipAt) ** 2) / 0.012) * dipDepth * endNav;
    v -= dip;
    v += (rand() - 0.5) * 0.025 * (0.3 + t);
    pts.push({ t, v: Math.max(0.86, v) });
  }
  pts[0].v = 1;
  pts[n].v = endNav;
  return pts;
}

function jittered(base, seed, mag) {
  const rand = mulberry32(seed);
  return base.map((p) => ({
    t: p.t,
    v: p.v + (rand() - 0.5) * mag * (0.2 + p.t),
  }));
}

function toPath(pts) {
  const x0 = PAD.l;
  const x1 = W - PAD.r;
  const y0 = H - PAD.b;
  const y1 = PAD.t;
  const minV = 0.9;
  const maxV = 2.12;
  const x = (t) => x0 + t * (x1 - x0);
  const y = (v) => y0 - ((v - minV) / (maxV - minV)) * (y0 - y1);
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.t).toFixed(1)} ${y(p.v).toFixed(1)}`)
    .join(" ");
}

const BOOK_ORDER = ["spy", "spus", "fcf", "robust"];

function opacityFor(id, step) {
  if (step <= 0) return 0;
  if (id === "spy") return step === 1 ? 1 : 0.28;
  if (id === "spus") {
    if (step < 2) return 0;
    return step === 2 ? 1 : 0.28;
  }
  if (id === "fcf") {
    if (step < 3) return 0;
    return step === 3 ? 1 : 0.55;
  }
  if (id === "robust") return step >= 4 ? 1 : 0;
  return 0;
}

export default function EquityScene() {
  const series = useMemo(() => {
    const main = {
      spy: makeSeries(11, books.spy.endNav, 0.7, 0.085),
      spus: makeSeries(22, books.spus.endNav, 0.66, 0.11),
      fcf: makeSeries(33, books.fcf.endNav, 0.67, 0.125),
      robust: makeSeries(44, books.robust.endNav, 0.67, 0.095),
    };
    const fans = {};
    BOOK_ORDER.forEach((id, i) => {
      fans[id] = Array.from({ length: 7 }, (_, k) =>
        jittered(main[id], 100 + i * 20 + k, 0.08 + (id === "fcf" ? 0.04 : 0)),
      );
    });
    return { main, fans };
  }, []);

  const yTicks = [1, 1.4, 1.8, 2.0];

  return (
    <ScrollStage steps={EQUITY_STEPS} heightVh={460}>
      {({ stepIndex }) => {
        const showAxes = stepIndex >= 0;
        return (
          <div className="flex h-full items-center justify-center px-4 md:px-8">
            <div className="w-full max-w-[980px]">
              <p className="research-ui mb-2 text-[13px] font-bold tracking-[-0.05em] text-[color:var(--ink)]">
                Growth of $1, 3 Jan 2023 – 30 Dec 2024
              </p>
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Equity curves for the Halal FCF book versus SPY and SPUS">
                {showAxes &&
                  yTicks.map((tick) => {
                    const y =
                      H -
                      PAD.b -
                      ((tick - 0.9) / (2.12 - 0.9)) * (H - PAD.b - PAD.t);
                    return (
                      <g key={tick} opacity={0.9}>
                        <line
                          x1={PAD.l}
                          x2={W - PAD.r}
                          y1={y}
                          y2={y}
                          stroke="rgba(20,20,19,0.1)"
                          strokeWidth="1"
                        />
                        <text
                          x={PAD.l - 10}
                          y={y + 4}
                          textAnchor="end"
                          className="research-ui"
                          fontSize="11"
                          fill="rgba(20,20,19,0.45)"
                        >
                          ${tick.toFixed(1)}
                        </text>
                      </g>
                    );
                  })}

                {stepIndex >= 1 && (
                  <line
                    x1={PAD.l}
                    x2={PAD.l}
                    y1={PAD.t}
                    y2={H - PAD.b}
                    stroke="rgba(20,20,19,0.35)"
                    strokeWidth="1.2"
                    strokeDasharray="3 5"
                  />
                )}

                {BOOK_ORDER.map((id) => {
                  const op = opacityFor(id, stepIndex);
                  const book = books[id];
                  return (
                    <g key={id} style={{ opacity: op, transition: "opacity 600ms var(--ease-soft)" }}>
                      {series.fans[id].map((pts, i) => (
                        <path
                          key={`${id}-fan-${i}`}
                          d={toPath(pts)}
                          fill="none"
                          stroke={book.color}
                          strokeWidth="1"
                          opacity="0.28"
                          className="sketch-mark"
                          strokeDasharray={i % 2 ? "5 6" : undefined}
                        />
                      ))}
                      <path
                        d={toPath(series.main[id])}
                        fill="none"
                        stroke={book.color}
                        strokeWidth="2.4"
                        className="sketch-mark"
                      />
                      <text
                        x={W - PAD.r + 10}
                        y={
                          H -
                          PAD.b -
                          ((book.endNav - 0.9) / (2.12 - 0.9)) * (H - PAD.b - PAD.t) +
                          4
                        }
                        fontSize="13"
                        fontWeight="700"
                        fill={book.color}
                        className="research-ui"
                      >
                        {book.short} (${book.endNav.toFixed(2)})
                      </text>
                    </g>
                  );
                })}

                <text x={PAD.l} y={H - 14} fontSize="11" fill="rgba(20,20,19,0.45)" className="research-ui">
                  Jan 2023
                </text>
                <text
                  x={W - PAD.r}
                  y={H - 14}
                  textAnchor="end"
                  fontSize="11"
                  fill="rgba(20,20,19,0.45)"
                  className="research-ui"
                >
                  Dec 2024
                </text>
              </svg>
              <div className="research-ui mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-[color:var(--ink)]/60">
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-sm" style={{ background: "var(--fcf)" }} />
                  Halal FCF quality
                </span>
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-sm" style={{ background: "var(--robust)" }} />
                  Drop high-vol
                </span>
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-sm" style={{ background: "var(--spus)" }} />
                  SPUS
                </span>
                <span>
                  <i className="mr-1 inline-block h-2 w-2 rounded-sm" style={{ background: "var(--spy)" }} />
                  SPY
                </span>
              </div>
            </div>
          </div>
        );
      }}
    </ScrollStage>
  );
}
