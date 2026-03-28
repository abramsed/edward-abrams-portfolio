export default function BackgroundLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Green — top line */}
        <polyline
          points="0,250 400,80 800,460 1200,160 1440,310"
          fill="none"
          stroke="rgba(74,222,128,0.65)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Pink — middle line, offset ~90px below */}
        <polyline
          points="0,340 400,170 800,550 1200,250 1440,400"
          fill="none"
          stroke="rgba(244,114,182,0.60)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Yellow — bottom line, offset ~200px below green (wider gap) */}
        <polyline
          points="0,480 400,310 800,690 1200,390 1440,540"
          fill="none"
          stroke="rgba(250,204,21,0.60)"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
