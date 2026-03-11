export const metadata = {
  title: "Architecture | Edward D. Abrams",
};

const sections = [
  {
    title: "App Router (Next.js 14)",
    content:
      "This site uses the Next.js App Router with file-system based routing. Each top-level folder under src/app/ (experience, skills, architecture) maps to a route, with a page.tsx that exports a default React component. The root layout.tsx wraps every page with shared navigation and footer.",
  },
  {
    title: "TypeScript & Typed Data Layer",
    content:
      "All resume data lives in src/data/resume.ts as strongly-typed constants and interfaces (Experience, SkillCategory). Pages import this data and render it — keeping content separate from presentation. If this were a larger project, this layer could be swapped for a CMS or API without changing any components.",
  },
  {
    title: "Component Architecture",
    content:
      "Reusable UI components live in src/app/components/. Each is a single-responsibility unit: Navbar handles navigation state, Hero renders the landing section, SkillCard displays a skill category, TimelineItem renders a single work experience entry, and Footer provides site-wide branding. Props are typed using the interfaces from the data layer.",
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
│   │   ├── layout.tsx           → Root shell (Navbar + Footer)
│   │   ├── page.tsx             → Home / Hero
│   │   ├── experience/page.tsx  → Work timeline
│   │   ├── skills/page.tsx      → Skill cards + highlights
│   │   ├── architecture/page.tsx→ This page (meta)
│   │   ├── components/          → Shared UI components
│   │   └── globals.css          → Tailwind base + variables
│   └── data/
│       └── resume.ts            → All resume data (typed)
├── tailwind.config.ts
├── tsconfig.json
└── package.json`,
  },
  {
    title: "Why This Stack?",
    content:
      "React and Next.js are the primary tools in my day-to-day work as an SDE III. TypeScript enforces type safety across the data and component layers. Tailwind keeps styling co-located and eliminates dead CSS. Together they produce a fast, statically-optimizable site that also demonstrates the exact technologies listed on my resume.",
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
