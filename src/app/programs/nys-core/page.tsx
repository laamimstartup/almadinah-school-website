import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import NysCoreContent from "./NysCoreContent";

export const metadata: Metadata = buildMetadata({
  title: "NYS Core Curriculum — Analytical Leadership Through Academic Excellence",
  description:
    "Al-Madinah School Queens delivers a fully NYS-approved core curriculum in ELA, Math, Science, and Social Studies — framed as Analytical Leadership for Pre-K through Grade 9 students in Jamaica, Queens NY.",
  path: "/programs/nys-core",
  keywords: [
    "NYS curriculum Islamic school Queens",
    "New York State approved Islamic school",
    "ELA math science Islamic school Queens",
    "academic excellence Islamic school NY",
    "NYS core curriculum Pre-K Grade 9 Queens",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NYS Core Curriculum",
  description: "New York State aligned core academic program covering ELA, Math, Science, and Social Studies for Pre-K through Grade 9.",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  educationalLevel: "Pre-K through Grade 9",
  courseMode: "onsite",
};

export default function NysCorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NysCoreContent />
    </>
  );
}
