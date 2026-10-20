"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { submitToZapier } from "@/lib/zapier";

const REASONS = [
  { value: "general", label: "General enquiry" },
  { value: "quote", label: "Request a quote" },
  { value: "sample", label: "Request a sample" },
  { value: "tds", label: "Request a technical data sheet (TDS)" },
  { value: "msds", label: "Request a safety data sheet (MSDS)" },
];

const fieldClass =
  "w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:outline-accent focus:outline-offset-2";

export default function ContactForm({ defaultReason = "general" }) {
  const [status, setStatus] = useState("idle");
  const [reason, setReason] = useState(defaultReason);
  const [product, setProduct] = useState("");

  useEffect(() => {
    // window.location is unavailable during static export prerendering, so the
    // query string can only be read client-side after mount.
    const params = new URLSearchParams(window.location.search);
    const reasonParam = params.get("reason");
    const productParam = params.get("product");
    if (reasonParam && REASONS.some((r) => r.value === reasonParam)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReason(reasonParam);
    }
    if (productParam) {
      setProduct(productParam);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.company_website.value) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      await submitToZapier({
        form: "contact",
        reason,
        product: product || undefined,
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        message: form.message.value,
        submittedAt: new Date().toISOString(),
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />

      {product && (
        <p className="bg-accent-light text-accent rounded-md px-3 py-2 text-sm">
          Regarding: <strong>{product}</strong>
        </p>
      )}

      <div>
        <label htmlFor="reason" className="mb-1 block text-sm font-medium">
          What can we help with?
        </label>
        <select
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className={fieldClass}
        >
          {REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium">
          Company
        </label>
        <input id="company" name="company" type="text" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className={fieldClass} />
      </div>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      <div aria-live="polite" className="text-sm">
        {status === "success" && (
          <p className="text-accent">Thanks — we&apos;ll be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="text-red-700">
            Something went wrong sending your message. Please email us directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
