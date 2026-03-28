import { PersonalInfo } from "@/lib/queries";
import HexagonIcon from "./HexagonIcon";
import YellowButton from "./YellowButton";
import GreenButton from "./GreenButton";

export default function Hero({ info }: { info: PersonalInfo }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-10">
      <div className="w-full max-w-2xl rounded-xl border border-gray-200 px-6 shadow-sm sm:px-14" style={{ backgroundColor: 'rgba(252,251,248,0.92)', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-pink-600">
        {info.title}
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {info.name.split(".").length > 1 ? (
          <>
            <span className="whitespace-nowrap">
              {info.name.split(".")[0]}
              <HexagonIcon className="w-4 h-4 sm:w-5 sm:h-5 mx-0.5 align-baseline relative top-[2px]" />
            </span>
            {info.name.split(".").slice(1).join(".").trim()}
          </>
        ) : (
          info.name
        )}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
        {info.summary}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2.5rem' }}>
        <YellowButton href="/experience">View Experience</YellowButton>
        <GreenButton href="/skills">View Skills</GreenButton>
      </div>

      </div>
    </section>
  );
}
