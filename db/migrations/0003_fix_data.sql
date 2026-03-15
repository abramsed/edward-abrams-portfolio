-- Swap TypeScript and T-SQL (idempotent: only runs if they're still in the wrong order)
UPDATE "skill_items" SET "item" = '__TEMP__' WHERE "item" = 'TypeScript' AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Languages') AND "id" < (SELECT "id" FROM "skill_items" WHERE "item" = 'T-SQL' AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Languages'));
UPDATE "skill_items" SET "item" = 'TypeScript' WHERE "item" = 'T-SQL' AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Languages');
UPDATE "skill_items" SET "item" = 'T-SQL' WHERE "item" = '__TEMP__' AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Languages');

-- Remove "the" before company's/organization's (safe to re-run)
UPDATE "experience_bullets" SET "bullet" = REPLACE("bullet", 'the company''s', 'company''s') WHERE "bullet" LIKE '%the company''s%';
UPDATE "experience_bullets" SET "bullet" = REPLACE("bullet", 'the organization''s', 'organization''s') WHERE "bullet" LIKE '%the organization''s%';
UPDATE "experience_bullets" SET "bullet" = REPLACE("bullet", 'the organization', 'organization') WHERE "bullet" LIKE '%the organization%';
UPDATE "skill_highlights" SET "description" = REPLACE("description", 'the company''s', 'company''s') WHERE "description" LIKE '%the company''s%';
UPDATE "skill_highlights" SET "description" = REPLACE("description", 'the organization''s', 'organization''s') WHERE "description" LIKE '%the organization''s%';
