"use client";
import { useState } from "react";
import { SkillCategory } from "@/lib/queries";
import { SkillIcon } from "./SkillIcons";

const hoverColors = ['#22c55e', '#22c55e', '#22c55e'];

export default function SkillCard({ label, icon, items, index = 0 }: SkillCategory & { index?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-xl border p-6"
      style={{
        backgroundColor: 'rgba(252,251,248,0.92)',
        borderColor: hovered ? hoverColors[index % 3] : '#e5e7eb',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-4 flex items-center gap-3">
        <SkillIcon icon={icon} className="w-7 h-7" />
        <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-yellow-50 px-3 py-1 text-sm text-yellow-700 border border-yellow-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
