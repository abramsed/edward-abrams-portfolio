import Link from "next/link";
import { PersonalInfo } from "@/lib/queries";

export default function Hero({ info }: { info: PersonalInfo }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
        {info.title}
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {info.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
        {info.summary}
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

    </section>
  );
}
