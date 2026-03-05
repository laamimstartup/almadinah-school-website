"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import {
  Download, CheckCircle, Phone, Mail, MapPin, ArrowRight,
  Clock, CalendarDays, FileText, UserCheck, ChevronDown
} from "lucide-react";
import { SCHOOL_PHONE, SCHOOL_EMAIL } from "@/lib/seo";

const steps = [
  { num: "01", icon: Download, title: "Download the Application Packet", desc: "Get the official 2025–2026 Al-Madinah School Queens admission packet. Complete all required sections legibly and thoroughly.", detail: "Available in English and Arabic." },
  { num: "02", icon: FileText, title: "Gather Required Documents", desc: "Compile all required documents before submitting. Incomplete applications will delay processing.", detail: "Birth certificate · Immunization records · Previous transcripts · 2 passport photos · $50 registration fee" },
  { num: "03", icon: CalendarDays, title: "Submit & Schedule a Tour", desc: "Submit your completed application in person or by email. We encourage every family to schedule a campus tour to experience Al-Madinah firsthand.", detail: "Tours available Mon–Fri, 9am–2pm by appointment." },
  { num: "04", icon: UserCheck, title: "Receive Your Acceptance", desc: "Our admissions team carefully reviews every application. You will be contacted within 5–7 business days with a decision and next steps.", detail: "Placement assessments may be required for Grades 3+." },
];

const requirements = [
  "Completed application form (English or Arabic)",
  "Original birth certificate + photocopy",
  "Updated immunization records (NY State requirements)",
  "Most recent school report card / transcripts",
  "2 recent passport-size photographs",
  "$50 non-refundable registration fee",
  "Copy of parent/guardian ID",
  "Previous IEP or 504 plan (if applicable)",
];

const included = [
  "NYS-approved full core curriculum",
  "Daily Quran recitation & Islamic Studies",
  "Arabic language instruction (Pre-K–9)",
  "KidsCodeGift coding platform access",
  "Leadership Development Program (Gr. 4–9)",
  "Gradelink parent portal & progress reports",
  "Small class sizes — avg. 18:1 ratio",
  "Safe, faith-centered school environment",
  "Experienced certified NYC-qualified teachers",
  "After-school program (select grades)",
];

const faqs = [
  { q: "Is Al-Madinah School Queens approved by New York State?", a: "Yes. Al-Madinah School Queens is fully approved by the New York State Department of Education. Students receive NYS-recognized diplomas and transcripts accepted by all NY high schools." },
  { q: "What grades does Al-Madinah School offer?", a: "We offer Pre-Kindergarten (age 3) through Grade 9, providing a complete Islamic education journey from early childhood through middle school." },
  { q: "Do students need to be Muslim to enroll?", a: "Al-Madinah School Queens is an Islamic school with an Islamic curriculum and environment. While we welcome families from all backgrounds who respect our values, our school culture, curriculum, and daily practices are Islamic." },
  { q: "What is the tuition cost?", a: "Tuition varies by grade level. We offer flexible payment plans and sibling discounts. Please contact our admissions office for current tuition rates and financial assistance options." },
  { q: "Is there a waiting list?", a: "Certain grade levels fill up quickly, especially Pre-K and Kindergarten. We recommend applying as early as possible. Contact us to check current availability." },
  { q: "What languages are taught at Al-Madinah?", a: "Students receive instruction in English (core curriculum), Arabic (language program), and the language of the Quran. All Islamic Studies and Quran instruction uses Classical Arabic." },
  { q: "What makes Al-Madinah different from other Islamic schools in Queens?", a: "Three things: (1) Our Leadership Development Academy — the only one of its kind at an Islamic school in Queens. (2) KidsCodeGift — our exclusive AI-powered coding platform. (3) Over 25 years of NYS-approved excellence in the community." },
  { q: "How do I schedule a campus tour?", a: `Call us at ${SCHOOL_PHONE} or email ${SCHOOL_EMAIL} to schedule a tour Monday through Friday between 9am and 2pm. We'd love to show you our school in person.` },
];

export default function AdmissionsContent() {
  return (
    <>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-1.5 text-xs font-semibold text-[#4CAF75] tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4CAF75] animate-pulse inline-block" />
              Registration Open — 2025–2026
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Secure Your Child&apos;s{" "}
              <span className="text-gradient-gold">Future</span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Join Queens&apos; most innovative Islamic school. NYS approved · Pre-K through Grade 9 · Leadership Academy · KidsCodeGift Coding Platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://img1.wsimg.com/blobby/go/85756fee-6605-4b69-bd71-6e577eef9e96/downloads/6c2982a0-7236-4521-bf91-676edd43717b/Online%202025-2026%20Admission%20Packet.pdf?ver=1772652898684"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold hover:shadow-[0_0_30px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-105 group"
              >
                <Download className="w-5 h-5" />
                Download 2025–2026 Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${SCHOOL_PHONE.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-[#C9A84C]/30 text-[#E8C96A] font-semibold hover:border-[#C9A84C]/60 transition-all duration-300">
                <Phone className="w-4 h-4" />
                Call Admissions
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How to <span className="text-gradient-green">Apply</span>
            </h2>
            <p className="text-white/55 text-lg">Simple 4-step process — we guide you every step of the way.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map(({ num, icon: Icon, title, desc, detail }) => (
              <motion.div key={num} variants={staggerChild}
                className="group relative glass rounded-3xl p-7 hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(27,107,58,0.12), transparent 70%)" }} />
                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl glass-green border border-[#2A8A50]/35 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#4CAF75]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-black text-[#4CAF75]/60 tracking-widest mb-1">STEP {num}</div>
                    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-3">{desc}</p>
                    <div className="text-xs text-[#4CAF75]/80 glass-green rounded-xl px-3 py-2 inline-block border border-[#2A8A50]/20">{detail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateIn direction="right">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#C9A84C]" /> Required Documents
                </h2>
                <ul className="space-y-3">
                  {requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/65 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.1}>
              <div className="glass-green rounded-3xl p-8 border border-[#2A8A50]/20">
                <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4CAF75]" /> What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/65 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#4CAF75] flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-white/55 text-lg">Everything you need to know about enrolling at Al-Madinah.</p>
          </AnimateIn>
          <AnimateStagger className="space-y-4">
            {faqs.map(({ q, a }) => (
              <motion.details key={q} variants={staggerChild} className="group glass rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-white font-semibold pr-4 text-sm md:text-base">{q}</span>
                  <ChevronDown className="w-5 h-5 text-[#C9A84C] flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-white/5 mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed">{a}</p>
                </div>
              </motion.details>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="section-pad" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="glass-gold rounded-3xl p-10 text-center border border-[#C9A84C]/20">
              <h2 className="text-3xl font-black text-white mb-3">Have Questions? We&apos;re Here.</h2>
              <p className="text-white/55 mb-8">Our admissions team is available Monday–Friday, 8am–4pm. We speak English and Arabic.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <a href={`tel:${SCHOOL_PHONE.replace(/[^0-9]/g, "")}`}
                  className="flex flex-col items-center gap-3 glass rounded-2xl p-5 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/40 mb-0.5">Phone</div>
                    <div className="text-white font-semibold text-sm">{SCHOOL_PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${SCHOOL_EMAIL}`}
                  className="flex flex-col items-center gap-3 glass rounded-2xl p-5 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-white font-semibold text-sm">{SCHOOL_EMAIL}</div>
                  </div>
                </a>
                <div className="flex flex-col items-center gap-3 glass rounded-2xl p-5">
                  <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/40 mb-0.5">Office Hours</div>
                    <div className="text-white font-semibold text-sm">Mon–Fri · 8am–4pm</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
