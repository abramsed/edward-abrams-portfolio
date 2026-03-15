import { SkillCategory } from "@/lib/queries";
import { SkillIcon } from "./SkillIcons";

export default function SkillCard({ label, icon, items }: SkillCategory) {
  return (
    <div className="rounded-xl border border-blue-800 bg-blue-900 p-6 transition-colors hover:border-rose-400 outline-none select-none" style={{ WebkitTapHighlightColor: 'transparent', WebkitUserSelect: 'none' }}>
      <div className="mb-4 flex items-center gap-3">
        <SkillIcon icon={icon} className="w-7 h-7" />
        <h3 className="text-lg font-semibold text-white">{label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#6b2040] px-3 py-1 text-sm text-rose-100 border border-[#8b3050]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
