CREATE TABLE "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"school" text NOT NULL,
	"degree" text NOT NULL,
	"level" text NOT NULL,
	"date" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experience_bullets" (
	"id" serial PRIMARY KEY NOT NULL,
	"experience_id" integer NOT NULL,
	"bullet" text NOT NULL,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"product" text NOT NULL,
	"period" text NOT NULL,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "personal_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"location" text NOT NULL,
	"email" text NOT NULL,
	"linkedin" text NOT NULL,
	"summary" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skill_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"icon" text NOT NULL,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skill_highlights" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"description" text NOT NULL,
	"sort_order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skill_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer NOT NULL,
	"item" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "experience_bullets" ADD CONSTRAINT "experience_bullets_experience_id_experiences_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experiences"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skill_items" ADD CONSTRAINT "skill_items_category_id_skill_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."skill_categories"("id") ON DELETE no action ON UPDATE no action;