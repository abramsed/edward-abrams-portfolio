"use client";

export default function HexagonEDA({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {

  // Scatter data points: [x, y, radius, color, animDuration, animDelay]
  const dots: [number, number, number, string, number, number][] = [
    [24, 68, 2.8, "#fb7185", 2.4, 0],
    [30, 58, 2.2, "#60a5fa", 3.0, 0.3],
    [38, 52, 3.0, "#fb7185", 2.0, 0.6],
    [44, 48, 2.0, "#60a5fa", 2.8, 0.1],
    [52, 42, 2.6, "#fb7185", 2.2, 0.8],
    [58, 38, 2.4, "#60a5fa", 3.2, 0.4],
    [66, 34, 2.0, "#fb7185", 2.6, 0.2],
    [72, 30, 2.8, "#60a5fa", 2.0, 0.7],
    [78, 24, 2.2, "#fb7185", 3.0, 0.5],
    [34, 62, 1.8, "#60a5fa", 2.4, 0.9],
    [62, 44, 1.8, "#fb7185", 2.8, 0.15],
    [48, 56, 2.0, "#60a5fa", 2.6, 0.55],
  ];

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

      {/* Hexagon background + border */}
      <path
        d="M50 8 L88 29 L88 71 L50 92 L12 71 L12 29 Z"
        fill="#0f1d3d"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* EDA content clipped to hexagon */}
      <g clipPath="url(#hex-eda-clip)">
        {/* Faint grid lines */}
        <line x1="12" y1="50" x2="88" y2="50" stroke="#1e3a5f" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#1e3a5f" strokeWidth="0.5" />
        <line x1="12" y1="35" x2="88" y2="35" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="2 3" />
        <line x1="12" y1="65" x2="88" y2="65" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="2 3" />
        <line x1="30" y1="10" x2="30" y2="90" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="2 3" />
        <line x1="70" y1="10" x2="70" y2="90" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="2 3" />

        {/* Trend / regression curve */}
        <path
          d="M18 72 C 30 62, 42 50, 50 44 S 70 30, 82 22"
          stroke="#60a5fa"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.35;0.6;0.35"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>

        {/* Confidence band (very subtle) */}
        <path
          d="M18 78 C 30 68, 42 56, 50 50 S 70 36, 82 28
             L82 16 C 70 24, 58 32, 50 38 S 30 52, 18 66 Z"
          fill="#60a5fa"
          opacity="0.06"
        />

        {/* Scatter plot dots */}
        {dots.map(([cx, cy, r, fill, dur, delay], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity="0.85">
            <animate
              attributeName="r"
              values={`${r};${r + 1.2};${r}`}
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.85;1;0.85"
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Subtle inner glow on hex border */}
      <path
        d="M50 8 L88 29 L88 71 L50 92 L12 71 L12 29 Z"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.25"
      />
    </svg>
  );
}
