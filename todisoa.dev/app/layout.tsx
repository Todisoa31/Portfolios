import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todisoa.dev | Développeur Full Stack",
  description:
    "Découvrez mes projets, compétences et expériences en développement web moderne avec React, Next.js, TypeScript et Node.js.",
  keywords: [
    "Todisoa",
    "Développeur Full Stack",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Développement Web",
  ],
  authors: [{ name: "Todisoa" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
