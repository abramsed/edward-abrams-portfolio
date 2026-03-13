import { getPersonalInfo } from "@/lib/queries";

export default async function Footer() {
  const info = await getPersonalInfo();
  return (
    <footer className="border-t border-neutral-800 py-4 text-center text-sm text-neutral-500 sm:py-6">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-2 flex flex-wrap justify-center gap-4 sm:mb-4">
          <span>{info.location}</span>
          <span>•</span>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={`mailto:${info.email}`}
            className="transition-colors hover:text-emerald-400"
          >
            {info.email}
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Edward D. Abrams. Built with{" "}
          <span className="text-neutral-400">Next.js</span>,{" "}
          <span className="text-neutral-400">TypeScript</span>,{" "}
          <span className="text-neutral-400">Tailwind CSS</span>, and{" "}
          <span className="text-neutral-400">PostgreSQL</span>.
        </p>
      </div>
    </footer>
  );
}
