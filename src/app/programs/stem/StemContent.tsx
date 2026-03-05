"use client";

import { Calculator, CheckCircle, ArrowRight, ChevronRight, Code2, FlaskConical, Brain, Zap, ExternalLink } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const disciplines = [
  {
    icon: Calculator,
    title: "Advanced Mathematics",
    desc: "From arithmetic foundations to algebra, geometry, and data analysis — our math curriculum builds the analytical mindset of a leader and problem-solver.",
    outcomes: ["Number sense & operations", "Algebra & linear equations", "Geometry & measurement", "Data analysis & probability"],
    color: "#E8C96A",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Science Labs",
    desc: "Students conduct real experiments in life science, earth science, chemistry, and physics — connecting Islamic wonder at creation with scientific inquiry.",
    outcomes: ["Scientific method & inquiry", "Life science & biology", "Earth & space science", "Physical science & chemistry"],
    color: "#2A8A50",
  },
  {
    icon: Code2,
    title: "Coding — KidsCodeGift Platform",
    desc: "Al-Madinah is the only Islamic school in Queens with an exclusive AI-powered coding platform. Students build real apps, games, and websites from Grade 3.",
    outcomes: ["Scratch & block coding", "Python fundamentals", "Web development HTML/CSS", "Game design & deployment"],
    color: "#0EA5A0",
    highlight: true,
  },
  {
    icon: Brain,
    title: "Technology & Digital Literacy",
    desc: "Responsible, ethical use of technology — students learn digital citizenship, research skills, presentation tools, and how to navigate the digital world as Muslims.",
    outcomes: ["Digital citizenship & ethics", "Research & information literacy", "Presentation & productivity", "Islamic ethics in tech"],
    color: "#9B7EDE",
  },
];

const gradeMap = [
  { range: "Grades 3–4", focus: "STEM Foundations", skills: "Multiplication, basic geometry, science observations, Scratch coding" },
  { range: "Grades 5–6", focus: "STEM Exploration", skills: "Pre-algebra, science labs, Python basics, web development intro" },
  { range: "Grades 7–8", focus: "STEM Application", skills: "Algebra, chemistry, JavaScript, full game & app projects" },
  { range: "Grade 9", focus: "STEM Leadership", skills: "Advanced algebra, research projects, AI coding, portfolio showcase" },
];

export default function StemContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#E8C96A] opacity-[0.06] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-[#0EA5A0] opacity-[0.08] blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-6">
              <Calculator className="w-3.5 h-3.5" /> STEM Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight">
              STEM{" "}
              <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Analytical Leadership Through Science & Technology
            </p>
            <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              The only Islamic school in Queens with an integrated AI-powered coding platform. Our STEM program turns every student into a builder, thinker, and innovator — grounded in Islamic values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0F1C2E] font-bold hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105 group">
                Enroll Today <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/kidscode" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[#14C4BE] hover:border-[#0EA5A0]/50 transition-all duration-300"
                style={{ background: "rgba(14,165,160,0.1)", border: "1px solid rgba(14,165,160,0.3)" }}>
                KidsCodeGift Platform <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* KidsCodeGift callout */}
      <section className="py-10" style={{ background: "#080f1a" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ background: "linear-gradient(135deg, rgba(14,165,160,0.15), rgba(27,107,58,0.1))", border: "1px solid rgba(14,165,160,0.3)" }}>
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(14,165,160,0.2)", border: "1px solid rgba(14,165,160,0.4)" }}>
                <Code2 className="w-8 h-8 text-[#0EA5A0]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="text-[#14C4BE] font-black text-lg mb-1">Exclusive: KidsCodeGift Platform</div>
                <p className="text-white/65 text-sm">Al-Madinah students get exclusive access to KidsCodeGift — an AI-powered coding platform where kids build real games, apps, and websites. No other Islamic school in Queens offers this.</p>
              </div>
              <a href="/kidscode" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#0F1C2E] transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #0EA5A0, #14C4BE)" }}>
                Explore Platform <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section-pad bg-mesh">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Four STEM <span className="text-gradient-gold">Disciplines</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">Math, science, coding, and digital literacy — integrated as a leadership curriculum.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map(({ icon: Icon, title, desc, outcomes, color, highlight }) => (
              <motion.div key={title} variants={staggerChild}
                className="group glass rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden relative"
                style={highlight ? { border: "1px solid rgba(14,165,160,0.3)" } : {}}>
                {highlight && (
                  <div className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: "rgba(14,165,160,0.2)", color: "#14C4BE", border: "1px solid rgba(14,165,160,0.3)" }}>
                    EXCLUSIVE
                  </div>
                )}
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
              The STEM <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-white/55 text-lg">Grades 3–9: from STEM exploration to innovation leadership.</p>
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
                <div className="flex-shrink-0">
                  <Zap className="w-5 h-5 text-[#E8C96A]/50" />
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
              <h2 className="text-3xl font-black text-white mb-4">Raise a Muslim Innovator</h2>
              <p className="text-white/60 mb-8">The only Islamic school in Queens where your child will graduate with a coding portfolio, analytical skills, and Islamic values — the ultimate combination.</p>
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
