import React, { useState } from "react";
import { X, Heart, Award, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { Member } from "../data/teamData";
import { cosmicAudio } from "../utils/cosmicAudio";

interface MemberDetailModalProps {
  member: Member | null;
  onClose: () => void;
}

export const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member, onClose }) => {
  const [likes, setLikes] = useState(24);
  const [hasLiked, setHasLiked] = useState(false);

  if (!member) return null;

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    cosmicAudio.playSuccess();
    setLikes((prev) => (hasLiked ? prev - 1 : prev + 1));
    setHasLiked(!hasLiked);

    if (!hasLiked) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#38bdf8", "#818cf8", "#c084fc"]
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#091124] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#060c1a]">
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
            <span>MEMBER PROFILE</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300">{member.role}</span>
          </div>
          <button
            onClick={() => {
              cosmicAudio.playBlip(400);
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup detail anggota"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Info Header */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0 bg-slate-900 shadow-xl">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold font-display text-white">{member.name}</h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">{member.role}</p>
              <div className="mt-2 text-xs text-slate-400 flex items-center gap-2">
                <span>{member.specialty}</span>
              </div>
              <p className="mt-3 text-sm italic text-slate-300 border-l-2 border-cyan-500/40 pl-3">
                "{member.quote}"
              </p>
            </div>
          </div>

          {/* Achievement Box */}
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-start gap-3">
            <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-cyan-300 font-mono-code uppercase tracking-wider">
                Pencapaian &amp; Rekognisi
              </div>
              <p className="text-sm text-slate-200 mt-1">{member.achievement}</p>
            </div>
          </div>

          {/* Bio Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-2">
              Tentang &amp; Peran
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">{member.bio}</p>
          </div>

          {/* Contributions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-2.5">
              Kontribusi Nyata dalam Kelompok 2
            </h4>
            <div className="space-y-2">
              {member.contributions.map((c, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-3">
              Keahlian &amp; Fokus Kompetensi
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {member.skills.map((skill, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
                    <span>{skill.name}</span>
                    <span className="text-cyan-400 font-mono-code tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer without external links */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-mono-code">
              KELOMPOK 2 CREW MEMBER
            </span>

            {/* Praise Button */}
            <button
              onClick={handleLike}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                hasLiked
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                  : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? "fill-rose-400 text-rose-400" : ""}`} />
              <span>Apresiasi ({likes})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
