import { X, GitFork, Check, Award, Layers } from 'lucide-react';

interface ModelArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAnalysis: () => void;
}

export const ModelArchitectureModal = ({
  isOpen,
  onClose,
  onStartAnalysis
}: ModelArchitectureModalProps) => {
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
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                Machine Learning Specs
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-mono text-slate-500">CART Decision Tree</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Decision Tree Architecture
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
        <div className="py-5 space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            The SoilSense Decision Tree classifier uses recursive binary partitioning based on Gini Impurity reduction. It transforms multi-dimensional soil chemistry and physics into an explainable set of if-else threshold rules.
          </p>

          {/* Decision Tree Simplified Rule Graph */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-200/60 font-sans text-[11px]">
              <span className="font-semibold text-slate-700">Decision Flow Demonstration</span>
              <span>Root to Leaf Evaluation</span>
            </div>

            <div className="space-y-2 text-slate-800">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80">
                <span className="text-teal-700 font-bold">Node 0 [Root]:</span> Soil Moisture ≤ 28.5%?
                <div className="text-[11px] text-slate-500 mt-0.5 font-sans">
                  ↳ True: branch to Sand/Loam check | False: branch to Clay candidate nodes
                </div>
              </div>

              <div className="pl-4 border-l-2 border-emerald-400 space-y-2">
                <div className="p-2 rounded-lg bg-amber-50/70 border border-amber-200/80 text-amber-900">
                  <span className="font-bold">Branch Left:</span> Electrical Conductivity ≤ 1.2 dS/m & pH ≥ 5.8?
                  <div className="text-[11px] font-sans mt-0.5">
                    ↳ Leaf: <strong className="text-amber-900">Sandy Soil</strong> (Low water holding, high percolation)
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                  <span className="font-bold">Branch Middle:</span> 28.5% &lt; Moisture ≤ 52.0% & balanced N-P-K?
                  <div className="text-[11px] font-sans mt-0.5">
                    ↳ Leaf: <strong className="text-emerald-900">Loamy Soil</strong> (Optimal agricultural mixture)
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-teal-50/70 border border-teal-200/80 text-teal-950">
                  <span className="font-bold">Branch Right:</span> Soil Moisture &gt; 52.0% & High clay density?
                  <div className="text-[11px] font-sans mt-0.5">
                    ↳ Leaf: <strong className="text-teal-900">Clay Soil</strong> (High plasticity & moisture retention)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Metrics */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-500 block mb-1">Criterion</span>
              <span className="font-bold text-slate-900 text-sm">Gini Impurity</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-500 block mb-1">Max Depth</span>
              <span className="font-mono font-bold text-slate-900 text-sm">5 Levels</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] text-slate-500 block mb-1">Classes</span>
              <span className="font-mono font-bold text-slate-900 text-sm">3 Targets</span>
            </div>
          </div>

          {/* Academic Context */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-3">
            <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-900 block">
                College Machine Learning Mini Project
              </span>
              Designed for educational demonstration of tree-based supervised machine learning for soil classification.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onStartAnalysis();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition"
          >
            Review Input Features
          </button>
        </div>
      </div>
    </div>
  );
};
