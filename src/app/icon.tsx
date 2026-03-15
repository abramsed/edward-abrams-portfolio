import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#172554",
          borderRadius: 6,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: "-0.5px",
        }}
      >
        <span style={{ color: "#ffffff" }}>EA</span>
        <span style={{ color: "#fb7185" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
