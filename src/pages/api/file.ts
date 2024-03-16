import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import * as path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Wassims_Resume.pdf"
  );
  res.setHeader("Content-Type", "application/text");

  const filePath = path.join(process.cwd(), "src/assets", "Wassims_Resume.pdf");
  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(res);

  res.on("finish", () => {
    fileStream.close();
  });
}
