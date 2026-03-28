"use client";
import { useState } from "react";
import Link from "next/link";

export default function YellowButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      className="rounded-lg px-6 py-3 text-sm font-semibold"
      style={{
        backgroundColor: hovered ? '#facc15' : '#fefce8',
        border: '1px solid #facc15',
        color: hovered ? '#111827' : '#a16207',
        transition: 'background-color 0.15s, color 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}
