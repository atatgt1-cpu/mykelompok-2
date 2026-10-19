import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Compass, Layers, BookOpen, Flag, Anchor } from "lucide-react";
import { SlideItem } from "../data/projectsData";
import { cosmicAudio } from "../utils/cosmicAudio";

interface PresentationViewerProps {
  slides: SlideItem[];
}

export const PresentationViewer: React.FC<PresentationViewerProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = slides[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      cosmicAudio.playBlip(600);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      cosmicAudio.playBlip(480);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6 text-cyan-400" />,
    Layers: <Layers className="w-6 h-6 text-indigo-400" />,
    BookOpen: <BookOpen className="w-6 h-6 text-emerald-400" />,
    Flag: <Flag className="w-6 h-6 text-rose-400" />,
    Anchor: <Anchor className="w-6 h-6 text-amber-400" />
  };

  return (
    <div className="space-y-4">
      {/* Slide Container mimicking high-end 16:9 presentation slide */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-[#0c152b] to-[#060c18] border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
        
        {/* Background cosmic watermark geometry */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Slide Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono-code text-cyan-300">
              SLIDE {currentSlide.number} / {slides.length}
            </span>
          </div>
          <span className="text-xs font-mono-code text-slate-500">
            KELOMPOK 2 PRESENTATION
          </span>
        </div>

        {/* Slide Content */}
        <div className="my-auto py-4">
          <div className="flex items-center gap-3 mb-2">
            {iconMap[currentSlide.iconName] || <Compass className="w-6 h-6 text-cyan-400" />}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white">
              {currentSlide.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-cyan-300/80 mb-5 font-medium">
            {currentSlide.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentSlide.points.map((point, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5"
              >
                <span className="text-xs font-mono-code text-cyan-400 font-bold shrink-0 mt-0.5">
                  •
                </span>
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Presenter Notes */}
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
          <span className="truncate">
            <strong className="text-slate-300">Catatan Presenter:</strong> {currentSlide.notes}
          </span>
          <span className="text-[11px] font-mono-code text-cyan-400 ml-2 shrink-0">
            {currentSlideIndex + 1}/{slides.length}
          </span>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                cosmicAudio.playBlip(500);
                setCurrentSlideIndex(idx);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Pindah ke slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`p-2 rounded-xl border flex items-center gap-1 text-xs font-semibold cursor-pointer transition-colors ${
              currentSlideIndex === 0
                ? "border-slate-800 text-slate-600 cursor-not-allowed"
                : "border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1}
            className={`px-3 py-2 rounded-xl border flex items-center gap-1 text-xs font-semibold cursor-pointer transition-colors ${
              currentSlideIndex === slides.length - 1
                ? "border-slate-800 text-slate-600 cursor-not-allowed"
                : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 border-cyan-400"
            }`}
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
