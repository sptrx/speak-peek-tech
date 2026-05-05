"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, _hp: hp }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-12 max-w-lg text-left"
      noValidate
    >
      <input
        type="text"
        name="company_website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-foreground outline-none ring-accent/40 transition-[box-shadow,border-color] placeholder:text-muted/60 focus:border-accent/50 focus:ring-4"
            placeholder="Your name"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-foreground outline-none ring-accent/40 transition-[box-shadow,border-color] placeholder:text-muted/60 focus:border-accent/50 focus:ring-4"
            placeholder="you@company.com"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-foreground">
            Company{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border-subtle bg-surface px-4 py-3 text-foreground outline-none ring-accent/40 transition-[box-shadow,border-color] placeholder:text-muted/60 focus:border-accent/50 focus:ring-4"
            placeholder="Speak Peek Industries"
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1.5 w-full resize-y rounded-xl border border-border-subtle bg-surface px-4 py-3 text-foreground outline-none ring-accent/40 transition-[box-shadow,border-color] placeholder:text-muted/60 focus:border-accent/50 focus:ring-4"
            placeholder="Tell us about your goals, timeline, or questions."
            disabled={status === "loading"}
          />
        </div>
      </div>

      {errorMessage && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      {status === "success" && (
        <p className="mt-4 rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-foreground" role="status">
          Thanks — your message has been sent. We&apos;ll get back to you soon.
        </p>
      )}

      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-zinc-950 transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        <a
          href={`mailto:${encodeURIComponent("admin@speakpeek.net")}?subject=${encodeURIComponent("Speak Peek inquiry")}`}
          className="inline-flex items-center justify-center rounded-full border border-border-subtle px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-accent/40"
        >
          Or email directly
        </a>
      </div>

      <p className="mt-6 text-center text-xs text-muted/90">
        Messages are delivered to{" "}
        <a href="mailto:admin@speakpeek.net" className="text-accent underline-offset-4 hover:underline">
          admin@speakpeek.net
        </a>
        .
      </p>
    </form>
  );
}
