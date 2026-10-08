import { SOIL_TYPES, SoilType } from '../data/soilData';
import { ArrowRight, Droplets, Wind, Sparkles } from 'lucide-react';

interface SoilCardsProps {
  onSelectSoil: (soil: SoilType) => void;
}

export const SoilCards = ({ onSelectSoil }: SoilCardsProps) => {
  return (
    <section className="py-10 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & context */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
              Primary Soil Classes
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Target Soil Classifications
            </h2>
            <p className="text-sm text-slate-600 mt-1.5 max-w-xl">
              The Decision Tree model classifies input parameters into three soil categories: Sandy, Clay, or Loamy.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium hidden sm:block bg-white px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-xs">
            Click any soil class to inspect properties
          </div>
        </div>

        {/* The Three Small Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOIL_TYPES.map((soil) => {
            const isLoamy = soil.id === 'loamy';
            const isClay = soil.id === 'clay';

            return (
              <div
                key={soil.id}
                onClick={() => onSelectSoil(soil)}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Row with Class Name */}
                  <div className="flex items-start justify-between gap-2 mb-3.5">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {soil.name}
                    </h3>

                    {/* Subtle aesthetic icon indicator */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105 ${
                      isLoamy 
                        ? 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 group-hover:shadow-xs' 
                        : isClay 
                          ? 'bg-teal-50 text-teal-700 group-hover:bg-teal-100 group-hover:shadow-xs'
                          : 'bg-amber-50 text-amber-700 group-hover:bg-amber-100 group-hover:shadow-xs'
                    }`}>
                      {isLoamy ? (
                        <Sparkles className="w-4.5 h-4.5" />
                      ) : isClay ? (
                        <Droplets className="w-4.5 h-4.5" />
                      ) : (
                        <Wind className="w-4.5 h-4.5" />
                      )}
                    </div>
                  </div>

                  {/* Short Academic Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {soil.summary}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
