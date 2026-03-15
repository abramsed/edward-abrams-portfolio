"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HexagonIcon from "./HexagonIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-800 bg-blue-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white uppercase">
          ED<HexagonIcon className="w-3 h-3 ml-0 mr-0.5" />A
        </Link>

        <ul className="flex gap-3 text-sm font-medium sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors hover:text-rose-400 ${
                  pathname === href
                    ? "text-rose-400"
                    : "text-blue-300"
                }`}
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
