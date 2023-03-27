import express, { json, Express, Request, Response } from "express";
import { config } from "dotenv";
import v1Router from "./v1/routes";

config();

const app: Express = express();
app.use(json());

const port = process.env.PORT || 3000;

app.use("/api/v1", v1Router);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
