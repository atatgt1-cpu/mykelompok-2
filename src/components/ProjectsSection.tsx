import React, { useState } from "react";
import { ArrowUpRight, BookOpen, Presentation, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { PROJECTS_DATA, ProjectItem } from "../data/projectsData";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { cosmicAudio } from "../utils/cosmicAudio";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    PROJECTS_DATA.forEach((p) => {
      initial[p.id] = { count: p.likesCount, liked: false };
    });
    return initial;
  });

  const categories = ["Semua", "Kuis Interaktif", "Recount Text", "Story Book", "Presentasi", "Mind Map", "Infografis"];

  const filteredProjects = selectedCategory === "Semua"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const handleLike = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    cosmicAudio.playSuccess();
    setLikesState((prev) => {
      const current = prev[projectId] || { count: 0, liked: false };
      const nextLiked = !current.liked;
      const nextCount = nextLiked ? current.count + 1 : current.count - 1;

      if (nextLiked) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#38bdf8", "#818cf8", "#f43f5e"]
        });
      }

      return {
        ...prev,
        [projectId]: { count: nextCount, liked: nextLiked }
      };
    });
  };

  const handleOpenProject = (project: ProjectItem) => {
    cosmicAudio.playBlip(620);
    setActiveProject(project);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">
              <span className="w-5 h-[1.5px] bg-cyan-400" />
              <span>Comprehensive Learning Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Materi &amp; Portofolio Lengkap
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Materi lengkap Recount Text (Independence Day &amp; Traveling to Karimun Jawa), 
            Buku Cerita Bergambar (Story Book), PPT Presentasi, Mind Map, dan Infografis terperinci.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                cosmicAudio.playBlip(500);
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Grid of Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured && (idx === 0 || idx === 1 || idx === 2);
            const likeInfo = likesState[project.id] || { count: project.likesCount, liked: false };

            return (
              <article
                key={project.id}
                onClick={() => handleOpenProject(project)}
                className={`group rounded-3xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-cyan-950/20 cursor-pointer ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div>
                  {/* Optional Image Cover for Illustrated Modules */}
                  {project.imageCover && (
                    <div className="relative aspect-[16/7] sm:aspect-[21/8] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                      <img
                        src={project.imageCover}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono-code text-cyan-300">
                        {project.category}
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    {/* Clean unboxed metadata (Zero-Pill discipline) */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-semibold">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.readTime}</span>
                      </div>
                      <span className="font-mono-code text-[11px] text-slate-500">{project.date}</span>
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-medium text-cyan-300/80 mt-1 mb-3">
                      {project.subtitle}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Tags list as clean text items */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400 font-mono-code">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="hover:text-cyan-300 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7 flex items-center justify-between border-t border-slate-800/80 pt-4 mt-auto">
                  {/* Like / Heart action */}
                  <button
                    onClick={(e) => handleLike(e, project.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      likeInfo.liked
                        ? "text-rose-400 bg-rose-500/10 border border-rose-500/30"
                        : "text-slate-400 hover:text-white bg-slate-950/60 border border-slate-800"
                    }`}
                    aria-label={`Sukai ${project.title}`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${likeInfo.liked ? "fill-rose-400 text-rose-400" : ""}`} />
                    <span className="tabular-nums">{likeInfo.count}</span>
                  </button>

                  {/* Explore button */}
                  <div className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                    <span>
                      {project.category === "Kuis Interaktif" ? "Mulai Kuis Interaktif" : "Buka & Pelajari"}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
