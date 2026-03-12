import { Pool } from "pg";

const connectionString =
  process.env.POSTGRES_URL || process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: connectionString?.includes("localhost") || connectionString?.includes("db:5432")
    ? undefined
    : { rejectUnauthorized: false },
});

export default pool;
