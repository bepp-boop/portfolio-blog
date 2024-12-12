import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Get the file path from the public directory
  const filePath = path.join(process.cwd(), "public", "CV.pdf");

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "CV file not found" });
  }

  // Set headers for file download
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=CV.pdf");

  // Create read stream and pipe it to response
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
