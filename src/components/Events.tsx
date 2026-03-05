"use client";

import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import AnimateIn, { AnimateStagger, staggerChild } from "./AnimateIn";
import { motion } from "framer-motion";

const events = [
  {
    date: { month: "MAR", day: "23" },
    title: "School Reopens After Ramadan",
    time: "All Day",
    location: "Al-Madinah School Queens",
    tag: "Academic",
    color: "#2A8A50",
  },
  {
    date: { month: "MAR", day: "25" },
    title: "Grand Eid Luncheon",
    time: "12:00 PM – 3:00 PM",
    location: "School Auditorium",
    tag: "Community",
    color: "#C9A84C",
  },
  {
    date: { month: "APR", day: "05" },
    title: "Open House & Campus Tour",
    time: "10:00 AM – 1:00 PM",
    location: "Al-Madinah School Queens",
    tag: "Admissions",
    color: "#0EA5A0",
  },
  {
    date: { month: "APR", day: "15" },
    title: "Leadership Showcase — Student Projects",
    time: "5:00 PM – 8:00 PM",
    location: "Main Hall",
    tag: "Leadership",
    color: "#9B7EDE",
  },
  {
    date: { month: "APR", day: "20" },
    title: "KidsCodeGift Coding Hackathon",
    time: "9:00 AM – 4:00 PM",
    location: "Computer Lab",
    tag: "Technology",
    color: "#14C4BE",
  },
  {
    date: { month: "MAY", day: "10" },
    title: "Annual Quran Recitation Competition",
    time: "2:00 PM – 6:00 PM",
    location: "School Auditorium",
    tag: "Islamic",
    color: "#E8C96A",
  },
];

const tagColors: Record<string, string> = {
  Academic: "#2A8A50",
  Community: "#C9A84C",
  Admissions: "#0EA5A0",
  Leadership: "#9B7EDE",
  Technology: "#14C4BE",
  Islamic: "#E8C96A",
};

export default function Events() {
  return (
    <section id="events" className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1C2E 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5A0]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-5 text-[#14C4BE]" style={{ background: "rgba(14,165,160,0.12)", border: "1px solid rgba(14,165,160,0.25)" }}>
              <Calendar className="w-3.5 h-3.5" />
              School Calendar
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Upcoming{" "}
              <span className="text-[#0EA5A0]">Events</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5A0] hover:text-[#14C4BE] transition-colors group"
          >
            View Full Calendar
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimateIn>

        {/* Events list */}
        <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map(({ date, title, time, location, tag, color }) => (
            <motion.div
              key={title}
              variants={staggerChild}
              className="group flex gap-5 glass rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover bg */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `radial-gradient(ellipse at left, ${color}08, transparent 70%)` }}
              />

              {/* Date block */}
              <div
                className="flex-shrink-0 w-14 h-16 rounded-xl flex flex-col items-center justify-center text-center relative z-10"
                style={{ background: `${color}18`, border: `1px solid ${color}35` }}
              >
                <div className="text-xs font-bold tracking-widest uppercase" style={{ color }}>
                  {date.month}
                </div>
                <div className="text-2xl font-black text-white leading-none">{date.day}</div>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-white font-semibold text-base leading-snug group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <span
                    className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                  >
                    {tag}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <div className="flex items-center gap-1.5 text-white/45 text-xs">
                    <Clock className="w-3 h-3" />
                    {time}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/45 text-xs">
                    <MapPin className="w-3 h-3" />
                    {location}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 relative z-10">
                <ChevronRight className="w-4 h-4 text-white/40" />
              </div>

              {/* Left accent */}
              <div
                className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top"
                style={{ background: color }}
              />
            </motion.div>
          ))}
        </AnimateStagger>

        {/* Gradelink integration note */}
        <AnimateIn direction="up" delay={0.15}>
        <div className="mt-8 glass rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#C9A84C]" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Gradelink Student Portal</div>
              <div className="text-white/45 text-xs">Track grades, progress reports, and attendance</div>
            </div>
          </div>
          <a
            href="https://app.gradelink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/25 text-[#E8C96A] text-sm font-semibold hover:bg-[#C9A84C]/25 transition-colors whitespace-nowrap"
          >
            Access Gradelink →
          </a>
        </div>
        </AnimateIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </section>
  );
}
