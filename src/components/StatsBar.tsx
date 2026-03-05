"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Award, BookOpen, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Students Enrolled", color: "#2A8A50" },
  { icon: Award, value: 20, suffix: "+", label: "Years of Excellence", color: "#C9A84C" },
  { icon: BookOpen, value: 15, suffix: "+", label: "Academic Programs", color: "#0EA5A0" },
  { icon: Trophy, value: 98, suffix: "%", label: "Parent Satisfaction", color: "#E8C96A" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-6 overflow-hidden">
      {/* Ticker announcement bar */}
      <div className="bg-gradient-to-r from-[#1B6B3A] to-[#0F3D21] border-y border-[#2A8A50]/30 py-3 overflow-hidden mb-0">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, outerIdx) => (
            <div key={outerIdx} className="flex items-center gap-8 px-4">
              {[
                "🌙 Registration Open for 2025–2026",
                "⭐ NYS Approved School",
                "📚 Arabic · Quran · Islamic Studies",
                "🏆 Leadership Development Program",
                "💻 KidsCodeGift Platform Now Live",
                "🎓 Pre-K through Grade 9",
                "🕌 Nurturing Faith & Excellence Since 2004",
              ].map((item, i) => (
                <span key={i} className="text-white/90 text-sm font-medium flex items-center gap-2">
                  {item}
                  <span className="text-[#C9A84C] mx-2">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Stats cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color }, i) => (
            <div
              key={label}
              className="relative glass rounded-2xl p-6 md:p-8 text-center group hover:border-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${color}20`, border: `1px solid ${color}40` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div
                className="text-4xl md:text-5xl font-black mb-2 tabular-nums"
                style={{ color }}
              >
                <CountUp target={value} suffix={suffix} active={visible} />
              </div>
              <div className="text-white/60 text-sm font-medium">{label}</div>
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 40px ${color}10` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
