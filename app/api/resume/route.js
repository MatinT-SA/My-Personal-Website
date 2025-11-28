// app/api/resume/route.js

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
// ❌ REMOVED: import { Readable } from "stream"; (Not strictly necessary here)

// Helper function to convert Node.js stream to Web Stream (Next.js standard)
function streamFile(filePath) {
  const fileStream = fs.createReadStream(filePath);
  return new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      fileStream.on("end", () => {
        controller.close();
      });
      fileStream.on("error", (err) => {
        controller.error(err);
      });
    },
    cancel() {
      fileStream.destroy();
    },
  });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale"); // 'en' or 'fa'

  if (!locale || (locale !== "en" && locale !== "fa")) {
    return new NextResponse("Invalid locale parameter.", { status: 400 });
  } // 1. Construct the path to the internal assets folder

  const rootDir = process.cwd();
  const fileName = `Matin_Taherzadeh_${locale}.pdf`; // 💡 CORRECTED PATH: Using the confirmed 'lib/resume' folder structure
  const filePath = path.join(rootDir, "lib", "resume", fileName); // 2. Check if the file exists

  if (!fs.existsSync(filePath)) {
    console.error(`File not found at: ${filePath}`);
    return new NextResponse(`Resume file for locale ${locale} not found.`, {
      status: 404,
    });
  } // 3. Create the custom download name (e.g., Matin Taherzadeh Resume - EN.pdf)

  const localeDisplayName = locale.toUpperCase();
  const customDownloadName = `Matin Taherzadeh Resume - ${localeDisplayName}.pdf`; // 4. Set headers to force download with the custom name

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set(
    "Content-Disposition",
    `attachment; filename="${customDownloadName}"`
  ); // 5. Stream the file content

  const fileStream = streamFile(filePath);

  return new NextResponse(fileStream, { headers });
}
