import React from "react";
import { ArrowUp, Rocket, Heart } from "lucide-react";
import { cosmicAudio } from "../utils/cosmicAudio";

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    cosmicAudio.playBlip(720);
    onScrollToTop();
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#02050e] text-slate-400 text-xs py-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Attribution */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Rocket className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-display font-bold text-slate-200 text-sm">
                Kelompok 2 — Space Portfolio
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Karya kolaboratif bahasa Inggris, narasi kreatif, dan rekayasa web.
              </p>
            </div>
          </div>

          {/* Quick links & Copyright */}
          <div className="flex items-center gap-6">
            <span>© {currentYear} Kelompok 2 · All rights reserved.</span>

            {/* Back to top button */}
            <button
              onClick={handleBackToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Kembali ke atas"
              title="Kembali ke atas halaman"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline-block text-[11px] font-semibold">Ke Atas</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
