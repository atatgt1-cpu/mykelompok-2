import React, { useState } from "react";
import { ArrowUpRight, Award, Quote } from "lucide-react";
import { TEAM_MEMBERS, Member } from "../data/teamData";
import { MemberDetailModal } from "./MemberDetailModal";
import { cosmicAudio } from "../utils/cosmicAudio";

export const MembersSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleOpenMember = (member: Member) => {
    cosmicAudio.playBlip(560);
    setSelectedMember(member);
  };

  return (
    <section id="members" className="relative py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">
              <span className="w-5 h-[1.5px] bg-cyan-400" />
              <span>The Dedicated Crew</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Anggota Tim Kelompok 2
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Kolaborator di balik konseptualisasi narasi, riset linguistik, desain antarmuka, 
            dan implementasi kode platform ini.
          </p>
        </div>

        {/* 4-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              onClick={() => handleOpenMember(member)}
              className="group rounded-3xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-cyan-950/20 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with smooth zoom */}
              <div className="relative w-full aspect-[4/4.2] overflow-hidden bg-slate-950">
                <img
                  src={member.avatar}
                  alt={`Foto profil ${member.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent opacity-90" />
                
                {/* Specialty Overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-xs font-medium text-cyan-300 drop-shadow-md">
                  {member.specialty}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>

                  {/* Clean unboxed metadata with typographic dot (Zero-Pill rule) */}
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="text-cyan-400 font-medium">{member.role}</span>
                  </div>

                  {/* Quote */}
                  <p className="mt-3 text-xs italic text-slate-300 line-clamp-2">
                    "{member.quote}"
                  </p>

                  {/* Achievement Snippet */}
                  <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-slate-400 line-clamp-2">
                      {member.achievement}
                    </span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Lihat Profil Lengkap</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedMember && (
        <MemberDetailModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};
