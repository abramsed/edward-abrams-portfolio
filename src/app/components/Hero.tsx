import Link from "next/link";
import { PersonalInfo } from "@/lib/queries";
import DodecahedronIcon from "./DodecahedronIcon";

export default function Hero({ info }: { info: PersonalInfo }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-rose-400">
        {info.title}
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
        {info.name.split(".").length > 1 ? (
          <>
            {info.name.split(".")[0]}
            <DodecahedronIcon className="w-4 h-4 sm:w-5 sm:h-5 mx-0.5" />
            {info.name.split(".").slice(1).join(".")}
          </>
        ) : (
          info.name
        )}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-200">
        {info.summary}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/experience"
          className="rounded-lg bg-[#8b3050] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a03860]"
        >
          View Experience
        </Link>
        <Link
          href="/skills"
          className="rounded-lg border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-200 transition-colors hover:border-rose-400 hover:text-rose-400"
        >
          View Skills
        </Link>
      </div>

    </section>
  );
}
