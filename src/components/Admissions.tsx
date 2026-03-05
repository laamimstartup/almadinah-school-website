"use client";

import { ArrowRight, CheckCircle, Download, Phone, Mail, MapPin } from "lucide-react";
import AnimateIn from "./AnimateIn";

const steps = [
  { num: "01", title: "Download Application", desc: "Get the 2025–2026 admission packet and complete all required forms." },
  { num: "02", title: "Submit Documents", desc: "Birth certificate, immunization records, prior school transcripts, and application fee." },
  { num: "03", title: "Campus Visit", desc: "Schedule a tour and meet our faculty. Experience the Al-Madinah difference in person." },
  { num: "04", title: "Receive Acceptance", desc: "Our admissions team will contact you within 5–7 business days with a decision." },
];

const included = [
  "NYS-approved rigorous curriculum",
  "Daily Arabic & Quran instruction",
  "Leadership Development Program",
  "KidsCodeGift platform access",
  "Gradelink parent portal",
  "Safe, faith-centered environment",
  "Small class sizes (avg. 18:1)",
  "Dedicated support staff",
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-pad relative overflow-hidden bg-mesh">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A8A50]/30 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#1B6B3A] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#C9A84C] opacity-[0.06] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-green rounded-full px-4 py-1.5 text-xs font-semibold text-[#4CAF75] tracking-widest uppercase mb-5">
            Admissions Open
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Join the Next Generation
            <br />
            of{" "}
            <span className="text-gradient-gold">Muslim Leaders</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Registration is now open for the 2025–2026 academic year. Pre-K through Grade 9.
            Spaces are limited — secure your child&apos;s future today.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimateIn direction="right" className="lg:col-span-2 space-y-5">
            <h3 className="text-xl font-bold text-white mb-6">How to Apply</h3>
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl glass-green border border-[#2A8A50]/30 flex items-center justify-center text-[#4CAF75] font-black text-sm group-hover:scale-110 transition-transform">
                  {num}
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-white font-semibold mb-1">{title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://img1.wsimg.com/blobby/go/85756fee-6605-4b69-bd71-6e577eef9e96/downloads/6c2982a0-7236-4521-bf91-676edd43717b/Online%202025-2026%20Admission%20Packet.pdf?ver=1772652898684"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold text-sm hover:shadow-[0_0_30px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-105 group"
              >
                <Download className="w-4 h-4" />
                Download Admission Packet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl glass border border-[#C9A84C]/25 text-[#E8C96A] font-semibold text-sm hover:border-[#C9A84C]/45 transition-all duration-300 group"
              >
                Schedule a Campus Tour
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimateIn>

          <AnimateIn direction="left" delay={0.15} className="space-y-5">
            <div className="glass rounded-3xl p-7">
              <h3 className="text-white font-bold text-lg mb-5">What&apos;s Included</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/65 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#2A8A50] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-gold rounded-3xl p-7">
              <h3 className="text-white font-bold text-lg mb-5">Contact Admissions</h3>
              <div className="space-y-4">
                <a href="tel:+17185551234" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Phone</div>
                    <div className="text-sm font-medium">(718) 555-1234</div>
                  </div>
                </a>
                <a href="mailto:admissions@almadinahqueens.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-sm font-medium">admissions@almadinahqueens.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-9 h-9 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Location</div>
                    <div className="text-sm font-medium leading-snug">Queens, New York</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn direction="up" delay={0.1}>
          <div className="mt-10 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2A8A50]/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2A8A50]/20 border border-[#2A8A50]/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#4CAF75]" />
              </div>
              <div>
                <div className="text-white font-bold">Al-Madinah School Queens is New York State Approved</div>
                <div className="text-white/50 text-sm">Fully accredited and authorized by the NYS Department of Education</div>
              </div>
            </div>
            <a
              href="https://almadinahqueens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#2A8A50]/20 border border-[#2A8A50]/35 text-[#4CAF75] text-sm font-semibold hover:bg-[#2A8A50]/35 transition-colors whitespace-nowrap"
            >
              Visit Current Site →
            </a>
          </div>
        </AnimateIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
    </section>
  );
}
