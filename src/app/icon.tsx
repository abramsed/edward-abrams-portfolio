import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Nested hexagons — outer (white), inner (rose), spokes (blue)
const outer = "M32 5 L56 19 L56 45 L32 59 L8 45 L8 19 Z";
const inner = "M32 16 L45 24 L45 40 L32 48 L19 40 L19 24 Z";
const spokes = "M32 5 L32 16 M56 19 L45 24 M56 45 L45 40 M32 59 L32 48 M8 45 L19 40 M8 19 L19 24";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 64 64">
        <rect width="64" height="64" fill="#111827" />
        <path d={spokes} stroke="#22c55e" strokeWidth="1.5" fill="none" />
        <path d={outer} stroke="#facc15" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <path d={inner} stroke="#ec4899" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    { ...size }
  );
}
