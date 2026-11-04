import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";
// get user address
// GET /api/addresses
export const getAddresses = async (req: Request, res: Response) => {
  const addresses = await prisma.address.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "asc" },
  });
  res.json({ addresses });
};
// Add addresses
// POST /api/addresses
export const addAddresses = async (req: Request, res: Response) => {
  const { label, address, city, state, zip, isDefault, lat, lng } = req.body;
//   Require coordinates
};
