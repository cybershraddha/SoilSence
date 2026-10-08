import { X, GraduationCap, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                Project Overview
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500">Academic 2026–27</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              About SoilSense
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-5 text-xs text-slate-600 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <GraduationCap className="w-4.5 h-4.5 text-emerald-700" />
              <span>Machine Learning Mini Project</span>
            </div>
            <p>
              <strong>SoilSense</strong> is an educational machine learning web application developed for classifying soil specimens into three primary agricultural categories: <strong>Sandy</strong>, <strong>Clay</strong>, and <strong>Loamy</strong>.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
              Project Objective
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>To classify soil into Sandy, Clay, or Loamy categories based on 9 soil parameters using a Decision Tree classification model.</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-100 text-teal-900">
            <span className="font-semibold block mb-0.5">Development Status</span>
            Phase 1 Home/Dashboard interface is fully active. Follow-up milestones will add the interactive live input form and detailed test evaluations.
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
