import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import env from "@/env";

import * as schema from "./schema";

const connection = mysql.createPool({
  uri: env.DATABASE_URL,
});

export default drizzle(connection, { mode: "default", schema });
