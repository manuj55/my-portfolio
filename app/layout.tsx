import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Manu Janardhana | Full-Stack Developer",
  description:
    "Portfolio of Manu Janardhana — Senior Full-Stack Developer with 6+ years of experience in e-commerce, OTT, and healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${newsreader.variable} font-sans bg-portfolio-bg text-white`}>
        {children}
      </body>
    </html>
  );
}
