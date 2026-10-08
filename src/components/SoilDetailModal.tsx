import { SoilType } from '../data/soilData';
import { X, Check, Droplets, Layers, Sparkles } from 'lucide-react';

interface SoilDetailModalProps {
  soil: SoilType | null;
  onClose: () => void;
  onStartAnalysis: () => void;
}

export const SoilDetailModal = ({ soil, onClose, onStartAnalysis }: SoilDetailModalProps) => {
  if (!soil) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                Soil Class Profile
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-mono text-slate-500">{soil.badge}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {soil.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-6">
          {/* Summary */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {soil.summary}
          </p>

          {/* Key Characteristics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              Physical Properties & Characteristics
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {soil.characteristics.map((char) => (
                <li key={char} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decision Rule Hint */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100/80">
            <h4 className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Decision Tree Splitting Rule
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed font-mono">
              {soil.decisionRuleHint}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4.5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-150 active:scale-[0.98]"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onStartAnalysis();
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
          >
            Test Against This Class
          </button>
        </div>
      </div>
    </div>
  );
};
