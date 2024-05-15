import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://spendwisedb_owner:Al9jdSQBC3sb@ep-autumn-cloud-a2cvgstr.eu-central-1.aws.neon.tech/top-20-ideas?sslmode=require"
);
export const db = drizzle(sql, { schema });
