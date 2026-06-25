import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Don-Swa Smart School Management System",
  description: "A modern SaaS platform for managing schools — digitize academics, automate administration, and empower educators, students, and parents.",
  keywords: ["school management", "SaaS", "education", "student portal", "teacher portal", "attendance", "grades"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
