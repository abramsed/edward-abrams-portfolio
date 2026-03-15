export default function HexagonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`inline-block ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon (white) with opaque fill to cover timeline line */}
      <path
        d="M24 4 L42 14 L42 34 L24 44 L6 34 L6 14 Z"
        fill="#172554"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner hexagon (rose) */}
      <path
        d="M24 12 L34 18 L34 30 L24 36 L14 30 L14 18 Z"
        stroke="#fb7185"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Connecting spokes (blue) */}
      <path
        d="M24 4 L24 12 M42 14 L34 18 M42 34 L34 30 M24 44 L24 36 M6 34 L14 30 M6 14 L14 18"
        stroke="#60a5fa"
        strokeWidth="1"
      />
    </svg>
  );
}
