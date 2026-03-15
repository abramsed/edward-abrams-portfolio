-- Update hero title to Software Engineer
UPDATE "personal_info" SET "title" = 'Software Engineer' WHERE "title" = 'Software Developer III';

-- Fix "fullstack" to "full stack"
UPDATE "personal_info" SET "summary" = REPLACE("summary", 'fullstack', 'full stack') WHERE "summary" LIKE '%fullstack%';
