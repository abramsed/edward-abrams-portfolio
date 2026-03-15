# Edward D. Abrams — Portfolio

A full-stack portfolio built with React, Next.js, and PostgreSQL, showcasing skills, experience, and the architecture behind this codebase.

## Tech Stack

- **React 18**
- **Next.js 14** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **PostgreSQL** — resume data served from a normalized relational database
- **Docker** — multi-stage build; Docker Compose orchestrates the app and database

## Running Locally

### With Docker (recommended)

```bash
docker compose up --build
```

The database is seeded automatically on first launch via `db/init.sql`.

### Without Docker

Requires a local PostgreSQL instance. Set `DATABASE_URL` in a `.env.local` file:

```
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db>
```

Then:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
    ├── db.ts                   # PostgreSQL connection pool
    └── queries.ts              # Typed query functions
db/
└── init.sql                    # Schema + seed data
Dockerfile                      # Multi-stage production build
docker-compose.yml              # App + Postgres services
tailwind.config.ts              # Tailwind theme configuration
```
