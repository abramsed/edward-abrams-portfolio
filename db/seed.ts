import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  personalInfo,
  experiences,
  experienceBullets,
  skillCategories,
  skillItems,
  skillHighlights,
  education,
} from "../src/lib/schema";

// Load .env.local if present (Next.js does this automatically; plain Node does not)
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = join(root, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match && !process.env[match[1].trim()])
      process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, "");
  }
}

const connectionString =
  process.env.POSTGRES_DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.DATABASE_URL ??
  "";

if (!connectionString) {
  console.error("Set POSTGRES_URL or DATABASE_URL in .env.local or your environment.");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl:
    connectionString.includes("localhost") ||
    connectionString.includes("127.0.0.1")
      ? undefined
      : { rejectUnauthorized: false },
});

const db = drizzle(pool);

async function seed() {
  console.log("Seeding database...");

  // personal_info
  const existingPersonal = await db.select().from(personalInfo).limit(1);
  if (existingPersonal.length === 0) {
    await db.insert(personalInfo).values({
      name: "Edward D. Abrams",
      title: "Software Engineer",
      location: "Detroit",
      email: "abramsed17@gmail.com",
      linkedin: "https://linkedin.com/in/edward-abrams-05873299",
      summary:
        "Accomplished full stack engineer with 6+ years of continuous growth and leadership in software development. Designs scalable, performant web applications with intuitive, reliable user experiences.",
    });
    console.log("  ✓ personal_info");
  } else {
    console.log("  - personal_info already seeded");
  }

  // experiences
  const existingExperiences = await db.select().from(experiences).limit(1);
  if (existingExperiences.length === 0) {
    await db.insert(experiences).values([
      { title: "Software Developer III", period: "July 2024 – Present", sortOrder: 1 },
      { title: "Team Leader, Product Development", period: "June 2023 – July 2024", sortOrder: 2 },
      { title: "Software Developer II", period: "Sept 2021 – June 2023", sortOrder: 3 },
      { title: "Trainee → Software Developer I", period: "Sept 2019 – Sept 2021", sortOrder: 4 },
    ]);
    console.log("  ✓ experiences");

    // experience_bullets (depends on experiences being inserted first)
    const inserted = await db.select().from(experiences).orderBy(experiences.sortOrder);
    const [e1, e2, e3, e4] = inserted.map((e) => e.id);

    await db.insert(experienceBullets).values([
      { experienceId: e1, bullet: "Frontend development lead for a CRM and content creation platform built with React and Next.js", sortOrder: 1 },
      { experienceId: e1, bullet: "Established SAML and OAuth connectivity for the Canva API, leveraging PKCE flow with SHA-256 encoding and verification", sortOrder: 2 },
      { experienceId: e1, bullet: "Scoped contexts for persistent state management within defined boundaries to reduce network traffic and optimize memory consumption", sortOrder: 3 },
      { experienceId: e2, bullet: "Launched company's first public-facing .NET APIs, opening the platform to external partners", sortOrder: 1 },
      { experienceId: e2, bullet: "Directed engineering teams in onboarding third-party vendors, defining connectivity standards", sortOrder: 2 },
      { experienceId: e2, bullet: "Championed a structured testing discipline with quality benchmarks to reduce regression risk", sortOrder: 3 },
      { experienceId: e3, bullet: "Introduced organization to enterprise NoSQL platforms with auto-scaling cloud infrastructure", sortOrder: 1 },
      { experienceId: e3, bullet: "Migrated a terabyte of SQL Server data to Azure Cosmos DB, alleviating costs of on-premises servers", sortOrder: 2 },
      { experienceId: e3, bullet: "Developed eventually consistent data replication pipelines with Apache Spark to maintain legacy reports", sortOrder: 3 },
      { experienceId: e4, bullet: "Earned MVP recognition during the developer training program for peer mentorship and technical merit", sortOrder: 1 },
      { experienceId: e4, bullet: "Delivered regulatory compliance updates ahead of competitors using a stangler pattern to route loans based on submission date", sortOrder: 2 },
      { experienceId: e4, bullet: "Led development of RESTful income calculation APIs, eliminating manual underwriting processes performed in Excel macros", sortOrder: 3 },
    ]);
    console.log("  ✓ experience_bullets");
  } else {
    console.log("  - experiences already seeded");
  }

  // skill_categories
  const existingCategories = await db.select().from(skillCategories).limit(1);
  if (existingCategories.length === 0) {
    await db.insert(skillCategories).values([
      { label: "Languages", icon: "💻", sortOrder: 1 },
      { label: "Frameworks", icon: "⚙️", sortOrder: 2 },
      { label: "Tools & Data", icon: "🛠️", sortOrder: 3 },
    ]);
    console.log("  ✓ skill_categories");

    const cats = await db.select().from(skillCategories).orderBy(skillCategories.sortOrder);
    const [lang, fw, tools] = cats.map((c) => c.id);

    await db.insert(skillItems).values([
      { categoryId: lang, item: "C#" },
      { categoryId: lang, item: "T-SQL" },
      { categoryId: lang, item: "Python" },
      { categoryId: lang, item: "TypeScript" },
      { categoryId: fw, item: ".NET" },
      { categoryId: fw, item: "React" },
      { categoryId: fw, item: "Next.js" },
      { categoryId: fw, item: "Svelte" },
      { categoryId: tools, item: "Azure" },
      { categoryId: tools, item: "GCP" },
      { categoryId: tools, item: "MongoDB" },
      { categoryId: tools, item: "PostgreSQL" },
      { categoryId: tools, item: "Kafka" },
      { categoryId: tools, item: "Redis" },
      { categoryId: tools, item: "Docker" },
      { categoryId: tools, item: "Terraform" },
    ]);
    console.log("  ✓ skill_items");
  } else {
    console.log("  - skill_categories already seeded");
  }

  // skill_highlights
  const existingHighlights = await db.select().from(skillHighlights).limit(1);
  if (existingHighlights.length === 0) {
    await db.insert(skillHighlights).values([
      { label: "Cloud-Native Data", description: "Migrated a terabyte of SQL Server data to Azure Cosmos DB and built eventually consistent replication pipelines with Apache Spark.", sortOrder: 1 },
      { label: "API Security & Identity", description: "Established SAML and OAuth connectivity for the Canva API, leveraging PKCE flow with SHA-256 encoding and verification.", sortOrder: 2 },
      { label: "React / Next.js", description: "Frontend development lead for a CRM platform using React and Next.js; combined server-side fetching with scoped client contexts and caching to reduce network traffic and optimize memory.", sortOrder: 3 },
      { label: "Public .NET APIs", description: "Launched company's first public-facing .NET APIs, opening the platform to external partners and defining connectivity standards.", sortOrder: 4 },
    ]);
    console.log("  ✓ skill_highlights");
  } else {
    console.log("  - skill_highlights already seeded");
  }

  // education
  const existingEducation = await db.select().from(education).limit(1);
  if (existingEducation.length === 0) {
    await db.insert(education).values({
      school: "Michigan State University",
      degree: "Elementary Education",
      level: "Bachelor of Arts",
      date: "May 2015",
    });
    console.log("  ✓ education");
  } else {
    console.log("  - education already seeded");
  }

  await pool.end();
  console.log("Done.");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
