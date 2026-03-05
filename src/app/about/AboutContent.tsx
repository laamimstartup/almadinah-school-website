"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { BookOpen, Crown, Heart, Users, CheckCircle, MapPin } from "lucide-react";

const milestones = [
  { year: "2000", title: "Founded", desc: "Al-Madinah School opens its doors in Jamaica, Queens, serving the growing Muslim community." },
  { year: "2005", title: "NYS Approval", desc: "Officially approved by the New York State Department of Education — a landmark achievement." },
  { year: "2012", title: "Grade Expansion", desc: "Expanded from elementary to include middle school grades through Grade 9." },
  { year: "2018", title: "STEM Integration", desc: "Launched dedicated STEM lab and technology curriculum across all grades." },
  { year: "2023", title: "Leadership Academy", desc: "Shifted focus to leadership development — raising future Muslim leaders and changemakers." },
  { year: "2024", title: "KidsCodeGift Launch", desc: "Launched our exclusive coding platform, making Al-Madinah the only school in Queens with integrated AI-powered coding education." },
];

const values = [
  { icon: Heart, title: "Faith-First", desc: "Every lesson, every interaction, every policy is rooted in Islamic values and the Sunnah of the Prophet ﷺ.", color: "#2A8A50" },
  { icon: BookOpen, title: "Academic Rigor", desc: "We hold our students to the highest NYS standards while enriching every subject with Islamic perspective.", color: "#C9A84C" },
  { icon: Crown, title: "Leadership Focus", desc: "We don't just teach children — we develop leaders who will serve their communities and the world.", color: "#0EA5A0" },
  { icon: Users, title: "Community", desc: "Al-Madinah is more than a school. We are a family — parents, teachers, and students united by faith.", color: "#2A8A50" },
];

const stats = [
  { num: "25+", label: "Years Serving Queens" },
  { num: "500+", label: "Families in Community" },
  { num: "NYS", label: "State Approved" },
  { num: "Pre-K–9", label: "Grades Offered" },
];

export default function AboutContent() {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-6">
              <MapPin className="w-3.5 h-3.5" /> Jamaica, Queens · Since 2000
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Rooted in{" "}
              <span className="text-gradient-gold">Faith</span>.{" "}
              <br className="hidden md:block" />
              Building{" "}
              <span className="text-gradient-green">Leaders</span>.
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">
              For over 25 years, Al-Madinah School Queens has been the premier Islamic educational institution in New York — shaping minds, strengthening faith, and developing the next generation of Muslim leaders.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-8 border-y border-white/5" style={{ background: "rgba(15,28,46,0.95)" }}>
        <AnimateStagger className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ num, label }) => (
            <motion.div key={label} variants={staggerChild} className="space-y-1">
              <div className="text-3xl font-black text-gradient-gold">{num}</div>
              <div className="text-white/50 text-sm">{label}</div>
            </motion.div>
          ))}
        </AnimateStagger>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="right">
              <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-1.5 text-xs font-semibold text-[#4CAF75] tracking-widest uppercase mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Where Islamic Values Meet{" "}
                <span className="text-gradient-green">World-Class Education</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-6">
                Al-Madinah School Queens was founded on a singular belief: that Muslim children deserve an education that doesn&apos;t force them to choose between their faith and their future. We build both — simultaneously, unapologetically, brilliantly.
              </p>
              <p className="text-white/55 leading-relaxed mb-8">
                Our curriculum fully aligns with New York State Department of Education standards while being deeply enriched with Arabic language, Quran memorization, and Islamic Studies. Every subject — from mathematics to social studies — is taught through the lens of Islamic values and prophetic wisdom.
              </p>
              <div className="glass-gold rounded-2xl p-5">
                <p className="text-[#E8C96A] text-lg font-light italic leading-relaxed" dir="rtl" lang="ar" style={{ fontFamily: "Georgia, serif" }}>
                  &ldquo;اطلبوا العلم من المهد إلى اللحد&rdquo;
                </p>
                <p className="text-white/60 text-sm mt-2">&ldquo;Seek knowledge from the cradle to the grave.&rdquo; — Prophet Muhammad ﷺ</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15}>
              <div className="grid grid-cols-1 gap-4">
                {values.map(({ icon: Icon, title, desc, color }) => (
                  <div key={title} className="flex gap-4 glass rounded-2xl p-5 group hover:scale-[1.02] transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{title}</h3>
                      <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-5">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              25 Years of <span className="text-gradient-gold">Excellence</span>
            </h2>
            <p className="text-white/55 text-lg">From humble beginnings to Queens&apos; premier Islamic leadership academy.</p>
          </AnimateIn>

          <AnimateStagger className="relative space-y-0">
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/50 via-[#2A8A50]/40 to-transparent" />
            {milestones.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                variants={staggerChild}
                className={`relative flex gap-6 md:gap-0 pb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-2xl glass-gold border border-[#C9A84C]/40 flex items-center justify-center">
                  <span className="text-[#E8C96A] font-black text-xs leading-none">{year}</span>
                </div>
                <div className={`pl-4 md:pl-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                  <div className="glass rounded-2xl p-5 hover:border-[#C9A84C]/20 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn direction="up">
            <div className="glass-green rounded-3xl p-10 md:p-14 border border-[#2A8A50]/25">
              <CheckCircle className="w-14 h-14 text-[#4CAF75] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">New York State Approved</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Al-Madinah School Queens is fully accredited and approved by the New York State Department of Education — giving your child a diploma recognized statewide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold hover:shadow-[0_0_30px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-105">
                  Apply for 2025–2026
                </a>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass border border-white/15 text-white font-semibold hover:border-white/30 transition-all duration-300">
                  Schedule a Tour
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
