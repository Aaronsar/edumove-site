import { NextRequest, NextResponse } from "next/server";
import {
  confirmationEmail,
  reminderJ7Email,
  reminderJ1Email,
  reminderJ0MorningEmail,
  reminderJ0FiveMinEmail,
} from "@/lib/emails/webinar-templates";

const TEMPLATES = {
  confirmation: confirmationEmail,
  "j-7": reminderJ7Email,
  "j-1": reminderJ1Email,
  "j-0-matin": reminderJ0MorningEmail,
  "j-0-5min": reminderJ0FiveMinEmail,
};

export async function GET(req: NextRequest) {
  const template = req.nextUrl.searchParams.get("template") || "confirmation";
  const prenom = req.nextUrl.searchParams.get("prenom") || "Prénom";

  const fn = TEMPLATES[template as keyof typeof TEMPLATES];
  if (!fn) {
    return NextResponse.json(
      {
        error: "Template not found",
        available: Object.keys(TEMPLATES),
      },
      { status: 404 }
    );
  }

  const email = fn(prenom);

  const format = req.nextUrl.searchParams.get("format");
  if (format === "json") {
    return NextResponse.json({ subject: email.subject, html: email.html });
  }

  // Return HTML directly for preview
  return new NextResponse(email.html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
