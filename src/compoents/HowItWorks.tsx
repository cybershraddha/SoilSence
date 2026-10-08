import { HOW_IT_WORKS_STEPS } from '../data/soilData';
import { Database, Binary, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartAnalysis: () => void;
  onExploreModel: () => void;
}

export const HowItWorks = ({ onStartAnalysis, onExploreModel }: HowItWorksProps) => {
  const stepIcons = [
    <Database key="1" className="w-5 h-5 text-emerald-600" />,
    <Binary key="2" className="w-5 h-5 text-teal-600" />,
    <CheckCircle key="3" className="w-5 h-5 text-emerald-700" />
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            Workflow Architecture
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Three straightforward steps to transform raw soil test figures into an interpretable classification.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div 
            aria-hidden="true" 
            className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 -translate-y-8 z-0 pointer-events-none" 
          />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative z-10 bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg hover:shadow-emerald-950/5 hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center font-mono text-sm font-bold text-slate-700 shadow-xs">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-xs">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Key Bullet Points */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                {step.keyAttributes.map((attr) => (
                  <div key={attr} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{attr}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Action callout banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-slate-50 border border-emerald-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Ready to classify a soil sample?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Review all 9 model parameters or proceed to test input evaluation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onExploreModel}
              className="px-4.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition shadow-xs hover:shadow-sm active:scale-[0.98]"
            >
              View Decision Rules
            </button>
            <button
              onClick={onStartAnalysis}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center gap-1.5 transition-all duration-200"
            >
              <span>Start Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
