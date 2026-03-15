export default function DodecahedronIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`inline-block align-baseline relative top-[2px] ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connecting lines (blue) */}
      <path
        d="M32 5 L38 23 M32 5 L26 23 M58 24 L38 23 M58 24 L42 35 M48 54 L42 35 M48 54 L32 43 M16 54 L32 43 M16 54 L22 35 M6 24 L22 35 M6 24 L26 23"
        stroke="#60a5fa"
        strokeWidth="1.5"
      />
      {/* Outer pentagon (white) */}
      <path
        d="M32 5 L58 24 L48 54 L16 54 L6 24 Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Inner pentagon (rose) */}
      <path
        d="M38 23 L42 35 L32 43 L22 35 L26 23 Z"
        stroke="#fb7185"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
