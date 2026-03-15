import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Dodecahedron Schlegel diagram (2D projection)
// Outer pentagon (white), inner pentagon (rose), connecting lines (blue)
const outer = "M32 5 L58 24 L48 54 L16 54 L6 24 Z";
const inner = "M38 23 L42 35 L32 43 L22 35 L26 23 Z";
const lines = [
  "M32 5 L38 23", "M32 5 L26 23",
  "M58 24 L38 23", "M58 24 L42 35",
  "M48 54 L42 35", "M48 54 L32 43",
  "M16 54 L32 43", "M16 54 L22 35",
  "M6 24 L22 35", "M6 24 L26 23",
].join(" ");

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 64 64">
        <path d={lines} stroke="#60a5fa" strokeWidth="1.5" fill="none" />
        <path d={outer} stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <path d={inner} stroke="#fb7185" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    { ...size }
  );
}
