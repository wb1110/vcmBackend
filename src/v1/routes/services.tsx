import express, { json, Express, Request, Response } from "express";
import prisma from "../../../prisma/client";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const services = await prisma.service.findMany();
    res.status(200).json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
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
