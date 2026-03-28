"use client";
import { useState, useLayoutEffect } from "react";

export default function HeroButtonGroup({ children }: { children: React.ReactNode }) {
  const [gap, setGap] = useState("0.5rem");

  useLayoutEffect(() => {
    const update = () => setGap(window.innerWidth >= 640 ? "1rem" : "0.5rem");
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap, marginTop: "1rem" }}>
      {children}
    </div>
  );
}
