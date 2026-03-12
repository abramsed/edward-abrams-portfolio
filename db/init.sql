-- Schema
CREATE TABLE personal_info (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin TEXT NOT NULL,
  summary TEXT NOT NULL
);

CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  product TEXT NOT NULL,
  period TEXT NOT NULL,
  sort_order INT NOT NULL
);

CREATE TABLE experience_bullets (
  id SERIAL PRIMARY KEY,
  experience_id INT NOT NULL REFERENCES experiences(id),
  bullet TEXT NOT NULL,
  sort_order INT NOT NULL
);

CREATE TABLE skill_categories (
  id SERIAL PRIMARY KEY,
  label TEXT NOT NULL,
  icon TEXT NOT NULL,
  sort_order INT NOT NULL
);

CREATE TABLE skill_items (
  id SERIAL PRIMARY KEY,
  category_id INT NOT NULL REFERENCES skill_categories(id),
  item TEXT NOT NULL
);

CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  school TEXT NOT NULL,
  degree TEXT NOT NULL,
  level TEXT NOT NULL,
  date TEXT NOT NULL
);

-- Seed: personal_info
INSERT INTO personal_info (name, title, location, email, linkedin, summary) VALUES (
  'Edward D. Abrams',
  'Software Developer III',
  'Detroit',
  'abramsed17@gmail.com',
  'https://linkedin.com/in/edward-abrams-05873299',
  'Former educator turned software engineer — 6+ years of continuous advancement at United Wholesale Mortgage, from developer trainee to team leader to SDE III. Specializes in cloud-native data architecture, public API design, and React/Next.js product development.'
);

-- Seed: experiences
INSERT INTO experiences (title, product, period, sort_order) VALUES
  ('Software Developer III', 'Brand 360', 'July 2024 – Present', 1),
  ('Team Leader, Product Development', 'UWM Portal', 'June 2023 – July 2024', 2),
  ('Software Developer II', 'Edge', 'Sept 2021 – June 2023', 3),
  ('Trainee → Software Developer I', 'Bolt', 'Sept 2019 – Sept 2021', 4);

-- Seed: experience_bullets
INSERT INTO experience_bullets (experience_id, bullet, sort_order) VALUES
  (1, 'Lead frontend development for a CRM and content creation platform built with React and Next.js', 1),
  (1, 'Designed the Next.js service layer as the integration boundary for all third-party services, enforcing clean separation from external dependencies', 2),
  (1, 'Implemented the Canva API as the platform''s first embedded creative tooling, enabling branded content creation without leaving the product', 3),
  (2, 'Launched the company''s first public-facing APIs, opening the platform to external partners', 1),
  (2, 'Directed engineering teams in onboarding third-party vendors, defining connectivity standards', 2),
  (2, 'Championed a structured testing discipline, establishing quality benchmarks that reduced regression risk across product lines', 3),
  (3, 'Designed the organization''s first polymorphic NoSQL model with a flexible, schema-agnostic structure', 1),
  (3, 'Migrated production data from SQL Server to Azure Cosmos DB, eliminating on-premises costs and enabling auto-scaling infrastructure', 2),
  (3, 'Reduced null column storage from 96% to near zero by persisting only populated fields as BSON', 3),
  (4, 'Earned MVP recognition during the developer training program for peer mentorship and technical merit', 1),
  (4, 'Delivered URLA regulatory compliance updates ahead of competitors, developing stored procedures, tables, and XML structures for new federal requirements', 2),
  (4, 'Led development of a distributed .NET Core microservice with RESTful income calculation APIs, cutting underwriting time from 30 to 5 minutes', 3);

-- Seed: skill_categories
INSERT INTO skill_categories (label, icon, sort_order) VALUES
  ('Languages', '💻', 1),
  ('Frameworks', '⚙️', 2),
  ('Architecture', '🏗️', 3),
  ('Tools & Data', '🛠️', 4);

-- Seed: skill_items
INSERT INTO skill_items (category_id, item) VALUES
  (1, 'C#'), (1, 'JavaScript'), (1, 'TypeScript'), (1, 'Python'), (1, 'SQL'),
  (2, 'React'), (2, 'Next.js'), (2, '.NET Core'),
  (3, 'OOP'), (3, 'N-Tier'), (3, 'MVC'), (3, 'DDD'), (3, 'RESTful APIs'), (3, 'Microservices'),
  (4, 'Azure'), (4, 'Cosmos DB'), (4, 'MongoDB'), (4, 'PostgreSQL'), (4, 'Claude'), (4, 'Git');

-- Seed: education
INSERT INTO education (school, degree, level, date) VALUES (
  'Michigan State University',
  'Elementary Education',
  'Bachelor of Arts',
  'May 2015'
);
