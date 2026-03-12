import { Experience } from "@/lib/queries";

export default function TimelineItem({
  title,
  product,
  period,
  bullets,
}: Experience) {
  return (
    <div className="relative border-l-2 border-neutral-800 pl-8 pb-12 last:pb-0">
      {/* Dot */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-emerald-400 bg-neutral-950" />

      <p className="text-sm font-medium text-emerald-400">{period}</p>
      <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-neutral-500">{product}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-600" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
