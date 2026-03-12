export const metadata = {
  title: "Architecture | Edward D. Abrams",
};

const sections = [
  {
    title: "App Router (Next.js 14)",
    content:
      "This site uses the Next.js App Router with file-system based routing. Each top-level folder under src/app/ (experience, skills, architecture) maps to a route, with a page.tsx that exports a default React component. The root layout.tsx wraps every page with shared navigation, footer, and a React Query provider.",
  },
  {
    title: "PostgreSQL Data Layer",
    content:
      "All resume data is stored in a PostgreSQL 16 database across six normalized tables: personal_info, experiences, experience_bullets, skill_categories, skill_items, and education. A connection pool (src/lib/db.ts) manages connections, and a typed query layer (src/lib/queries.ts) exports functions like getExperiences() and getSkillCategories() that return fully-typed TypeScript interfaces. Pages are async Server Components that fetch directly from Postgres at request time — no ORM overhead, just raw SQL with strong types.",
  },
  {
    title: "API Routes & React Query",
    content:
      "Four Next.js Route Handlers (src/app/api/) expose the database query layer as a REST-like JSON API: /api/personal-info, /api/experiences, /api/skills, and /api/education. On the client side, TanStack React Query provides hooks (usePersonalInfo, useExperiences, useSkillCategories, useEducation) that fetch from these endpoints with automatic caching, deduplication, and a 60-second stale time. A QueryClientProvider wraps the entire app via src/app/components/Providers.tsx. This dual approach lets server components fetch directly from Postgres for fast initial renders, while client components can use the hooks for interactive features without duplicating data-fetching logic.",
  },
  {
    title: "Docker & Container Architecture",
    content:
      "The entire stack runs in Docker via docker-compose.yml. The database service uses the postgres:16-alpine image with an init script (db/init.sql) that creates the schema and seeds all resume data on first launch. The app service uses a multi-stage Dockerfile: a Node 20 builder stage installs dependencies and runs next build with standalone output, then a minimal runner stage copies only the production artifacts. Next.js standalone output means no node_modules in the final image — just a self-contained server.js. The two containers communicate over an internal Docker network, with only port 3000 exposed to the host.",
  },
  {
    title: "Component Architecture",
    content:
      "Reusable UI components live in src/app/components/. Each is a single-responsibility unit: Navbar handles navigation state, Hero renders the landing section, SkillCard displays a skill category, TimelineItem renders a single work experience entry, Providers wraps children in the React Query context, and Footer provides site-wide branding. Props are typed using the interfaces from the query layer.",
  },
  {
    title: "Styling with Tailwind CSS",
    content:
      "All styling is done with Tailwind utility classes — no custom CSS files beyond globals.css for base variables. The design uses a dark neutral palette with emerald accent colors. Tailwind's responsive prefixes (sm:, md:) handle mobile-first breakpoints. The layout uses Flexbox and CSS Grid for structure.",
  },
  {
    title: "Project Structure",
    content: "",
    tree: `edward-abrams-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           → Root shell (Navbar + Providers + Footer)
│   │   ├── page.tsx             → Home / Hero
│   │   ├── experience/page.tsx  → Work timeline
│   │   ├── skills/page.tsx      → Skill cards + highlights
│   │   ├── architecture/page.tsx→ This page (meta)
│   │   ├── api/                 → REST route handlers
│   │   │   ├── personal-info/   → GET /api/personal-info
│   │   │   ├── experiences/     → GET /api/experiences
│   │   │   ├── skills/          → GET /api/skills
│   │   │   └── education/       → GET /api/education
│   │   ├── components/          → Shared UI components + Providers
│   │   └── globals.css          → Tailwind base + variables
│   ├── hooks/
│   │   └── useResumeData.ts     → React Query hooks
│   └── lib/
│       ├── db.ts                → PostgreSQL connection pool
│       └── queries.ts           → Typed query functions
├── db/
│   └── init.sql                 → Schema + seed data
├── Dockerfile                   → Multi-stage build
├── docker-compose.yml           → App + Postgres orchestration
├── tailwind.config.ts
├── tsconfig.json
└── package.json`,
  },
  {
    title: "Why This Stack?",
    content:
      "React and Next.js are the primary tools in my day-to-day work as an SDE III. TypeScript enforces type safety from the database queries through the API routes to the UI components. PostgreSQL provides a real relational data layer that mirrors production patterns. React Query adds client-side caching and state management for interactive features. Docker packages everything into reproducible containers that run identically anywhere. Together they produce a full-stack application that demonstrates the exact technologies and architecture patterns listed on my resume.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
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
              <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm text-neutral-300">
                {s.tree}
              </pre>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
