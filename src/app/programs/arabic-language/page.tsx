import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ArabicContent from "./ArabicContent";

export const metadata: Metadata = buildMetadata({
  title: "Arabic Language Program — Classical & Modern Arabic for Muslim Leaders",
  description:
    "Al-Madinah School Queens teaches Fusha Arabic from Pre-K through Grade 9 — reading, writing, conversation, and classical Quranic Arabic. The only school in Queens building true Arabic fluency in Muslim students.",
  path: "/programs/arabic-language",
  keywords: [
    "Arabic language school Queens NY",
    "Fusha Arabic classes Queens",
    "Islamic school Arabic program New York",
    "Arabic reading writing Queens",
    "classical Arabic school NY",
    "Arabic for kids Queens",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Arabic Language Program",
  description: "Structured Arabic literacy from foundational reading through classical and conversational Arabic proficiency, Pre-K through Grade 9.",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  educationalLevel: "Pre-K through Grade 9",
  courseMode: "onsite",
  inLanguage: "ar",
};

export default function ArabicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArabicContent />
    </>
  );
}
