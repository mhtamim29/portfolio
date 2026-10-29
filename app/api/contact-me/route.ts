import SendEmail from "@/app/utils/email/send-email";
import {
  buildContactEmail,
  createContactLimiter,
  validateContact,
} from "@/app/utils/contact";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
const checkRateLimit = createContactLimiter();

export async function POST(request: Request) {
  let input: unknown;
  try {
    const body = await request.text();
    if (Buffer.byteLength(body, "utf8") > 32_768) {
      return NextResponse.json(
        { success: false, message: "Your message is too long." },
        { status: 413 },
      );
    }
    input = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { success: false, message: "Please send a valid contact form." },
      { status: 400 },
    );
  }

  const { data, errors } = validateContact(input);
  if (Object.keys(errors).length) {
    return NextResponse.json(
      { success: false, message: errors },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const retryAfter = checkRateLimit(ip);
  if (retryAfter) {
    return NextResponse.json(
      {
        success: false,
        message: `Please wait ${retryAfter} seconds before sending another message.`,
      },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  const sent = await SendEmail({
    to: process.env.EMAIL_USER || "",
    ...buildContactEmail(data),
  });
  if (!sent) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your message right now. Please try again later or email me directly.",
      },
      { status: 503 },
    );
  }
  return NextResponse.json({
    success: true,
    message: "Your message has been sent.",
  });
}
