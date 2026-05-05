export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:flex lg:items-start lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-md">
          <p className="font-display text-lg font-semibold tracking-tight">Speak Peek Technologies</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Building intelligent applications and services across web, mobile, social channels, and
            live experiences — anchored in measurable outcomes for your teams and customers.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 text-sm lg:mt-0">
          <div>
            <p className="font-semibold text-foreground">Explore</p>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <a href="#capabilities" className="hover:text-foreground">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-foreground">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground">Contact</p>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <a href="mailto:admin@speakpeek.net" className="hover:text-foreground">
                  admin@speakpeek.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} Speak Peek Technologies. All rights reserved.</p>
          <p className="text-muted/80">
            Deployed for the edge · Next.js · Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}
