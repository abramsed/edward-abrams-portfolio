import { skillCategories } from "@/data/resume";
import SkillCard from "../components/SkillCard";

export const metadata = {
  title: "Skills | Edward D. Abrams",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-white">Skills</h1>
      <p className="mt-2 text-neutral-400">
        A breakdown of languages, frameworks, patterns, and tools I work with.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.label} {...cat} />
        ))}
      </div>

      {/* Highlights */}
      <section className="mt-16 border-t border-neutral-800 pt-12">
        <h2 className="text-2xl font-bold text-white">Highlights</h2>
        <ul className="mt-6 space-y-4">
          {[
            {
              label: "Cloud-Native Data",
              desc: "Migrated production workloads from SQL Server to Azure Cosmos DB with polymorphic NoSQL modelling, eliminating 96% null-column waste.",
            },
            {
              label: "Public API Design",
              desc: "Launched the first public-facing APIs at UWM, defining connectivity and reliability standards for external partners.",
            },
            {
              label: "React / Next.js",
              desc: "Lead frontend development on a CRM platform with a Next.js service layer as the integration boundary for all third-party services.",
            },
            {
              label: "Microservices",
              desc: "Built a distributed .NET Core microservice with RESTful income calculation APIs, cutting underwriting time from 30 min to 5 min.",
            },
          ].map((h) => (
            <li key={h.label} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
              <div>
                <span className="font-semibold text-white">{h.label}:</span>{" "}
                <span className="text-neutral-400">{h.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
