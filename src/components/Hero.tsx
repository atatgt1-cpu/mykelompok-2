import React, { useState, useEffect } from "react";
import { ArrowUpRight, Users, Sparkles, Orbit, Compass, Award, BookCheck } from "lucide-react";
import { cosmicAudio } from "../utils/cosmicAudio";

interface HeroProps {
  onExploreProjects: () => void;
  onExploreMembers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onExploreMembers }) => {
  const phrases = [
    "Karya & Proyek Terpilih Kelompok 2",
    "Penguasaan Recount Text & Storytelling",
    "Kolaborasi Digital & Desain Antarmuka",
    "Eksplorasi Ide Tanpa Batas Ruang"
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(60 + Math.random() * 30);

        if (displayText.length + 1 >= currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(35);

        if (displayText.length <= 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  const stats = [
    { label: "Anggota Tim Dedikatif", value: "4", unit: "Kreator", icon: Users },
    { label: "Karya Terverifikasi", value: "4+", unit: "Modul", icon: BookCheck },
    { label: "Studi Kasus Narasi", value: "100%", unit: "Tuntas", icon: Award },
    { label: "Arsitektur Desain", value: "60 FPS", unit: "Lancar", icon: Orbit }
  ];

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Kicker / Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
          <span className="w-6 h-[1.5px] bg-cyan-400 inline-block" />
          <span>Kelompok 2 Space Lab</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance] mb-6">
          Ideas beyond <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            the ordinary universe.
          </span>
        </h1>

        {/* STELLAR EXPLORER PHOTO - PLACED PROMINENTLY AT THE TOP, BEFORE THE TYPING TEXT */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-950 shadow-2xl shadow-cyan-950/40 group mb-6">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] max-h-[440px] w-full overflow-hidden">
            {/* High fidelity generated space explorer image */}
            <img
              src="/src/assets/images/hero_space_explorer_1792402871269.jpg"
              alt="Stellar Explorer 02 - Astronot penjelajah luar angkasa Kelompok 2"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            {/* Scrim overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-slate-950/25 to-transparent pointer-events-none" />

            {/* Floating Glassmorphic Telemetry Overlay */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono-code text-cyan-300 flex items-center gap-1.5 shadow-md">
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
              <span>STELLAR EXPLORER // MISSION-02</span>
            </div>

            {/* Visual Card Bottom Info */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#091124]/85 backdrop-blur-md border border-cyan-500/20 shadow-xl flex items-center justify-between">
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-white font-display">Stellar Explorer 02</h2>
                <p className="text-[10px] sm:text-xs text-slate-300">Explore the unknown · Creativity has no limits</p>
              </div>
              <div className="text-right">
                <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-mono-code">Status</div>
                <div className="text-[11px] sm:text-xs font-semibold text-cyan-300 flex items-center gap-1">
                  <span>Active Orbit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC TYPING SUBTITLE (KETIK) - DIRECTLY AFTER THE STELLAR EXPLORER PHOTO */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="inline-flex items-center text-base sm:text-xl font-semibold text-cyan-300 font-mono-code bg-slate-900/70 border border-cyan-500/25 px-4 py-2.5 rounded-2xl w-fit backdrop-blur-sm shadow-md">
            <span className="text-cyan-400 mr-2 font-bold">&gt;</span>
            <span>{displayText}</span>
            <span className="inline-block w-2 h-4 sm:h-5 ml-1.5 bg-cyan-400 animate-pulse" />
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Eksplorasi karya terstruktur dan modul interaktif Kelompok 2</span>
          </div>
        </div>

        {/* Lead Narrative Copy */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
          Ruang di mana kami mentransformasikan rasa ingin tahu menjadi konsep berani, 
          menguasai materi Recount Text dan bahasa Inggris secara mendalam, serta membangun pengalaman 
          interaktif digital berstandar profesional.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button
            onClick={() => {
              cosmicAudio.playSuccess();
              onExploreProjects();
            }}
            className="group px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Jelajahi Karya &amp; Modul</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={() => {
              cosmicAudio.playBlip(550);
              onExploreMembers();
            }}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 active:scale-98 flex items-center gap-2 cursor-pointer"
          >
            <Users className="w-4 h-4 text-cyan-400" />
            <span>Kenali Tim Kami</span>
          </button>
        </div>

        {/* Quiet metadata indicator (Zero-Pill discipline) */}
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="text-slate-300 font-medium">Semester Proyek 2025/2026</span>
          <span aria-hidden="true">·</span>
          <span>Bahasa Inggris &amp; Teknologi</span>
          <span aria-hidden="true">·</span>
          <span className="text-cyan-400">Mission Active</span>
        </div>

        {/* Full-width Proof & Metrics Strip below */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/70 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                  <Icon className="w-4 h-4 text-cyan-400/80" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs text-cyan-300 font-medium font-mono-code">{stat.unit}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
