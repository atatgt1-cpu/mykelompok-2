import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, Square, Play, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { StoryPage } from "../data/projectsData";
import { cosmicAudio } from "../utils/cosmicAudio";

interface StoryBookViewerProps {
  pages: StoryPage[];
}

export const StoryBookViewer: React.FC<StoryBookViewerProps> = ({ pages }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showIndonesian, setShowIndonesian] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentPage = pages[currentPageIndex];

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      cosmicAudio.playBlip(620);
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      cosmicAudio.playBlip(500);
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const handleToggleSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentPage.englishText);
      utterance.lang = "en-US";
      utterance.rate = 0.92;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      cosmicAudio.playSuccess();
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Story Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#070e1e] border border-cyan-500/20">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono-code text-cyan-300 font-bold">
            HALAMAN {currentPage.pageNumber} DARI {pages.length}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-xs text-slate-300 font-medium">
            {currentPage.chapterTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Read-Aloud */}
          <button
            onClick={handleToggleSpeech}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              isSpeaking
                ? "bg-rose-500 text-white"
                : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40"
            }`}
          >
            {isSpeaking ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>Stop Suara</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span>Bacakan Halaman</span>
              </>
            )}
          </button>

          {/* Bilingual Switch */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => {
                cosmicAudio.playBlip(480);
                setShowIndonesian(false);
              }}
              className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer transition-colors ${
                !showIndonesian ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                cosmicAudio.playBlip(480);
                setShowIndonesian(true);
              }}
              className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer transition-colors ${
                showIndonesian ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              ID
            </button>
          </div>
        </div>
      </div>

      {/* Storybook Spread Container */}
      <div className="rounded-3xl bg-slate-950/80 border border-slate-800 overflow-hidden shadow-2xl">
        
        {/* Illustrated Cover Art */}
        <div className="relative aspect-[16/8] sm:aspect-[21/8] w-full overflow-hidden bg-slate-900">
          <img
            src={currentPage.image}
            alt={currentPage.chapterTitle}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-cyan-200">
            <span className="font-display font-bold text-sm text-white drop-shadow-md">
              {currentPage.chapterTitle}
            </span>
            <span className="font-mono-code text-[11px] bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
              Illustrated Recount Edition
            </span>
          </div>
        </div>

        {/* Narrative Paragraph */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0c162e]/70 border border-cyan-500/15 leading-relaxed text-slate-100 text-base sm:text-lg font-sans">
            {showIndonesian ? currentPage.indonesianText : currentPage.englishText}
          </div>

          {/* Interactive Keywords on this Page */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono-code mb-2.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KOSA KATA KUNCI HALAMAN INI</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentPage.keyWords.map((kw, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-sm font-bold text-cyan-300 font-display">{kw.word}</div>
                  <div className="text-xs text-slate-300 mt-0.5">{kw.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Page Navigation Dock */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={handlePrev}
          disabled={currentPageIndex === 0}
          className={`px-4 py-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors ${
            currentPageIndex === 0
              ? "border-slate-800 text-slate-600 cursor-not-allowed"
              : "border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Halaman Sebelumnya</span>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                cosmicAudio.playBlip(520);
                setCurrentPageIndex(idx);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentPageIndex ? "w-8 bg-cyan-400" : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Ke halaman ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPageIndex === pages.length - 1}
          className={`px-4 py-2 rounded-xl border flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors ${
            currentPageIndex === pages.length - 1
              ? "border-slate-800 text-slate-600 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 border-cyan-400 font-bold"
          }`}
        >
          <span>Halaman Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
