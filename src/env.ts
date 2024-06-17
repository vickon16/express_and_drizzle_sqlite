import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().regex(new RegExp("mysql://.*")),
});

export default envSchema.parse(process.env);
