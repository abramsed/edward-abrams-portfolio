export default function HexagonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`inline-block ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring — yellow */}
      <path
        d="M24 4 L42 14 L42 34 L24 44 L6 34 L6 14 Z"
        fill="none"
        stroke="#facc15"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Middle ring — pink */}
      <path
        d="M24 12 L34 18 L34 30 L24 36 L14 30 L14 18 Z"
        fill="none"
        stroke="#ec4899"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Center dot — green */}
      <circle cx="24" cy="24" r="3.5" fill="#22c55e" />
    </svg>
  );
}
