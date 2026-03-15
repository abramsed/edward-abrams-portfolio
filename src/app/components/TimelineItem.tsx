import { Experience } from "@/lib/queries";
import HexagonIcon from "./HexagonIcon";

export default function TimelineItem({
  title,
  period,
  bullets,
}: Experience) {
  return (
    <div className="relative border-l-2 border-blue-700 pl-8 pb-12 last:pb-0">
      {/* Hexagon marker */}
      <div className="absolute -left-[13px] -top-0.5 z-10">
        <HexagonIcon className="w-6 h-6" />
      </div>

      <p className="text-sm font-medium text-rose-400">{period}</p>
      <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm leading-relaxed text-blue-200"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
