import express, { json, Express, Request, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();
app.use(json());

const port = process.env.PORT;

// For testing purposes
app.get("/", (req: Request, res: Response) => {
  res.send("<h2>It's Working!</h2>");
});

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
);
