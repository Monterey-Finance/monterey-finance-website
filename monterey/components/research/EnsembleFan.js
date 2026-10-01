"use client";

import { useMemo } from "react";
import { mulberry32 } from "@/lib/useScroll";

const SERIES = [
  { id: "fcf", color: "var(--fcf)", count: 12, amp: 42 },
  { id: "robust", color: "var(--robust)", count: 8, amp: 34 },
  { id: "spus", color: "var(--spus)", count: 10, amp: 26 },
  { id: "spy", color: "var(--spy)", count: 7, amp: 16 },
];

function buildPath(rand, y0, amp, dashFade) {
  const x0 = 40;
  const x1 = 980;
  const steps = 18;
  let d = `M ${x0} ${y0}`;
  for (let i = 1; i <= steps; i += 1) {
    const t = i / steps;
    const x = x0 + (x1 - x0) * t;
    const wobble = Math.sin(t * Math.PI * 1.15 + rand() * 0.8) * amp * (0.35 + t);
    const jitter = (rand() - 0.5) * amp * 0.22 * t;
    const y = y0 - t * (amp * 1.35) + wobble * 0.35 + jitter;
    const cpx = x - (x1 - x0) / steps / 2;
    const cpy = y + (rand() - 0.5) * 8;
    d += ` Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return { d, dashFade };
}

export default function EnsembleFan({
  className = "",
  flip = false,
  opacity = 1,
}) {
  const paths = useMemo(() => {
    const rand = mulberry32(202603);
    const out = [];
    SERIES.forEach((series, s) => {
      for (let i = 0; i < series.count; i += 1) {
        const y0 = 88 + s * 36 + (rand() - 0.5) * 22;
        out.push({
          key: `${series.id}-${i}`,
          color: series.color,
          opacity: 0.28 + rand() * 0.45,
          width: 1.1 + rand() * 1.1,
          dash: 7 + rand() * 10,
          ...buildPath(rand, y0, series.amp + rand() * 10, true),
        });
      }
    });
    return out;
  }, []);

  return (
    <svg
      viewBox="0 0 1020 280"
      className={className}
      aria-hidden
      style={{
        opacity,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      {paths.map((path) => (
        <path
          key={path.key}
          d={path.d}
          fill="none"
          stroke={path.color}
          strokeWidth={path.width}
          strokeLinecap="round"
          strokeDasharray={`${path.dash} ${path.dash * 0.55}`}
          strokeDashoffset={path.dash * 0.2}
          opacity={path.opacity}
          className="sketch-mark"
        />
      ))}
    </svg>
  );
}
