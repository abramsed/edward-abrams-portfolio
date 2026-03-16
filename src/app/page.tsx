import Hero from "./components/Hero";
import { getPersonalInfo } from "@/lib/queries";

export default async function Home() {
  const info = await getPersonalInfo();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: info.name,
    jobTitle: info.title,
    url: "https://tedbramsy.com",
    email: `mailto:${info.email}`,
    sameAs: [info.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: info.location,
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      ".NET",
      "PostgreSQL",
      "Cloud Architecture",
      "API Design",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero info={info} />
    </>
  );
}
