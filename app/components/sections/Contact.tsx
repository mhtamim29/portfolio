"use client";

import { SendHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import SectionLabel from "../ui/SectionLabel";
import { siteConfig } from "../../data/portfolio";
import { contactLimits, validateContact } from "../../utils/contact";
import type { ContactErrors, ContactFields } from "../../utils/contact";

const emptyForm: ContactFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const fields = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    placeholder: "Your full name",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "your@email.com",
    autoComplete: "email",
    required: true,
  },
  {
    name: "subject",
    label: "Subject (optional)",
    type: "text",
    placeholder: "What are you building?",
    autoComplete: "off",
    required: false,
  },
] as const;

export default function Contact() {
  const [form, setForm] = useState<ContactFields>(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitError, setSubmitError] = useState("");
  const pending = useRef(false);

  const focusFirstError = (fieldErrors: ContactErrors) => {
    const first = Object.keys(fieldErrors)[0];
    if (first) document.getElementById(`contact-${first}`)?.focus();
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setSubmitError("");
    if (status !== "sending") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current) return;
    const { data, errors: fieldErrors } = validateContact(form);
    setErrors(fieldErrors);
    setSubmitError("");
    if (Object.keys(fieldErrors).length) {
      setStatus("error");
      focusFirstError(fieldErrors);
      return;
    }

    pending.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setStatus("error");
        if (result.message && typeof result.message === "object") {
          setErrors(result.message);
          focusFirstError(result.message);
        } else {
          setSubmitError(
            typeof result.message === "string"
              ? result.message
              : "Unable to send your message. Please try again later.",
          );
        }
      }
    } catch {
      setStatus("error");
      setSubmitError(
        "Unable to connect. Your message is still here—please try again or email me directly.",
      );
    } finally {
      pending.current = false;
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-border py-2 font-dm-sans text-[15px] text-foreground placeholder:text-muted/70 focus:outline-none focus:border-foreground transition-colors duration-200 disabled:opacity-60";

  return (
    <section
      id="contact"
      className="border-b border-border"
      aria-labelledby="contact-heading"
    >
      <div className="section-shell section-space">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2
              id="contact-heading"
              className="font-archivo text-[48px] leading-[1.25] uppercase text-foreground max-[640px]:text-[32px]"
            >
              Let&apos;s Discuss Your Product
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-muted">
              Tell me what you&apos;re building, the problem you want to solve,
              and where you need a partner in strategy, design, or engineering.
            </p>
          </div>

          <div className="flex gap-16 max-[900px]:flex-col">
            <form
              onSubmit={handleSubmit}
              action="/api/contact-me"
              method="post"
              noValidate
              aria-busy={status === "sending"}
              className="flex min-w-0 flex-[2] flex-col gap-8 max-[900px]:w-full"
            >
              <fieldset disabled={status === "sending"} className="contents">
                <legend className="sr-only">Your project details</legend>
                {fields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label
                      htmlFor={`contact-${field.name}`}
                      className="font-space-mono text-[13px] tracking-[0.88px] uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      required={field.required}
                      maxLength={contactLimits[field.name]}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={
                        errors[field.name]
                          ? `contact-${field.name}-error`
                          : undefined
                      }
                      className={inputClass}
                    />
                    {errors[field.name] && (
                      <p
                        id={`contact-${field.name}-error`}
                        className="text-sm text-rose-700"
                      >
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="font-space-mono text-[13px] tracking-[0.88px] uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    maxLength={contactLimits.message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="text-sm text-rose-700"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="button-secondary self-start disabled:cursor-wait disabled:opacity-50"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Message Sent"
                      : "Send Message"}
                  <SendHorizontal
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </button>
              </fieldset>
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="empty:hidden"
              >
                {status === "sending" && (
                  <p className="text-sm text-muted">Sending your message…</p>
                )}
                {status === "sent" && (
                  <p className="text-sm text-green-800">
                    Thank you—your message has been sent. I&apos;ll get back to
                    you by email.
                  </p>
                )}
              </div>
              {submitError && (
                <div
                  role="alert"
                  className="text-sm leading-relaxed text-rose-700"
                >
                  <p>{submitError}</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 inline-block underline underline-offset-4"
                  >
                    Email me directly
                  </a>
                </div>
              )}
            </form>

            <div className="flex min-w-0 flex-1 flex-col gap-8 break-words">
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium">Phone Number</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium">Socials</p>
                <div className="flex flex-col gap-1">
                  {Object.entries(siteConfig.socials).map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-space-mono text-[12px] uppercase tracking-[0.96px] text-muted hover:text-foreground"
                    >
                      {label}
                    </a>
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
