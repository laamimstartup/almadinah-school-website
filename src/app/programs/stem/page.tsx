import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import StemContent from "./StemContent";

export const metadata: Metadata = buildMetadata({
  title: "STEM Excellence — Analytical Leadership Through Science & Technology",
  description:
    "Al-Madinah School Queens STEM program covers advanced math, hands-on science labs, coding, and technology for Grades 3–9. The only Islamic school in Queens with an integrated AI-powered coding platform — KidsCodeGift.",
  path: "/programs/stem",
  keywords: [
    "STEM Islamic school Queens NY",
    "coding program Islamic school Queens",
    "science math Islamic school New York",
    "KidsCodeGift coding platform Queens",
    "STEM education Muslim students NY",
    "Islamic school technology program Queens",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "STEM Excellence Program",
  description: "Advanced mathematics, hands-on science labs, coding with KidsCodeGift, and technology education for Grades 3–9.",
  provider: { "@type": "School", name: "Al-Madinah School Queens", url: "https://almadinah-school-website.vercel.app" },
  educationalLevel: "Grades 3 through 9",
  courseMode: "onsite",
};

export default function StemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StemContent />
    </>
  );
}
