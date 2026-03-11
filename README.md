# Edward D. Abrams — Portfolio

A React / Next.js portfolio showcasing my skills, experience, and the architecture decisions behind this codebase.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Hero landing with professional summary
- `/experience` — Timeline of roles at United Wholesale Mortgage
- `/skills` — Skill cards across languages, frameworks, architecture, and tools
- `/architecture` — Meta walkthrough of how this site is structured

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home / Hero
│   ├── experience/page.tsx     # Work experience timeline
│   ├── skills/page.tsx         # Skill breakdown cards
│   ├── architecture/page.tsx   # Codebase walkthrough
│   └── components/             # Shared UI components
└── data/
    └── resume.ts               # Typed resume data
```
