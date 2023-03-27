import express, { json, Express, Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Get all services");
});

router.get("/:serviceId", (req: Request, res: Response) => {
  res.send("Get an existing service");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Create a new service");
});

router.patch("/:serviceId", (req: Request, res: Response) => {
  res.send("Update an existing service");
});

router.delete("/:serviceId", (req: Request, res: Response) => {
  res.send("Delete an existing service");
});

export default router;
