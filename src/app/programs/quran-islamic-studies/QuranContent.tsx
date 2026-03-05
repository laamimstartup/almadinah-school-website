"use client";

import { Moon, CheckCircle, ArrowRight, ChevronRight, BookOpen, Heart, Star, Mic } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: BookOpen,
    title: "Quran Recitation & Tajweed",
    desc: "Daily structured Quran recitation with proper Tajweed rules. Students progress from basic Iqra through full Quran reading with correct pronunciation.",
    outcomes: ["Makharij al-huruf", "Rules of Tajweed", "Fluent recitation", "Selected memorization"],
    color: "#C9A84C",
  },
  {
    icon: Heart,
    title: "Aqeedah — Islamic Creed",
    desc: "Building an unshakeable foundation of faith through the study of Tawheed, the pillars of Iman, and Islamic theology appropriate for each grade.",
    outcomes: ["Tawheed fundamentals", "Pillars of Iman & Islam", "Prophets & angels", "Day of Judgment"],
    color: "#2A8A50",
  },
  {
    icon: Star,
    title: "Fiqh — Islamic Jurisprudence",
    desc: "Practical Islamic law covering purification, prayer, fasting, zakat, and daily life conduct — equipping students to live Islam with confidence.",
    outcomes: ["Tahara & salah", "Fasting & Ramadan", "Halal & haram basics", "Everyday Islamic rulings"],
    color: "#0EA5A0",
  },
  {
    icon: Mic,
    title: "Seerah & Islamic History",
    desc: "The life of Prophet Muhammad ﷺ, the Companions, and Islamic civilization — presented as a leadership curriculum for modern Muslim youth.",
    outcomes: ["Prophetic biography", "Companions' stories", "Islamic golden age", "Leadership lessons"],
    color: "#9B7EDE",
  },
];

const gradeMap = [
  { range: "Pre-K – K", focus: "Introduction to Islam", skills: "Shahada, basic du'as, names of Allah, love for the Prophet ﷺ" },
  { range: "Grades 1–2", focus: "Pillars & Prayer", skills: "5 pillars, wudu, salah steps, Surah Al-Fatiha, short surahs" },
  { range: "Grades 3–5", focus: "Deeper Understanding", skills: "Tajweed rules, full salah, fasting, Seerah of the Prophet ﷺ" },
  { range: "Grades 6–9", focus: "Leadership Through Deen", skills: "Advanced Fiqh, Islamic history, Quran analysis, ethics of leadership" },
];

export default function QuranContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.04] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#C9A84C] opacity-[0.07] blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-6">
              <Moon className="w-3.5 h-3.5" /> Islamic Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight">
              Quran &{" "}
              <span className="text-gradient-gold">Islamic Studies</span>
            </h1>
            <p
              className="text-[#E8C96A] text-2xl md:text-3xl font-light mb-5 tracking-wide"
              dir="rtl" lang="ar" style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ&rdquo;
            </p>
            <p className="text-white/55 text-base italic mb-8">
              &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo; — Prophet Muhammad ﷺ
            </p>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              The moral and spiritual foundations of leadership. Every Al-Madinah student builds an unshakeable deen — the core from which all excellence flows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0F1C2E] font-bold hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105 group">
                Enroll Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/programs" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-[#C9A84C]/50 transition-all duration-300">
                All Programs <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad bg-mesh">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Four <span className="text-gradient-gold">Pillars</span> of Islamic Education
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">A complete Islamic curriculum that builds character, knowledge, and leadership.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, desc, outcomes, color }) => (
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

      {/* Grade Journey */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              The <span className="text-gradient-gold">Deen Journey</span>
            </h2>
            <p className="text-white/55 text-lg">From the first Shahada to leading with prophetic character.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {gradeMap.map(({ range, focus, skills }, i) => (
              <motion.div key={range} variants={staggerChild} className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-28 text-center">
                  <div className="glass-gold rounded-xl px-3 py-2">
                    <div className="text-[#E8C96A] font-black text-sm">{range}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-1">{focus}</div>
                  <div className="text-white/50 text-sm">{skills}</div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center">
                  <span className="text-[#E8C96A] font-black text-xs">{i + 1}</span>
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
            <div className="glass-gold rounded-3xl p-10 border border-[#C9A84C]/20">
              <h2 className="text-3xl font-black text-white mb-4">Build Your Child&apos;s Deen Today</h2>
              <p className="text-white/60 mb-8">Give your child the greatest gift — a strong Islamic foundation combined with world-class academic excellence.</p>
              <a href="/admissions" className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0F1C2E] font-bold hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105 group">
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
