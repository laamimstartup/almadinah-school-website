import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import QuranContent from "./QuranContent";

export const metadata: Metadata = buildMetadata({
  title: "Quran & Islamic Studies — Moral & Spiritual Foundations of Leadership",
  description:
    "Al-Madinah School Queens offers daily Quran recitation, Tajweed, Islamic history, Fiqh, and Aqeedah for all grades. The only Islamic school in Queens building moral leaders grounded in prophetic character.",
  path: "/programs/quran-islamic-studies",
  keywords: [
    "Quran school Queens NY",
    "Islamic studies program Queens",
    "Tajweed classes Queens NY",
    "Islamic school Quran memorization Queens",
    "Fiqh Aqeedah school New York",
    "Muslim school Quran Queens",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Quran & Islamic Studies",
  description: "Daily Quran recitation, Tajweed, Islamic history, Fiqh, and Aqeedah for all grade levels.",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  educationalLevel: "Pre-K through Grade 9",
  courseMode: "onsite",
};

export default function QuranPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <QuranContent />
    </>
  );
}
