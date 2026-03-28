// Wireframe skill category icons — same geometric style as HexagonIcon

// Languages: angle brackets forming a code symbol, with inner facets
export function CodeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      {/* Left bracket */}
      <path d="M16 8 L4 24 L16 40" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right bracket */}
      <path d="M32 8 L44 24 L32 40" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Slash */}
      <path d="M28 10 L20 38" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Frameworks: interlocking hexagonal structure
export function FrameworkIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      {/* Outer hexagon */}
      <path d="M24 4 L42 14 L42 34 L24 44 L6 34 L6 14 Z" stroke="#facc15" strokeWidth="2" strokeLinejoin="round" />
      {/* Inner hexagon (rotated) */}
      <path d="M24 12 L34 18 L34 30 L24 36 L14 30 L14 18 Z" stroke="#ec4899" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Connecting spokes */}
      <path d="M24 4 L24 12 M42 14 L34 18 M42 34 L34 30 M24 44 L24 36 M6 34 L14 30 M6 14 L14 18" stroke="#22c55e" strokeWidth="1" />
    </svg>
  );
}

// Tools & Data: wrench crossed with a database cylinder
export function ToolsIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      {/* Database cylinder */}
      <ellipse cx="30" cy="12" rx="12" ry="4" stroke="#facc15" strokeWidth="1.5" />
      <path d="M18 12 L18 28 Q18 32 30 32 Q42 32 42 28 L42 12" stroke="#facc15" strokeWidth="1.5" />
      <path d="M18 20 Q18 24 30 24 Q42 24 42 20" stroke="#facc15" strokeWidth="1" />
      {/* Wrench */}
      <path d="M6 42 L18 30" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 30 L22 26 Q20 22 16 22 Q12 22 12 26 Q12 30 16 30 Z" stroke="#ec4899" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Wrench handle detail */}
      <path d="M8 40 L10 42 M10 38 L12 40" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Map icon string from DB to component
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  "💻": CodeIcon,
  "⚙️": FrameworkIcon,
  "🛠️": ToolsIcon,
};

export function SkillIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = iconMap[icon];
  if (Icon) return <Icon className={className} />;
  return <span className="text-2xl">{icon}</span>;
}
