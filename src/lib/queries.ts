import pool from "./db";

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
  product: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  label: string;
  icon: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  level: string;
  date: string;
}

export async function getPersonalInfo(): Promise<PersonalInfo> {
  const { rows } = await pool.query(
    "SELECT name, title, location, email, linkedin, summary FROM personal_info LIMIT 1"
  );
  return rows[0];
}

export async function getExperiences(): Promise<Experience[]> {
  const { rows: exps } = await pool.query(
    "SELECT id, title, product, period FROM experiences ORDER BY sort_order"
  );

  const { rows: bullets } = await pool.query(
    "SELECT experience_id, bullet FROM experience_bullets ORDER BY sort_order"
  );

  const bulletMap = new Map<number, string[]>();
  for (const b of bullets) {
    const list = bulletMap.get(b.experience_id) ?? [];
    list.push(b.bullet);
    bulletMap.set(b.experience_id, list);
  }

  return exps.map((e) => ({
    title: e.title,
    product: e.product,
    period: e.period,
    bullets: bulletMap.get(e.id) ?? [],
  }));
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const { rows: cats } = await pool.query(
    "SELECT id, label, icon FROM skill_categories ORDER BY sort_order"
  );

  const { rows: items } = await pool.query(
    "SELECT category_id, item FROM skill_items"
  );

  const itemMap = new Map<number, string[]>();
  for (const i of items) {
    const list = itemMap.get(i.category_id) ?? [];
    list.push(i.item);
    itemMap.set(i.category_id, list);
  }

  return cats.map((c) => ({
    label: c.label,
    icon: c.icon,
    items: itemMap.get(c.id) ?? [],
  }));
}

export async function getEducation(): Promise<Education> {
  const { rows } = await pool.query(
    "SELECT school, degree, level, date FROM education LIMIT 1"
  );
  return rows[0];
}
