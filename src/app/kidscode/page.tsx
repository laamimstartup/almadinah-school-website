import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import KidsCodeContent from "./KidsCodeContent";

export const metadata: Metadata = buildMetadata({
  title: "KidsCodeGift — Exclusive Coding Platform for Al-Madinah Students",
  description:
    "Al-Madinah School Queens students get exclusive access to KidsCodeGift — the AI-powered coding platform where kids aged 7–16 build real games, apps, and stories. The only Islamic school in Queens with integrated coding education.",
  path: "/kidscode",
  keywords: [
    "KidsCodeGift platform Islamic school",
    "coding program kids Queens NY",
    "Islamic school coding platform",
    "kids coding program New York",
    "AI coding platform Islamic school",
    "STEM coding Islamic school Queens",
    "game development kids Queens",
    "Python for kids Islamic school",
    "coding education Muslim students NY",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KidsCodeGift",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web Browser",
  url: "https://kids-code-gift-seven.vercel.app",
  description:
    "AI-powered coding platform for kids aged 7–16. Exclusively integrated at Al-Madinah School Queens.",
  provider: {
    "@type": "School",
    name: "Al-Madinah School Queens",
    url: "https://almadinah-school-website.vercel.app",
  },
};

export default function KidsCodePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KidsCodeContent />
    </>
  );
}
