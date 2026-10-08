import { useState } from 'react';
import { Sprout, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onStartAnalysis: () => void;
  onExploreModel: () => void;
  onSelectNav: (item: string) => void;
  activeNav: string;
}

export const Header = ({ onStartAnalysis, onSelectNav, activeNav }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = activeNav === 'home';

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Soil Analysis', id: 'analysis' },
    { label: 'Prediction Result', id: 'result' },
    { label: 'Model Insights', id: 'insights' },
    { label: 'About', id: 'about' }
  ];

  const handleNavClick = (id: string) => {
    onSelectNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${isHome ? 'absolute' : 'relative'} inset-x-0 top-0 z-50 px-4 pt-4 pb-2 sm:px-6 lg:px-8`}>
      <div
        className={`mx-auto max-w-[1440px] rounded-[22px] border backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] ${
          isHome ? 'border-white/15 bg-black/25' : 'border-emerald-100/70 bg-emerald-50/55'
        }`}
      >
        <div className="h-[66px] px-5 sm:px-7 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="SoilSense Home"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/95 text-white flex items-center justify-center shadow-[0_0_22px_rgba(16,185,129,0.28)]">
              <Sprout className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className={`text-[23px] sm:text-[25px] font-extrabold tracking-tight ${isHome ? 'text-white' : 'text-slate-900'}`}>
              SoilSense
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-9 text-[15px]">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive
                      ? isHome ? 'text-emerald-300 font-semibold' : 'text-emerald-600 font-semibold'
                      : isHome ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full ${isHome ? 'bg-emerald-400' : 'bg-emerald-500'}`} />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onStartAnalysis}
              className="rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(16,185,129,0.25)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start Soil Analysis <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isHome ? 'text-white' : 'text-slate-700'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-t rounded-b-[22px] p-4 space-y-2 ${isHome ? 'border-white/10 bg-black/40' : 'border-emerald-100/70 bg-emerald-50/80'}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl ${
                  activeNav === item.id
                    ? 'bg-emerald-500/20 text-emerald-600'
                    : isHome ? 'text-white/85' : 'text-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={onStartAnalysis} className="w-full mt-2 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-white">
              Start Soil Analysis
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
