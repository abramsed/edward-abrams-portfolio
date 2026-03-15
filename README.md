# Edward D. Abrams — Portfolio

A full-stack portfolio built with React, Next.js, and PostgreSQL, showcasing skills, experience, and the architecture behind this codebase.

## Tech Stack

- **React 19**
- **Next.js 16** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **PostgreSQL** — resume data served from a normalized relational database
- **Drizzle ORM** — type-safe schema definitions and migrations
- **Vercel** — hosting and managed Postgres (via Vercel Postgres)

## Running Locally

The recommended workflow uses the Vercel CLI so your local environment connects to the same Vercel-hosted Postgres as production — no separate local database needed.

```bash
npm install -g vercel
vercel link              # connect this repo to your Vercel project (one-time)
npm install
npm run vercel:setup     # pulls env vars from Vercel + migrates + seeds
npm run vercel:dev       # start local dev server at http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000).

### Using a local database instead

If you want local dev fully isolated from the live database (e.g. when testing schema changes), install Postgres locally ([Postgres.app](https://postgresapp.com/) or `brew install postgresql`) and set a local connection string in `.env.local`:

```
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db>
```

Then:

```bash
npm install
npm run db:setup
npm run dev
```

## Database Scripts

| Command | Description |
|---|---|
| `npm run db:generate` | Generate a new migration from schema changes |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:seed` | Seed the database with resume data |
| `npm run db:setup` | Migrate + seed (first-time setup) |

Migrations run automatically on every Vercel deployment via the `build` script.

## Deploying to Vercel

1. Create a Postgres database in the [Vercel dashboard](https://vercel.com/dashboard) and link it to your project.
2. Vercel will automatically inject `POSTGRES_URL` into your environment.
3. On every deploy, `npm run build` runs `db:migrate` before building, keeping the schema up to date.

## Pages

- `/` — Hero landing with professional summary
- `/experience` — Work history timeline and education
- `/skills` — Skill cards and highlights
- `/about` — Personal bio and site architecture walkthrough

## Project Structure

```
src/
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
├── migrations/                 # Auto-generated SQL migrations (drizzle-kit)
└── seed.ts                     # Idempotent seed script
drizzle.config.ts               # Drizzle Kit configuration
tailwind.config.ts              # Tailwind theme configuration
```
