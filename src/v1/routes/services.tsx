import express, { json, Express, Request, Response } from "express";
import prisma from "../../../prisma/client";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const services = await prisma.service.findMany();
  res.status(200).json(services);
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
