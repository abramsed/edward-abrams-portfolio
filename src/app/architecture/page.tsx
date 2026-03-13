export const metadata = {
  title: "Architecture | Edward D. Abrams",
};

const sections = [
  {
    title: "App Router (Next.js 14)",
    content:
      "File-system routing where each folder maps to a page. A shared layout wraps every route with navigation, a footer, and a React Query provider.",
  },
  {
    title: "PostgreSQL Data Layer",
    content:
      "Resume data lives in a normalized Postgres database. Server Components query it directly at request time through a typed query layer — no ORM, just raw SQL.",
  },
  {
    title: "API Routes & React Query",
    content:
      "Four REST endpoints expose the data as JSON. On the client side, React Query hooks fetch from those endpoints with built-in caching. Server components skip the API and query Postgres directly for fast initial loads.",
  },
  {
    title: "Docker",
    content:
      "A multi-stage Dockerfile produces a minimal production image. Docker Compose orchestrates the app and a Postgres container, seeding the database on first launch.",
  },
  {
    title: "Components",
    content:
      "Each UI component has a single job — navigation, hero, skill cards, timeline entries, and so on. Props are typed with the same interfaces used by the query layer.",
  },
  {
    title: "Tailwind CSS",
    content:
      "Utility-first styling with a dark neutral palette and emerald accents. Responsive prefixes handle mobile-first breakpoints.",
  },
  {
    title: "Project Structure",
    content: "",
    tree: `src/app/
  layout.tsx          → Shell (Navbar + Footer)
  page.tsx            → Home / Hero
  experience/         → Work timeline
  skills/             → Skill cards + highlights
  architecture/       → This page
  api/                → REST route handlers
  components/         → Shared UI components
src/lib/
  db.ts               → Postgres connection pool
  queries.ts          → Typed query functions
db/
  init.sql            → Schema + seed data
Dockerfile            → Multi-stage build
docker-compose.yml    → App + Postgres`,
  },
  {
    title: "Why This Stack?",
    content:
      "These are the tools I use daily as an SDE III. TypeScript provides end-to-end type safety, Postgres mirrors real production data patterns, and Docker makes the whole thing reproducible anywhere.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        How This Site Is Built
      </h1>
      <p className="mt-2 text-neutral-400">
        A walkthrough of the codebase structure, patterns, and decisions behind
        this portfolio.
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-white">{s.title}</h2>
            {s.content && (
              <p className="mt-3 leading-relaxed text-neutral-400">
                {s.content}
              </p>
            )}
            {s.tree && (
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-xs text-neutral-300 sm:text-sm">
                {s.tree}
              </pre>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
