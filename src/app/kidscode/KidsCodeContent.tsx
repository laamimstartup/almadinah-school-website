"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import {
  Code2, Gamepad2, Brain, Trophy, Sparkles, ExternalLink,
  ArrowRight, CheckCircle, Zap, Users, Star
} from "lucide-react";

const features = [
  {
    icon: Code2, color: "#2A8A50", title: "Real Code. Real Projects.",
    desc: "Students don't just learn theory — they build actual working games, apps, and websites they can show the world. Every project is portfolio-ready from day one.",
    items: ["Python fundamentals", "Web dev with HTML/CSS", "Game logic & mechanics", "Real deployable projects"],
  },
  {
    icon: Brain, color: "#C9A84C", title: "AI-Powered Learning",
    desc: "Our platform uses AI to adapt to each student's pace and style. Students get personalized hints, code reviews, and challenges that push them at exactly the right level.",
    items: ["Adaptive difficulty", "AI code assistant", "Personalized learning path", "Smart progress tracking"],
  },
  {
    icon: Users, color: "#0EA5A0", title: "Live Instructor Workshops",
    desc: "Monthly live workshops with professional developers and educators. Students get real mentorship, Q&A sessions, and collaborative projects with peers.",
    items: ["Monthly live sessions", "Professional mentors", "Peer collaboration", "Group hackathons"],
  },
  {
    icon: Trophy, color: "#C9A84C", title: "Achievements & Recognition",
    desc: "A gamified achievement system keeps students motivated. From first function to full app deployment — every milestone is celebrated with badges, certificates, and community showcases.",
    items: ["100+ achievement badges", "Coding certificates", "Community Arcade showcase", "Parent progress reports"],
  },
  {
    icon: Gamepad2, color: "#2A8A50", title: "Game Development Track",
    desc: "Our most popular track — students design and build complete games from scratch. Learn game logic, graphics, user input, and how to publish your creation for others to play.",
    items: ["Scratch to Python", "Game design principles", "Physics & collision", "Publish & share"],
  },
  {
    icon: Zap, color: "#0EA5A0", title: "Islamic Values in Tech",
    desc: "Unique to our platform — every project and lesson is framed through Islamic values. Students learn that technology is a trust (amanah) and that coding is a form of sadaqah jariyah.",
    items: ["Islamic tech ethics", "Amanah in digital creation", "Community benefit projects", "Halal tech principles"],
  },
];

const tracks = [
  { name: "Beginner Coder", ages: "Ages 7–9", grade: "Grades 1–3", stack: "Scratch, Block Coding", color: "#2A8A50", projects: "Simple animations, stories, basic games" },
  { name: "Junior Developer", ages: "Ages 10–12", grade: "Grades 4–6", stack: "Python basics, HTML/CSS", color: "#C9A84C", projects: "Web pages, interactive quizzes, mini-apps" },
  { name: "Intermediate Builder", ages: "Ages 12–14", grade: "Grades 7–9", stack: "Python, JavaScript, APIs", color: "#0EA5A0", projects: "Full games, portfolio websites, AI projects" },
];

const codeSnippets = [
  { lang: "Python", color: "#2A8A50", code: `# Grade 5 student project\ndef bismillah_greeting(name):\n    print(f"بسم الله — Hello {name}!")\n    return f"May Allah bless you, {name}"\n\nbismillah_greeting("Ahmed")` },
  { lang: "JavaScript", color: "#0EA5A0", code: `// Grade 7 — Build a Quran Quiz App\nconst questions = [\n  { q: "Who was the first Prophet?", a: "Adam ﷺ" },\n  { q: "How many Surahs in Quran?", a: "114" }\n];\nconsole.log("Quiz Ready! 🚀");` },
];

export default function KidsCodeContent() {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #0F1C2E 0%, #0a1520 100%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0EA5A0] opacity-[0.05] blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5A0]/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6 text-[#14C4BE]"
              style={{ background: "rgba(14,165,160,0.12)", border: "1px solid rgba(14,165,160,0.25)" }}>
              <Sparkles className="w-3.5 h-3.5" /> Exclusive to Al-Madinah Students
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Our Students <span className="text-gradient-green">Code</span> the{" "}
              <span className="text-[#0EA5A0]">Future</span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Al-Madinah School Queens is the <strong className="text-white">only Islamic school in Queens</strong> with an exclusive, AI-powered coding platform integrated into the curriculum. Our students graduate with not just a diploma — but a coding portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://kids-code-gift-seven.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[#0F1C2E] hover:shadow-[0_0_30px_rgba(14,165,160,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #0EA5A0, #14C4BE)" }}>
                <Sparkles className="w-5 h-5" />
                Explore KidsCodeGift Platform
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-[#0EA5A0]/25 text-[#14C4BE] font-semibold hover:border-[#0EA5A0]/50 transition-all duration-300">
                Enroll to Get Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-12" style={{ background: "#080f1a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="rounded-2xl overflow-hidden border border-[#0EA5A0]/20 shadow-[0_0_60px_rgba(14,165,160,0.15)]">
              <div className="bg-[#1A2D45] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-[#0F1C2E] rounded-lg px-3 py-1 text-xs text-white/40 font-mono">
                  kids-code-gift.vercel.app — Student Projects
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5A0] animate-pulse" />
                  <span className="text-xs text-[#0EA5A0]">Live</span>
                </div>
              </div>
              <div className="bg-[#0a1118] p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {codeSnippets.map(({ lang, color, code }) => (
                  <div key={lang} className="rounded-xl p-4 font-mono text-xs leading-relaxed"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${color}25` }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${color}25`, color }}>{lang}</span>
                      <span className="text-white/25 text-xs">Student Project</span>
                    </div>
                    <pre className="whitespace-pre-wrap overflow-hidden leading-relaxed" style={{ color: `${color}DD` }}>{code}</pre>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why KidsCodeGift Is <span className="text-[#0EA5A0]">Different</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              Not a generic coding app — a full educational ecosystem built for Muslim students.
            </p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, color, title, desc, items }) => (
              <motion.div key={title} variants={staggerChild}
                className="group glass rounded-3xl p-7 hover:scale-[1.02] transition-all duration-400 overflow-hidden relative">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12, transparent 70%)` }} />
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-white font-black text-lg mb-3 relative z-10">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 relative z-10">{desc}</p>
                <div className="space-y-1.5 relative z-10">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/50 text-xs">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color }} />{item}
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
              Learning <span className="text-[#0EA5A0]">Tracks</span>
            </h2>
            <p className="text-white/55 text-lg">Age-appropriate coding journeys from Grade 1 through Grade 9.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {tracks.map(({ name, ages, grade, stack, color, projects }) => (
              <motion.div key={name} variants={staggerChild}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 glass rounded-2xl p-6 hover:scale-[1.01] transition-all duration-300 items-center">
                <div>
                  <div className="font-black text-white text-lg">{name}</div>
                  <div className="text-xs mt-0.5" style={{ color }}>{ages} · {grade}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs text-white/40 mb-1">Projects</div>
                  <div className="text-white/70 text-sm">{projects}</div>
                </div>
                <div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: `${color}20`, color }}>{stack}</span>
                </div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(14,165,160,0.15), rgba(27,107,58,0.1))", border: "1px solid rgba(14,165,160,0.25)" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5A0]/5 via-transparent to-[#1B6B3A]/5 rounded-3xl" />
              <div className="relative z-10">
                <Star className="w-12 h-12 text-[#0EA5A0] mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  No Other Islamic School in Queens Offers This
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed">
                  When Al-Madinah students graduate, they don&apos;t just have a diploma — they have a <strong className="text-white">coding portfolio</strong>. They are future-ready leaders in both deen and dunya.
                </p>
                <a href="/admissions"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-black text-lg text-[#0F1C2E] hover:shadow-[0_0_40px_rgba(14,165,160,0.5)] transition-all duration-300 hover:scale-105 group"
                  style={{ background: "linear-gradient(135deg, #0EA5A0, #14C4BE)" }}>
                  Enroll Your Child Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
