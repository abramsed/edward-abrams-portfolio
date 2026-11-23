-- Remove skills no longer shown on the site
DELETE FROM "skill_items" WHERE "item" IN ('Svelte', 'Copilot', 'Claude');
