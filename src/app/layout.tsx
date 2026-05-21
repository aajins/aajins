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
  title: "Aji Nuansa Sengarie — Frontend & Fullstack Developer",
  description:
    "Frontend & Fullstack Web Developer specializing in React, Next.js, Vue.js, Laravel, and modern web technologies. Building clean, performant, and scalable web applications.",
  keywords: [
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Vue.js",
    "Laravel",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Aji Nuansa Sengarie" }],
  openGraph: {
    title: "Aji Nuansa Sengarie — Frontend & Fullstack Developer",
    description:
      "Frontend & Fullstack Web Developer building clean, performant web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0a0a0f] text-gray-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
