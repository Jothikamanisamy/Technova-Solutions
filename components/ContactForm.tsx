"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = { name: "", email: "", phone: "", message: "" };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,15}$/;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_REGEX.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // In production this would POST to an API route or third-party form service.
      setSubmitted(true);
      setData(initialData);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-md border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-inkLight-muted/60 dark:placeholder:text-ink-muted/60 ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-base-border/40 focus:border-nova-violet dark:border-base-border dark:focus:border-nova-orange"
    }`;

  return (
    <section id="contact" className="bg-paper py-24 dark:bg-base">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-inkLight md:text-4xl dark:text-ink">
              Let&apos;s Build Something
            </h2>
            <p className="mt-4 max-w-sm text-inkLight-muted dark:text-ink-muted">
              Tell us about your project and we&apos;ll get back to you within one
              business day.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-inkLight dark:text-ink">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass(!!errors.name)}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-inkLight dark:text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass(!!errors.email)}
                placeholder="jane@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-inkLight dark:text-ink">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass(!!errors.phone)}
                placeholder="+1 555 123 4567"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-inkLight dark:text-ink">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={data.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={inputClass(!!errors.message)}
                placeholder="Tell us about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 rounded-md bg-nova-violet px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>

            {submitted && (
              <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-4 w-4" />
                Thanks — your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
