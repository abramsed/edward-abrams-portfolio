import "dotenv/config";
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Load .env.local so drizzle-kit picks up the Neon connection string
config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/lib/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.POSTGRES_DATABASE_URL ??
      process.env.POSTGRES_URL ??
      process.env.DATABASE_URL ??
      "",
  },
});
