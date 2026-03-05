import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ArtsContent from "./ArtsContent";

export const metadata: Metadata = buildMetadata({
  title: "Arts & Enrichment — Nurturing the Whole Muslim Student",
  description:
    "Al-Madinah School Queens Arts & Enrichment program includes Islamic calligraphy, visual arts, physical education, and cultural programs for all grades. Developing the whole student — body, mind, and spirit.",
  path: "/programs/arts-enrichment",
  keywords: [
    "Islamic arts school Queens NY",
    "Islamic calligraphy school New York",
    "arts enrichment Islamic school Queens",
    "physical education Islamic school NY",
    "creative arts Muslim school Queens",
    "whole child education Islamic school",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Arts & Enrichment Program",
  description: "Visual arts, Islamic calligraphy, physical education, and cultural enrichment programs for all grade levels.",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  educationalLevel: "Pre-K through Grade 9",
  courseMode: "onsite",
};

export default function ArtsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArtsContent />
    </>
  );
}
