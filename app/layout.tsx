import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Googlify Technologies – Web Development, Backend & Cloud Deployment Services",
  description:
    "Googlify Technologies offers professional web development, backend engineering, API development, UI/UX design, cloud deployment, and full-stack solutions for businesses.",
  keywords: [
    "web development company",
    "backend development services",
    "full-stack development",
    "API development",
    "cloud deployment",
    "Next.js development",
    "Java backend",
    "software development services",
    "Googlify Technologies"
  ],
  metadataBase: new URL("https://googlifytechnologies.in"),

  openGraph: {
    title: "Googlify Technologies – Web Development & Backend Services",
    description:
      "Professional web development, backend systems, APIs, UI/UX and deployment services for modern businesses.",
    url: "https://googlifytechnologies.in",
    siteName: "Googlify Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Googlify Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Googlify Technologies – Web Development & Backend Services",
    description:
      "Web development, backend engineering, API integration and deployment services.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
