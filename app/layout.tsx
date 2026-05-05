import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://www.speakpeek.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Speak Peek Technologies",
    template: "%s | Speak Peek Technologies",
  },
  description:
    "Technology products and services that blend AI, machine learning, analytics, and cloud — building intelligent, connected digital experiences across web, mobile, social, and events.",
  keywords: [
    "Speak Peek Technologies",
    "software development",
    "AI",
    "machine learning",
    "cloud computing",
    "digital products",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Speak Peek Technologies",
    title: "Speak Peek Technologies",
    description:
      "Innovative business applications and services powered by AI, analytics, and the cloud.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak Peek Technologies",
    description:
      "Innovative business applications and services powered by AI, analytics, and the cloud.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#050508" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Speak Peek Technologies",
    url: siteUrl,
    description:
      "A technology product and services company leveraging cutting-edge technology for web, mobile, social, and event-based platforms.",
  };

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-zinc-950 focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
