import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ProgramsContent from "./ProgramsContent";

export const metadata: Metadata = buildMetadata({
  title: "Academic Programs — NYS Curriculum + Islamic Studies",
  description:
    "Explore Al-Madinah School Queens academic programs: NYS-aligned core curriculum, Quran & Islamic Studies, Arabic language, STEM, Leadership Academy, and KidsCodeGift coding — Pre-K through Grade 9 in Jamaica, Queens NY.",
  path: "/programs",
  keywords: [
    "Islamic school programs Queens NY",
    "NYS curriculum Islamic school",
    "Quran memorization school Queens",
    "Arabic language school New York",
    "STEM Islamic school Queens",
    "Islamic leadership program kids",
    "coding program Islamic school",
    "Pre-K Islamic school Queens",
    "Middle school Islamic Queens NY",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  hasCourseInstance: [
    { "@type": "CourseInstance", name: "NYS Core Curriculum", courseMode: "onsite" },
    { "@type": "CourseInstance", name: "Quran & Islamic Studies", courseMode: "onsite" },
    { "@type": "CourseInstance", name: "Arabic Language", courseMode: "onsite" },
    { "@type": "CourseInstance", name: "STEM & Coding", courseMode: "onsite" },
    { "@type": "CourseInstance", name: "Leadership Development", courseMode: "onsite" },
  ],
};

export default function ProgramsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProgramsContent />
    </>
  );
}
