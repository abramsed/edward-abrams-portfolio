import ProfileImage from "../components/ProfileImage";

export const metadata = {
  title: "About",
  description:
    "About Edward D. Abrams — Full Stack Developer based in Metro Detroit specializing in React, Next.js, .NET, and cloud-native development.",
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
      "The styles are inspired by the bio photo, sci-fi movies, and album artwork. Prefixes are used to set breakpoints that respond to window dimensions."
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
    <div className="mx-auto max-w-3xl px-6 py-4 sm:py-8">

      {/* Bio card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 p-6 shadow-sm sm:p-10" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Behind the Code
        </h1>
        <p className="mt-2 text-gray-700">
          Edward is a musician, pro wrestling fanatic, and horror movie enthusiast.
          He spends his days to the fullest with his soon-to-be wife, Kori, along with
          their two dogs and cat in the Metro Detroit area. You can catch him at hardcore
          shows, wrestling events, or playing games with his friends.
        </p>
        <ProfileImage />
      </div>

      {/* Site architecture intro card */}
      <div className="mt-4 rounded-xl border border-gray-200 p-6 shadow-sm sm:mt-6 sm:p-10" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          How This Site Is Crafted
        </h2>
        <p className="mt-2 text-gray-700">
          Would you care for some computer alchemy?
        </p>
      </div>

      {/* Individual architecture section cards */}
      <div className="mt-4 space-y-4 sm:mt-6">
        {sections.map((s) => (
          <section key={s.title} className="rounded-xl border border-gray-200 p-6 shadow-sm" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
            <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
            {s.content && (
              <p className="mt-3 leading-relaxed text-gray-700">
                {s.content}
              </p>
            )}
            {s.treeCompact && (
              <pre className="mt-4 rounded-lg border border-gray-300 bg-gray-200 p-4 text-xs text-pink-600 sm:hidden">
                {s.treeCompact}
              </pre>
            )}
            {s.treeFull && (
              <pre className="mt-4 hidden rounded-lg border border-gray-300 bg-gray-200 p-4 text-sm text-pink-600 sm:block">
                {s.treeFull}
              </pre>
            )}
          </section>
        ))}
      </div>

    </div>
  );
}
