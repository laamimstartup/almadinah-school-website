import type { Metadata } from "next";
import { buildMetadata, schoolJsonLd } from "@/lib/seo";
import AboutContent from "./AboutContent";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Islamic School in Queens NY",
  description:
    "Learn about Al-Madinah School Queens — a NYS approved Islamic school in Jamaica, Queens serving Pre-K through Grade 9 since 2000. Our mission, values, and dedicated faculty.",
  path: "/about",
  keywords: [
    "about Al-Madinah School Queens",
    "Islamic school Jamaica Queens",
    "NYS approved Islamic school history",
    "Muslim private school Queens faculty",
    "Islamic education mission Queens NY",
  ],
});

const jsonLd = { ...schoolJsonLd, "@type": ["School", "EducationalOrganization"] };

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AboutContent />
    </>
  );
}
