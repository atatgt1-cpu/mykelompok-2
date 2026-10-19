import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, Rocket, Sparkles } from "lucide-react";
import { cosmicAudio } from "../utils/cosmicAudio";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(cosmicAudio.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const newMuted = cosmicAudio.toggleMute();
    setIsMuted(newMuted);
  };

  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang" },
    { id: "members", label: "Anggota" },
    { id: "projects", label: "Portofolio" }
  ];

  const handleLinkClick = (id: string) => {
    cosmicAudio.playBlip(620);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: Zone 1, Zone 2, Zone 3 separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-cyan-400"
            aria-label="Kelompok 2 Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Rocket className="w-4 h-4" />
            </div>
            <span className="font-display font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
              KELOMPOK 2
            </span>
          </a>

          {/* Zone 2: 4 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action button + sound toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Audio Toggle button */}
            <button
              onClick={toggleSound}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/40 border border-slate-800 transition-colors cursor-pointer"
              aria-label={isMuted ? "Aktifkan Efek Suara" : "Matikan Efek Suara"}
              title={isMuted ? "Sound Off (Klik untuk aktifkan)" : "Sound On (Klik untuk matikan)"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleLinkClick("projects")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg hover:from-cyan-300 hover:to-cyan-200 transition-all duration-200 shadow-sm shadow-cyan-500/25 cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jelajahi Karya</span>
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => {
                cosmicAudio.playBlip(440);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#0a1224]/95 border border-cyan-500/20 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-left cursor-pointer ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 font-semibold"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => handleLinkClick("projects")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Jelajahi Karya Kelompok</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
