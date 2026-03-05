import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Islamic School Jamaica Queens NY",
  description:
    "Contact Al-Madinah School Queens admissions team. Call, email, or visit us in Jamaica, Queens NY. Schedule a campus tour, ask about programs, or download the 2025–2026 application packet.",
  path: "/contact",
  keywords: [
    "contact Al-Madinah School Queens",
    "Islamic school admissions contact Queens",
    "schedule tour Islamic school Queens NY",
    "Al-Madinah School phone number",
    "Islamic school Jamaica Queens address",
    "Muslim school Queens NY contact",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
