-- Track the employer for each role now that experience spans more than one company
ALTER TABLE "experiences" ADD COLUMN IF NOT EXISTS "company" text DEFAULT 'United Wholesale Mortgage' NOT NULL;
--> statement-breakpoint
ALTER TABLE "experiences" ALTER COLUMN "company" DROP DEFAULT;
--> statement-breakpoint

-- Data updates below only touch an already-seeded database; a fresh database gets everything from db/seed.ts

-- UWM role ended when the Medical Solutions role began
UPDATE "experiences" SET "period" = 'July 2024 – May 2026' WHERE "title" = 'Software Developer III' AND "period" = 'July 2024 – Present';
--> statement-breakpoint

-- Make room at the top of the timeline for the new role
UPDATE "experiences" SET "sort_order" = "sort_order" + 1
WHERE NOT EXISTS (SELECT 1 FROM "experiences" WHERE "company" = 'Medical Solutions');
--> statement-breakpoint

INSERT INTO "experiences" ("title", "company", "period", "sort_order")
SELECT 'Senior Software Developer', 'Medical Solutions', 'May 2026 – Present', 1
WHERE EXISTS (SELECT 1 FROM "experiences")
  AND NOT EXISTS (SELECT 1 FROM "experiences" WHERE "company" = 'Medical Solutions');
--> statement-breakpoint

INSERT INTO "experience_bullets" ("experience_id", "bullet", "sort_order")
SELECT e."id", v."bullet", v."sort_order"
FROM "experiences" e
CROSS JOIN (VALUES
  ('Owner of core event-driven .NET microservices for a platform connecting hospitals to traveling nurses, publishing job, assignment, and shift requests via Azure Service Bus to notify downstream systems', 1),
  ('Migrated legacy PowerBI integrations to a new service using validation attributes to populate report views based on permissions and created a React component for administrators to manage visibility independently', 2),
  ('Designed a data auditing event flow with an extensible schema for future developers to contribute new types through EF Core migrations', 3),
  ('Mentored teammates on querying Azure App Insights logs and improved observability dashboards', 4)
) AS v("bullet", "sort_order")
WHERE e."company" = 'Medical Solutions'
  AND NOT EXISTS (SELECT 1 FROM "experience_bullets" b WHERE b."experience_id" = e."id");
--> statement-breakpoint

-- Fix typo
UPDATE "experience_bullets" SET "bullet" = REPLACE("bullet", 'stangler', 'strangler') WHERE "bullet" LIKE '%stangler%';
--> statement-breakpoint

-- Summary: 7+ years
UPDATE "personal_info" SET "summary" = REPLACE("summary", '6+ years', '7+ years') WHERE "summary" LIKE '%6+ years%';
--> statement-breakpoint

-- Frameworks: .NET, React, Next.js, Node.js, Svelte (items render in id order, so Svelte's row becomes Node.js and Svelte is re-added last)
UPDATE "skill_items" SET "item" = 'Node.js'
WHERE "item" = 'Svelte'
  AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Frameworks')
  AND NOT EXISTS (SELECT 1 FROM "skill_items" WHERE "item" = 'Node.js');
--> statement-breakpoint

INSERT INTO "skill_items" ("category_id", "item")
SELECT "id", 'Svelte' FROM "skill_categories"
WHERE "label" = 'Frameworks'
  AND NOT EXISTS (SELECT 1 FROM "skill_items" WHERE "item" = 'Svelte');
--> statement-breakpoint

INSERT INTO "skill_items" ("category_id", "item")
SELECT "id", 'Claude' FROM "skill_categories"
WHERE "label" = 'Tools & Data'
  AND NOT EXISTS (SELECT 1 FROM "skill_items" WHERE "item" = 'Claude');
--> statement-breakpoint

-- Lead the highlights with the current role
INSERT INTO "skill_highlights" ("label", "description", "sort_order")
SELECT 'Event-Driven Microservices', 'Owner of core event-driven .NET microservices connecting hospitals to traveling nurses, publishing job, assignment, and shift requests via Azure Service Bus to notify downstream systems.', 0
WHERE EXISTS (SELECT 1 FROM "skill_highlights")
  AND NOT EXISTS (SELECT 1 FROM "skill_highlights" WHERE "label" = 'Event-Driven Microservices');
