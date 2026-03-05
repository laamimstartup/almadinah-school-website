"use client";

import { Music, CheckCircle, ArrowRight, ChevronRight, PenTool, Heart, Star, Dumbbell, Palette } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const areas = [
  {
    icon: PenTool,
    title: "Islamic Calligraphy (الخط العربي)",
    desc: "Students learn the ancient art of Arabic calligraphy — connecting art, language, and faith. From Naskh script to creative compositions of Quranic verses.",
    outcomes: ["Arabic letterforms & proportion", "Naskh & Ruq'ah scripts", "Quranic verse compositions", "Islamic geometric patterns"],
    color: "#C9A84C",
  },
  {
    icon: Palette,
    title: "Visual Arts",
    desc: "Drawing, painting, collage, and mixed media — students explore visual storytelling through an Islamic aesthetic lens, celebrating creation as a gift from Allah.",
    outcomes: ["Drawing & observation skills", "Color theory & painting", "Islamic geometric art", "Portfolio development"],
    color: "#E8856A",
  },
  {
    icon: Dumbbell,
    title: "Physical Education",
    desc: "A healthy body is an amanah. Our PE program builds physical literacy, teamwork, and Islamic values around sport — honoring the Prophetic tradition of physical excellence.",
    outcomes: ["Physical fitness & health", "Team sports & cooperation", "Islamic sportsmanship", "Body as an amanah"],
    color: "#2A8A50",
  },
  {
    icon: Star,
    title: "Cultural Enrichment",
    desc: "Celebrating the diversity and richness of Islamic civilization — from Andalusian art to East African heritage. Students develop pride in their identity and global Muslim community.",
    outcomes: ["Islamic world history & arts", "Cultural heritage projects", "Interfaith awareness", "Identity & belonging"],
    color: "#0EA5A0",
  },
  {
    icon: Music,
    title: "Nasheeds & Oral Tradition",
    desc: "The spoken and sung word — students engage with Islamic nasheeds, poetry (qaseedah), oral storytelling, and the rich tradition of Arabic and Islamic literary arts.",
    outcomes: ["Nasheed & qaseedah", "Oral storytelling", "Arabic poetry appreciation", "Islamic literary tradition"],
    color: "#9B7EDE",
  },
  {
    icon: Heart,
    title: "Social-Emotional Learning",
    desc: "Developing emotionally intelligent, empathetic leaders. Students learn self-awareness, conflict resolution, gratitude, and emotional resilience through an Islamic framework.",
    outcomes: ["Self-awareness & regulation", "Empathy & active listening", "Conflict resolution (Islah)", "Gratitude & Sabr practices"],
    color: "#E8C96A",
  },
];

const whyArts = [
  "The Prophet ﷺ said: 'Allah is beautiful and loves beauty' — art is an expression of that love",
  "Develops creativity, problem-solving, and lateral thinking across all subjects",
  "Islamic calligraphy connects students to the language and beauty of the Quran",
  "Physical education fulfills the Prophetic encouragement of sports like swimming, archery, and riding",
  "Cultural enrichment builds pride in Islamic identity and civilizational heritage",
  "Social-emotional skills are the foundation of effective leadership",
];

export default function ArtsContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.04] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#E8856A] opacity-[0.06] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#C9A84C] opacity-[0.07] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 text-[#E8856A]"
              style={{ background: "rgba(232,133,106,0.12)", border: "1px solid rgba(232,133,106,0.3)" }}>
              <Music className="w-3.5 h-3.5" /> Enrichment Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight">
              Arts &{" "}
              <span style={{ background: "linear-gradient(135deg, #E8856A, #F0A887)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Enrichment
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Nurturing the Whole Muslim Student — Body, Mind & Spirit
            </p>
            <p
              className="text-[#E8C96A] text-2xl font-light mb-5 tracking-wide"
              dir="rtl" lang="ar" style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَال&rdquo;
            </p>
            <p className="text-white/50 text-sm italic mb-8">
              &ldquo;Indeed, Allah is beautiful and loves beauty.&rdquo; — Prophet Muhammad ﷺ
            </p>
            <p className="text-white/55 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Education is more than academics. Our Arts & Enrichment program develops creative, physically healthy, emotionally intelligent, and culturally proud Muslim students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_30px_rgba(232,133,106,0.4)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #C96A50, #E8856A)" }}>
                Enroll Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/programs" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-[#E8856A]/50 transition-all duration-300">
                All Programs <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Areas */}
      <section className="section-pad bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Six Enrichment <span style={{ background: "linear-gradient(135deg, #E8856A, #F0A887)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Disciplines</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Every area nurtures a dimension of the complete, flourishing Muslim human being.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map(({ icon: Icon, title, desc, outcomes, color }) => (
              <motion.div key={title} variants={staggerChild} className="group glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 70%)` }} />
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="space-y-1.5">
                  {outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-white/65 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
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

      {/* Why Arts */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Why Arts & Enrichment <span className="text-gradient-gold">Matters</span>
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyArts.map((reason, i) => (
              <motion.div key={i} variants={staggerChild} className="glass rounded-2xl p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#E8856A] flex-shrink-0 mt-0.5" />
                <p className="text-white/75 text-sm leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-mesh">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <div className="glass rounded-3xl p-10 border" style={{ borderColor: "rgba(232,133,106,0.25)" }}>
              <h2 className="text-3xl font-black text-white mb-4">Enroll Your Whole Child</h2>
              <p className="text-white/60 mb-8">At Al-Madinah, we develop students academically, spiritually, creatively, and physically — because a complete education produces a complete Muslim leader.</p>
              <a href="/admissions"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_30px_rgba(232,133,106,0.4)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #C96A50, #E8856A)" }}>
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
