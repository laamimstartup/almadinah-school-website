"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 10 + Math.random() * 12,
  size: 2 + Math.random() * 4,
  opacity: 0.2 + Math.random() * 0.5,
}));

const badges = [
  { icon: Shield, label: "NYS Approved", color: "#2A8A50" },
  { icon: Star, label: "Pre-K – Grade 9", color: "#C9A84C" },
  { icon: Zap, label: "Leadership Academy", color: "#0EA5A0" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number; color: string }[] = [];
    const colors = ["rgba(27,107,58,", "rgba(201,168,76,", "rgba(14,165,160,"];
    for (let i = 0; i < 40; i++) {
      dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = dot.color + "0.6)";
        ctx.fill();
      });

      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-hero flex flex-col items-center justify-center overflow-hidden">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#1B6B3A] opacity-10 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#C9A84C] opacity-8 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#0EA5A0] opacity-8 blur-[80px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "3s" }} />

      {/* Arabesque pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-8 text-sm font-medium text-[#E8C96A] border border-[#C9A84C]/20">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
          Registration Open for 2025–2026 Academic Year
          <ArrowRight className="w-3.5 h-3.5" />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
          <span className="text-white">We Don&apos;t Just</span>
          <br />
          <span className="text-gradient-gold">Educate.</span>
          <br />
          <span className="text-white">We Build </span>
          <span className="text-gradient-green">Leaders.</span>
        </h1>

        {/* Arabic tagline */}
        <p
          className="text-[#C9A84C] text-2xl md:text-3xl font-light mb-6 tracking-wide"
          dir="rtl"
          lang="ar"
          style={{ fontFamily: "Georgia, serif" }}
        >
          نُربِّي قادةَ الغَد بِنورِ الإيمانِ والعِلم
        </p>

        {/* Sub headline */}
        <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          A New York State approved Islamic school where faith, academic
          excellence, and{" "}
          <span className="text-[#4CAF75] font-semibold">
            leadership development
          </span>{" "}
          converge — from Pre-K through Grade 9.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="#admissions"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2A8A50] text-white font-bold text-base overflow-hidden hover:shadow-[0_0_40px_rgba(27,107,58,0.6)] transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply for 2025–2026
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#programs"
            className="px-8 py-4 rounded-2xl glass border border-white/15 text-white font-semibold text-base hover:border-[#C9A84C]/40 hover:bg-white/10 transition-all duration-300"
          >
            Explore Programs
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium text-white/85 hover:border-white/20 transition-colors"
            >
              <Icon className="w-4 h-4" style={{ color }} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />
      </div>
    </section>
  );
}
