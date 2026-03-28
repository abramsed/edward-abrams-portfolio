import { Experience } from "@/lib/queries";
import HexagonIcon from "./HexagonIcon";

export default function TimelineItem({
  title,
  period,
  bullets,
}: Experience) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
      <div className="flex items-center gap-2">
        <HexagonIcon className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-medium text-gray-700">{period}</p>
      </div>
      <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm leading-relaxed text-gray-700"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: '#22c55e' }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
