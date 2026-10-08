import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { INPUT_FEATURES } from '../data/soilData';

interface AnalysisPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreModel: () => void;
}

export const AnalysisPreviewModal = ({
  isOpen,
  onClose,
  onExploreModel
}: AnalysisPreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                Analysis Module
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500">Upcoming Step</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Soil Property Inputs Ready
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
        <div className="py-5 space-y-5">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 leading-relaxed">
            <span className="font-semibold block mb-1">Home Dashboard Active</span>
            The Home page is fully designed and operational! The Soil Analysis testing form and instant classification engine are ready to be connected whenever you prompt for the next phase.
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
              The 9 Registered Soil Input Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-h-64 overflow-y-auto pr-1">
              {INPUT_FEATURES.map((feat) => (
                <div 
                  key={feat.id}
                  className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs"
                >
                  <div className="flex items-center justify-between font-mono font-bold text-teal-800 mb-1">
                    <span>{feat.symbol}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{feat.unit}</span>
                  </div>
                  <div className="font-medium text-slate-800 truncate">{feat.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Range: {feat.typicalRange}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Planned Inference Pipeline
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Client-side Decision Tree classifier with instantaneous rule evaluation.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Deterministic classification output: Sandy, Clay, or Loamy.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Agronomic recommendations and fertilizer adjustment guides.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => {
              onClose();
              onExploreModel();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition flex items-center gap-1.5"
          >
            <span>Explore Decision Tree Model</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
