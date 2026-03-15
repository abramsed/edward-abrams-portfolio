import ProfileImage from "../components/ProfileImage";

export const metadata = {
  title: "About | Edward D. Abrams",
};

const sections = [
  {
    title: "Project Structure",
    content: "",
    tree:
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
    ├── db.ts                   # PostgreSQL connection pool
    └── queries.ts              # Typed query functions
db/
└── init.sql                    # Schema + seed data
Dockerfile                      # Multi-stage production build
docker-compose.yml              # App + Postgres services
tailwind.config.ts              # Tailwind theme configuration`
  },
  {
    title: "App Router (Next.js 14)",
    content:
      "File-system routing where each folder maps to a page. A shared layout wraps every route with navigation, a footer, and corresponding queries.",
  },
  {
    title: "PostgreSQL Data Layer",
    content:
      "Resume data lives in a normalized Postgres database. Server Components query it directly at request time through a typed query layer — no ORM, just raw SQL.",
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
        "Utility-first styling with a deep navy blue palette, blue tones for surfaces and text, and maroon rose accents drawn from a personal photo. Responsive prefixes handle mobile-first breakpoints."
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden px-6 py-20">
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
      <h2 className="mt-16 text-4xl font-bold tracking-tight text-white">
        How This Site Is Built
      </h2>
      <p className="mt-2 text-blue-200">
        A walkthrough of the codebase structure, patterns, and decisions behind
        this portfolio.
      </p>

      <div className="mt-12 space-y-12">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-xl font-bold text-white">{s.title}</h2>
            {s.content && (
              <p className="mt-3 leading-relaxed text-blue-200">
                {s.content}
              </p>
            )}
            {s.tree && (
              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-blue-800 bg-blue-950 p-4 text-xs text-blue-200 sm:text-sm">
                {s.tree}
              </pre>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
