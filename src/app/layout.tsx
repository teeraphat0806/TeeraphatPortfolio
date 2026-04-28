import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import "@/app/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Avery Carter | Full-stack Developer",
  description:
    "Modern portfolio website for a software developer built with Next.js App Router, TypeScript, and Tailwind CSS.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Avery Carter | Full-stack Developer",
    description: "Clean, minimal portfolio for a modern software developer.",
    url: "https://example.com",
    siteName: "Avery Carter Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avery Carter | Full-stack Developer",
    description: "Clean, minimal portfolio for a modern software developer.",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const theme = localStorage.getItem('theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const shouldUseDark = theme ? theme === 'dark' : prefersDark; document.documentElement.classList.toggle('dark', shouldUseDark); } catch (error) {} })();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
