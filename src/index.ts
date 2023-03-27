import express, { json, Express, Request, Response } from "express";
import { config } from "dotenv";
import v1ServicesRouter from "../src/v1/routes/services";

config();

const app: Express = express();
app.use(json());

const port = process.env.PORT || 3000;

app.use("/api/v1", v1ServicesRouter);

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
