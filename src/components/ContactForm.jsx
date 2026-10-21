"use client";

import { useEffect, useId, useState } from "react";
import { submitToZapier } from "@/lib/zapier";

const REASONS = [
  { value: "general", label: "General enquiry" },
  { value: "quote", label: "Request a quote" },
  { value: "sample", label: "Request a sample" },
  { value: "tds", label: "Request a technical data sheet (TDS)" },
  { value: "msds", label: "Request a safety data sheet (MSDS)" },
];

export default function ContactForm({ defaultReason = "general" }) {
  const [status, setStatus] = useState("idle");
  const [reason, setReason] = useState(defaultReason);
  const [product, setProduct] = useState("");
  const uid = useId();
  const fid = (name) => `${uid}-${name}`;

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
    <form onSubmit={handleSubmit} className="tx-form">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px]"
      />

      {product && (
        <p className="tx-form-ref">
          Regarding: <strong>{product}</strong>
        </p>
      )}

      <div>
        <label htmlFor={fid("reason")}>What can we help with?</label>
        <select
          id={fid("reason")}
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          {REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="tx-form-row">
        <div>
          <label htmlFor={fid("name")}>Name</label>
          <input id={fid("name")} name="name" type="text" required />
        </div>
        <div>
          <label htmlFor={fid("email")}>Email</label>
          <input id={fid("email")} name="email" type="email" required />
        </div>
      </div>

      <div>
        <label htmlFor={fid("company")}>Company</label>
        <input id={fid("company")} name="company" type="text" />
      </div>

      <div>
        <label htmlFor={fid("message")}>Message</label>
        <textarea id={fid("message")} name="message" rows={4} required />
      </div>

      <button type="submit" className="tx-btn" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite" className="tx-form-status">
        {status === "success" && (
          <p className="ok">Thanks. A member of our team will be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="err">
            Something went wrong sending your message. Please email us directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
