import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukul Singh | Full-Stack Developer",
  description:
    "Portfolio of Mukul Singh, a Full-Stack Developer working with React, Next.js, Node.js, Express, MongoDB and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}