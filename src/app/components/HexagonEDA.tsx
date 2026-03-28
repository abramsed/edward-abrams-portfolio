// Scatter data points: [x, y, radius, color, animDuration, animDelay]
const dots: [number, number, number, string, number, number][] = [
  [24, 68, 2.8, "#22c55e", 2.4, 0],
  [30, 58, 2.2, "#facc15", 3.0, 0.3],
  [38, 52, 3.0, "#ec4899", 2.0, 0.6],
  [44, 48, 2.0, "#22c55e", 2.8, 0.1],
  [52, 42, 2.6, "#facc15", 2.2, 0.8],
  [58, 38, 2.4, "#ec4899", 3.2, 0.4],
  [66, 34, 2.0, "#22c55e", 2.6, 0.2],
  [72, 30, 2.8, "#facc15", 2.0, 0.7],
  [78, 24, 2.2, "#ec4899", 3.0, 0.5],
  [34, 62, 1.8, "#22c55e", 2.4, 0.9],
  [62, 44, 1.8, "#facc15", 2.8, 0.15],
  [48, 56, 2.0, "#ec4899", 2.6, 0.55],
];

export default function HexagonEDA({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      className={`inline-block shrink-0 ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EDA hexagon logo"
    >
      <defs>
        <clipPath id="hex-eda-clip">
          <path d="M50 8 L88 29 L88 71 L50 92 L12 71 L12 29 Z" />
        </clipPath>
      </defs>

      {/* Outer ring — dark grey */}
      <path
        d="M50 8 L88 29 L88 71 L50 92 L12 71 L12 29 Z"
        fill="none"
        stroke="#1f2937"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Middle ring — medium grey */}
      <path
        d="M50 20 L76 35 L76 65 L50 80 L24 65 L24 35 Z"
        fill="none"
        stroke="#4b5563"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Inner ring — light grey */}
      <path
        d="M50 32 L66 41 L66 59 L50 68 L34 59 L34 41 Z"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Scatter plot dots clipped to hexagon */}
      <g clipPath="url(#hex-eda-clip)">
        {dots.map(([cx, cy, r, fill, dur, delay], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity="0.9">
            <animate
              attributeName="r"
              values={`${r};${r + 1.2};${r}`}
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  );
}
