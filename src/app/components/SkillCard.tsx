import { SkillCategory } from "@/lib/queries";

export default function SkillCard({ label, icon, items }: SkillCategory) {
  return (
    <div className="rounded-xl border border-blue-800 bg-blue-900 p-6 transition-colors hover:border-rose-400">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-white">{label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-blue-800 px-3 py-1 text-sm text-blue-100 border border-blue-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
