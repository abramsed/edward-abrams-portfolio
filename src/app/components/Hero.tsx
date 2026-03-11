import Link from "next/link";
import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
        {personalInfo.title}
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {personalInfo.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
        {personalInfo.summary}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/experience"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          View Experience
        </Link>
        <Link
          href="/skills"
          className="rounded-lg border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-300 transition-colors hover:border-emerald-500 hover:text-emerald-400"
        >
          View Skills
        </Link>
      </div>

      <div className="mt-8 flex gap-6 text-sm text-neutral-500">
        <span>{personalInfo.location}</span>
        <span>•</span>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-emerald-400"
        >
          LinkedIn
        </a>
        <span>•</span>
        <a
          href={`mailto:${personalInfo.email}`}
          className="transition-colors hover:text-emerald-400"
        >
          {personalInfo.email}
        </a>
      </div>
    </section>
  );
}
