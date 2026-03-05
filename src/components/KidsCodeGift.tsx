"use client";

import { Code2, Gamepad2, Brain, Trophy, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "./AnimateIn";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code2,
    title: "Real Code, Real Projects",
    desc: "Students build actual games and apps — not just theory.",
    color: "#2A8A50",
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    desc: "Describe an app idea, watch AI generate it, then learn by editing.",
    color: "#0EA5A0",
  },
  {
    icon: Gamepad2,
    title: "Community Arcade",
    desc: "Students publish their creations and play each other's games.",
    color: "#C9A84C",
  },
  {
    icon: Trophy,
    title: "Earn Achievements",
    desc: "Level up, collect badges, and build a coding portfolio.",
    color: "#9B7EDE",
  },
];

const codeSnippets = [
  { lang: "JS", code: `function greet(name) {\n  return "السلام عليكم, " + name;\n}\ngreet("Leader");`, color: "#C9A84C" },
  { lang: "HTML", code: `<div class="game">\n  <canvas id="world"/>\n  <script>start()</script>\n</div>`, color: "#0EA5A0" },
  { lang: "PY", code: `score += 10\nif score > highScore:\n    new_record()`, color: "#2A8A50" },
];

export default function KidsCodeGift() {
  return (
    <section id="kidscode" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0F1C2E 0%, #0a1520 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5A0]/30 to-transparent" />

      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0EA5A0] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn direction="up" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5 text-[#14C4BE]" style={{ background: "rgba(14,165,160,0.12)", border: "1px solid rgba(14,165,160,0.25)" }}>
            <Sparkles className="w-3.5 h-3.5" />
            Exclusive Platform — Only at Al-Madinah
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Our Students{" "}
            <span className="text-gradient-green">Code</span>{" "}
            <span className="text-white">the</span>{" "}
            <span className="text-[#0EA5A0]">Future</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Al-Madinah students get exclusive access to{" "}
            <span className="text-[#14C4BE] font-semibold">KidsCodeGift</span> — our
            revolutionary platform where kids aged 7–16 build real games, apps, and
            stories guided by AI and live instructors.
          </p>
        </AnimateIn>

        {/* Main showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          {/* Left: Code editor mockup */}
          <AnimateIn direction="left" delay={0.1}>
          <div className="relative">
            {/* Browser chrome */}
            <div className="rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(14,165,160,0.2)] border border-[#0EA5A0]/20">
              {/* Title bar */}
              <div className="bg-[#1A2D45] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-[#0F1C2E] rounded-lg px-3 py-1 text-xs text-white/40 font-mono">
                  kids-code-gift.vercel.app
                </div>
                <div className="w-2 h-2 rounded-full bg-[#0EA5A0] animate-pulse" />
              </div>

              {/* Code panels */}
              <div className="bg-[#0a1118] p-5 space-y-3">
                {codeSnippets.map(({ lang, code, color }) => (
                  <div
                    key={lang}
                    className="rounded-xl p-4 font-mono text-xs leading-relaxed"
                    style={{ background: `rgba(255,255,255,0.03)`, border: `1px solid ${color}25` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${color}25`, color }}>
                        {lang}
                      </span>
                      <div className="flex gap-1">
                        {[...code].filter(c => c === "\n").map((_, i) => (
                          <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
                        ))}
                      </div>
                    </div>
                    <pre className="text-white/70 whitespace-pre-wrap overflow-hidden" style={{ color: `${color}CC` }}>
                      {code}
                    </pre>
                  </div>
                ))}

                {/* Live preview badge */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-white/30">Live Preview Active</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#2A8A50] animate-pulse" />
                    <span className="text-xs text-[#2A8A50]">Running</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating achievement badge */}
            <div className="absolute -top-4 -right-4 glass-gold rounded-2xl px-4 py-3 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#C9A84C]" />
                <div>
                  <div className="text-[#E8C96A] text-xs font-bold">Achievement Unlocked!</div>
                  <div className="text-white/50 text-xs">First Game Created 🎮</div>
                </div>
              </div>
            </div>

            {/* Floating student count */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-lg border border-[#0EA5A0]/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0EA5A0] animate-pulse" />
                <span className="text-white/80 text-xs font-medium">10,000+ Kids Coding Globally</span>
              </div>
            </div>
          </div>
          </AnimateIn>

          {/* Right: Features */}
          <AnimateStagger className="space-y-5">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={staggerChild}
                className="flex gap-4 glass rounded-2xl p-5 group hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">{title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://kids-code-gift-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-[#0F1C2E] hover:shadow-[0_0_30px_rgba(14,165,160,0.5)] transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #0EA5A0, #14C4BE)" }}
              >
                Explore KidsCodeGift
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#admissions"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white glass border border-white/10 hover:border-[#0EA5A0]/30 transition-all duration-300 group"
              >
                Enroll Your Child
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimateStagger>
        </div>

        {/* Bottom highlight banner */}
        <AnimateIn direction="up" delay={0.1}>
          <div
            className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(14,165,160,0.12), rgba(27,107,58,0.08))", border: "1px solid rgba(14,165,160,0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5A0]/5 via-transparent to-[#1B6B3A]/5 rounded-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                No Other School in Queens Offers This
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
                When our students graduate, they carry Islamic values, academic excellence, leadership skills,{" "}
                <span className="text-[#14C4BE] font-semibold">and</span> real coding portfolios. They are not just
                graduates — they are future-ready leaders.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
