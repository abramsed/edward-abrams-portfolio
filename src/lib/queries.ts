import { asc } from "drizzle-orm";
import db from "./db";
import {
  personalInfo,
  experiences,
  experienceBullets,
  skillCategories,
  skillItems,
  skillHighlights,
  education,
} from "./schema";

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
}

export interface Experience {
  title: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  icon: string;
  items: string[];
}

export interface SkillHighlight {
  label: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  level: string;
  date: string;
}

export async function getPersonalInfo(): Promise<PersonalInfo> {
  const rows = await db
    .select({
      name: personalInfo.name,
      title: personalInfo.title,
      location: personalInfo.location,
      email: personalInfo.email,
      linkedin: personalInfo.linkedin,
      summary: personalInfo.summary,
    })
    .from(personalInfo)
    .limit(1);
  return rows[0];
}

export async function getExperiences(): Promise<Experience[]> {
  const exps = await db
    .select()
    .from(experiences)
    .orderBy(asc(experiences.sortOrder));

  const bullets = await db
    .select()
    .from(experienceBullets)
    .orderBy(asc(experienceBullets.sortOrder));

  const bulletMap = new Map<number, string[]>();
  for (const b of bullets) {
    const list = bulletMap.get(b.experienceId) ?? [];
    list.push(b.bullet);
    bulletMap.set(b.experienceId, list);
  }

  return exps.map((e) => ({
    title: e.title,
    period: e.period,
    bullets: bulletMap.get(e.id) ?? [],
  }));
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const cats = await db
    .select()
    .from(skillCategories)
    .orderBy(asc(skillCategories.sortOrder));

  const items = await db.select().from(skillItems);

  const itemMap = new Map<number, string[]>();
  for (const i of items) {
    const list = itemMap.get(i.categoryId) ?? [];
    list.push(i.item);
    itemMap.set(i.categoryId, list);
  }

  return cats.map((c) => ({
    label: c.label,
    icon: c.icon,
    items: itemMap.get(c.id) ?? [],
  }));
}

export async function getSkillHighlights(): Promise<SkillHighlight[]> {
  return db
    .select({ label: skillHighlights.label, description: skillHighlights.description })
    .from(skillHighlights)
    .orderBy(asc(skillHighlights.sortOrder));
}

export async function getEducation(): Promise<Education> {
  const rows = await db
    .select({
      school: education.school,
      degree: education.degree,
      level: education.level,
      date: education.date,
    })
    .from(education)
    .limit(1);
  return rows[0];
}
