export default function SketchFilters() {
  return (
    <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
      <defs>
        <filter id="research-sketch" x="-12%" y="-12%" width="124%" height="124%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.045"
            numOctaves="3"
            seed="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.4" />
        </filter>
        <filter id="research-wash" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="2"
            seed="8"
            result="grain"
          />
          <feColorMatrix
            in="grain"
            type="matrix"
            values="0 0 0 0 0.18  0 0 0 0 0.16  0 0 0 0 0.14  0 0 0 0.32 0"
            result="tint"
          />
          <feBlend in="SourceGraphic" in2="tint" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}
