"use client";

import { BookOpen, Globe, Moon, Calculator, FlaskConical, Music, ChevronRight } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "./AnimateIn";
import { motion } from "framer-motion";

const programs = [
  {
    icon: BookOpen,
    title: "NYS Core Curriculum",
    grades: "Pre-K – Grade 9",
    desc: "Fully aligned with New York State Department of Education standards across English Language Arts, Mathematics, Science, and Social Studies.",
    tags: ["ELA", "Math", "Science", "Social Studies"],
    color: "#2A8A50",
    accent: "#1B6B3A",
    href: "/programs/nys-core",
  },
  {
    icon: Moon,
    title: "Quran & Islamic Studies",
    grades: "All Grades",
    desc: "Daily Quran recitation, Tajweed, Islamic history, Fiqh, and Aqeedah — instilling deep roots in faith and scholarly Islamic knowledge.",
    tags: ["Quran", "Tajweed", "Fiqh", "Aqeedah"],
    color: "#C9A84C",
    accent: "#A07830",
    href: "/programs/quran-islamic-studies",
  },
  {
    icon: Globe,
    title: "Arabic Language",
    grades: "All Grades",
    desc: "Structured Arabic literacy program from foundational reading and writing to conversational and classical Arabic proficiency.",
    tags: ["Fusha Arabic", "Reading", "Writing", "Conversation"],
    color: "#0EA5A0",
    accent: "#0C8480",
    href: "/programs/arabic-language",
  },
  {
    icon: Calculator,
    title: "STEM Excellence",
    grades: "Grades 3 – 9",
    desc: "Advanced mathematics, hands-on science labs, coding, and technology integrated throughout the curriculum to develop analytical thinkers.",
    tags: ["Coding", "Science Labs", "Math", "Technology"],
    color: "#E8C96A",
    accent: "#C9A84C",
    href: "/programs/stem",
  },
  {
    icon: FlaskConical,
    title: "Leadership Development",
    grades: "Grades 5 – 9",
    desc: "A dedicated program teaching public speaking, community engagement, project management, and ethical leadership rooted in Islamic principles.",
    tags: ["Public Speaking", "Projects", "Ethics", "Community"],
    color: "#9B7EDE",
    accent: "#7C5CBF",
    href: "/programs/leadership-development",
  },
  {
    icon: Music,
    title: "Arts & Enrichment",
    grades: "All Grades",
    desc: "Creative expression through visual arts, Islamic calligraphy, physical education, and cultural appreciation programs that nourish the whole student.",
    tags: ["Calligraphy", "Visual Arts", "PE", "Culture"],
    color: "#E8856A",
    accent: "#C96A50",
    href: "/programs/arts-enrichment",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A8A50]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-1.5 text-xs font-semibold text-[#4CAF75] tracking-widest uppercase mb-5">
            Academic Excellence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Programs That{" "}
            <span className="text-gradient-green">Shape Futures</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every program is designed to develop the complete student — spiritually grounded, academically excellent, and ready to lead.
          </p>
        </AnimateIn>

        {/* Programs grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, grades, desc, tags, color, accent, href }, i) => (
            <motion.a
              key={title}
              href={href}
              variants={staggerChild}
              className="group relative glass rounded-3xl p-7 hover:scale-[1.02] transition-all duration-400 overflow-hidden cursor-pointer block"
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 70%)` }}
              />

              {/* Header row */}
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <div className="glass rounded-full px-3 py-1 text-xs font-medium text-white/60">
                  {grades}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <div
                  className="flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  style={{ color }}
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${color}, ${accent})` }}
              />
            </motion.a>
          ))}
        </AnimateStagger>

        {/* Bottom CTA */}
        <AnimateIn direction="up" delay={0.1}>
        <div className="mt-12 text-center">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-[#C9A84C]/25 text-[#E8C96A] font-semibold hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 transition-all duration-300 group"
          >
            View Full Academic Curriculum
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        </AnimateIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
