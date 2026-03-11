export const personalInfo = {
  name: "Edward D. Abrams",
  title: "Software Developer III",
  location: "St. Clair Shores, MI",
  email: "abramsed17@gmail.com",
  linkedin: "https://linkedin.com/in/edward-abrams-05873299",
  summary:
    "Former educator turned software engineer — 6+ years of continuous advancement at United Wholesale Mortgage, from developer trainee to team leader to SDE III. Specializes in cloud-native data architecture, public API design, and React/Next.js product development.",
};

export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Developer III",
    company: "United Wholesale Mortgage",
    period: "July 2024 – Present",
    bullets: [
      "Lead frontend development for a CRM and content creation platform built on React with a Next.js server layer",
      "Designed the Next.js service layer as the integration boundary for all third-party services, enforcing clean separation between the React frontend and external dependencies",
      "Implemented the Canva API as the platform's first embedded creative tooling, enabling users to produce branded content without leaving the product",
    ],
  },
  {
    title: "Team Leader, Product Development",
    company: "United Wholesale Mortgage",
    period: "June 2023 – July 2024",
    bullets: [
      "Launched the company's first public-facing APIs, opening the platform to external partners and expanding its ecosystem reach",
      "Directed engineering teams in onboarding third-party vendors, defining technical standards for connectivity, reliability, and maintainability",
      "Championed a structured testing discipline, establishing quality benchmarks that reduced regression risk across product lines",
    ],
  },
  {
    title: "Software Developer II",
    company: "United Wholesale Mortgage",
    period: "Sept 2021 – June 2023",
    bullets: [
      "Designed the organization's first polymorphic NoSQL model with a flexible, schema-agnostic structure",
      "Migrated production data from SQL Server to Azure Cosmos DB, eliminating on-premises server costs and enabling auto-scaling cloud infrastructure",
      "Reduced null column storage from 96% to near zero by persisting only populated fields as BSON documents",
    ],
  },
  {
    title: "Trainee → Software Developer I",
    company: "United Wholesale Mortgage",
    period: "Sept 2019 – Sept 2021",
    bullets: [
      "Earned MVP recognition during the developer training program for peer mentorship and technical contributions",
      "Delivered URLA regulatory compliance updates ahead of competitors, developing stored procedures, tables, and XML structures to meet new federal form requirements",
      "Led development of a distributed .NET Core microservice with RESTful income calculation APIs, cutting loan underwriting time from 30 minutes to 5 minutes",
    ],
  },
];

export interface SkillCategory {
  label: string;
  icon: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    icon: "💻",
    items: ["C#", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    icon: "⚙️",
    items: ["React", "Next.js", ".NET Core"],
  },
  {
    label: "Architecture",
    icon: "🏗️",
    items: ["OOP", "N-Tier", "MVC", "DDD", "RESTful APIs", "Microservices"],
  },
  {
    label: "Tools & Data",
    icon: "🛠️",
    items: ["Azure", "Cosmos DB", "MongoDB", "SQL Server", "SSMS", "Git"],
  },
];

export const education = {
  school: "Michigan State University",
  degree: "Elementary Education",
  level: "Bachelor of Arts",
  date: "May 2015",
};
