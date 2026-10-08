import { Sprout } from 'lucide-react';

interface FooterProps {
  onSelectNav: (item: string) => void;
  isHome?: boolean;
}

export const Footer = ({ onSelectNav, isHome = false }: FooterProps) => {
  return (
    <footer className={`mt-auto px-4 pb-5 pt-2 sm:px-6 lg:px-8 ${isHome ? 'bg-transparent' : 'bg-transparent'}`}>
      <div className={`mx-auto max-w-7xl rounded-[26px] border px-6 py-8 sm:px-8 lg:px-10 ${isHome ? 'border-white/15 bg-black/35 text-white backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.22)]' : 'border-emerald-100/80 bg-emerald-50/60 text-slate-800 backdrop-blur-xl shadow-[0_18px_55px_rgba(16,185,129,0.10)]'}`}> 
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Mini Project Identification */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                <Sprout className="w-4 h-4" />
              </div>
              <span className={`font-bold text-base ${isHome ? 'text-white' : 'text-slate-900'}`}>SoilSense</span>
            </div>
            <span className={`hidden sm:inline ${isHome ? 'text-white/20' : 'text-emerald-900/15'}`}>|</span>
            <p className={`text-xs ${isHome ? 'text-white/65' : 'text-slate-600'}`}>
              SoilSense • Machine Learning Mini Project • 2026–27
            </p>
          </div>

          {/* Quick Page Links */}
          <div className={`flex flex-wrap justify-center items-center gap-6 text-xs font-medium ${isHome ? 'text-white/75' : 'text-slate-700'}`}>
            <button
              onClick={() => onSelectNav('home')}
              className={`transition ${isHome ? 'hover:text-emerald-300' : 'hover:text-emerald-700'}`}
            >
              Home
            </button>
            <button
              onClick={() => onSelectNav('analysis')}
              className={`transition ${isHome ? 'hover:text-emerald-300' : 'hover:text-emerald-700'}`}
            >
              Soil Analysis
            </button>
            <button
              onClick={() => onSelectNav('result')}
              className={`transition ${isHome ? 'hover:text-emerald-300' : 'hover:text-emerald-700'}`}
            >
              Prediction Result
            </button>
            <button
              onClick={() => onSelectNav('insights')}
              className={`transition ${isHome ? 'hover:text-emerald-300' : 'hover:text-emerald-700'}`}
            >
              Model Insights
            </button>
            <button
              onClick={() => onSelectNav('about')}
              className={`transition ${isHome ? 'hover:text-emerald-300' : 'hover:text-emerald-700'}`}
            >
              About
            </button>
          </div>

        </div>

        {/* Quiet Subtext */}
        <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-xs gap-2 ${isHome ? 'border-white/10 text-white/45' : 'border-emerald-900/10 text-slate-500'}`}>
          <p>
            Developed as an academic Machine Learning mini project using Decision Tree Classification.
          </p>
          <div className={`flex items-center gap-3 ${isHome ? 'text-white/55' : 'text-slate-500'}`}>
            <span>Sandy</span>
            <span>·</span>
            <span>Clay</span>
            <span>·</span>
            <span>Loamy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
