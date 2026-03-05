"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn, { AnimateStagger, staggerChild } from "@/components/AnimateIn";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  MessageSquare, CalendarDays, Download
} from "lucide-react";
import { SCHOOL_PHONE, SCHOOL_EMAIL, SCHOOL_ADDRESS, SCHOOL_CITY } from "@/lib/seo";

const reasons = [
  { value: "admissions", label: "Admissions Inquiry" },
  { value: "tour", label: "Schedule a Campus Tour" },
  { value: "programs", label: "Program Information" },
  { value: "kidscode", label: "KidsCodeGift Platform" },
  { value: "leadership", label: "Leadership Academy" },
  { value: "general", label: "General Question" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", reason: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-[url('/arabesque.svg')] opacity-[0.03] bg-repeat bg-[length:120px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 glass-gold rounded-full px-4 py-1.5 text-xs font-semibold text-[#E8C96A] tracking-widest uppercase mb-6">
              <MessageSquare className="w-3.5 h-3.5" /> We&apos;d Love to Hear from You
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-white/65 text-xl max-w-xl mx-auto leading-relaxed">
              Have a question about admissions, programs, or the school? Our team speaks English and Arabic — we&apos;re here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section-pad bg-mesh">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left: Info cards */}
            <div className="lg:col-span-2 space-y-5">
              <AnimateIn direction="right">
                <h2 className="text-2xl font-black text-white mb-6">Contact Information</h2>

                <a href="tel:3475070167"
                  className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-[#C9A84C]/25 transition-all duration-300 group block mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Phone</div>
                    <div className="text-white font-semibold">{SCHOOL_PHONE}</div>
                    <div className="text-white/40 text-xs">Mon–Fri · 7:30am–3:30pm</div>
                  </div>
                </a>

                <a href={`mailto:${SCHOOL_EMAIL}`}
                  className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-[#C9A84C]/25 transition-all duration-300 group block mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-white font-semibold text-sm">{SCHOOL_EMAIL}</div>
                    <div className="text-white/40 text-xs">Response within 24 hours</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 glass rounded-2xl p-5 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2A8A50]/15 border border-[#2A8A50]/25 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#4CAF75]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Location</div>
                    <div className="text-white font-semibold text-sm">{SCHOOL_ADDRESS}</div>
                    <div className="text-white/40 text-xs">{SCHOOL_CITY}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 glass rounded-2xl p-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0EA5A0]/15 border border-[#0EA5A0]/25 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#0EA5A0]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Office Hours</div>
                    <div className="text-white font-semibold text-sm">Mon – Fri: 7:30 AM – 3:30 PM</div>
                    <div className="text-white/40 text-xs">Sat – Sun: Closed</div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="space-y-3">
                  <a href="https://img1.wsimg.com/blobby/go/85756fee-6605-4b69-bd71-6e577eef9e96/downloads/6c2982a0-7236-4521-bf91-676edd43717b/Online%202025-2026%20Admission%20Packet.pdf?ver=1772652898684"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(27,107,58,0.4)] transition-all duration-300 group">
                    <Download className="w-4 h-4" />
                    Download Admission Packet
                  </a>
                  <a href="/admissions"
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl glass border border-[#C9A84C]/25 text-[#E8C96A] font-semibold text-sm hover:border-[#C9A84C]/45 transition-all duration-300 group">
                    <CalendarDays className="w-4 h-4" />
                    Schedule a Campus Tour
                  </a>
                </div>
              </AnimateIn>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimateIn direction="left" delay={0.1}>
                <div className="glass rounded-3xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-[#2A8A50]/20 border border-[#2A8A50]/40 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-[#4CAF75]" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                      <p className="text-white/60 leading-relaxed max-w-sm mx-auto">
                        JazakAllah khair for reaching out. Our admissions team will get back to you within 24 hours, insha&apos;Allah.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", reason: "", message: "" }); }}
                        className="mt-6 text-[#4CAF75] text-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                              Full Name *
                            </label>
                            <input
                              required
                              type="text"
                              placeholder="Your name"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              placeholder="(718) 000-0000"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                            Reason for Inquiry
                          </label>
                          <select
                            value={form.reason}
                            onChange={(e) => setForm({ ...form, reason: e.target.value })}
                            className="w-full bg-[#0F1C2E] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
                          >
                            <option value="">Select a topic...</option>
                            {reasons.map(({ value, label }) => (
                              <option key={value} value={value}>{label}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                            Your Message *
                          </label>
                          <textarea
                            required
                            rows={5}
                            placeholder="Tell us about your child's grade level, any specific questions about the school, or what you'd like to know..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold text-sm hover:shadow-[0_0_25px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {loading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="pb-0">
        <AnimateIn direction="up">
          <div className="relative h-72 md:h-96 overflow-hidden border-t border-white/5">
            <iframe
              title="Al-Madinah School Queens Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-73.9327!3d40.7728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f3e8f0b1b1b%3A0x0!2s2424+Steinway+St%2C+Astoria%2C+NY+11103!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0F1C2E] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-gold rounded-2xl px-5 py-3 text-center border border-[#C9A84C]/25">
              <div className="text-white font-bold text-sm">{SCHOOL_ADDRESS}</div>
              <div className="text-[#E8C96A] text-xs">{SCHOOL_CITY}</div>
            </div>
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </>
  );
}
