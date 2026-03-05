import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import LeadershipContent from "./LeadershipContent";

export const metadata: Metadata = buildMetadata({
  title: "Leadership Academy — Raising Muslim Leaders in Queens NY",
  description:
    "Al-Madinah School Queens Leadership Academy — the only Islamic leadership program in Queens NY. Public speaking, community service, ethical decision-making, and global awareness for students Grades 4–9. Rooted in Prophetic character.",
  path: "/leadership",
  keywords: [
    "Islamic leadership program Queens NY",
    "Muslim leadership academy New York",
    "Islamic school leadership development",
    "public speaking program Islamic school",
    "community service Islamic school Queens",
    "Muslim student leadership Queens NY",
    "Islamic character development program",
    "Prophetic leadership curriculum",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  name: "Al-Madinah Leadership Academy",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  description: "The only Islamic leadership development program in Queens NY. Students in Grades 4–9 develop public speaking, ethical leadership, community service, and global awareness rooted in Prophetic character.",
  educationalProgramMode: "onsite",
};

export default function LeadershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LeadershipContent />
    </>
  );
}
