import express, { json, Express, Request, Response } from "express";
import { config } from "dotenv";

config();
const router = express.Router();

const app: Express = express();
app.use(json());

// For testing purposes
router.route("/").get((req: Request, res: Response) => {
  res.send("<h2>Hello from below!</h2>");
});

export default router;
