"use client";

import { Crown, CheckCircle, ArrowRight, ChevronRight, Mic, Users, Target, Globe, Heart, Lightbulb } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: Mic,
    title: "Public Speaking & Debate",
    desc: "Every student learns to articulate ideas with confidence — through structured speeches, Islamic debates, and presentation skills that transfer to every area of life.",
    outcomes: ["Structured speech delivery", "Islamic argumentation", "Impromptu speaking", "Debate & rebuttal skills"],
    color: "#9B7EDE",
  },
  {
    icon: Users,
    title: "Community Service Projects",
    desc: "Real-world leadership through hands-on community impact. Students lead projects serving the school, masjid, and Queens neighborhood — living the Prophetic model.",
    outcomes: ["Project planning & execution", "Team leadership", "Community engagement", "Civic responsibility"],
    color: "#2A8A50",
  },
  {
    icon: Target,
    title: "Goal-Setting & Project Management",
    desc: "Students learn to set meaningful goals, break them into action steps, manage teams, and follow through — skills that separate leaders from followers.",
    outcomes: ["SMART goal setting", "Project planning tools", "Time management", "Accountability systems"],
    color: "#C9A84C",
  },
  {
    icon: Heart,
    title: "Islamic Ethics & Character",
    desc: "Leadership rooted in the Prophetic model. Students study the character of Prophet Muhammad ﷺ and apply it to modern ethical dilemmas and leadership challenges.",
    outcomes: ["Prophetic leadership model", "Ethical decision-making", "Amanah & accountability", "Compassionate leadership"],
    color: "#E8856A",
  },
  {
    icon: Globe,
    title: "Global Awareness & Civic Leadership",
    desc: "From local Queens to the global Muslim ummah — students develop awareness of world issues, international Muslim leadership, and how to be agents of positive change.",
    outcomes: ["Global Muslim leadership", "Current events analysis", "Cross-cultural competency", "Social justice through Islam"],
    color: "#0EA5A0",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Entrepreneurship",
    desc: "Students design solutions to real problems — combining Islamic values with creative thinking, entrepreneurial mindset, and the KidsCodeGift tech platform.",
    outcomes: ["Design thinking process", "Business & social ventures", "Pitching ideas", "Tech-enabled solutions"],
    color: "#E8C96A",
  },
];

const gradeMap = [
  { range: "Grades 5–6", focus: "Leadership Foundations", skills: "Self-leadership, goal setting, first speeches, service projects" },
  { range: "Grade 7", focus: "Leadership in Action", skills: "Team projects, community service, debate competitions, ethics case studies" },
  { range: "Grade 8", focus: "Leadership Amplified", skills: "School leadership roles, project management, entrepreneurship intro, mentorship" },
  { range: "Grade 9", focus: "The Leadership Legacy", skills: "Senior capstone project, community impact presentation, leadership portfolio" },
];

const prophets = [
  { name: "Prophet Muhammad ﷺ", lesson: "Servant Leadership — leading through character, humility, and care for the community" },
  { name: "Prophet Ibrahim ﷺ", lesson: "Courageous Leadership — standing for truth against all odds and pressure" },
  { name: "Prophet Yusuf ﷺ", lesson: "Strategic Leadership — patience, integrity, and excellence in every role" },
  { name: "Prophet Musa ﷺ", lesson: "Mission-Driven Leadership — leading with a clear purpose larger than oneself" },
];

export default function LeadershipDevContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.04] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-[#9B7EDE] opacity-[0.07] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-[#2A8A50] opacity-[0.08] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 text-[#C5B0FF]"
              style={{ background: "rgba(155,126,222,0.12)", border: "1px solid rgba(155,126,222,0.3)" }}>
              <Crown className="w-3.5 h-3.5" /> Signature Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight">
              Leadership{" "}
              <span style={{ background: "linear-gradient(135deg, #9B7EDE, #C5B0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Development
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              The Only Program of Its Kind at an Islamic School in Queens
            </p>
            <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Grades 5–9. Rooted in Prophetic character. Built for the modern world. Our Leadership Development Program doesn&apos;t just teach skills — it shapes the identity of a Muslim leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_30px_rgba(155,126,222,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #7C5CBF, #9B7EDE)" }}>
                Enroll Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/leadership" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-[#9B7EDE]/50 transition-all duration-300">
                Leadership Academy <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Six Pillars of{" "}
              <span style={{ background: "linear-gradient(135deg, #9B7EDE, #C5B0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Muslim Leadership
              </span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Each pillar is a skill for life — not just a class period.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, desc, outcomes, color }) => (
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

      {/* Prophetic Models */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              <span className="text-gradient-gold">Prophetic</span> Leadership Models
            </h2>
            <p className="text-white/55 text-lg">The Prophets are our leadership curriculum — we study them as case studies in transformational leadership.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {prophets.map(({ name, lesson }) => (
              <motion.div key={name} variants={staggerChild} className="glass-gold rounded-2xl p-6 flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#E8C96A]" />
                </div>
                <div>
                  <div className="text-[#E8C96A] font-bold mb-1">{name}</div>
                  <div className="text-white/65 text-sm leading-relaxed">{lesson}</div>
                </div>
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
              The Leadership <span style={{ background: "linear-gradient(135deg, #9B7EDE, #C5B0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Journey</span>
            </h2>
            <p className="text-white/55 text-lg">From self-leadership to community impact — Grades 5 through 9.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {gradeMap.map(({ range, focus, skills }, i) => (
              <motion.div key={range} variants={staggerChild} className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-shrink-0 w-28 text-center">
                  <div className="rounded-xl px-3 py-2" style={{ background: "rgba(155,126,222,0.12)", border: "1px solid rgba(155,126,222,0.3)" }}>
                    <div className="font-black text-sm" style={{ color: "#C5B0FF" }}>{range}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-1">{focus}</div>
                  <div className="text-white/50 text-sm">{skills}</div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(155,126,222,0.15)", border: "1px solid rgba(155,126,222,0.3)" }}>
                  <span className="font-black text-xs" style={{ color: "#C5B0FF" }}>{i + 1}</span>
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
            <div className="rounded-3xl p-10 border text-center" style={{ background: "rgba(155,126,222,0.08)", borderColor: "rgba(155,126,222,0.25)" }}>
              <h2 className="text-3xl font-black text-white mb-4">Is Your Child Ready to Lead?</h2>
              <p className="text-white/60 mb-8">We are not just enrolling students — we are selecting future leaders. The Leadership Development Program is open to Grades 5–9 enrolled students.</p>
              <a href="/admissions"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white hover:shadow-[0_0_30px_rgba(155,126,222,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #7C5CBF, #9B7EDE)" }}>
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
