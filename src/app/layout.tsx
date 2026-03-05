import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Madinah School Queens | Raising Tomorrow's Leaders",
  description:
    "Al-Madinah School Queens — a New York State approved Islamic school where faith, academic excellence, and leadership converge. Pre-K through Grade 9.",
  keywords:
    "Islamic school Queens NY, Al-Madinah School, Islamic education New York, leadership academy, Arabic Quran studies, NYS approved school",
  openGraph: {
    title: "Al-Madinah School Queens | Raising Tomorrow's Leaders",
    description:
      "Where Islamic values meet world-class education. NYS approved. Pre-K – Grade 9.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
