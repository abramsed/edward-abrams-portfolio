"use client";
import { useState } from "react";
import Link from "next/link";

export default function GreenButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      className="rounded-lg px-6 py-3 text-sm font-semibold"
      style={{
        backgroundColor: hovered ? '#16a34a' : '#f0fdf4',
        border: '1px solid #16a34a',
        color: hovered ? '#ffffff' : '#166534',
        transition: 'background-color 0.15s, color 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  );
}
