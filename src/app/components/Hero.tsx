import { PersonalInfo } from "@/lib/queries";
import HexagonIcon from "./HexagonIcon";
import YellowButton from "./YellowButton";
import GreenButton from "./GreenButton";
import HeroButtonGroup from "./HeroButtonGroup";

export default function Hero({ info }: { info: PersonalInfo }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-2">
      <style>{`
        .hero-heading { font-size: 2.25rem; line-height: 1.1; }
        .hero-summary { font-size: 1rem; line-height: 1.6; }
        @media (min-width: 640px) {
          .hero-heading { font-size: 3.75rem; line-height: 1; }
          .hero-summary { font-size: 1.125rem; line-height: 1.75; }
        }
      `}</style>
      <div className="w-full max-w-2xl rounded-xl border border-gray-200 shadow-sm" style={{ backgroundColor: 'rgba(252,251,248,0.92)', paddingTop: '1.25rem', paddingBottom: '1.25rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-pink-600">
        {info.title}
      </p>
      <h1 className="hero-heading font-bold tracking-tight text-gray-900">
        {info.name.split(".").length > 1 ? (
          <>
            <span className="whitespace-nowrap">
              {info.name.split(".")[0]}
              <HexagonIcon className="w-4 h-4 sm:w-5 sm:h-5 mx-0.5 align-baseline relative top-[2px]" />
            </span>
            <span style={{ display: 'block' }}>{info.name.split(".").slice(1).join(".").trim()}</span>
          </>
        ) : (
          info.name
        )}
      </h1>
      <p className="hero-summary mt-3 max-w-2xl text-gray-700">
        {info.summary}
      </p>

      <HeroButtonGroup>
        <YellowButton href="/experience">View Experience</YellowButton>
        <GreenButton href="/skills">View Skills</GreenButton>
      </HeroButtonGroup>

      </div>
    </section>
  );
}
