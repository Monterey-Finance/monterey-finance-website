"use client";

import { useRef } from "react";
import { usePrefersReducedMotion, useScrollProgress } from "@/lib/useScroll";

export function StepCard({ title, body, className = "" }) {
  return (
    <article className={`research-card max-w-[340px] px-5 py-4 md:px-6 md:py-5 ${className}`}>
      <h3 className="research-ui text-[15px] font-bold tracking-[-0.05em] text-[color:var(--ink)]">
        {title}
      </h3>
      <p className="mt-2 text-[16px] leading-[1.45] text-[color:var(--ink)]/85">{body}</p>
    </article>
  );
}

export default function ScrollStage({
  steps,
  heightVh = 380,
  reducedHeight = "auto",
  children,
}) {
  const ref = useRef(null);
  const progress = useScrollProgress(ref);
  const reduced = usePrefersReducedMotion();
  const count = Math.max(1, steps.length);
  const rawIndex = Math.min(count - 1, Math.floor(progress * count * 0.999));
  const stepIndex = reduced ? count - 1 : rawIndex;
  const local = reduced ? 1 : progress * count - stepIndex;

  if (reduced) {
    return (
      <section className="relative" style={{ minHeight: reducedHeight }}>
        <div className="relative min-h-[70vh]">{children({ progress: 1, stepIndex, local: 1, reduced: true })}</div>
        <ol className="mx-auto grid max-w-[1240px] gap-4 px-5 pb-16 md:grid-cols-2 md:px-8">
          {steps.map((step) => (
            <li key={step.title}>
              <StepCard title={step.title} body={step.body} />
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-[72px] h-[calc(100svh-72px)] overflow-hidden">
        {children({ progress, stepIndex, local, reduced: false })}
      </div>
      <div className="pointer-events-none absolute inset-0">
        {steps.map((step, i) => {
          const top = ((i + 0.22) / count) * 100;
          return (
            <div
              key={step.title}
              className="pointer-events-auto absolute left-5 max-w-[340px] md:left-10 lg:left-16"
              style={{ top: `${top}%` }}
            >
              <StepCard title={step.title} body={step.body} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
