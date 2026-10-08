import { X, Sliders, Check } from 'lucide-react';
import { INPUT_FEATURES, InputFeature } from '../data/soilData';

interface FeatureDictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeatureDictionaryModal = ({
  isOpen,
  onClose
}: FeatureDictionaryModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                Feature Space
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-mono text-slate-500">9 Variables</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Soil Input Feature Dictionary
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
        <div className="py-5 space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            The Decision Tree evaluates 9 soil properties to determine the target classification.
          </p>

          <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-xl overflow-hidden">
            {INPUT_FEATURES.map((feat: InputFeature) => (
              <div key={feat.id} className="p-3.5 sm:p-4 hover:bg-slate-50/50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                      {feat.symbol}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {feat.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      ({feat.category})
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 max-w-lg">
                    {feat.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-mono self-start sm:self-center shrink-0">
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-sans">Unit</span>
                    <span className="text-slate-700">{feat.unit}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-sans">Typical Range</span>
                    <span className="text-emerald-700 font-semibold tabular-nums">{feat.typicalRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all duration-150 active:scale-[0.98] shadow-xs"
          >
            Close Dictionary
          </button>
        </div>
      </div>
    </div>
  );
};
