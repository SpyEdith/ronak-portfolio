import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronak Taneja | Aspiring Developer",
  description:
    "Portfolio of Ronak Taneja — MSc IT student and AI Developer building practical applications with AI and modern software technologies.",
  keywords: [
    "Ronak Taneja",
    "AI Developer",
    "AI Engineer",
    "Software Developer",
    "MSc IT",
    "Python",
    "Artificial Intelligence",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Ronak Taneja" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}