import pg from "pg";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Set POSTGRES_URL or DATABASE_URL before running this script.");
  process.exit(1);
}

const client = new pg.Client({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  const sql = readFileSync(join(__dirname, "init.sql"), "utf8");
  await client.query(sql);
  console.log("✓ Database seeded successfully.");
} catch (err) {
  console.error("Seed failed:", err.message);
  process.exit(1);
} finally {
  await client.end();
}
