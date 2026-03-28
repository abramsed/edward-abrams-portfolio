"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HexagonEDA from "./HexagonEDA";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-300 backdrop-blur-md" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-gray-900 uppercase">
          <HexagonEDA size={36} />
          <span>EDA</span>
        </Link>

        <ul className="flex gap-3 text-sm font-medium sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  color: pathname === href || hoveredHref === href ? '#ec4899' : '#374151',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={() => setHoveredHref(href)}
                onMouseLeave={() => setHoveredHref(null)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
