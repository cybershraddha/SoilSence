import React from 'react';
import { 
  GraduationCap, 
  Cpu, 
  Database, 
  Workflow, 
  CheckCircle2, 
  Code2, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface AboutProjectScreenProps {
  onGoToAnalysis: () => void;
  onGoToInsights: () => void;
}

export const AboutProjectScreen: React.FC<AboutProjectScreenProps> = ({ 
  onGoToAnalysis, 
  onGoToInsights 
}) => {
  const technologies = [
    { name: 'Python', role: 'Primary programming language' },
    { name: 'Pandas', role: 'Data manipulation and analysis' },
    { name: 'NumPy', role: 'Numerical computation' },
    { name: 'Scikit-learn', role: 'Machine learning library' },
    { name: 'Decision Tree Classifier', role: 'Core classification algorithm' },
    { name: 'Figma', role: 'UI design and prototyping' }
  ];

  const workflowSteps = [
    { title: 'Dataset', desc: '1200 soil samples with 9 input features and 3 target classes.' },
    { title: 'Data Preparation', desc: 'Dataset inspection, feature selection, and target preparation.' },
    { title: 'Train/Test Split', desc: 'Stratified 80/20 split used for model training and evaluation.' },
    { title: 'Decision Tree', desc: 'Decision Tree Classifier using Gini criterion with maximum depth of 5.' },
    { title: 'Prediction', desc: 'Classification of soil into Sandy, Clay, or Loamy categories.' }
  ];

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading */}
        <div className="mb-8 border-b border-slate-100 pb-6">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            Academic Project Overview
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About SoilSense
          </h1>
          <p className="text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            SoilSense is a machine learning project that classifies soil into Sandy, Clay, and Loamy categories using 9 soil parameters including soil texture, moisture, organic matter, nutrients, and pH.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Project Metadata Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-700" />
              <span>Project Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Project</span>
                <span className="text-sm font-bold text-slate-900 leading-snug block">
                  Soil Type Classification using Decision Tree
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Type</span>
                <span className="text-sm font-bold text-slate-900 leading-snug block">
                  Machine Learning Mini Project
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Academic Year</span>
                <span className="text-sm font-bold text-slate-900 font-mono leading-snug block">
                  2026–27
                </span>
              </div>
            </div>

            {/* Objective */}
            <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-950 leading-relaxed shadow-xs">
              <span className="font-bold text-slate-900 block mb-1 text-xs uppercase tracking-wider">
                Objective:
              </span>
              <p className="text-sm text-slate-800 font-medium">
                To classify soil into Sandy, Clay, or Loamy categories based on 9 soil parameters using a Decision Tree classification model.
              </p>
            </div>
          </div>

          {/* Dataset Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Database className="w-5 h-5 text-teal-700" />
              <span>Dataset Overview</span>
            </h2>
            <p className="text-xs text-slate-500 mb-5">
              A structured soil classification dataset used for training and evaluating the Decision Tree model.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-100 text-center hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums block mb-1">
                  1200
                </span>
                <span className="text-xs font-semibold text-slate-700">soil samples</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-100 text-center hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums block mb-1">
                  9
                </span>
                <span className="text-xs font-semibold text-slate-700">input features</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-100 text-center hover:border-slate-200 hover:shadow-xs transition-all duration-200">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums block mb-1">
                  3
                </span>
                <span className="text-xs font-semibold text-slate-700">target classes</span>
              </div>
            </div>

            {/* Target Classes */}
            <div>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                Target Classes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 hover:shadow-sm transition-all duration-200">
                  <div className="font-bold text-xs text-amber-950">Sandy</div>
                  <div className="text-[11px] text-amber-800 mt-1 leading-relaxed">Relatively higher sand content and generally lower water-holding capacity.</div>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/70 hover:shadow-sm transition-all duration-200">
                  <div className="font-bold text-xs text-teal-950">Clay</div>
                  <div className="text-[11px] text-teal-800 mt-1 leading-relaxed">Relatively higher clay content and generally higher water-holding capacity.</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 hover:shadow-sm transition-all duration-200">
                  <div className="font-bold text-xs text-emerald-950">Loamy</div>
                  <div className="text-[11px] text-emerald-800 mt-1 leading-relaxed">A balanced combination of sand, silt, and clay particles.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-700" />
              <span>Technology Stack</span>
            </h2>
            <p className="text-xs text-slate-500 mb-5">
              Tools, frameworks, and computing environments used in SoilSense
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {technologies.map((tech) => (
                <div 
                  key={tech.name} 
                  className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/30 hover:shadow-md hover:-translate-y-1 hover:scale-[1.01] transition-all duration-200 flex flex-col justify-between cursor-default group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs group-hover:text-emerald-800 transition-colors">
                      {tech.name}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors" />
                  </div>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-600 mt-2 transition-colors">
                    {tech.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Project Workflow Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-teal-700" />
              <span>Project Workflow</span>
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Pipeline sequence from dataset preparation to final classification inference
            </p>

            <div className="relative">
              {/* Horizontal line for desktop */}
              <div 
                aria-hidden="true" 
                className="hidden lg:block absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 z-0 pointer-events-none" 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                {workflowSteps.map((step, idx) => (
                  <div 
                    key={step.title} 
                    className="p-4.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="w-6.5 h-6.5 rounded-lg bg-emerald-700 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                          {idx + 1}
                        </span>
                        {idx < workflowSteps.length - 1 && (
                          <span className="text-slate-300 hidden lg:inline font-mono">→</span>
                        )}
                      </div>
                      <h3 className="font-bold text-xs text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Workflow Chain */}
            <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-medium text-slate-700 flex-wrap gap-2 text-center">
              <span className="font-bold text-emerald-800">Dataset</span>
              <span className="text-slate-300">→</span>
              <span className="font-bold text-teal-800">Data Preparation</span>
              <span className="text-slate-300">→</span>
              <span className="font-bold text-slate-800">Train/Test Split</span>
              <span className="text-slate-300">→</span>
              <span className="font-bold text-emerald-800">Decision Tree</span>
              <span className="text-slate-300">→</span>
              <span className="font-bold text-teal-800">Prediction</span>
            </div>
          </div>

          {/* Quick Action Navigation */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              SoilSense • Machine Learning Mini Project • 2026–27
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onGoToInsights}
                className="px-4.5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98]"
              >
                Model Insights
              </button>
              <button
                onClick={onGoToAnalysis}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center gap-1.5"
              >
                <span>Go to Soil Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
