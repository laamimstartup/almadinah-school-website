import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LeadershipDevContent from "./LeadershipDevContent";

export const metadata: Metadata = buildMetadata({
  title: "Leadership Development Program — Raising Muslim Leaders in Queens NY",
  description:
    "Al-Madinah School Queens Leadership Development Program for Grades 5–9. Public speaking, community service, ethical decision-making, and project management — rooted in prophetic character. The only program of its kind at an Islamic school in Queens.",
  path: "/programs/leadership-development",
  keywords: [
    "Islamic leadership program Queens NY",
    "Muslim leadership school New York",
    "public speaking Islamic school Queens",
    "community service Islamic school NY",
    "leadership development Muslim students Queens",
    "Islamic school leadership program Grade 5-9",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Leadership Development Program",
  description: "A dedicated program teaching public speaking, community engagement, project management, and ethical leadership rooted in Islamic principles for Grades 5–9.",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  educationalLevel: "Grades 5 through 9",
  courseMode: "onsite",
};

export default function LeadershipDevPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LeadershipDevContent />
    </>
  );
}
