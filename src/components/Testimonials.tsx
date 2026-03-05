"use client";

import { Quote, Star } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "./AnimateIn";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fatima Al-Hassan",
    role: "Parent of Grade 7 Student",
    text: "Al-Madinah transformed my son completely. He went from a shy child to standing on stage delivering a speech about climate change from an Islamic perspective. The leadership program is unlike anything I've seen.",
    stars: 5,
    color: "#C9A84C",
    initials: "FA",
  },
  {
    name: "Dr. Omar Khalil",
    role: "Parent & Community Leader",
    text: "My daughter memorized half the Quran here while maintaining a 4.0 GPA. But what truly moved me was watching her lead a community fundraiser at age 12. This school builds complete human beings.",
    stars: 5,
    color: "#2A8A50",
    initials: "OK",
  },
  {
    name: "Sister Aisha Rahman",
    role: "Parent of Three Students",
    text: "All three of my children attend Al-Madinah and the growth I see in each of them — academically, spiritually, and in character — is beyond what I hoped for. The teachers here genuinely care about the akhirah of our children.",
    stars: 5,
    color: "#0EA5A0",
    initials: "AR",
  },
  {
    name: "Yusuf & Nadia Ibrahim",
    role: "Parents of Grade 5 Student",
    text: "When our son came home talking about his KidsCodeGift project and showed us the game he built, we couldn't believe it. A 10-year-old, building apps. Al-Madinah is preparing kids for a world we can barely imagine.",
    stars: 5,
    color: "#9B7EDE",
    initials: "YN",
  },
  {
    name: "Brother Malik Sulayman",
    role: "Parent & Alumni",
    text: "I graduated from Al-Madinah 15 years ago, and now my children do too. The school has elevated itself to another level. The leadership focus, the technology platform — this is not the school I attended, this is better.",
    stars: 5,
    color: "#E8856A",
    initials: "MS",
  },
  {
    name: "Prof. Zainab Osei",
    role: "Academic Advisor & Parent",
    text: "As an educator myself, I'm deeply impressed by the curriculum integration. Arabic, Quran, NYS standards, and now coding — all woven seamlessly. This is what 21st century Islamic education looks like.",
    stars: 5,
    color: "#E8C96A",
    initials: "ZO",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden bg-mesh">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-5">
            Community Voices
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Families Who{" "}
            <span className="text-gradient-gold">Trust Us</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Hear from the parents and community members who have seen the
            transformation first-hand.
          </p>
        </AnimateIn>

        {/* Testimonials grid */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, stars, color, initials }) => (
            <motion.div
              key={name}
              variants={staggerChild}
              className="group relative glass rounded-3xl p-7 hover:scale-[1.02] transition-all duration-400 overflow-hidden flex flex-col"
            >
              {/* Hover bg */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top left, ${color}10, transparent 70%)` }}
              />

              {/* Quote icon */}
              <div className="relative z-10 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Quote className="w-5 h-5" style={{ color }} />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#C9A84C]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6 relative z-10">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `${color}25`, color, border: `1px solid ${color}40` }}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-white/45 text-xs">{role}</div>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </AnimateStagger>

        {/* Overall rating */}
        <AnimateIn direction="up" delay={0.1}>
        <div className="mt-12 glass-gold rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div>
            <div className="text-6xl font-black text-[#E8C96A] mb-1">4.9</div>
            <div className="flex justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-[#C9A84C]" />
              ))}
            </div>
            <div className="text-white/50 text-sm">Average Rating</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#C9A84C]/20" />
          <div>
            <div className="text-6xl font-black text-white mb-1">98%</div>
            <div className="text-white/50 text-sm">Parent Satisfaction Rate</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#C9A84C]/20" />
          <div>
            <div className="text-6xl font-black text-[#4CAF75] mb-1">500+</div>
            <div className="text-white/50 text-sm">Families in Our Community</div>
          </div>
        </div>
        </AnimateIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5A0]/20 to-transparent" />
    </section>
  );
}
