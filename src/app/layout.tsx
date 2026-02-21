import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Claws — Agents IA autonomes",
  description:
    "Nous construisons des agents IA qui travaillent à votre place. Installation, configuration, maintenance — clé en main.",
  openGraph: {
    title: "Claws — Agents IA autonomes",
    description:
      "Nous construisons des agents IA qui travaillent à votre place.",
    url: "https://claws.fr",
    siteName: "Claws",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-brand text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
