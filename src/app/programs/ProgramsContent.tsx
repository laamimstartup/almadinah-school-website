"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { BookOpen, Globe, Moon, Calculator, FlaskConical, Music, Crown, Code2, ChevronRight, CheckCircle } from "lucide-react";

const programs = [
  {
    icon: BookOpen, color: "#2A8A50", tag: "Core", title: "NYS Core Curriculum", grades: "Pre-K – Grade 9",
    desc: "Fully aligned with New York State Department of Education standards. Our rigorous core curriculum covers English Language Arts, Mathematics, Science, and Social Studies — preparing students for any high school or beyond.",
    subjects: ["English Language Arts", "Mathematics", "Science", "Social Studies", "Health Education", "Physical Education"],
    highlight: "NYS Approved",
  },
  {
    icon: Moon, color: "#C9A84C", tag: "Islamic", title: "Quran & Islamic Studies", grades: "Pre-K – Grade 9",
    desc: "Daily Quran recitation, tajweed, and hifz program. Islamic Studies covers fiqh, seerah, aqeedah, and character development — building a generation grounded in faith.",
    subjects: ["Quran Recitation & Tajweed", "Hifz (Memorization)", "Islamic Studies / Fiqh", "Seerah (Prophetic Biography)", "Aqeedah", "Islamic Character Education"],
    highlight: "Daily Practice",
  },
  {
    icon: Globe, color: "#0EA5A0", tag: "Language", title: "Arabic Language", grades: "Pre-K – Grade 9",
    desc: "Immersive Arabic instruction from Pre-K through Grade 9. Students develop reading, writing, listening, and speaking skills — connecting them to their heritage and the language of the Quran.",
    subjects: ["Arabic Reading & Writing", "Arabic Grammar (Nahw & Sarf)", "Arabic Conversation", "Arabic Literature", "Quranic Arabic", "Arabic Composition"],
    highlight: "Heritage Language",
  },
  {
    icon: FlaskConical, color: "#2A8A50", tag: "STEM", title: "STEM & Science", grades: "Grade 1 – Grade 9",
    desc: "Hands-on STEM education integrating science, technology, engineering, and mathematics. Lab-based learning and project work develop critical thinking through an Islamic lens of exploring Allah's creation.",
    subjects: ["Life Science & Biology", "Earth Science", "Chemistry Fundamentals", "Physics Basics", "Engineering Design", "Environmental Science"],
    highlight: "Lab-Based Learning",
  },
  {
    icon: Crown, color: "#C9A84C", tag: "Leadership", title: "Leadership Development", grades: "Grade 4 – Grade 9",
    desc: "Our signature program — the only one of its kind at an Islamic school in Queens. Students develop public speaking, critical thinking, community service, and ethical leadership rooted in Prophetic character.",
    subjects: ["Public Speaking & Debate", "Community Service Projects", "Goal Setting & Planning", "Ethics & Decision Making", "Global Awareness", "Student Government"],
    highlight: "Exclusive Program",
  },
  {
    icon: Code2, color: "#0EA5A0", tag: "Technology", title: "KidsCodeGift — Coding", grades: "Grade 1 – Grade 9",
    desc: "Exclusive access to our KidsCodeGift platform. Students build real games, apps, and stories guided by AI and live instructors. No other Islamic school in Queens offers this level of technology education.",
    subjects: ["Scratch & Block Coding", "Python Fundamentals", "Web Development (HTML/CSS)", "Game Development", "AI & Machine Learning Intro", "App Building Projects"],
    highlight: "Only in Queens",
  },
  {
    icon: Music, color: "#2A8A50", tag: "Enrichment", title: "Arts & Enrichment", grades: "Pre-K – Grade 9",
    desc: "Calligraphy, Islamic art, nasheeds, and creative writing enrich students' connection to Islamic culture. Extracurricular clubs and sports programs round out the full student experience.",
    subjects: ["Islamic Calligraphy", "Visual Arts", "Nasheeds & Vocal Arts", "Creative Writing", "Extracurricular Clubs", "Physical Education & Sports"],
    highlight: "Cultural Connection",
  },
  {
    icon: Calculator, color: "#C9A84C", tag: "Academics", title: "Advanced Math Program", grades: "Grade 5 – Grade 9",
    desc: "Accelerated mathematics track for high-achieving students. Covers algebra, geometry, and pre-calculus with real-world problem solving and competition math preparation.",
    subjects: ["Pre-Algebra & Algebra", "Geometry", "Statistics & Probability", "Pre-Calculus Foundations", "Math Competitions Prep", "Real-World Problem Solving"],
    highlight: "Advanced Track",
  },
];

const tagColors: Record<string, string> = {
  Core: "#2A8A50", Islamic: "#C9A84C", Language: "#0EA5A0",
  STEM: "#2A8A50", Leadership: "#C9A84C", Technology: "#0EA5A0",
  Enrichment: "#2A8A50", Academics: "#C9A84C",
};

export default function ProgramsContent() {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-1.5 text-xs font-semibold text-[#4CAF75] tracking-widest uppercase mb-6">
              Academic Excellence
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Programs That <span className="text-gradient-green">Shape</span>{" "}
              <span className="text-gradient-gold">Futures</span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">
              Every program at Al-Madinah is designed to develop the complete student — spiritually grounded, academically excellent, technologically fluent, and ready to lead.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {programs.map(({ icon: Icon, color, tag, title, grades, desc, subjects, highlight }) => (
              <motion.div key={title} variants={staggerChild}
                className="group relative glass rounded-3xl p-8 hover:scale-[1.015] transition-all duration-400 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}10, transparent 70%)` }} />
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                      <Icon className="w-7 h-7" style={{ color }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-1.5 inline-block"
                        style={{ background: `${tagColors[tag]}20`, color: tagColors[tag] }}>{tag}</span>
                      <h2 className="text-xl font-black text-white leading-tight">{title}</h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full glass border border-white/10 text-white/50 whitespace-nowrap flex-shrink-0">{grades}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5 relative z-10">{desc}</p>
                <div className="relative z-10">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Subjects Covered</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {subjects.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-white/65 text-xs">
                        <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color }} />{s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5 relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${color}20`, color }}>✦ {highlight}</span>
                  <span className="text-xs text-white/30 flex items-center gap-1 group-hover:text-white/60 transition-colors">
                    Learn more <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Grade-Level Overview</h2>
            <p className="text-white/55 text-lg">From toddler to teen — a complete Islamic education journey.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-3">
            {[
              { grade: "Pre-K & Kindergarten", ages: "Ages 3–5", focus: "Islamic foundations, Arabic alphabet, Quran basics, early literacy & numeracy" },
              { grade: "Grades 1–3", ages: "Ages 6–8", focus: "NYS ELA & Math, Arabic reading/writing, Quran recitation, STEM exploration" },
              { grade: "Grades 4–6", ages: "Ages 9–11", focus: "Advanced core subjects, Arabic fluency, Leadership intro, KidsCodeGift coding begins" },
              { grade: "Grades 7–9", ages: "Ages 12–14", focus: "Regents-prep academics, Hifz program, Leadership Academy, advanced coding & STEM" },
            ].map(({ grade, ages, focus }) => (
              <motion.div key={grade} variants={staggerChild}
                className="flex flex-col md:flex-row gap-4 glass rounded-2xl p-6 hover:border-[#C9A84C]/20 transition-all duration-300">
                <div className="md:w-48 flex-shrink-0">
                  <div className="text-white font-bold">{grade}</div>
                  <div className="text-[#C9A84C] text-sm">{ages}</div>
                </div>
                <div className="flex-1 text-white/60 text-sm leading-relaxed pt-0.5">{focus}</div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl font-black text-white mb-4">Ready to Enroll Your Child?</h2>
            <p className="text-white/55 text-lg mb-8">
              Spaces for 2025–2026 are limited. Secure your child&apos;s spot in Queens&apos; most innovative Islamic school today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0F1C2E] font-bold hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105">
                Apply Now — 2025–2026
              </a>
              <a href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-white/30 transition-all duration-300">
                Ask a Question
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
