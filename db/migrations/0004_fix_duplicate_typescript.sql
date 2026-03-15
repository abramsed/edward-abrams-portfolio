-- Fix: there are now two 'TypeScript' rows in Languages. The lower-id one should be 'T-SQL'.
UPDATE "skill_items"
SET "item" = 'T-SQL'
WHERE "id" = (
  SELECT MIN("id")
  FROM "skill_items"
  WHERE "item" = 'TypeScript'
    AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Languages')
)
AND (
  SELECT COUNT(*)
  FROM "skill_items"
  WHERE "item" = 'TypeScript'
    AND "category_id" = (SELECT "id" FROM "skill_categories" WHERE "label" = 'Languages')
) > 1;
