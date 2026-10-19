import React, { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Award, Check, Sparkles, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { QuizQuestion } from "../data/projectsData";
import { cosmicAudio } from "../utils/cosmicAudio";

interface DirectQuizViewProps {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
}

export const DirectQuizView: React.FC<DirectQuizViewProps> = ({ title, subtitle, questions }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    cosmicAudio.playBlip(540);
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();

    if (score >= 3) {
      cosmicAudio.playSuccess();
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#34d399", "#818cf8", "#f59e0b"]
      });
    } else {
      cosmicAudio.playBlip(300);
    }
  };

  const handleReset = () => {
    cosmicAudio.playBlip(480);
    setAnswers({});
    setIsSubmitted(false);
  };

  const answeredCount = Object.keys(answers).length;
  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="space-y-6">
      {/* Quiz Header Bar */}
      <div className="p-5 rounded-2xl bg-[#070e1e] border border-cyan-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>KUIS EVALUASI TERPADU 5 SOAL</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">{title}</h3>
          <p className="text-xs text-slate-300 mt-0.5">{subtitle}</p>
        </div>

        {/* Progress or Score Badge */}
        <div className="flex items-center gap-3 shrink-0">
          {!isSubmitted ? (
            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono-code flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Terjawab: <strong className="text-white">{answeredCount}</strong> / {questions.length}</span>
            </div>
          ) : (
            <div className="px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-xs font-mono-code flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300">Skor:</span>
              <strong className="text-cyan-300 text-sm">{score}/{questions.length} ({percentage}%)</strong>
            </div>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-5">
        {questions.map((q, qIdx) => {
          const selectedOption = answers[qIdx];
          const isCorrect = isSubmitted && selectedOption === q.correctAnswer;
          const isWrong = isSubmitted && selectedOption !== undefined && selectedOption !== q.correctAnswer;

          return (
            <div
              key={qIdx}
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                isSubmitted
                  ? isCorrect
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : "bg-rose-950/20 border-rose-500/40"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              {/* Question Text */}
              <div className="flex items-start gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-bold font-mono-code text-cyan-400 shrink-0">
                  0{qIdx + 1}
                </span>
                <h4 className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                  {q.question}
                </h4>
              </div>

              {/* Options A, B, C, D */}
              <div className="space-y-2.5 pl-0 sm:pl-10">
                {q.options.map((option, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  const isSelected = selectedOption === optIdx;
                  const isCorrectOption = optIdx === q.correctAnswer;

                  let styleClass = "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-white";
                  if (isSelected && !isSubmitted) {
                    styleClass = "border-cyan-400 bg-cyan-950/30 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20";
                  } else if (isSubmitted) {
                    if (isCorrectOption) {
                      styleClass = "border-emerald-500 bg-emerald-950/40 text-emerald-200 font-semibold";
                    } else if (isSelected && !isCorrectOption) {
                      styleClass = "border-rose-500 bg-rose-950/40 text-rose-300 line-through opacity-80";
                    } else {
                      styleClass = "border-slate-800/80 bg-slate-950/40 text-slate-500";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-start gap-3 cursor-pointer ${styleClass}`}
                    >
                      <span className="w-5 h-5 rounded-md bg-black/40 border border-current flex items-center justify-center text-xs font-mono-code shrink-0 mt-0.5">
                        {letter}
                      </span>
                      <span className="flex-1 leading-relaxed">{option}</span>
                      {isSubmitted && isCorrectOption && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 ml-2" />
                      )}
                      {isSubmitted && isSelected && !isCorrectOption && (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box when submitted */}
              {isSubmitted && (
                <div className="mt-4 pt-3.5 border-t border-slate-800/80 pl-0 sm:pl-10 text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl">
                  <strong className="text-cyan-300 block mb-1">Pembahasan Jawaban:</strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Bottom Submit & Result Bar */}
      <div className="p-5 rounded-2xl bg-[#070e1e] border border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
        {!isSubmitted ? (
          <>
            <div className="text-xs text-slate-400">
              {answeredCount === questions.length ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Semua 5 soal telah dijawab. Siap dikirim!
                </span>
              ) : (
                <span>Masih ada {questions.length - answeredCount} soal yang belum dijawab.</span>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={answeredCount === 0}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                answeredCount === 0
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 shadow-lg shadow-cyan-500/25 active:scale-98"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Kirim Jawaban &amp; Cek Skor</span>
            </button>
          </>
        ) : (
          <>
            <div className="text-xs text-slate-300">
              Evaluasi selesai! Anda menjawab <strong className="text-cyan-300">{score}</strong> dari <strong className="text-white">{questions.length}</strong> soal dengan benar.
            </div>

            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ulangi Kuis Dari Awal</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
