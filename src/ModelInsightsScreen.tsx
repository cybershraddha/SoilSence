import React from 'react';
import { 
  GitFork, 
  Layers, 
  Sliders, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Binary, 
  Code,
  Info
} from 'lucide-react';

interface ModelInsightsScreenProps {
  onGoToAnalysis: () => void;
}

export const ModelInsightsScreen: React.FC<ModelInsightsScreenProps> = ({ onGoToAnalysis }) => {
  const exact9Features = [
    { num: '1', name: 'Sand Percentage', varName: 'sand_pct', unit: '%', desc: 'Percentage of sand particles in the soil.' },
    { num: '2', name: 'Silt Percentage', varName: 'silt_pct', unit: '%', desc: 'Percentage of silt particles in the soil.' },
    { num: '3', name: 'Clay Percentage', varName: 'clay_pct', unit: '%', desc: 'Percentage of clay particles in the soil.' },
    { num: '4', name: 'Moisture Percentage', varName: 'moisture_pct', unit: '%', desc: 'Percentage of moisture in the soil.' },
    { num: '5', name: 'Organic Matter Percentage', varName: 'organic_matter_pct', unit: '%', desc: 'Percentage of organic matter in the soil.' },
    { num: '6', name: 'Nitrogen', varName: 'nitrogen_mg_kg', unit: 'mg/kg', desc: 'Available nitrogen content in the soil.' },
    { num: '7', name: 'Phosphorus', varName: 'phosphorus_mg_kg', unit: 'mg/kg', desc: 'Available phosphorus content in the soil.' },
    { num: '8', name: 'Potassium', varName: 'potassium_mg_kg', unit: 'mg/kg', desc: 'Available potassium content in the soil.' },
    { num: '9', name: 'Soil pH', varName: 'ph', unit: 'pH scale', desc: 'Soil acidity or alkalinity level.' }
  ];

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-8 border-b border-slate-100 pb-6">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            Machine Learning Theory & Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Decision Tree Model Insights
          </h1>
          <p className="text-base text-slate-700 mt-3 max-w-3xl leading-relaxed">
            Decision Tree Classification is a supervised machine learning algorithm that makes predictions by following a sequence of feature-based decisions.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Section: Model Details Grid */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
              <Binary className="w-5 h-5 text-emerald-700" />
              <span>Model Hyperparameters & Details</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Algorithm</span>
                <span className="text-sm font-bold text-slate-900">Decision Tree Classifier</span>
                <p className="text-[11px] text-slate-500 mt-1">Supervised CART classification tree</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Criterion</span>
                <span className="text-sm font-bold text-slate-900 font-mono">Gini</span>
                <p className="text-[11px] text-slate-500 mt-1">Gini impurity minimization</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Maximum Depth</span>
                <span className="text-sm font-bold text-slate-900 font-mono">5</span>
                <p className="text-[11px] text-slate-500 mt-1">Controlled depth to prevent overfitting</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Input Features</span>
                <span className="text-sm font-bold text-slate-900 font-mono">9</span>
                <p className="text-[11px] text-slate-500 mt-1">Trained feature vector dimension</p>
              </div>
            </div>

            {/* Target Classes List */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3.5">
                Target Classes: Sandy, Clay, Loamy
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 hover:shadow-sm transition-all duration-200">
                  <div className="font-bold text-sm text-amber-950">Sandy Soil</div>
                  <div className="text-xs text-amber-800 mt-1 leading-relaxed">
                    Generally has a higher proportion of sand particles and relatively lower water-holding capacity.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 hover:shadow-sm transition-all duration-200">
                  <div className="font-bold text-sm text-teal-950">Clay Soil</div>
                  <div className="text-xs text-teal-800 mt-1 leading-relaxed">
                    Generally has a higher proportion of clay particles and relatively higher water-holding capacity.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 hover:shadow-sm transition-all duration-200">
                  <div className="font-bold text-sm text-emerald-950">Loamy Soil</div>
                  <div className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    Generally contains a balanced combination of sand, silt, and clay particles.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Exactly 9 Input Features List */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-teal-700" />
                  <span>The Exact 9 Input Features</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  The trained Decision Tree expects exactly these 9 inputs for inference
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 shadow-xs">
                Dimension = 9
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {exact9Features.map((feat) => (
                <div 
                  key={feat.num} 
                  className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                        #{feat.num}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 font-medium">
                        {feat.unit}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 block mt-1">
                      {feat.name}{' '}
                      <span className="text-[11px] text-slate-400 font-mono font-normal">
                        ({feat.varName})
                      </span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: How the Decision Tree Works */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <GitFork className="w-5 h-5 text-emerald-700" />
              <span>How the Decision Tree Works</span>
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Step-by-step evaluation mechanism inside the classifier
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200 relative">
                <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-3 shadow-xs">
                  1
                </span>
                <h3 className="font-bold text-slate-900 text-xs mb-1">
                  Input Provision
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nine soil parameters are provided as input to the classifier.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200 relative">
                <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-3 shadow-xs">
                  2
                </span>
                <h3 className="font-bold text-slate-900 text-xs mb-1">
                  Condition Evaluation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Decision Tree evaluates feature-based conditions starting from the root node.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200 relative">
                <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-3 shadow-xs">
                  3
                </span>
                <h3 className="font-bold text-slate-900 text-xs mb-1">
                  Branch Traversal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The input follows branches according to the learned threshold conditions.
                </p>
              </div>

              <div className="p-4.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200 relative">
                <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center mb-3 shadow-xs">
                  4
                </span>
                <h3 className="font-bold text-slate-900 text-xs mb-1">
                  Leaf Prediction
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The final leaf determines the predicted soil class: Sandy, Clay, or Loamy.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Feature Importance */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-700" />
              <span>Feature Importance</span>
            </h2>
            <p className="text-xs text-slate-500 mb-5">
              Relative contribution of each of the 9 input features in tree splits
            </p>

            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 text-xs text-slate-600 leading-relaxed">
              <p className="text-slate-700">
                Feature importance will be displayed from the trained Decision Tree model after backend integration.
              </p>
            </div>
          </div>

          {/* Action Footer Callout */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-slate-50 border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Ready to evaluate a soil sample with these rules?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Navigate to Soil Analysis and enter the 9 soil parameters.
              </p>
            </div>
            <button
              onClick={onGoToAnalysis}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-0.5 rounded-xl shadow-xs transition-all duration-200 flex items-center gap-1.5 shrink-0"
            >
              <span>Test on Soil Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
