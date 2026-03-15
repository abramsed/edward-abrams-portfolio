import {
  pgTable,
  serial,
  text,
  integer,
} from "drizzle-orm/pg-core";

export const personalInfo = pgTable("personal_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  location: text("location").notNull(),
  email: text("email").notNull(),
  linkedin: text("linkedin").notNull(),
  summary: text("summary").notNull(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  period: text("period").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const experienceBullets = pgTable("experience_bullets", {
  id: serial("id").primaryKey(),
  experienceId: integer("experience_id")
    .notNull()
    .references(() => experiences.id),
  bullet: text("bullet").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const skillCategories = pgTable("skill_categories", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  icon: text("icon").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const skillItems = pgTable("skill_items", {
  id: serial("id").primaryKey(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => skillCategories.id),
  item: text("item").notNull(),
});

export const skillHighlights = pgTable("skill_highlights", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  description: text("description").notNull(),
  sortOrder: integer("sort_order").notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  school: text("school").notNull(),
  degree: text("degree").notNull(),
  level: text("level").notNull(),
  date: text("date").notNull(),
});
