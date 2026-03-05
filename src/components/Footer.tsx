"use client";

import { Heart, ExternalLink, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  School: [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#about" },
    { label: "Leadership Program", href: "#leadership" },
    { label: "Faculty & Staff", href: "#" },
    { label: "News & Events", href: "#events" },
  ],
  Academics: [
    { label: "Core Curriculum", href: "#programs" },
    { label: "Islamic Studies", href: "#programs" },
    { label: "Arabic Language", href: "#programs" },
    { label: "STEM & Technology", href: "#programs" },
    { label: "Student Life", href: "#" },
  ],
  Admissions: [
    { label: "How to Apply", href: "#admissions" },
    { label: "Download Packet", href: "#admissions" },
    { label: "Tuition & Fees", href: "#admissions" },
    { label: "Financial Aid", href: "#" },
    { label: "Campus Tour", href: "#admissions" },
  ],
  Resources: [
    { label: "Gradelink Portal", href: "https://app.gradelink.com" },
    { label: "KidsCodeGift", href: "https://kids-code-gift-seven.vercel.app" },
    { label: "School Calendar", href: "#events" },
    { label: "Parent Handbook", href: "#" },
    { label: "Contact Us", href: "#admissions" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0F1C2E 0%, #060f1a 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

      {/* Pre-footer CTA strip */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1B6B3A 0%, #0F3D21 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Ready to Shape Your Child&apos;s Future?
              </h3>
              <p className="text-white/70 text-base">
                Registration is open for 2025–2026. Join our community of future leaders.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="#admissions"
                className="px-7 py-3.5 rounded-2xl bg-[#C9A84C] text-[#0F1C2E] font-bold text-sm hover:bg-[#E8C96A] transition-colors hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="px-7 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-colors"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
                <Image src="/Almadinah-logo.png" alt="Al-Madinah School Queens" fill className="object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-base">Al-Madinah School</div>
                <div className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">Queens Campus</div>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A New York State approved Islamic school dedicated to academic excellence,
              Islamic values, and raising the next generation of leaders. Pre-K through Grade 9.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:3475070167" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors text-sm group">
                <Phone className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                (347) 507-0167
              </a>
              <a href="mailto:info@almadinahqueens.com" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                info@almadinahqueens.com
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <span>2424 Steinway Street<br />Astoria, NY 11103</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#C9A84C]/30 transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white/45 hover:text-white/85 text-sm transition-colors flex items-center gap-1 group"
                    >
                      {label}
                      {href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* KidsCodeGift partner strip */}
        <div className="glass rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,160,0.15)", border: "1px solid rgba(14,165,160,0.3)" }}>
              <span className="text-lg">💻</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                KidsCodeGift — Our Official Tech Platform
              </div>
              <div className="text-white/40 text-xs">Students build real games, apps & earn coding achievements</div>
            </div>
          </div>
          <a
            href="https://kids-code-gift-seven.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#14C4BE] hover:text-white transition-colors whitespace-nowrap"
            style={{ background: "rgba(14,165,160,0.12)", border: "1px solid rgba(14,165,160,0.25)" }}
          >
            Explore Platform
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Al-Madinah School Queens. All rights reserved. NYS Approved Institution.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-[#C9A84C]" /> for the Muslim community of Queens
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
