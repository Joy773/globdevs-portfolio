/**
 * Pixel-art park scene for the home hero. Still plate plus a looping
 * overlay: drifting clouds, shipping toasts, a blinking editor cursor.
 */
function PixelCloud({ x, y, className }: { x: number; y: number; className: string }) {
  const cells = [
    [3, 1], [4, 1], [5, 1],
    [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3],
    [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
  ];
  return (
    <g className={className} transform={`translate(${x} ${y})`}>
      {cells.map(([cx, cy], i) => (
        <rect key={i} x={cx} y={cy} width="1" height="1" />
      ))}
    </g>
  );
}

const toasts = [
  "Testing & security",
  "Phase 5 · Launch",
  "Shipped · Your product is live",
];

export default function HeroPixels() {
  return (
    <div className="hero-pixels" aria-hidden="true">
      <style>{`
        .hero-pixels {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: min(100dvh, 100%);
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background: var(--paper);
        }
        .hero-pixels__pin {
          position: relative;
          height: 100%;
          overflow: hidden;
        }
        .hero-pixels__art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 72% 62%;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
        .hero-pixels__fx {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
        .hero-pixels__cloud { fill: color-mix(in srgb, var(--paper) 72%, transparent); }
        .hero-pixels__cloud--a { animation: pixel-drift 42s linear infinite; }
        .hero-pixels__cloud--b { animation: pixel-drift 58s linear infinite reverse; }
        .hero-pixels__cloud--c { animation: pixel-drift 50s linear infinite; animation-delay: -18s; }
        .hero-pixels__cloud--d { animation: pixel-drift 70s linear infinite reverse; animation-delay: -30s; }
        .hero-pixels__bird { fill: var(--ink); }
        .hero-pixels__bird--a { animation: pixel-fly 18s linear infinite; }
        .hero-pixels__bird--b { animation: pixel-fly 26s linear infinite; animation-delay: -10s; }
        .hero-pixels__cursor { fill: var(--accent); animation: pixel-cursor 1s steps(2, end) infinite; }
        .hero-pixels__toasts {
          position: absolute;
          top: auto;
          right: clamp(7rem, 22vw, 18rem);
          bottom: 36%;
          z-index: 2;
          display: grid;
          gap: 0.45rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .hero-pixels__toast {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          width: max-content;
          padding: 0.32rem 0.7rem 0.32rem 0.5rem;
          border-radius: 999px;
          background: var(--paper);
          color: var(--ink);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          box-shadow: 0 2px 0 color-mix(in srgb, var(--ink) 12%, transparent);
          opacity: 0;
          animation: pixel-toast 9s ease-in-out infinite;
        }
        .hero-pixels__toast:nth-child(2) { animation-delay: 1.1s; }
        .hero-pixels__toast:nth-child(3) { animation-delay: 2.2s; }
        @media (max-width: 720px) {
          .hero-pixels__toasts { display: none; }
        }
        .hero-pixels__dot {
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 18%, transparent);
        }
        @keyframes pixel-cursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pixel-toast {
          0%, 8% { opacity: 0; transform: translateY(6px); }
          16%, 78% { opacity: 1; transform: translateY(0); }
          90%, 100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes pixel-drift {
          from { transform: translateX(-24px); }
          to { transform: translateX(172px); }
        }
        @keyframes pixel-fly {
          from { transform: translate(-6px, 22px); }
          to { transform: translate(166px, 14px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-pixels__cloud,
          .hero-pixels__bird,
          .hero-pixels__cursor,
          .hero-pixels__toast {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
      <div className="hero-pixels__pin">
      {/* Decorative plate — next/image is unnecessary for a full-bleed backdrop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-pixels__art" src="/hero-park.png?v=6" alt="" />

      <svg className="hero-pixels__fx" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" shapeRendering="crispEdges">
        <PixelCloud x={-12} y={8} className="hero-pixels__cloud hero-pixels__cloud--a" />
        <PixelCloud x={28} y={14} className="hero-pixels__cloud hero-pixels__cloud--b" />
        <PixelCloud x={96} y={6} className="hero-pixels__cloud hero-pixels__cloud--c" />
        <PixelCloud x={70} y={18} className="hero-pixels__cloud hero-pixels__cloud--d" />

        <g className="hero-pixels__bird hero-pixels__bird--a">
          <rect x="0" y="0" width="1" height="1" />
          <rect x="1" y="-1" width="1" height="1" />
          <rect x="2" y="0" width="1" height="1" />
        </g>
        <g className="hero-pixels__bird hero-pixels__bird--b">
          <rect x="0" y="0" width="1" height="1" />
          <rect x="1" y="-1" width="1" height="1" />
          <rect x="2" y="0" width="1" height="1" />
        </g>

        <rect className="hero-pixels__cursor" x="108" y="58" width="1" height="2" />
      </svg>

      <ul className="hero-pixels__toasts">
        {toasts.map((label) => (
          <li key={label} className="hero-pixels__toast">
            <span className="hero-pixels__dot" />
            {label}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
