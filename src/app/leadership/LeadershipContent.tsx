"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import {
  Crown, Mic2, Users, Target, Globe, Lightbulb,
  ArrowRight, CheckCircle, Star, BookOpen, Heart
} from "lucide-react";

const pillars = [
  {
    icon: Mic2, color: "#C9A84C", title: "Public Speaking & Oratory", arabic: "الخطابة",
    desc: "Weekly debates, speeches, and presentations build unshakeable confidence. Students learn to articulate ideas, defend positions, and inspire audiences — skills that serve them for life.",
    outcomes: ["Weekly debate competitions", "School-wide speech events", "Confidence under pressure", "Clear, structured argumentation"],
  },
  {
    icon: Users, color: "#2A8A50", title: "Community Service & Impact", arabic: "خدمة المجتمع",
    desc: "Real-world community projects connect Islamic values to tangible action. Students design, lead, and execute service initiatives that benefit their families, school, and broader Queens community.",
    outcomes: ["5+ projects per student annually", "Community partnership program", "Fundraising & organizing skills", "Islamic philanthropy principles"],
  },
  {
    icon: Target, color: "#0EA5A0", title: "Goal Setting & Achievement", arabic: "تحديد الأهداف",
    desc: "Students learn to set ambitious personal and academic goals, create actionable plans, and track progress. This discipline — rooted in tawakkul — prepares them for any challenge they face.",
    outcomes: ["Personal goal frameworks", "Quarterly progress reviews", "Vision board workshops", "Growth mindset development"],
  },
  {
    icon: Globe, color: "#C9A84C", title: "Global Awareness", arabic: "الوعي العالمي",
    desc: "Understanding world affairs through an Islamic ethical lens. From geopolitics to environmental stewardship, students learn to think globally while acting locally — as true khulafaa on earth.",
    outcomes: ["Current events discussions", "Model UN participation", "Environmental stewardship", "Islamic global responsibility"],
  },
  {
    icon: Lightbulb, color: "#2A8A50", title: "Critical Thinking", arabic: "التفكير النقدي",
    desc: "Problem-solving frameworks drawn from both classical Islamic scholarship and modern analytical methods. Students learn to question, research, evaluate, and conclude with intellectual rigor.",
    outcomes: ["Socratic questioning method", "Islamic scholarly analysis", "Research & evidence skills", "Complex problem solving"],
  },
  {
    icon: Crown, color: "#0EA5A0", title: "Ethical Leadership", arabic: "القيادة الأخلاقية",
    desc: "Leadership rooted in the character of the Prophet Muhammad ﷺ. Students study prophetic leadership principles, student government, conflict resolution, and how to lead with justice and compassion.",
    outcomes: ["Student government roles", "Prophetic leadership study", "Conflict resolution skills", "Leading with integrity"],
  },
];

const outcomes = [
  { stat: "100%", desc: "of Leadership Academy graduates accepted to their first-choice high school" },
  { stat: "3×", desc: "more likely to hold student government positions than non-program peers" },
  { stat: "5+", desc: "community impact projects completed per student each academic year" },
  { stat: "92%", desc: "of parents report significant improvement in child's confidence and communication" },
];

const prophets = [
  { name: "Prophet Ibrahim ﷺ", lesson: "Courage to stand alone for truth when everyone else disagrees." },
  { name: "Prophet Yusuf ﷺ", lesson: "Patience, resilience, and rising to lead even through adversity." },
  { name: "Prophet Musa ﷺ", lesson: "Speaking truth to power and never backing down from justice." },
  { name: "Prophet Muhammad ﷺ", lesson: "The ultimate model — honest, just, merciful, and transformational." },
];

export default function LeadershipContent() {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#C9A84C] opacity-[0.06] blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-6">
              <Crown className="w-3.5 h-3.5" /> Only Islamic School in Queens with This Program
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              The <span className="text-gradient-gold">Leadership</span>
              <br />Academy
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Al-Madinah School Queens is no longer just an Islamic school — we are a <strong className="text-white">Leadership Academy</strong>. The only one of its kind in Queens, rooted entirely in Prophetic character and Islamic values.
            </p>
            <div className="glass-gold rounded-2xl px-6 py-4 inline-block mt-4">
              <p className="text-[#E8C96A] text-lg font-light italic" dir="rtl" lang="ar" style={{ fontFamily: "Georgia, serif" }}>
                &ldquo;كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْؤُولٌ عَنْ رَعِيَّتِهِ&rdquo;
              </p>
              <p className="text-white/60 text-sm mt-1">&ldquo;Each of you is a shepherd, and each is responsible for his flock.&rdquo; — Prophet Muhammad ﷺ</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12 border-y border-white/5" style={{ background: "rgba(15,28,46,0.98)" }}>
        <AnimateStagger className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {outcomes.map(({ stat, desc }) => (
            <motion.div key={stat} variants={staggerChild} className="space-y-2">
              <div className="text-4xl font-black text-gradient-gold">{stat}</div>
              <div className="text-white/50 text-xs leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </AnimateStagger>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              The 6 Pillars of <span className="text-gradient-gold">Muslim Leadership</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              Every pillar is grounded in Islamic scholarship, Prophetic example, and real-world application.
            </p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, arabic, desc, outcomes: outs, color }) => (
              <motion.div key={title} variants={staggerChild}
                className="group relative glass rounded-3xl p-7 hover:scale-[1.02] transition-all duration-400 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 70%)` }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <p className="text-xs mb-1 relative z-10" style={{ color }} dir="rtl" lang="ar">{arabic}</p>
                <h3 className="text-white font-black text-xl mb-3 relative z-10">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 relative z-10">{desc}</p>
                <div className="relative z-10 space-y-1.5">
                  {outs.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-white/50 text-xs">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color }} />{o}
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

      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              We Learn From the <span className="text-gradient-gold">Greatest Leaders</span>
            </h2>
            <p className="text-white/55 text-lg">Our curriculum draws leadership lessons from the Prophets of Allah.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {prophets.map(({ name, lesson }) => (
              <motion.div key={name} variants={staggerChild}
                className="flex gap-4 glass-gold rounded-2xl p-6 border border-[#C9A84C]/15 hover:border-[#C9A84C]/30 transition-all duration-300">
                <Star className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#E8C96A] font-bold mb-1">{name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{lesson}</p>
                </div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="text-4xl font-black text-white mb-4">
              Who Is This Program <span className="text-gradient-green">For?</span>
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: BookOpen, title: "Grades 4–9", desc: "The Leadership Academy runs from Grade 4 through Grade 9, with age-appropriate curriculum at each level." },
                { icon: Heart, title: "All Ability Levels", desc: "We don't select 'gifted' students. Every Muslim child has the potential to lead. We develop it in all of them." },
                { icon: Crown, title: "Future Changemakers", desc: "Parents who want their child to graduate as a confident, articulate, faith-driven leader — not just a graduate." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl font-black text-white mb-4">Raise a Leader — Not Just a Student</h2>
            <p className="text-white/55 text-lg mb-8">Enroll your child in the only Islamic Leadership Academy in Queens, NY.</p>
            <a href="/admissions"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0F1C2E] font-black text-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105 group">
              Enroll in the Leadership Academy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
