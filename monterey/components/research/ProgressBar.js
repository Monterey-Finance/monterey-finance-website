"use client";

import { usePageProgress } from "@/lib/useScroll";

export default function ProgressBar() {
  const progress = usePageProgress();

  return (
    <div
      className="research-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  );
}
