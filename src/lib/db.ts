import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import * as schema from "./schema";

const connectionString =
  process.env.POSTGRES_DATABASE_URL ??
  process.env.POSTGRES_URL ??
  process.env.DATABASE_URL ??
  "";

const pool = new Pool({ connectionString });

const db = drizzle(pool, { schema });

export default db;
