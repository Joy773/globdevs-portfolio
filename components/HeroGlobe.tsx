/**
 * Hand-drawn globe for the home hero. Lines draw themselves once on load,
 * then three notes pop in. Respects prefers-reduced-motion (see globals.css).
 * Every animated path uses pathLength="100" so one dash value fits all.
 */
const ink = "var(--ink)";
const accent = "var(--accent)";
const line = "var(--accent-deep)";

function Note({
  x, y, r, text, d, fill = "var(--marker)",
}: { x: number; y: number; r: number; text: string; d: string; fill?: string }) {
  const w = text.length * 9.4 + 30;
  return (
    <g className="pop" style={{ ["--d" as string]: d }}>
      <g transform={`translate(${x} ${y}) rotate(${r})`}>
        <path
          d={`M2 1c${w * 0.4} -2 ${w * 0.7} -1 ${w - 2} 1c2 12 2 26 -1 38c-${w * 0.4} 2 -${w * 0.7} 2 -${w - 2} -1c-2 -12 -2 -26 1 -38z`}
          fill={fill}
          stroke={ink}
          strokeWidth="2"
        />
        <text x="15" y="26" fontSize="17" fontWeight="600" fill="#18211d" style={{ fontFamily: "var(--font-body)" }}>
          {text}
        </text>
      </g>
    </g>
  );
}

export default function HeroGlobe() {
  return (
    <svg
      className="globe hero__art"
      viewBox="0 0 500 480"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="A hand-drawn globe with notes reading fast, SEO-ready and yours to own"
    >
      <g className="float">
        {/* orbit, behind */}
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".9s" }}
          d="M58 300c-30-46 70-118 200-150 128-32 222-14 214 34" stroke={line} strokeWidth="2" strokeDasharray="4 7" />
        {/* globe body */}
        <path d="M250 70c96-2 170 74 170 168 0 96-76 172-172 170-94-2-166-78-164-172 2-92 74-164 166-166z"
          fill="var(--surface)" />
        <path className="draw" pathLength={100}
          d="M250 70c96-2 170 74 170 168 0 96-76 172-172 170-94-2-166-78-164-172 2-92 74-164 166-166z"
          stroke={ink} strokeWidth="3" />
        {/* meridians */}
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".25s" }}
          d="M250 72c-58 44-84 104-82 168 2 64 30 124 82 166" stroke={ink} strokeWidth="2.2" />
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".35s" }}
          d="M252 72c56 46 82 106 80 170-2 62-30 120-82 164" stroke={ink} strokeWidth="2.2" />
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".45s" }}
          d="M250 72c-2 112-1 222 0 334" stroke={ink} strokeWidth="2.2" />
        {/* parallels */}
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".5s" }}
          d="M104 160c96 18 196 18 292-2" stroke={ink} strokeWidth="2.2" />
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".6s" }}
          d="M86 242c110 14 222 14 332-2" stroke={ink} strokeWidth="2.2" />
        <path className="draw" pathLength={100} style={{ ["--d" as string]: ".7s" }}
          d="M106 324c94 16 196 16 290-2" stroke={ink} strokeWidth="2.2" />
        {/* orbit, in front */}
        <path className="draw" pathLength={100} style={{ ["--d" as string]: "1s" }}
          d="M472 184c-8 46-108 106-228 132-118 26-176 22-186-16" stroke={line} strokeWidth="2.6" />
        {/* code brackets travelling the orbit */}
        <g className="pop" style={{ ["--d" as string]: "1.5s" }}>
          <circle cx="430" cy="236" r="22" fill={accent} stroke={ink} strokeWidth="2" />
          <path d="M424 228l-8 8 8 8M436 228l8 8-8 8" stroke="var(--accent-ink)" strokeWidth="2.6" />
        </g>
        {/* pins */}
        <g className="pop" style={{ ["--d" as string]: "1.3s" }}>
          <path d="M186 196c0-12 18-12 18 0 0 8-9 16-9 16s-9-8-9-16z" fill={accent} stroke={ink} strokeWidth="2" />
        </g>
        <g className="pop" style={{ ["--d" as string]: "1.4s" }}>
          <path d="M300 272c0-12 18-12 18 0 0 8-9 16-9 16s-9-8-9-16z" fill={accent} stroke={ink} strokeWidth="2" />
        </g>
      </g>

      <Note x={14} y={92} r={-6} text="Fast" d="1.7s" />
      <Note x={300} y={38} r={4} text="SEO-ready" d="1.9s" fill="#ffffff" />
      <Note x={154} y={420} r={-2} text="Yours to own" d="2.1s" fill="#ffffff" />
    </svg>
  );
}
