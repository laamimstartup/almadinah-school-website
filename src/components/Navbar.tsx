"use client";

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Leadership", href: "#leadership" },
  { label: "KidsCodeGift", href: "#kidscode" },
  { label: "Events", href: "#events" },
  { label: "Admissions", href: "#admissions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl glass-green glow-green flex items-center justify-center group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-[#4CAF75]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C9A84C] animate-pulse-glow" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-base tracking-wide">
                Al-Madinah
              </div>
              <div className="text-[#C9A84C] text-xs font-medium tracking-widest uppercase">
                School Queens
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm text-white/80 hover:text-white font-medium transition-colors duration-200 rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-[#C9A84C] to-[#2A8A50] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#admissions"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(27,107,58,0.5)] transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg glass text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white text-sm font-semibold text-center"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
