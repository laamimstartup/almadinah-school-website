"use client";

import { BookOpen, CheckCircle, ArrowRight, ChevronRight, Target, TrendingUp, Award, Users } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subjects = [
  {
    title: "English Language Arts",
    desc: "Reading comprehension, writing, grammar, vocabulary, and literary analysis — aligned to NYS Next Generation ELA Standards.",
    outcomes: ["Critical reading & analysis", "Persuasive & expository writing", "Research skills", "Public speaking"],
    color: "#2A8A50",
  },
  {
    title: "Mathematics",
    desc: "From number sense in Pre-K to algebra, geometry, and data analysis in Grade 9 — building the analytical minds of tomorrow.",
    outcomes: ["Problem-solving strategies", "Algebraic thinking", "Geometric reasoning", "Data & statistics"],
    color: "#C9A84C",
  },
  {
    title: "Science",
    desc: "Hands-on labs, experiments, and inquiry-based learning aligned to NYS P-12 Science Learning Standards.",
    outcomes: ["Scientific inquiry", "Life & earth science", "Physical science", "Environmental awareness"],
    color: "#0EA5A0",
  },
  {
    title: "Social Studies",
    desc: "World history, US history, civics, geography, and economics — contextualizing knowledge within Islamic and global perspectives.",
    outcomes: ["Historical thinking", "Civic engagement", "Cultural literacy", "Global awareness"],
    color: "#9B7EDE",
  },
];

const gradeMap = [
  { range: "Pre-K – K", focus: "Foundations of Literacy & Numeracy", skills: "Phonics, counting, shapes, colors, oral language" },
  { range: "Grades 1–2", focus: "Building Blocks", skills: "Reading fluency, addition/subtraction, science exploration" },
  { range: "Grades 3–5", focus: "Academic Mastery", skills: "Essay writing, multiplication, lab science, social studies" },
  { range: "Grades 6–9", focus: "Analytical Leadership", skills: "Literary analysis, algebra, research projects, debate" },
];

const stats = [
  { icon: Award, value: "100%", label: "NYS Approved", color: "#2A8A50" },
  { icon: Users, value: "Pre-K–9", label: "All Grade Levels", color: "#C9A84C" },
  { icon: TrendingUp, value: "25+", label: "Years of Excellence", color: "#0EA5A0" },
  { icon: Target, value: "98%", label: "Parent Satisfaction", color: "#9B7EDE" },
];

export default function NysCoreContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#1B6B3A] opacity-10 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-1.5 text-xs font-semibold text-[#4CAF75] tracking-widest uppercase mb-6">
              <BookOpen className="w-3.5 h-3.5" /> Academic Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              NYS Core{" "}
              <span className="text-gradient-green">Curriculum</span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Analytical Leadership Through Academic Excellence
            </p>
            <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Our NYS-approved curriculum doesn&apos;t just teach subjects — it develops analytical leaders who read critically, reason mathematically, and engage with the world through Islamic values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold hover:shadow-[0_0_30px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-105 group">
                Enroll Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/programs" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-[#2A8A50]/50 transition-all duration-300">
                All Programs <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10" style={{ background: "#080f1a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="glass rounded-2xl p-5 text-center">
                <Icon className="w-6 h-6 mx-auto mb-2" style={{ color }} />
                <div className="text-2xl font-black text-white mb-1">{value}</div>
                <div className="text-white/50 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-pad bg-mesh">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Four Core <span className="text-gradient-green">Disciplines</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Each subject is taught as a leadership discipline — not just academic content.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map(({ title, desc, outcomes, color }) => (
              <motion.div key={title} variants={staggerChild} className="group glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 70%)` }} />
                <div className="w-2 h-10 rounded-full mb-5" style={{ background: color }} />
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

      {/* Grade Journey */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              The Academic <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-white/55 text-lg">Purposefully scaffolded from curiosity to analytical mastery.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {gradeMap.map(({ range, focus, skills }, i) => (
              <motion.div key={range} variants={staggerChild} className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-28 text-center">
                  <div className="glass-green rounded-xl px-3 py-2">
                    <div className="text-[#4CAF75] font-black text-sm">{range}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-1">{focus}</div>
                  <div className="text-white/50 text-sm">{skills}</div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2A8A50]/20 border border-[#2A8A50]/30 flex items-center justify-center">
                  <span className="text-[#4CAF75] font-black text-xs">{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-mesh">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <div className="glass-green rounded-3xl p-10 border border-[#2A8A50]/20">
              <h2 className="text-3xl font-black text-white mb-4">Ready to Enroll?</h2>
              <p className="text-white/60 mb-8">Give your child a NYS-approved education enriched with Islamic values, leadership development, and 25+ years of excellence.</p>
              <a href="/admissions" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold hover:shadow-[0_0_30px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-105 group">
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
