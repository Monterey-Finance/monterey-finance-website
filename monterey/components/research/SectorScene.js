"use client";

import { sectors } from "@/lib/research";
import ScrollStage from "@/components/research/ScrollStage";

const STEPS = [
  {
    title: "Compare to the Halal list",
    body: "An equal-weight Halal S&P universe is much more balanced. Cap-weighting high-FCF names is the tilt.",
  },
  {
    title: "Technology takes the weight",
    body: "Technology 51.5%. Communication services 22.8%. Together, about 74% of the book.",
  },
  {
    title: "What is missing",
    body: "Utilities are empty. Industrials, cyclicals, real estate, and staples are the main underweights.",
  },
];

export default function SectorScene() {
  const max = 55;

  return (
    <ScrollStage steps={STEPS} heightVh={360}>
      {({ stepIndex }) => (
        <div className="flex h-full items-center justify-center px-5 md:px-8">
          <div className="w-full max-w-[720px]">
            <p className="research-ui mb-5 text-[13px] font-bold tracking-[-0.05em]">
              Average sector weight, quality book vs equal-weight Halal universe
            </p>
            <ul className="space-y-2.5">
              {sectors.map((sector, i) => {
                const isTech = sector.name === "Technology" || sector.name === "Communication";
                const emphasize =
                  stepIndex === 0 ||
                  (stepIndex === 1 && isTech) ||
                  (stepIndex === 2 && !isTech && sector.book < 4);
                return (
                  <li
                    key={sector.name}
                    className="grid grid-cols-[110px_1fr_52px] items-center gap-3 md:grid-cols-[150px_1fr_64px]"
                    style={{
                      opacity: emphasize ? 1 : 0.32,
                      transition: "opacity 600ms var(--ease-soft)",
                    }}
                  >
                    <span className="research-ui text-[12px] md:text-[13px]">{sector.name}</span>
                    <div className="relative h-[14px] md:h-[16px]">
                      <div
                        className="absolute inset-y-0 left-0 rounded-sm"
                        style={{
                          width: `${(sector.universe / max) * 100}%`,
                          background: "var(--spy)",
                          opacity: 0.45,
                          filter: "url(#research-wash)",
                        }}
                      />
                      <div
                        className="absolute inset-y-0 left-0 rounded-sm sketch-mark"
                        style={{
                          width: `${(sector.book / max) * 100}%`,
                          background: isTech ? "var(--fcf)" : "var(--ink)",
                          opacity: isTech ? 0.9 : 0.55,
                        }}
                      />
                    </div>
                    <span className="research-ui text-right text-[12px] font-bold">
                      {sector.book.toFixed(1)}%
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="research-ui mt-4 flex gap-5 text-[12px] text-[color:var(--ink)]/55">
              <span>
                <i className="mr-1 inline-block h-2 w-6 rounded-sm" style={{ background: "var(--fcf)" }} />
                Quality book
              </span>
              <span>
                <i className="mr-1 inline-block h-2 w-6 rounded-sm" style={{ background: "var(--spy)", opacity: 0.45 }} />
                Equal-weight Halal
              </span>
            </div>
          </div>
        </div>
      )}
    </ScrollStage>
  );
}
