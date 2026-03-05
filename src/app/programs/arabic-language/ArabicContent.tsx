"use client";

import { Globe, CheckCircle, ArrowRight, ChevronRight, BookOpen, MessageSquare, PenTool, Mic } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tracks = [
  {
    icon: BookOpen,
    title: "Reading (القراءة)",
    desc: "From Arabic alphabet recognition through fluent reading of authentic classical and modern standard Arabic texts.",
    outcomes: ["Arabic alphabet mastery", "Short vowels & sukun", "Word recognition", "Fluent text reading"],
    color: "#0EA5A0",
  },
  {
    icon: PenTool,
    title: "Writing (الكتابة)",
    desc: "Proper Arabic script from letter formation through paragraph and essay writing in Modern Standard Arabic.",
    outcomes: ["Letter formation", "Connected script", "Sentence construction", "Essay & composition"],
    color: "#2A8A50",
  },
  {
    icon: MessageSquare,
    title: "Conversation (المحادثة)",
    desc: "Real communicative Arabic — students learn to greet, express ideas, and hold basic conversations in Fusha Arabic.",
    outcomes: ["Greetings & daily phrases", "Question & answer", "Storytelling in Arabic", "Classroom Arabic"],
    color: "#C9A84C",
  },
  {
    icon: Mic,
    title: "Classical Arabic (العربية الفصحى)",
    desc: "The language of the Quran — understanding root systems, grammar (Nahw & Sarf), and unlocking Quranic meaning.",
    outcomes: ["Root word system", "Basic Nahw grammar", "Quranic vocabulary", "Arabic word families"],
    color: "#9B7EDE",
  },
];

const gradeMap = [
  { range: "Pre-K – K", arabic: "المرحلة الأولى", focus: "Arabic Alphabet", skills: "Letters Alef–Ya, recognition, tracing, short vowels" },
  { range: "Grades 1–2", arabic: "المرحلة الثانية", focus: "Reading & Writing Basics", skills: "Connected letters, simple words, basic sentences" },
  { range: "Grades 3–5", arabic: "المرحلة المتوسطة", focus: "Fluency & Grammar", skills: "Reading passages, writing paragraphs, basic Nahw" },
  { range: "Grades 6–9", arabic: "المرحلة المتقدمة", focus: "Classical Mastery", skills: "Essays, grammar analysis, Quranic Arabic, literature" },
];

const whyArabic = [
  "Language of the Quran — understand Allah's words directly",
  "Language of Islamic scholarship — access 1400 years of knowledge",
  "Second most widely spoken Semitic language in the world",
  "Opens doors to Islamic universities and global opportunities",
  "Strengthens identity as a Muslim and cultural connection",
  "Develops advanced cognitive and linguistic abilities",
];

export default function ArabicContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.04] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-[#0EA5A0] opacity-[0.07] blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 text-[#14C4BE]"
              style={{ background: "rgba(14,165,160,0.12)", border: "1px solid rgba(14,165,160,0.25)" }}>
              <Globe className="w-3.5 h-3.5" /> Language Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight">
              Arabic{" "}
              <span className="text-[#0EA5A0]">Language</span>
            </h1>
            <p
              className="text-[#0EA5A0] text-3xl md:text-4xl font-light mb-5 tracking-wide"
              dir="rtl" lang="ar" style={{ fontFamily: "Georgia, serif" }}
            >
              لُغَةُ القُرآنِ
            </p>
            <p className="text-white/50 text-base italic mb-6">The Language of the Quran</p>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              The only school in Queens building true Arabic fluency — from alphabet to classical mastery. Our structured program runs Pre-K through Grade 9 with daily Arabic instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_30px_rgba(14,165,160,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #0C8480, #0EA5A0)" }}>
                Enroll Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/programs" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-[#0EA5A0]/50 transition-all duration-300">
                All Programs <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Tracks */}
      <section className="section-pad bg-mesh">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Four <span className="text-[#0EA5A0]">Arabic Skills</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Reading, writing, speaking, and classical Arabic — all taught from Pre-K through Grade 9.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map(({ icon: Icon, title, desc, outcomes, color }) => (
              <motion.div key={title} variants={staggerChild} className="group glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 70%)` }} />
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-xl font-black text-white mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="space-y-2">
                  {outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color }} />
                      {o}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Why Arabic */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Why <span className="text-[#0EA5A0]">Arabic</span> Matters
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyArabic.map((reason, i) => (
              <motion.div key={i} variants={staggerChild} className="glass rounded-2xl p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#0EA5A0] flex-shrink-0 mt-0.5" />
                <p className="text-white/75 text-sm leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Grade Journey */}
      <section className="section-pad bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              The Arabic <span className="text-[#0EA5A0]">Journey</span>
            </h2>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {gradeMap.map(({ range, arabic, focus, skills }, i) => (
              <motion.div key={range} variants={staggerChild} className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-36 text-center">
                  <div className="rounded-xl px-3 py-2" style={{ background: "rgba(14,165,160,0.12)", border: "1px solid rgba(14,165,160,0.25)" }}>
                    <div className="text-[#14C4BE] font-black text-xs">{range}</div>
                    <div className="text-[#0EA5A0]/70 text-xs mt-0.5" dir="rtl" lang="ar" style={{ fontFamily: "Georgia, serif" }}>{arabic}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-1">{focus}</div>
                  <div className="text-white/50 text-sm">{skills}</div>
                </div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <div className="rounded-3xl p-10 border text-center" style={{ background: "rgba(14,165,160,0.08)", borderColor: "rgba(14,165,160,0.25)" }}>
              <h2 className="text-3xl font-black text-white mb-4">Give Your Child the Language of the Quran</h2>
              <p className="text-white/60 mb-8">Daily Arabic instruction from Pre-K through Grade 9 — building the foundation for a lifetime of Islamic learning.</p>
              <a href="/admissions" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_30px_rgba(14,165,160,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #0C8480, #0EA5A0)" }}>
                Apply for 2025–2026 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
