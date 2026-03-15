import { getSkillCategories, getSkillHighlights } from "@/lib/queries";
import SkillCard from "../components/SkillCard";

export const metadata = {
  title: "Skills | Edward D. Abrams",
};

export const dynamic = "force-dynamic";

export default async function SkillsPage() {
  const [skillCategories, highlights] = await Promise.all([
    getSkillCategories(),
    getSkillHighlights(),
  ]);
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:py-12">
      <h1 className="text-4xl font-bold tracking-tight text-white">Skills</h1>
      <p className="mt-2 text-blue-200">
        A breakdown of languages, frameworks, and platforms I work with.
      </p>

      <div className="mt-4 grid gap-6 sm:mt-8 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.label} {...cat} />
        ))}
      </div>

      {/* Highlights */}
      <section className="mt-8 sm:mt-10 sm:border-t sm:border-blue-800 sm:pt-10">
        <h2 className="text-2xl font-bold text-white">Highlights</h2>
        <ul className="mt-6 space-y-4">
          {highlights.map((h) => (
            <li key={h.label} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-rose-400" />
              <div>
                <span className="font-semibold text-white">{h.label}:</span>{" "}
                <span className="text-blue-200">{h.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
