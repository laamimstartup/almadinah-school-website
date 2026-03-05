"use client";

import { Heart, BookOpen, Crown, Cpu } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "./AnimateIn";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Heart,
    arabic: "الإيمان",
    title: "Faith",
    desc: "Rooted in Islamic values, our students develop strong character, spiritual awareness, and moral integrity that guides every decision they make.",
    color: "#2A8A50",
    glow: "rgba(27,107,58,0.3)",
    gradient: "from-[#1B6B3A]/20 to-transparent",
  },
  {
    icon: BookOpen,
    arabic: "العِلم",
    title: "Knowledge",
    desc: "A rigorous NYS-aligned curriculum enriched with Arabic, Quran, and Islamic Studies — giving students both worldly and spiritual mastery.",
    color: "#C9A84C",
    glow: "rgba(201,168,76,0.3)",
    gradient: "from-[#C9A84C]/10 to-transparent",
  },
  {
    icon: Crown,
    arabic: "القِيادة",
    title: "Leadership",
    desc: "We cultivate future leaders through dedicated programs, real-world projects, public speaking, and mentorship — shaping those who lead with wisdom.",
    color: "#E8C96A",
    glow: "rgba(232,201,106,0.3)",
    gradient: "from-[#E8C96A]/10 to-transparent",
  },
  {
    icon: Cpu,
    arabic: "الابتكار",
    title: "Innovation",
    desc: "Through KidsCodeGift and our tech-forward curriculum, students learn to build, create, and innovate — becoming architects of tomorrow's world.",
    color: "#0EA5A0",
    glow: "rgba(14,165,160,0.3)",
    gradient: "from-[#0EA5A0]/10 to-transparent",
  },
];

export default function MissionPillars() {
  return (
    <section id="about" className="section-pad bg-mesh relative overflow-hidden">
      {/* Section background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn direction="up" className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-5">
            Our Foundation
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            The Four Pillars of{" "}
            <span className="text-gradient-gold">Al-Madinah</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every student who walks through our doors is shaped by four
            foundational principles that define who we are and what we build.
          </p>
        </AnimateIn>

        {/* Pillars grid */}
        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, arabic, title, desc, color, glow, gradient }, i) => (
            <motion.div
              key={title}
              variants={staggerChild}
              className={`relative glass rounded-3xl p-8 group hover:scale-105 transition-all duration-500 overflow-hidden`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-60 rounded-3xl`} />

              {/* Icon */}
              <div
                className="relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${color}18`,
                  border: `1px solid ${color}40`,
                  boxShadow: `0 0 0 0 ${glow}`,
                }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>

              {/* Arabic text */}
              <p
                className="text-2xl font-light mb-1 tracking-wide"
                dir="rtl"
                lang="ar"
                style={{ color, fontFamily: "Georgia, serif" }}
              >
                {arabic}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </AnimateStagger>

        {/* Mission statement */}
        <AnimateIn direction="up" delay={0.2}>
        <div className="mt-16 glass-gold rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-[#C9A84C]/10 to-[#C9A84C]/5 rounded-3xl" />
          <div className="relative z-10">
            <p
              className="text-[#E8C96A] text-2xl md:text-3xl font-light mb-4 tracking-wide leading-relaxed"
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ&rdquo;
            </p>
            <p className="text-white/70 text-base md:text-lg italic">
              &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo; — Prophet Muhammad ﷺ
            </p>
          </div>
        </div>
        </AnimateIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B6B3A]/30 to-transparent" />
    </section>
  );
}
