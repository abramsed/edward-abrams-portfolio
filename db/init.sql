-- Clean slate
DROP TABLE IF EXISTS skill_items, skill_categories, experience_bullets, experiences, education, personal_info CASCADE;

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
  'Accomplished fullstack engineer with 6+ years of continuous growth and leadership in software development. Designs scalable, performant web applications with intuitive, reliable user experiences.'
);

-- Seed: experiences
INSERT INTO experiences (title, product, period, sort_order) VALUES
  ('Software Developer III', 'Brand 360', 'July 2024 – Present', 1),
  ('Team Leader, Product Development', 'UWM Portal', 'June 2023 – July 2024', 2),
  ('Software Developer II', 'Edge', 'Sept 2021 – June 2023', 3),
  ('Trainee → Software Developer I', 'Bolt', 'Sept 2019 – Sept 2021', 4);

-- Seed: experience_bullets
INSERT INTO experience_bullets (experience_id, bullet, sort_order) VALUES
  (1, 'Frontend development lead for a CRM and content creation platform built with React and Next.js', 1),
  (1, 'Established SAML and OAuth connectivity for the Canva API, leveraging PKCE flow with SHA-256 encoding and verification', 2),
  (1, 'Scoped contexts for persistent state management within defined boundaries to reduce network traffic and optimize memory consumption', 3),
  (2, 'Launched the company''s first public-facing .NET APIs, opening the platform to external partners', 1),
  (2, 'Directed engineering teams in onboarding third-party vendors, defining connectivity standards', 2),
  (2, 'Championed a structured testing discipline with quality benchmarks to reduce regression risk', 3),
  (3, 'Introduced the organization to enterprise NoSQL platforms with auto-scaling cloud infrastructure', 1),
  (3, 'Migrated a terabyte of SQL Server data to Azure Cosmos DB, alleviating costs of on-premises servers', 2),
  (3, 'Developed eventually consistent data replication pipelines with Apache Spark to maintain legacy reports', 3),
  (4, 'Earned MVP recognition during the developer training program for peer mentorship and technical merit', 1),
  (4, 'Delivered regulatory compliance updates ahead of competitors using a stangler pattern to route loans based on submission date', 2),
  (4, 'Led development of RESTful income calculation APIs, eliminating manual underwriting processes performed in Excel macros', 3);

-- Seed: skill_categories
INSERT INTO skill_categories (label, icon, sort_order) VALUES
  ('Languages', '💻', 1),
  ('Frameworks', '⚙️', 2),
  ('Tools & Data', '🛠️', 3);

-- Seed: skill_items
INSERT INTO skill_items (category_id, item) VALUES
  (1, 'C#'), (1, 'TypeScript'), (1, 'Python'), (1, 'T-SQL'),
  (2, '.NET'), (2, 'React'), (2, 'Next.js'), (2, 'Svelte'),
  (3, 'Azure'), (3, 'GCP'), (3, 'MongoDB'), (3, 'PostgreSQL'), (3, 'Kafka'), (3, 'Redis'), (3, 'Docker'), (3, 'Terraform');

-- Seed: education
INSERT INTO education (school, degree, level, date) VALUES (
  'Michigan State University',
  'Elementary Education',
  'Bachelor of Arts',
  'May 2015'
);
