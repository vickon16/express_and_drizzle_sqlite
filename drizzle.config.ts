import { Config } from "drizzle-kit";
import env from "./src/env";

export default {
  schema: "./src/db/schema.ts",
  breakpoints: true,
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  out: "./drizzle",
} satisfies Config;
