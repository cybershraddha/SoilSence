import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Layers,
  Droplets,
  FlaskConical
} from 'lucide-react';
import { SoilInputs } from '../data/soilModel';

interface SoilAnalysisFormState {
  sand: string;
  silt: string;
  clay: string;
  moisture: string;
  organicMatter: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
}

const INITIAL_FORM_STATE: SoilAnalysisFormState = {
  sand: '',
  silt: '',
  clay: '',
  moisture: '',
  organicMatter: '',
  nitrogen: '',
  phosphorus: '',
  potassium: '',
  ph: ''
};

interface SoilAnalysisScreenProps {
  onBackToHome: () => void;
  onPredict: (inputs: SoilInputs) => void;
  initialInputs?: SoilInputs | null;
}

export const SoilAnalysisScreen: React.FC<SoilAnalysisScreenProps> = ({ 
  onBackToHome,
  onPredict,
  initialInputs
}) => {
  const [formData, setFormData] = useState<SoilAnalysisFormState>(() => {
    if (initialInputs) {
      return {
        sand: initialInputs.sand_pct,
        silt: initialInputs.silt_pct,
        clay: initialInputs.clay_pct,
        moisture: initialInputs.moisture_pct,
        organicMatter: initialInputs.organic_matter_pct,
        nitrogen: initialInputs.nitrogen_mg_kg,
        phosphorus: initialInputs.phosphorus_mg_kg,
        potassium: initialInputs.potassium_mg_kg,
        ph: initialInputs.ph
      };
    }
    return INITIAL_FORM_STATE;
  });

  useEffect(() => {
    if (initialInputs) {
      setFormData({
        sand: initialInputs.sand_pct,
        silt: initialInputs.silt_pct,
        clay: initialInputs.clay_pct,
        moisture: initialInputs.moisture_pct,
        organicMatter: initialInputs.organic_matter_pct,
        nitrogen: initialInputs.nitrogen_mg_kg,
        phosphorus: initialInputs.phosphorus_mg_kg,
        potassium: initialInputs.potassium_mg_kg,
        ph: initialInputs.ph
      });
    }
  }, [initialInputs]);
  const [errors, setErrors] = useState<Partial<Record<keyof SoilAnalysisFormState, string>>>({});
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'success' | 'incomplete';
    message?: string;
  }>({ status: 'idle' });

  const handleInputChange = (field: keyof SoilAnalysisFormState, value: string) => {
    // Only allow positive numbers and single decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
      if (submissionStatus.status !== 'idle') {
        setSubmissionStatus({ status: 'idle' });
      }
    }
  };

  const handleClearAll = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setSubmissionStatus({ status: 'idle' });
  };

  const handleFillSample = (sampleType: 'sandy' | 'clay' | 'loamy') => {
    if (sampleType === 'sandy') {
      setFormData({
        sand: '72.0',
        silt: '16.0',
        clay: '12.0',
        moisture: '14.5',
        organicMatter: '1.2',
        nitrogen: '32.0',
        phosphorus: '14.0',
        potassium: '45.0',
        ph: '6.2'
      });
    } else if (sampleType === 'clay') {
      setFormData({
        sand: '18.0',
        silt: '26.0',
        clay: '56.0',
        moisture: '58.0',
        organicMatter: '4.1',
        nitrogen: '88.0',
        phosphorus: '36.0',
        potassium: '160.0',
        ph: '7.3'
      });
    } else {
      setFormData({
        sand: '42.0',
        silt: '38.0',
        clay: '20.0',
        moisture: '34.0',
        organicMatter: '3.6',
        nitrogen: '64.0',
        phosphorus: '28.0',
        potassium: '115.0',
        ph: '6.7'
      });
    }
    setErrors({});
    setSubmissionStatus({ status: 'idle' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Record<keyof SoilAnalysisFormState, string>> = {};

    const fields: (keyof SoilAnalysisFormState)[] = [
      'sand',
      'silt',
      'clay',
      'moisture',
      'organicMatter',
      'nitrogen',
      'phosphorus',
      'potassium',
      'ph'
    ];

    fields.forEach((field) => {
      const val = formData[field].trim();
      if (!val) {
        newErrors[field] = 'Required';
      } else {
        const num = parseFloat(val);
        if (isNaN(num)) {
          newErrors[field] = 'Numeric value required';
        } else if ((field === 'sand' || field === 'silt' || field === 'clay' || field === 'moisture' || field === 'organicMatter') && (num < 0 || num > 100)) {
          newErrors[field] = 'Must be between 0 and 100%';
        } else if (field === 'nitrogen' && (num < 0 || num > 300)) {
          newErrors[field] = 'Must be between 0 and 300 mg/kg';
        } else if (field === 'phosphorus' && (num < 0 || num > 150)) {
          newErrors[field] = 'Must be between 0 and 150 mg/kg';
        } else if (field === 'potassium' && (num < 0 || num > 400)) {
          newErrors[field] = 'Must be between 0 and 400 mg/kg';
        } else if (field === 'ph' && (num < 0 || num > 14)) {
          newErrors[field] = 'Must be between 0 and 14';
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmissionStatus({
        status: 'incomplete',
        message: 'Please provide valid numeric values within the allowed ranges for all 9 fields.'
      });
      return;
    }

    setErrors({});
    const inputPayload: SoilInputs = {
      sand_pct: formData.sand,
      silt_pct: formData.silt,
      clay_pct: formData.clay,
      moisture_pct: formData.moisture,
      organic_matter_pct: formData.organicMatter,
      nitrogen_mg_kg: formData.nitrogen,
      phosphorus_mg_kg: formData.phosphorus,
      potassium_mg_kg: formData.potassium,
      ph: formData.ph
    };
    onPredict(inputPayload);
  };

  // Helper check for texture sum
  const sandNum = parseFloat(formData.sand) || 0;
  const siltNum = parseFloat(formData.silt) || 0;
  const clayNum = parseFloat(formData.clay) || 0;
  const textureTotal = sandNum + siltNum + clayNum;
  const hasTextureValues = formData.sand && formData.silt && formData.clay;

  return (
    <div className="py-8 sm:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1 px-2 -ml-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Sample loader options for ease of testing */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Load sample data:</span>
            <button
              type="button"
              onClick={() => handleFillSample('sandy')}
              className="px-2.5 py-1 text-[11px] font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-md border border-amber-200/60 transition"
            >
              Sandy Sample
            </button>
            <button
              type="button"
              onClick={() => handleFillSample('clay')}
              className="px-2.5 py-1 text-[11px] font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-md border border-teal-200/60 transition"
            >
              Clay Sample
            </button>
            <button
              type="button"
              onClick={() => handleFillSample('loamy')}
              className="px-2.5 py-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200/60 transition"
            >
              Loamy Sample
            </button>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-8 border-b border-slate-100 pb-6">
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
            Machine Learning Input Form
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Soil Analysis
          </h1>
          <p className="text-base text-slate-600 mt-2 max-w-3xl">
            Enter the soil properties below to classify the soil as Sandy, Clay, or Loamy.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} noValidate>
          
          <div className="space-y-8">
            
            {/* 1. Texture Group (Sand, Silt, Clay) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 mb-6 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Layers className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                      Soil Texture Distribution
                    </h2>
                    <p className="text-xs text-slate-500">
                      Physical mineral particle fractions (Sand + Silt + Clay)
                    </p>
                  </div>
                </div>
                {hasTextureValues && (
                  <span className={`text-xs font-mono tabular-nums px-2.5 py-1 rounded-lg border shadow-xs ${
                    Math.abs(textureTotal - 100) < 0.5 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200/70' 
                      : 'bg-amber-50 text-amber-800 border-amber-200/70'
                  }`}>
                    Total: {textureTotal.toFixed(1)}% {Math.abs(textureTotal - 100) < 0.5 ? '✓' : '(Target ~100%)'}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. Sand Percentage */}
                <div>
                  <label htmlFor="sand" className="block text-xs font-bold text-slate-800 mb-1.5">
                    1. Sand Percentage (sand_pct)
                  </label>
                  <div className="relative">
                    <input
                      id="sand"
                      type="text"
                      inputMode="decimal"
                      value={formData.sand}
                      onChange={(e) => handleInputChange('sand', e.target.value)}
                      placeholder="e.g., 45.0"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.sand 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 pointer-events-none">
                      %
                    </span>
                  </div>
                  {errors.sand && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.sand}</p>
                  )}
                </div>

                {/* 2. Silt Percentage */}
                <div>
                  <label htmlFor="silt" className="block text-xs font-bold text-slate-800 mb-1.5">
                    2. Silt Percentage (silt_pct)
                  </label>
                  <div className="relative">
                    <input
                      id="silt"
                      type="text"
                      inputMode="decimal"
                      value={formData.silt}
                      onChange={(e) => handleInputChange('silt', e.target.value)}
                      placeholder="e.g., 35.0"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.silt 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 pointer-events-none">
                      %
                    </span>
                  </div>
                  {errors.silt && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.silt}</p>
                  )}
                </div>

                {/* 3. Clay Percentage */}
                <div>
                  <label htmlFor="clay" className="block text-xs font-bold text-slate-800 mb-1.5">
                    3. Clay Percentage (clay_pct)
                  </label>
                  <div className="relative">
                    <input
                      id="clay"
                      type="text"
                      inputMode="decimal"
                      value={formData.clay}
                      onChange={(e) => handleInputChange('clay', e.target.value)}
                      placeholder="e.g., 20.0"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.clay 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 pointer-events-none">
                      %
                    </span>
                  </div>
                  {errors.clay && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.clay}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Moisture & Organic Matter Group */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Droplets className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                    Moisture & Organic Matter
                  </h2>
                  <p className="text-xs text-slate-500">
                    Moisture content and organic matter content
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 4. Moisture Percentage */}
                <div>
                  <label htmlFor="moisture" className="block text-xs font-bold text-slate-800 mb-1.5">
                    4. Moisture Percentage (moisture_pct)
                  </label>
                  <div className="relative">
                    <input
                      id="moisture"
                      type="text"
                      inputMode="decimal"
                      value={formData.moisture}
                      onChange={(e) => handleInputChange('moisture', e.target.value)}
                      placeholder="e.g., 28.5"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.moisture 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 pointer-events-none">
                      %
                    </span>
                  </div>
                  {errors.moisture ? (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.moisture}</p>
                  ) : (
                    <p className="text-[11px] text-slate-400 mt-1">Moisture content</p>
                  )}
                </div>

                {/* 5. Organic Matter Percentage */}
                <div>
                  <label htmlFor="organicMatter" className="block text-xs font-bold text-slate-800 mb-1.5">
                    5. Organic Matter Percentage (organic_matter_pct)
                  </label>
                  <div className="relative">
                    <input
                      id="organicMatter"
                      type="text"
                      inputMode="decimal"
                      value={formData.organicMatter}
                      onChange={(e) => handleInputChange('organicMatter', e.target.value)}
                      placeholder="e.g., 3.2"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.organicMatter 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 pointer-events-none">
                      %
                    </span>
                  </div>
                  {errors.organicMatter ? (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.organicMatter}</p>
                  ) : (
                    <p className="text-[11px] text-slate-400 mt-1">Organic matter content</p>
                  )}
                </div>
              </div>
            </div>

            {/* 3. Soil Nutrients & pH Group */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 shadow-xs">
                  <FlaskConical className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                    Nutrients & Soil Chemistry
                  </h2>
                  <p className="text-xs text-slate-500">
                    Available macronutrient concentrations (N, P, K) and acidity/alkalinity scale
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* 6. Nitrogen */}
                <div>
                  <label htmlFor="nitrogen" className="block text-xs font-bold text-slate-800 mb-1.5">
                    6. Nitrogen (nitrogen_mg_kg)
                  </label>
                  <div className="relative">
                    <input
                      id="nitrogen"
                      type="text"
                      inputMode="decimal"
                      value={formData.nitrogen}
                      onChange={(e) => handleInputChange('nitrogen', e.target.value)}
                      placeholder="e.g., 55.0"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.nitrogen 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400 pointer-events-none">
                      mg/kg
                    </span>
                  </div>
                  {errors.nitrogen && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.nitrogen}</p>
                  )}
                </div>

                {/* 7. Phosphorus */}
                <div>
                  <label htmlFor="phosphorus" className="block text-xs font-bold text-slate-800 mb-1.5">
                    7. Phosphorus (phosphorus_mg_kg)
                  </label>
                  <div className="relative">
                    <input
                      id="phosphorus"
                      type="text"
                      inputMode="decimal"
                      value={formData.phosphorus}
                      onChange={(e) => handleInputChange('phosphorus', e.target.value)}
                      placeholder="e.g., 22.0"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.phosphorus 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400 pointer-events-none">
                      mg/kg
                    </span>
                  </div>
                  {errors.phosphorus && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phosphorus}</p>
                  )}
                </div>

                {/* 8. Potassium */}
                <div>
                  <label htmlFor="potassium" className="block text-xs font-bold text-slate-800 mb-1.5">
                    8. Potassium (potassium_mg_kg)
                  </label>
                  <div className="relative">
                    <input
                      id="potassium"
                      type="text"
                      inputMode="decimal"
                      value={formData.potassium}
                      onChange={(e) => handleInputChange('potassium', e.target.value)}
                      placeholder="e.g., 85.0"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.potassium 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-medium text-slate-400 pointer-events-none">
                      mg/kg
                    </span>
                  </div>
                  {errors.potassium && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.potassium}</p>
                  )}
                </div>

                {/* 9. Soil pH */}
                <div>
                  <label htmlFor="ph" className="block text-xs font-bold text-slate-800 mb-1.5">
                    9. Soil pH (ph)
                  </label>
                  <div className="relative">
                    <input
                      id="ph"
                      type="text"
                      inputMode="decimal"
                      value={formData.ph}
                      onChange={(e) => handleInputChange('ph', e.target.value)}
                      placeholder="e.g., 6.5"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-mono tabular-nums bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.ph 
                          ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                          : 'border-slate-200 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100'
                      }`}
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 pointer-events-none">
                      pH
                    </span>
                  </div>
                  {errors.ph && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.ph}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Information Card (Required by prompt) */}
            <div className="rounded-2xl p-5 bg-gradient-to-r from-emerald-50/70 via-teal-50/50 to-slate-50 border border-emerald-100/90 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <Info className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">
                  Decision Tree Classification
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  The entered 9 soil parameters are evaluated by the trained Decision Tree classifier.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-mono">
                  <span>Target Classes: Sandy · Clay · Loamy</span>
                  <span>·</span>
                  <span>Features: 9 Exact Attributes</span>
                </div>
              </div>
            </div>

            {/* Submission Status Message */}
            {submissionStatus.status === 'incomplete' && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{submissionStatus.message}</span>
              </div>
            )}

            {submissionStatus.status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-950 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{submissionStatus.message}</span>
              </div>
            )}

            {/* Buttons Row (Predict Soil Type + Clear All) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                All 9 soil parameters are used as input to the Decision Tree classifier.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Secondary Button: Clear All */}
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="w-1/2 sm:w-auto px-5 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Clear All</span>
                </button>

                {/* Primary Green Button: Predict Soil Type */}
                <button
                  type="submit"
                  className="w-1/2 sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-[0.98] hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-0.5 rounded-xl shadow-[0_2px_10px_rgba(4,120,87,0.2)] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Predict Soil Type</span>
                </button>
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
};
