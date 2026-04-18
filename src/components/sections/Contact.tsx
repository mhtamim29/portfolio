"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/portfolio";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    // ── EMAIL INTEGRATION ─────────────────────────────────────────────────────
    // This form sends via mailto: by default. To use a real service like
    // Formspree, EmailJS, or Resend, replace the block below.
    //
    // Option 1 – Formspree (free tier available):
    //   1. Sign up at formspree.io, create a form, get your endpoint ID
    //   2. Replace YOUR_FORM_ID below
    //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   if (res.ok) setStatus('sent'); else setStatus('error')
    //
    // Option 2 – EmailJS:
    //   See: https://www.emailjs.com/docs/examples/reactjs/
    // ─────────────────────────────────────────────────────────────────────────

    // Default: open mailto link
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio Inquiry",
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )}`;
    window.location.href = mailtoLink;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  const inputClass =
    "w-full bg-transparent border-b border-border py-2 font-dm-sans text-[15px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground transition-colors duration-200";

  return (
    <section id='contact' className='border-b border-border'>
      <div className='max-w-[1440px] mx-auto px-[120px] py-[120px] max-[1024px]:px-10 max-[640px]:px-6 max-[640px]:py-16'>
        <div className='flex flex-col gap-12'>
          {/* Header */}
          <div className='flex flex-col gap-4'>
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 className='font-archivo text-[48px] leading-[1.25] uppercase text-foreground max-[640px]:text-[32px]'>
              Let&apos;s Create Together
            </h2>
          </div>

          {/* Form + contact info row */}
          <div className='flex gap-16 max-[900px]:flex-col'>
            {/* Form */}
            <div className='flex flex-col gap-8 w-[689px] max-[900px]:w-full shrink-0'>
              {/* Full Name */}
              <div className='flex flex-col gap-2'>
                <label className='font-space-mono text-[13px] tracking-[0.88px] uppercase text-foreground'>
                  FULL NAME
                </label>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Your full name'
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className='flex flex-col gap-2'>
                <label className='font-space-mono text-[13px] tracking-[0.88px] uppercase text-foreground'>
                  EMAIL ADDRESS
                </label>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder='your@email.com'
                  className={inputClass}
                />
              </div>

              {/* Subject */}
              <div className='flex flex-col gap-2'>
                <label className='font-space-mono text-[13px] tracking-[0.88px] uppercase text-foreground'>
                  SUBJECT
                </label>
                <input
                  type='text'
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className='flex flex-col gap-2'>
                <label className='font-space-mono text-[13px] tracking-[0.88px] uppercase text-foreground'>
                  MESSAGE
                </label>
                <textarea
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project...'
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className='self-start inline-flex items-center gap-3 border border-foreground text-foreground font-dm-sans font-medium text-[13px] uppercase tracking-wide px-4 py-2 rounded-full hover:bg-foreground hover:text-white transition-colors duration-200 disabled:opacity-50'>
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : "Send Message"}
                <SendHorizontal size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Contact info */}
            <div className='flex flex-col gap-8 flex-1'>
              {/* Email */}
              <div className='flex flex-col gap-1'>
                <p className='font-dm-sans font-medium text-[16px] text-foreground'>
                  Email
                </p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className='font-dm-sans text-[14px] text-muted hover:text-foreground transition-colors'>
                  {siteConfig.email}
                </Link>
              </div>

              {/* Phone */}
              <div className='flex flex-col gap-1'>
                <p className='font-dm-sans font-medium text-[16px] text-foreground'>
                  Phone Number
                </p>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className='font-dm-sans text-[14px] text-muted hover:text-foreground transition-colors'>
                  {siteConfig.phone}
                </Link>
              </div>

              {/* Socials */}
              <div className='flex flex-col gap-2'>
                <p className='font-dm-sans font-medium text-[16px] text-foreground'>
                  SOCIALS
                </p>
                <div className='flex flex-col gap-1'>
                  {[
                    { label: "LinkedIn", href: siteConfig.socials.linkedin },
                    { label: "Behance", href: siteConfig.socials.behance },
                    { label: "GitHub", href: siteConfig.socials.github },
                    { label: "Instagram", href: siteConfig.socials.instagram },
                    { label: "Facebook", href: siteConfig.socials.facebook },
                    { label: "Dribbble", href: siteConfig.socials.dribbble },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-space-mono text-[12px] tracking-[0.96px] uppercase text-muted hover:text-foreground transition-colors'>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
