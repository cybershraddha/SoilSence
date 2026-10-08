import React from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  Layers, 
  Droplets, 
  Wind, 
  FileSpreadsheet, 
  Info,
  CheckCircle2,
  Code
} from 'lucide-react';
import { ClassificationResult, SoilInputs } from '../data/soilModel';

interface PredictionResultScreenProps {
  result: ClassificationResult | null;
  onAnalyzeAnother: () => void;
  onBackToAnalysis: () => void;
  onLoadDefaultAndPredict: () => void;
}

export const PredictionResultScreen: React.FC<PredictionResultScreenProps> = ({
  result,
  onAnalyzeAnother,
  onBackToAnalysis,
  onLoadDefaultAndPredict
}) => {
  if (!result) {
    return (
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 flex items-center justify-center mx-auto mb-6 shadow-xs border border-emerald-100/80">
            <Layers className="w-9 h-9 stroke-[2.2]" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Soil Classification Result
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-md mx-auto leading-relaxed">
            Enter the 9 soil parameters on the Soil Analysis page to generate a soil classification.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onBackToAnalysis}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-0.5 rounded-xl shadow-xs transition-all duration-200"
            >
              Go to Soil Analysis
            </button>
            <button
              onClick={onLoadDefaultAndPredict}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl shadow-xs hover:shadow-sm active:scale-[0.98] transition-all duration-200"
            >
              Load Sample & Evaluate
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { predictedClass, explanation, inputs } = result;

  const isSandy = predictedClass === 'Sandy';
  const isClay = predictedClass === 'Clay';
  const isLoamy = predictedClass === 'Loamy';

  const badgeStyle = isLoamy
    ? 'bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-emerald-50/30 text-emerald-950 border-emerald-200 shadow-sm'
    : isClay
      ? 'bg-gradient-to-br from-teal-50/90 via-slate-50/50 to-teal-50/30 text-teal-950 border-teal-200 shadow-sm'
      : 'bg-gradient-to-br from-amber-50/90 via-orange-50/30 to-amber-50/30 text-amber-950 border-amber-200 shadow-sm';

  const iconComponent = isLoamy ? (
    <Sparkles className="w-8 h-8 text-emerald-700" />
  ) : isClay ? (
    <Droplets className="w-8 h-8 text-teal-700" />
  ) : (
    <Wind className="w-8 h-8 text-amber-700" />
  );

  const inputSummaryList = [
    { label: '1. Sand Percentage', value: `${inputs.sand_pct}%`, key: 'sand_pct' },
    { label: '2. Silt Percentage', value: `${inputs.silt_pct}%`, key: 'silt_pct' },
    { label: '3. Clay Percentage', value: `${inputs.clay_pct}%`, key: 'clay_pct' },
    { label: '4. Moisture Percentage', value: `${inputs.moisture_pct}%`, key: 'moisture_pct' },
    { label: '5. Organic Matter Percentage', value: `${inputs.organic_matter_pct}%`, key: 'organic_matter_pct' },
    { label: '6. Nitrogen', value: `${inputs.nitrogen_mg_kg} mg/kg`, key: 'nitrogen_mg_kg' },
    { label: '7. Phosphorus', value: `${inputs.phosphorus_mg_kg} mg/kg`, key: 'phosphorus_mg_kg' },
    { label: '8. Potassium', value: `${inputs.potassium_mg_kg} mg/kg`, key: 'potassium_mg_kg' },
    { label: '9. Soil pH', value: `${inputs.ph}`, key: 'ph' }
  ];

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBackToAnalysis}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1 px-2 -ml-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Soil Analysis</span>
          </button>
          <div className="text-xs text-slate-400 font-mono">
            Evaluated: {result.evaluatedAt}
          </div>
        </div>

        {/* Page Heading */}
        <div className="mb-8 border-b border-slate-100 pb-6">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            Decision Tree Output
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Soil Classification Result
          </h1>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            Classification determined by evaluating the 9 entered parameters across the trained Decision Tree decision path.
          </p>
        </div>

        {/* Main Result Card */}
        <div className="space-y-6">
          
          <div className={`rounded-2xl p-6 sm:p-8 border shadow-xs ${badgeStyle}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Predicted Soil Type
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                  <span>{predictedClass} Soil</span>
                </div>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-xs flex items-center justify-center shrink-0 border border-black/5">
                {iconComponent}
              </div>
            </div>

            {/* Explanation of the predicted class */}
            <div className="pt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Class Description & Characteristics
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {explanation}
              </p>
            </div>

            {/* Decision Rule Path */}
            <div className="mt-5 pt-5 border-t border-black/5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Decision Tree Evaluation Trace</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
                {result.decisionPathSummary.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400">↳</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary of the 9 input values entered by the user */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileSpreadsheet className="w-4.5 h-4.5 text-emerald-700" />
                  <span>Summary of Entered Input Values</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  The exact 9 features evaluated for this sample
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200/60 tabular-nums">
                9 Features Evaluated
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {inputSummaryList.map((item) => (
                <div 
                  key={item.key} 
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 hover:shadow-xs transition-all duration-150 flex items-center justify-between"
                >
                  <span className="text-xs font-medium text-slate-700">{item.label}</span>
                  <span className="text-xs font-mono font-bold text-slate-900 tabular-nums bg-white px-2 py-0.5 rounded-lg border border-slate-200/80 shadow-xs">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decision Tree Model Info Card */}
          <div className="rounded-2xl p-5 bg-gradient-to-r from-emerald-50/60 to-slate-50 border border-emerald-100/80 flex items-start gap-3.5 text-xs shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <CheckCircle2 className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <span className="font-bold text-slate-900 text-xs block">
                Decision Tree Classification Model
              </span>
              <p className="text-slate-600 leading-relaxed">
                Algorithm: Decision Tree Classifier (Criterion: Gini, Max Depth: 5). Evaluated across 9 input features to classify soil into Sandy, Clay, or Loamy.
              </p>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-500 font-medium">
              Target classification: Sandy · Clay · Loamy
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Button: Back to Soil Analysis */}
              <button
                type="button"
                onClick={onBackToAnalysis}
                className="w-1/2 sm:w-auto px-5 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
                <span>Back to Soil Analysis</span>
              </button>

              {/* Button: Analyze Another Sample */}
              <button
                type="button"
                onClick={onAnalyzeAnother}
                className="w-1/2 sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-0.5 rounded-xl shadow-[0_2px_10px_rgba(4,120,87,0.2)] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <RotateCcw className="w-3.5 h-3.5 text-emerald-200" />
                <span>Analyze Another Sample</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
