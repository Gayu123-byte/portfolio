import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://gayu123-byte.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gayathri N R | Developer Portfolio",
    template: "%s | Gayathri N R",
  },
  description:
    "Gayathri N R — Java & Backend developer. I build enterprise software, Spring Boot microservices, REST APIs, dashboards and full database-driven systems.",
  keywords: [
    "Gayathri N R",
    "Java Developer",
    "Spring Boot",
    "Backend Developer",
    "REST API",
    "Microservices",
    "Oracle",
    "Portfolio",
    "Software Engineer",
    "India",
  ],
  authors: [{ name: "Gayathri N R" }],
  creator: "Gayathri N R",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Gayathri N R | Developer Portfolio",
    title: "Gayathri N R | Java & Backend Developer",
    description:
      "Enterprise software, Spring Boot, REST APIs, dashboards — shipped end-to-end.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Gayathri N R — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gayathri N R | Developer Portfolio",
    description:
      "Java/Backend developer. Spring Boot, REST APIs, multitenant systems.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-200 antialiased">{children}</body>
    </html>
  );
}
