-- Medical Solutions bullet rewording
UPDATE "experience_bullets"
SET "bullet" = 'Ported legacy PowerBI integrations to a new service using validation attributes to populate report views based on permissions and created a reusable component for administrators to manage visibility independently'
WHERE "bullet" LIKE 'Migrated legacy PowerBI integrations%';
--> statement-breakpoint

UPDATE "experience_bullets"
SET "bullet" = 'Designed a data auditing event flow with an extensible schema for future developers to contribute new types through EF Core migrations that enable new actions to be persisted to the enterprise data lake'
WHERE "bullet" = 'Designed a data auditing event flow with an extensible schema for future developers to contribute new types through EF Core migrations';
--> statement-breakpoint

INSERT INTO "skill_items" ("category_id", "item")
SELECT "id", 'Copilot' FROM "skill_categories"
WHERE "label" = 'Tools & Data'
  AND NOT EXISTS (SELECT 1 FROM "skill_items" WHERE "item" = 'Copilot');
