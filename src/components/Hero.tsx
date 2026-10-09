import { ArrowRight, CheckCircle2, Database, Leaf, Zap } from 'lucide-react';
import heroImage from '../assets/images/soil-bg.png";
import soilVisual from '../assets/images/soil-bg.png";

interface HeroProps {
  onStartAnalysis: () => void;
  onExploreModel: () => void;
}

export const Hero = ({ onStartAnalysis }: HeroProps) => {
  return (
    <section className="relative min-h-[860px] h-screen max-h-[980px] overflow-hidden text-white">
      <img
        src={heroImage}
        alt="Rich agricultural soil with growing plants"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(16,185,129,0.10),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.40)_45%,rgba(0,0,0,0.16)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 pt-24 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="max-w-[760px] pb-8 lg:pb-0">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-950/35 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span>Machine Learning Project</span>
              <span className="text-white/30">|</span>
              <span>Supervised Classification</span>
              <span className="text-white/30">|</span>
              <span className="text-white/90">Decision Tree (CART)</span>
            </div>

            <h1 className="text-[52px] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-[60px] lg:text-[68px] xl:text-[72px]">
              Smart Soil
              <span className="block"><span className="text-emerald-400">Classification</span></span>
            </h1>

            <p className="mt-7 max-w-[700px] text-[21px] font-medium leading-tight text-white/90 sm:text-[25px]">
              Analyze soil properties and classify the soil as Sandy, Clay, or Loamy using a Decision Tree.
            </p>

            <div className="mt-9">
              <button
                onClick={onStartAnalysis}
                className="rounded-xl bg-emerald-400 px-8 py-4 text-base font-extrabold text-slate-950 shadow-[0_12px_35px_rgba(16,185,129,0.28)] transition-all hover:-translate-y-1 hover:bg-emerald-300 flex items-center gap-3"
              >
                Start Soil Analysis <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-white/85">
              <span className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-950/55 backdrop-blur-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                </span>
                <span><strong className="block text-white">Accurate Predictions</strong><small className="text-white/55">Reliable soil classification</small></span>
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-950/55 backdrop-blur-sm">
                  <Database className="h-5 w-5 text-emerald-300" />
                </span>
                <span><strong className="block text-white">9 Agricultural Parameters</strong><small className="text-white/55">Analyze key soil properties</small></span>
              </span>
              <span className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-950/55 backdrop-blur-sm">
                  <Zap className="h-5 w-5 text-emerald-300" />
                </span>
                <span><strong className="block text-white">Instant Offline Prediction</strong><small className="text-white/55">Get results in seconds</small></span>
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
            <div className="absolute -inset-6 rounded-[34px] bg-emerald-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[26px] border border-white/30 bg-white/90 shadow-[0_30px_90px_rgba(0,0,0,0.40)] backdrop-blur-xl">
              <div className="relative h-[400px] overflow-hidden sm:h-[450px]">
                <img src={soilVisual} alt="Soil profile with plant roots and soil horizons" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-white/10" />
                <div className="absolute bottom-4 left-4 rounded-xl bg-slate-900/75 px-4 py-3 text-sm font-bold text-white backdrop-blur-md">
                  Sample Stratum Matrix
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-emerald-600/90 px-4 py-3 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                  <Leaf className="h-4 w-4" /> Decision Tree Ready
                </div>
              </div>
              <div className="flex items-center justify-between gap-6 border-t border-slate-200 bg-white/95 px-6 py-5 text-slate-800">
                <div>
                  <div className="text-base font-bold">Classification Target</div>
                  <div className="mt-1 text-sm text-slate-500">3 Dominant Soil Textures</div>
                </div>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <span>Sandy</span><span className="text-emerald-500">|</span><span>Clay</span><span className="text-emerald-500">|</span><span>Loamy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
