import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AdmissionsContent from "./AdmissionsContent";

export const metadata: Metadata = buildMetadata({
  title: "Admissions 2025–2026 — Enroll Your Child Today",
  description:
    "Apply to Al-Madinah School Queens for 2025–2026. NYS approved Islamic school in Jamaica Queens accepting Pre-K through Grade 9. Download the admission packet, schedule a tour, or contact our admissions team today.",
  path: "/admissions",
  keywords: [
    "Islamic school admissions Queens NY 2025",
    "enroll Islamic school Jamaica Queens",
    "Al-Madinah School application",
    "Muslim school enrollment New York",
    "Islamic Pre-K enrollment Queens",
    "NYS approved school registration Queens",
    "Islamic middle school admissions NY",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Al-Madinah School Queens NYS approved?", acceptedAnswer: { "@type": "Answer", text: "Yes, fully approved by the New York State Department of Education." } },
    { "@type": "Question", name: "What grades does Al-Madinah offer?", acceptedAnswer: { "@type": "Answer", text: "Pre-Kindergarten through Grade 9." } },
    { "@type": "Question", name: "What makes Al-Madinah different from other Islamic schools in Queens?", acceptedAnswer: { "@type": "Answer", text: "Leadership Academy, KidsCodeGift coding platform, and 25+ years of NYS-approved excellence." } },
  ],
};

export default function AdmissionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AdmissionsContent />
    </>
  );
}

