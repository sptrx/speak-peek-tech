"use client";

import { useState } from "react";

const navItems = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#platforms", label: "Platforms" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#"
          className="justify-self-start font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Speak Peek
          <span className="text-muted font-normal"> Technologies</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border-subtle bg-background md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 text-sm font-medium" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
