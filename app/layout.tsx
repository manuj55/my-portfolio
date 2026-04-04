import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Manu Janardhana | Senior Developer",
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
      <body className={`${jetbrainsMono.className} bg-terminal-bg text-terminal-green`}>
        {children}
      </body>
    </html>
  );
}
