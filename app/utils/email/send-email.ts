import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

interface EmailOptions {
  to: string;
  text: string;
  subject: string;
  html: string;
  replyTo: string;
}

export default async function SendEmail(
  options: EmailOptions,
): Promise<boolean> {
  const port = Number(process.env.EMAIL_PORT || 587);
  if (
    !options.to ||
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASSWORD ||
    !process.env.EMAIL_FROM ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    console.error("Contact email settings are incomplete.");
    return false;
  }

  const smtp: SMTPTransport.Options = {
    host: process.env.EMAIL_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 30_000,
  };
  const transporter = nodemailer.createTransport(smtp);
  try {
    await transporter.sendMail({ from: process.env.EMAIL_FROM, ...options });
    return true;
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return false;
  } finally {
    transporter.close();
  }
}
