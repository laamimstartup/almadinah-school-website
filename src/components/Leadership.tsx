"use client";

import { Crown, Mic2, Users, Target, Globe, Lightbulb, ArrowRight } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "./AnimateIn";
import { motion } from "framer-motion";

const traits = [
  { icon: Mic2, label: "Public Speaking", desc: "Weekly debate and oratory practice builds unshakeable confidence." },
  { icon: Users, label: "Community Service", desc: "Hands-on community projects that connect faith to action." },
  { icon: Target, label: "Goal Setting", desc: "Students learn to set, plan, and achieve ambitious personal goals." },
  { icon: Globe, label: "Global Awareness", desc: "Understanding world affairs through an Islamic ethical lens." },
  { icon: Lightbulb, label: "Critical Thinking", desc: "Problem-solving frameworks that prepare leaders for any challenge." },
  { icon: Crown, label: "Ethical Leadership", desc: "Leadership principles grounded in Prophetic character and integrity." },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad relative overflow-hidden bg-mesh">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#C9A84C] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#1B6B3A] opacity-8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <AnimateIn direction="right">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-6">
              <Crown className="w-3.5 h-3.5" />
              Leadership Program
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Al-Madinah is{" "}
              <span className="text-gradient-gold">Shifting</span>
              <br />
              to the Next Level
            </h2>

            <p className="text-white/65 text-lg leading-relaxed mb-6">
              We are no longer just a school — we are a{" "}
              <span className="text-[#E8C96A] font-semibold">leadership academy</span>. Our
              dedicated program transforms students from passive learners into
              active, visionary leaders who think boldly, serve humbly, and lead
              with the character of the Prophet ﷺ.
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-8">
              Starting in Grade 5, students enter our Leadership Track — a
              multi-year journey of development that includes mentorship circles,
              student government, community projects, and real-world challenges
              designed to stretch their potential.
            </p>

            {/* Quote */}
            <div className="glass-gold rounded-2xl p-6 mb-8">
              <p
                className="text-[#E8C96A] text-xl font-light mb-2 leading-relaxed"
                dir="rtl"
                lang="ar"
                style={{ fontFamily: "Georgia, serif" }}
              >
                &ldquo;كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ&rdquo;
              </p>
              <p className="text-white/60 text-sm italic">
                &ldquo;Each of you is a shepherd, and each of you is responsible for his flock.&rdquo; — Prophet Muhammad ﷺ
              </p>
            </div>

            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0F1C2E] font-bold text-sm hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all duration-300 hover:scale-105 group"
            >
              Join the Leadership Academy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimateIn>

          {/* Right: Traits grid */}
          <AnimateStagger className="grid grid-cols-2 gap-4">
            {traits.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={staggerChild}
                className="glass rounded-2xl p-5 group hover:border-[#C9A84C]/25 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform relative z-10">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1.5 relative z-10">{label}</h4>
                <p className="text-white/50 text-xs leading-relaxed relative z-10">{desc}</p>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>

        {/* Achievement banner */}
        <AnimateStagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "100%", text: "of Leadership graduates accepted to top high schools" },
            { num: "3×", text: "more likely to hold student government positions" },
            { num: "5+", text: "community impact projects completed per student annually" },
          ].map(({ num, text }) => (
            <motion.div key={num} variants={staggerChild} className="glass-green rounded-2xl p-6 text-center border border-[#2A8A50]/20">
              <div className="text-4xl font-black text-[#4CAF75] mb-2">{num}</div>
              <p className="text-white/60 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5A0]/20 to-transparent" />
    </section>
  );
}
