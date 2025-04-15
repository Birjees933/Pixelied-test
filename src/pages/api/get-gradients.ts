import { gradients } from "@/constants/data";
import { ColorShades } from "@/types/common";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ColorShades | { message: string }>
) {
  if (req.method === "GET") {
    res.status(200).json(gradients);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
