import { getSkillCategories, getSkillHighlights } from "@/lib/queries";
import SkillCard from "../components/SkillCard";

export const metadata = {
  title: "Skills",
  description:
    "Technical skills of Edward D. Abrams — React, Next.js, TypeScript, Node.js, .NET, PostgreSQL, cloud platforms, and more.",
};

export default async function SkillsPage() {
  const [skillCategories, highlights] = await Promise.all([
    getSkillCategories(),
    getSkillHighlights(),
  ]);
  return (
    <div className="mx-auto max-w-4xl px-6 py-4 sm:py-8">

      {/* Header card */}
      <div className="rounded-xl border border-gray-200 p-6 shadow-sm" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Skills</h1>
        <p className="mt-2 text-gray-700">
          A breakdown of languages, frameworks, and platforms I work with.
        </p>
      </div>

      {/* Skill category cards */}
      <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.label} {...cat} index={i} />
        ))}
      </div>

      {/* Highlights card */}
      <section className="mt-4 rounded-xl border border-gray-200 p-6 shadow-sm sm:mt-6" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
        <h2 className="text-2xl font-bold text-gray-900">Highlights</h2>
        <ul className="mt-6 space-y-4">
          {highlights.map((h) => (
            <li key={h.label} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: "#facc15" }} />
              <div>
                <span className="font-semibold text-gray-900">{h.label}:</span>{" "}
                <span className="text-gray-700">{h.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
