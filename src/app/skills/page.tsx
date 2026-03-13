import { getSkillCategories } from "@/lib/queries";
import SkillCard from "../components/SkillCard";

export const metadata = {
  title: "Skills | Edward D. Abrams",
};

export const dynamic = "force-dynamic";

export default async function SkillsPage() {
  const skillCategories = await getSkillCategories();
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-white">Skills</h1>
      <p className="mt-2 text-neutral-400">
        A breakdown of languages, frameworks, and platforms I work with.
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
              desc: "Migrated a terabyte of SQL Server data to Azure Cosmos DB and built eventually consistent replication pipelines with Apache Spark.",
            },
            {
              label: "API Security & Identity",
              desc: "Established SAML and OAuth connectivity for the Canva API, leveraging PKCE flow with SHA-256 encoding and verification.",
            },
            {
              label: "React / Next.js",
              desc: "Frontend development lead for a CRM platform, with scoped contexts for persistent state management to reduce network traffic and optimize memory.",
            },
            {
              label: "Public .NET APIs",
              desc: "Launched the company's first public-facing .NET APIs, opening the platform to external partners and defining connectivity standards.",
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
