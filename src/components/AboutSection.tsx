import React from "react";
import { Target, Users2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-12 lg:py-16 border-t border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - Compact & Direct */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-1.5">
              <span className="w-4 h-[1.5px] bg-cyan-400" />
              <span>Sekilas Info</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Tentang Kelompok Kami
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Empat individu berkolaborasi untuk belajar, bereksplorasi, dan menyusun karya terbaik.
          </p>
        </div>

        {/* 2 Compact Cards: Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Mission Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-colors flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display mb-1.5">
                Misi Kami (Our Mission)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mengeksplorasi ide kreatif, mendalami materi Recount Text bahasa Inggris, serta menyajikan materi secara interaktif dan mudah dipahami.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-colors flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display mb-1.5">
                Nilai Inti (Our Values)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Kolaborasi aktif, rasa ingin tahu tinggi, tanggung jawab, dan saling mendukung dalam setiap proses penyusunan karya.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
