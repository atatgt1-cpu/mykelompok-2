import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Play,
  Square,
  Volume2,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Layers,
  FileText,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Table,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import confetti from "canvas-confetti";
import { ProjectItem } from "../data/projectsData";
import { PresentationViewer } from "./PresentationViewer";
import { StoryBookViewer } from "./StoryBookViewer";
import { DirectQuizView } from "./DirectQuizView";
import { cosmicAudio } from "../utils/cosmicAudio";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<
    "reader" | "structure" | "vocab" | "quiz" | "slides" | "mindmap" | "storybook" | "infographic"
  >("reader");
  const [showIndonesian, setShowIndonesian] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (project?.category === "Kuis Interaktif") {
      setActiveTab("quiz");
    } else if (project?.content.storyPages) {
      setActiveTab("storybook");
    } else if (project?.content.slides) {
      setActiveTab("slides");
    } else if (project?.content.mindmapNodes) {
      setActiveTab("mindmap");
    } else if (project?.content.infographicSections) {
      setActiveTab("infographic");
    } else {
      setActiveTab("reader");
    }
    setQuizAnswers({});
    setQuizSubmitted(false);

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [project]);

  if (!project) return null;

  // Speech synthesis audio playback
  const handleToggleSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      utteranceRef.current = null;
    } else {
      const textToRead = project.content.englishText;
      if (!textToRead) return;

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = "en-US";
      utterance.rate = 0.95;

      utterance.onend = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        utteranceRef.current = null;
      };

      utteranceRef.current = utterance;
      cosmicAudio.playSuccess();
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleCopyText = () => {
    const text = project.content.englishText || project.shortDesc;
    navigator.clipboard.writeText(text);
    setCopied(true);
    cosmicAudio.playBlip(700);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    cosmicAudio.playBlip(540);
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    const questions = project.content.quiz || [];
    let correctCount = 0;
    questions.forEach((q, i) => {
      if (quizAnswers[i] === q.correctAnswer) {
        correctCount++;
      }
    });

    if (correctCount >= 2) {
      cosmicAudio.playSuccess();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#34d399", "#818cf8"]
      });
    } else {
      cosmicAudio.playBlip(320);
    }
  };

  const toggleNode = (index: number) => {
    cosmicAudio.playBlip(500);
    setExpandedNodes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isRecount = !!project.content.englishText;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#091124] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#060c18] shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400">
              <span className="font-bold">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{project.readTime}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Salin Teks Materi"
              aria-label="Salin Naskah"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                cosmicAudio.playBlip(400);
                if (typeof window !== "undefined" && "speechSynthesis" in window) {
                  window.speechSynthesis.cancel();
                }
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls (Only for non-quiz materials) */}
        {project.category !== "Kuis Interaktif" && (
          <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-[#070e1e] overflow-x-auto shrink-0 no-scrollbar">
          {/* Recount Text Tabs */}
          {isRecount && (
            <>
              <button
                onClick={() => {
                  cosmicAudio.playBlip(500);
                  setActiveTab("reader");
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === "reader"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Naskah &amp; Bacaan</span>
              </button>

              <button
                onClick={() => {
                  cosmicAudio.playBlip(500);
                  setActiveTab("structure");
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === "structure"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Bedah Struktur Generik</span>
              </button>

              <button
                onClick={() => {
                  cosmicAudio.playBlip(500);
                  setActiveTab("vocab");
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === "vocab"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Kamus Kosakata ({project.content.vocabulary?.length || 0})</span>
              </button>

              <button
                onClick={() => {
                  cosmicAudio.playBlip(500);
                  setActiveTab("quiz");
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === "quiz"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Kuis Pemahaman</span>
              </button>
            </>
          )}

          {/* Story Book Tab */}
          {project.content.storyPages && (
            <button
              onClick={() => {
                cosmicAudio.playBlip(500);
                setActiveTab("storybook");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "storybook"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buku Cerita Bergambar ({project.content.storyPages.length} Halaman)</span>
            </button>
          )}

          {/* Presentation Deck Tab */}
          {project.content.slides && (
            <button
              onClick={() => {
                cosmicAudio.playBlip(500);
                setActiveTab("slides");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "slides"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Slide Deck Presentasi ({project.content.slides.length} Slide)</span>
            </button>
          )}

          {/* Mind Map Tab */}
          {project.content.mindmapNodes && (
            <button
              onClick={() => {
                cosmicAudio.playBlip(500);
                setActiveTab("mindmap");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "mindmap"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Peta Konsep &amp; Taksonomi Node</span>
            </button>
          )}

          {/* Infographic Tab */}
          {project.content.infographicSections && (
            <button
              onClick={() => {
                cosmicAudio.playBlip(500);
                setActiveTab("infographic");
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === "infographic"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Infografis &amp; Matriks Tabel</span>
            </button>
          )}
        </div>
        )}

        {/* Modal Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* DIRECT QUIZ VIEW (Khusus Kuis Interaktif) */}
          {project.category === "Kuis Interaktif" && project.content.quiz && (
            <DirectQuizView
              title={project.title}
              subtitle={project.subtitle}
              questions={project.content.quiz}
            />
          )}
          
          {/* TAB: STORY BOOK */}
          {activeTab === "storybook" && project.content.storyPages && (
            <StoryBookViewer pages={project.content.storyPages} />
          )}

          {/* TAB: PRESENTATION SLIDES */}
          {activeTab === "slides" && project.content.slides && (
            <PresentationViewer slides={project.content.slides} />
          )}

          {/* TAB: READER (Recount Text) */}
          {activeTab === "reader" && (
            <div className="space-y-6">
              {/* Narration Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleToggleSpeech}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                      isSpeaking
                        ? "bg-rose-500 text-white"
                        : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold"
                    }`}
                  >
                    {isSpeaking ? (
                      <>
                        <Square className="w-3.5 h-3.5 fill-current" />
                        <span>Hentikan Audio</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Dengarkan Pelafalan Inggris (AI Speech)</span>
                      </>
                    )}
                  </button>
                  {isSpeaking && (
                    <span className="text-xs text-cyan-300 font-mono-code animate-pulse flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-cyan-400" />
                      Membacakan naskah...
                    </span>
                  )}
                </div>

                {/* Translation Language Switcher */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Bahasa:</span>
                  <button
                    onClick={() => {
                      cosmicAudio.playBlip(480);
                      setShowIndonesian(false);
                    }}
                    className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                      !showIndonesian
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    English (Original)
                  </button>
                  <button
                    onClick={() => {
                      cosmicAudio.playBlip(480);
                      setShowIndonesian(true);
                    }}
                    className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                      showIndonesian
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Bahasa Indonesia
                  </button>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 leading-relaxed text-slate-200 text-base sm:text-lg whitespace-pre-line font-sans">
                {showIndonesian ? project.content.indonesianText : project.content.englishText}
              </div>
            </div>
          )}

          {/* TAB: STRUCTURE BREAKDOWN */}
          {activeTab === "structure" && project.content.structureBreakdown && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
                <span className="text-xs font-mono-code font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Pilar 1: ORIENTATION (Pengenalan Konteks)
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.content.structureBreakdown.orientation}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
                <span className="text-xs font-mono-code font-bold text-indigo-400 uppercase tracking-wider block mb-2">
                  Pilar 2: SEQUENCE OF EVENTS (Kronologi Peristiwa)
                </span>
                <div className="space-y-2">
                  {project.content.structureBreakdown.events.map((evt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="text-xs font-mono-code text-indigo-400 font-bold mt-0.5">
                        {idx + 1}.
                      </span>
                      <span>{evt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                <span className="text-xs font-mono-code font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Pilar 3: RE-ORIENTATION (Refleksi &amp; Penutup)
                </span>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.content.structureBreakdown.reorientation}
                </p>
              </div>
            </div>
          )}

          {/* TAB: VOCABULARY BANK */}
          {activeTab === "vocab" && project.content.vocabulary && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.content.vocabulary.map((v, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-lg font-bold text-white font-display">{v.word}</h4>
                    <span className="text-xs font-mono-code text-cyan-400">{v.phonetic}</span>
                  </div>
                  <div className="text-xs font-medium text-indigo-300 italic mb-2">
                    {v.partOfSpeech}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mb-3">
                    <strong className="text-slate-400">Arti:</strong> {v.meaningId}
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400 italic">
                    "{v.example}"
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: QUIZ */}
          {activeTab === "quiz" && project.content.quiz && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300">
                Uji pemahaman Anda tentang generic structure dan makna teks di bawah ini. Pilih jawaban yang paling tepat!
              </div>

              <div className="space-y-5">
                {project.content.quiz.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-3"
                  >
                    <div className="text-sm font-semibold text-white">
                      <span className="text-cyan-400 font-mono-code mr-2">Q{qIdx + 1}.</span>
                      {q.question}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = quizAnswers[qIdx] === optIdx;
                        const isCorrect = optIdx === q.correctAnswer;
                        const showResult = quizSubmitted;

                        let btnClass = "border-slate-800 text-slate-300 hover:border-slate-700 bg-slate-950/60";
                        if (isSelected && !showResult) {
                          btnClass = "border-cyan-400 text-cyan-300 bg-cyan-950/30";
                        } else if (showResult) {
                          if (isCorrect) {
                            btnClass = "border-emerald-500 bg-emerald-950/30 text-emerald-300";
                          } else if (isSelected && !isCorrect) {
                            btnClass = "border-rose-500 bg-rose-950/30 text-rose-300";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectQuizOption(qIdx, optIdx)}
                            className={`w-full p-3 rounded-xl border text-xs sm:text-sm text-left transition-colors flex items-center justify-between cursor-pointer ${btnClass}`}
                          >
                            <span>{opt}</span>
                            {showResult && isCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
                        <strong className="text-slate-300">Penjelasan:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-cyan-200 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  Kirim Jawaban &amp; Cek Skor
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuizSubmitted(false);
                    setQuizAnswers({});
                  }}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Ulangi Kuis
                </button>
              )}
            </div>
          )}

          {/* TAB: INTERACTIVE MIND MAP */}
          {activeTab === "mindmap" && project.content.mindmapNodes && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300">
                Peta konsep interaktif: Klik setiap node untuk membuka dan menutup cabang taksonomi materi.
              </div>

              <div className="space-y-3">
                {project.content.mindmapNodes.map((node, i) => {
                  const isExpanded = !!expandedNodes[i];
                  return (
                    <div
                      key={i}
                      className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleNode(i)}
                        className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-800/40 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono-code text-xs font-bold">
                            0{i + 1}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-white font-display">
                              {node.title}
                            </h4>
                            <p className="text-xs text-slate-400">{node.desc}</p>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 space-y-2 bg-slate-950/40">
                          {node.subpoints.map((sub, j) => (
                            <div key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                              <span className="text-cyan-400 font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{sub}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB: INFOGRAFIS CHEATSHEET */}
          {activeTab === "infographic" && project.content.infographicSections && (
            <div className="space-y-6">
              {project.content.infographicSections.map((sec, secIdx) => (
                <div
                  key={secIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4"
                >
                  <div className="border-b border-slate-800 pb-3">
                    <h4 className="text-base sm:text-lg font-bold text-cyan-300 font-display">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{sec.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sec.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                      >
                        <div className="text-xs font-bold text-white mb-1">{item.label}</div>
                        <div className="text-xs font-mono-code text-cyan-400/90 leading-relaxed">
                          {item.value}
                        </div>
                        {item.extra && (
                          <div className="mt-1.5 text-[11px] text-slate-400 italic">
                            {item.extra}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
