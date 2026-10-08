import { useState } from 'react';
import { Layers, Sliders, GitFork, ChevronRight, Check } from 'lucide-react';
import { INPUT_FEATURES, SOIL_TYPES } from '../data/soilData';

interface StatisticsProps {
  onOpenFeatures: () => void;
  onOpenModelArchitecture: () => void;
}

export const Statistics = ({ onOpenFeatures, onOpenModelArchitecture }: StatisticsProps) => {
  const [activeTab, setActiveTab] = useState<'classes' | 'features' | 'model'>('features');

  return (
    <section className="py-14 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1.5">
            System Specifications
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Machine Learning Core Stats
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Model specifications and parameters for the Decision Tree soil classifier.
          </p>
        </div>

        {/* The 3 Small Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Stat Card 1: 3 Soil Classes */}
          <div 
            onClick={() => setActiveTab('classes')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-300 text-left hover:-translate-y-1 ${
              activeTab === 'classes' 
                ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20' 
                : 'border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Output Targets
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-xs">
                <Layers className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums mb-1">
              3
            </div>
            <div className="text-base font-bold text-slate-900">
              Soil Classes
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Sandy, Clay, and Loamy target categories classified by the Decision Tree model.
            </p>
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>View breakdown</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Stat Card 2: 9 Input Features */}
          <div 
            onClick={() => setActiveTab('features')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-300 text-left hover:-translate-y-1 ${
              activeTab === 'features' 
                ? 'border-teal-500 shadow-lg ring-2 ring-teal-500/20' 
                : 'border-slate-200/90 shadow-xs hover:border-teal-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Feature Space
              </span>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shadow-xs">
                <Sliders className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums mb-1">
              9
            </div>
            <div className="text-base font-bold text-slate-900">
              Input Features
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Sand %, Silt %, Clay %, Moisture %, Organic Matter %, Nitrogen, Phosphorus, Potassium, and Soil pH.
            </p>
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
              <span>Inspect parameters</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Stat Card 3: Decision Tree Model */}
          <div 
            onClick={() => setActiveTab('model')}
            className={`cursor-pointer rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-300 text-left hover:-translate-y-1 ${
              activeTab === 'model' 
                ? 'border-emerald-600 shadow-lg ring-2 ring-emerald-600/20' 
                : 'border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Algorithm
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-xs">
                <GitFork className="w-5 h-5 stroke-[2.2]" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
              Decision Tree
            </div>
            <div className="text-base font-bold text-slate-900">
              Classifier
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Gini Criterion with a Maximum Depth of 5 to determine feature split thresholds.
            </p>
            <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>Model architecture</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* Dynamic Detail Card Based on Active Selection */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
          
          {/* TAB 1: 3 SOIL CLASSES */}
          {activeTab === 'classes' && (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">The 3 Soil Classes</h4>
                  <p className="text-xs text-slate-500">Target categorical labels recognized by SoilSense</p>
                </div>
                <span className="text-xs font-medium text-emerald-700">Multi-class Classification</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SOIL_TYPES.map((s) => (
                  <div key={s.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="font-bold text-slate-900 text-sm mb-1">{s.name}</div>
                    <div className="text-xs text-slate-600 mb-2">{s.texture}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-2">{s.summary}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: 9 INPUT FEATURES */}
          {activeTab === 'features' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-4 gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">9 Soil Properties & Composition Features</h4>
                  <p className="text-xs text-slate-500">Every feature measured to produce accurate leaf predictions</p>
                </div>
                <button
                  onClick={onOpenFeatures}
                  className="self-start sm:self-auto text-xs font-semibold text-teal-700 hover:text-teal-800 transition"
                >
                  View full parameter dictionary →
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                {INPUT_FEATURES.map((feat) => (
                  <div key={feat.id} className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded">
                          {feat.symbol}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {feat.unit}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-900 truncate">{feat.name}</p>
                    </div>
                    <div className="mt-2 text-[11px] text-slate-500 flex justify-between">
                      <span>Range:</span>
                      <span className="font-mono tabular-nums text-slate-700">{feat.typicalRange}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DECISION TREE MODEL */}
          {activeTab === 'model' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-4 gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Decision Tree Architecture</h4>
                  <p className="text-xs text-slate-500">Supervised classification model trained with scikit-learn DecisionTreeClassifier</p>
                </div>
                <button
                  onClick={onOpenModelArchitecture}
                  className="self-start sm:self-auto text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition"
                >
                  Inspect tree structure →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900 mb-1">Splitting Criterion</div>
                  <p className="text-slate-600 mb-2">Gini Impurity index measures how often a random element is incorrectly labeled.</p>
                  <div className="font-mono text-[11px] text-emerald-800 bg-white p-2 rounded border border-slate-200/60">
                    Criterion: Gini
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900 mb-1">Depth Control</div>
                  <p className="text-slate-600 mb-2">Pre-pruned with a maximum depth constraint of 5 to structure decision paths.</p>
                  <div className="text-[11px] text-slate-500 space-y-1">
                    <div>· Maximum Depth: <span className="font-mono font-medium text-slate-800">5</span></div>
                    <div>· Target Classes: <span className="font-mono font-medium text-slate-800">3 (Sandy, Clay, Loamy)</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-semibold text-slate-900 mb-1">Decision Trace</div>
                  <p className="text-slate-600 mb-2">Each classification follows a deterministic conditional path through learned feature threshold rules.</p>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>Rule-based explainability</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
