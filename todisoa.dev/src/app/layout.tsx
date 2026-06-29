import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

import "@/styles/globals.css";

export const metadata : Metadata = {
  metadataBase: new URL(
    "https://todisoa.dev"
  ),

  title:
    "Todisoa Herinjanahary | Fullstack JavaScript Developer",

  description:
    "Développeur Fullstack JS spécialisé React, Next.js, NestJS et Node.js.",

  keywords: [
    "React",
    "NextJS",
    "NestJS",
    "NodeJS",
    "Fullstack",
    "JavaScript",
  ],

  openGraph: {
    title:
      "Todisoa Herinjanahary",

    description:
      "Portfolio Fullstack Developer",

    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}