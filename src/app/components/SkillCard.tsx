import { SkillCategory } from "@/data/resume";

export default function SkillCard({ label, icon, items }: SkillCategory) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-emerald-500/40">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-white">{label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
