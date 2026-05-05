import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  {
    title: "Artificial intelligence",
    body: "Practical AI that fits your workflows — from assistant experiences to automation that scales with governance and clarity.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    title: "Machine learning & analytics",
    body: "Turn signals into decisions — modeling, experimentation, and dashboards that connect product, marketing, and operations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
  {
    title: "Cloud-native delivery",
    body: "Resilient architectures on modern cloud — performance, security, and cost awareness baked in from day one.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
        />
      </svg>
    ),
  },
  {
    title: "Connected experiences",
    body: "One coherent story across touchpoints — so every channel feels intentional, on-brand, and measurable end to end.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.612l-.003.003c-.44.385-1.06.782-1.792 1.128L9.5 18.75c-.548.274-1.14.487-1.754.628a15.886 15.886 0 0 1-2.664.167c-.39 0-.778-.024-1.163-.073a15.887 15.887 0 0 1-2.664-.167 6.08 6.08 0 0 1-1.754-.628l-.002-.002a4.5 4.5 0 0 1 1.242-7.612l.003-.003a4.5 4.5 0 0 1 5.316 0ZM9.5 6.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        />
      </svg>
    ),
  },
];

const platforms = [
  {
    name: "Web",
    description: "Fast, accessible applications with SEO-friendly foundations and design systems that scale.",
  },
  {
    name: "Mobile",
    description: "Native-feel experiences on iOS and Android — offline-aware, notification-ready, and secure.",
  },
  {
    name: "Social media",
    description: "Campaign-grade integrations and tooling that keep creative, data, and publishing in sync.",
  },
  {
    name: "Events & venues",
    description: "Registration, engagement, and operations for live and hybrid programs that run under pressure.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <main id="main">
        <section className="relative overflow-hidden mesh-bg">
          <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Product · Services · Platforms
              </p>
              <h1 className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Intelligent digital products for a world that never logs off
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Speak Peek Technologies is a product and services partner that uses advanced software,
                AI, machine learning, analytics, and cloud platforms to build business applications
                with seamless interactions across web, mobile, social, and event-based touchpoints.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-zinc-950 transition-opacity hover:opacity-90"
                >
                  Plan your next build
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-surface px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-accent/40"
                >
                  See how we deliver
                </a>
              </div>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Focus", v: "Outcome-led product engineering" },
                { k: "Stack", v: "AI, ML, analytics, cloud-native" },
                { k: "Reach", v: "Web · mobile · social · events" },
              ].map((item) => (
                <div key={item.k} className="card-glass rounded-2xl px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.k}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-20 border-t border-border-subtle bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Capabilities</h2>
              <p className="mt-4 text-muted sm:text-lg">
                We combine research, design, and engineering so your roadmap moves from concept to
                production with observability and guardrails built in.
              </p>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
              {capabilities.map((c) => (
                <li key={c.title} className="card-glass group rounded-2xl p-6 transition-colors hover:border-accent/25">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    {c.icon}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{c.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="platforms"
          className="scroll-mt-20 border-t border-border-subtle bg-zinc-950/30 py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Where we show up</h2>
                <p className="mt-4 text-muted sm:text-lg">
                  One team, multiple surfaces — we design experiences that feel native to each channel while
                  sharing data models, authentication, and analytics.
                </p>
              </div>
              <p className="max-w-md text-sm text-muted lg:text-right">
                From customer-facing apps to internal tools and campaign operations, we align technology
                with how your audiences actually behave.
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              {platforms.map((p) => (
                <article
                  key={p.name}
                  className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background/40 p-6 sm:p-8"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" aria-hidden />
                  <h3 className="font-display text-lg font-semibold text-accent">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{p.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-border-subtle py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Why Speak Peek</h2>
                <p className="mt-6 text-muted sm:text-lg leading-relaxed">
                  We believe technology should reduce friction for people and teams — not add it. Our work
                  pairs modern architecture with pragmatic delivery: clear milestones, transparent tradeoffs,
                  and systems you can operate long after launch.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-muted sm:text-base">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>Human-centered discovery that maps to measurable KPIs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" aria-hidden />
                    <span>Secure, observable platforms with cloud best practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>AI/ML applied responsibly — privacy, quality, and maintainability first</span>
                  </li>
                </ul>
              </div>
              <div className="card-glass rounded-3xl p-8 sm:p-10">
                <blockquote className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
                  “Global communications that are intelligent, intuitive, and always connected.”
                </blockquote>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  That is the bar we hold for every engagement — whether you are launching a net-new product,
                  modernizing a legacy stack, or scaling campaigns across regions and time zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 border-t border-border-subtle bg-gradient-to-b from-accent-soft/30 to-background py-20 sm:py-24"
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Contact us</h2>
            <p className="mt-4 text-muted sm:text-lg">
              Tell us about your product, timeline, and success criteria. We&apos;ll reply to{" "}
              <a
                href="mailto:admin@speakpeek.net"
                className="text-accent underline-offset-4 hover:underline"
              >
                admin@speakpeek.net
              </a>{" "}
              with next steps.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
