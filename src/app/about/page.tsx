import ProfileImage from "../components/ProfileImage";

export const metadata = {
  title: "About | Edward D. Abrams",
};

const sections = [
  {
    title: "Project Structure",
    content: "",
    treeCompact:
`src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── experience/page.tsx
│   ├── skills/page.tsx
│   ├── about/page.tsx
│   ├── components/
│   └── globals.css
└── lib/
    ├── db.ts
    ├── schema.ts
    └── queries.ts
db/
├── migrations/
└── seed.ts
drizzle.config.ts
tailwind.config.ts`,
    treeFull:
`src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home / Hero
│   ├── experience/page.tsx     # Work experience timeline
│   ├── skills/page.tsx         # Skill cards + highlights
│   ├── about/page.tsx          # Bio + architecture walkthrough
│   ├── components/             # Shared UI components
│   └── globals.css             # Global styles + Tailwind directives
└── lib/
    ├── db.ts                   # Drizzle client (wraps pg Pool)
    ├── schema.ts               # Drizzle table definitions
    └── queries.ts              # Typed query functions
db/
├── migrations/                 # Auto-generated SQL migrations
└── seed.ts                     # Idempotent seed script
drizzle.config.ts               # Drizzle Kit configuration
tailwind.config.ts              # Tailwind theme configuration`
  },
  {
    title: "App Router (Next.js 16)",
    content:
      "The page routes are defined by the folder structure. All routes are wrapped with a shared layout containing the nav bar and footer.",
  },
  {
    title: "Components",
    content:
      "Every component has a single responsibility, whether it is the hero, skill cards, timeline entries, etc. The props are initialized with response values from respective page queries.",
  },
  {
    title: "Tailwind CSS",
    content:
      "The color palette is comprised of hues from the bio photo. Prefixes are used to set breakpoints that respond to window dimensions.",
  },
  {
    title: "Drizzle ORM",
    content:
      "Defines API contracts and generates SQL migrations that execute with each deployment. This keeps the database schema in sync, ensuring type safety.",
  },
  {
    title: "PostgreSQL Data Layer",
    content:
      "Vercel hosts a relational Postgres database containing resume data, which Server Components query at request time. Responses map to interfaces that comport with props.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden px-6 py-6 sm:py-12">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        Behind the Code
      </h1>
      <p className="mt-2 text-blue-200">
        Edward is a musician, pro wrestling fanatic, and horror movie enthusiast.
        He spends his days to the fullest with his soon-to-be wife, Kori, along with
        their two dogs and cat in the Metro Detroit area. You can catch him at hardcore
        shows, wrestling events, or playing games with his friends.
      </p>
      <ProfileImage />
      <section className="mt-8 border-t border-blue-800 pt-6 sm:mt-10 sm:pt-10">
      <h2 className="text-4xl font-bold tracking-tight text-white">
        How This Site Is Crafted
      </h2>
      <p className="mt-2 text-blue-200">
        Would you care for some computer alchemy?
      </p>

      <div className="mt-6 space-y-6 sm:mt-12 sm:space-y-12">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-white">{s.title}</h2>
            {s.content && (
              <p className="mt-3 leading-relaxed text-blue-200">
                {s.content}
              </p>
            )}
            {s.treeCompact && (
              <pre className="mt-4 rounded-lg border border-blue-800 bg-blue-950 p-4 text-xs text-rose-300 sm:hidden">
                {s.treeCompact}
              </pre>
            )}
            {s.treeFull && (
              <pre className="mt-4 hidden rounded-lg border border-blue-800 bg-blue-950 p-4 text-sm text-rose-300 sm:block">
                {s.treeFull}
              </pre>
            )}
          </section>
        ))}
      </div>
      </section>
    </div>
  );
}
