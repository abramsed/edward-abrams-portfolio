import { getExperiences, getEducation } from "@/lib/queries";
import TimelineItem from "../components/TimelineItem";

export const metadata = {
  title: "Experience",
  description:
    "Work experience and education of Edward D. Abrams — Full Stack Developer with expertise in React, Next.js, .NET, cloud-native architecture, and API design.",
};

export default async function ExperiencePage() {
  const [experiences, education] = await Promise.all([
    getExperiences(),
    getEducation(),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-4 sm:py-8">

      {/* Work Experience heading card */}
      <div className="rounded-xl border border-gray-200 p-6 shadow-sm" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Work Experience
        </h1>
      </div>

      {/* Individual experience cards */}
      <div className="mt-4 space-y-4">
        {experiences.map((exp) => (
          <TimelineItem key={exp.title} {...exp} />
        ))}
      </div>

      {/* Education card */}
      <section className="mt-4 rounded-xl border border-gray-200 p-6 shadow-sm sm:mt-6" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {education.school}
          </h3>
          <p className="text-sm text-gray-700">
            {education.level}, {education.degree} &mdash; {education.date}
          </p>
        </div>
      </section>

    </div>
  );
}
