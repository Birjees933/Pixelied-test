import { ColorShades } from "@/types/common";
import { generateColorShades } from "@/utils/color-helpers";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ColorShades | { message: string }>
) {
  if (req.method === "GET") {
    const { name } = req.query;
    if (name && typeof name === "string") {
      const colorShades = generateColorShades(name);
      return res.status(200).json(colorShades);
    }
    // Return all colors
    const colorShades = generateColorShades("Red");
    res.status(200).json(colorShades);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
