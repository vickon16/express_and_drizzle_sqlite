import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "@/db";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await db.query.users.findMany();
  res.json({ users });
});

app.listen(8000, () => console.log("Server is running on 8000"));
