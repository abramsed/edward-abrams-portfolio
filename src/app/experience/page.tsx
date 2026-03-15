import { getExperiences, getEducation } from "@/lib/queries";
import TimelineItem from "../components/TimelineItem";

export const metadata = {
  title: "Experience | Edward D. Abrams",
};

export default async function ExperiencePage() {
  const [experiences, education] = await Promise.all([
    getExperiences(),
    getEducation(),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-6 sm:py-12">
      <h1 className="text-4xl font-bold tracking-tight text-white">
        Work Experience
      </h1>

      <div className="mt-6 sm:mt-12">
        {experiences.map((exp) => (
          <TimelineItem key={exp.title} {...exp} />
        ))}
      </div>

      {/* Education */}
      <section className="mt-8 border-t border-blue-800 pt-6 sm:mt-16 sm:pt-12">
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">
            {education.school}
          </h3>
          <p className="text-sm text-blue-300">
            {education.level}, {education.degree} &mdash; {education.date}
          </p>
        </div>
      </section>
    </div>
  );
}
