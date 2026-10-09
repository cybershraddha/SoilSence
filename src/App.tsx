/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SoilCards } from './components/SoilCards';
import { HowItWorks } from './components/HowItWorks';
import { Statistics } from './components/Statistics';
import { SoilAnalysisScreen } from './components/SoilAnalysisScreen';
import { PredictionResultScreen } from './components/PredictionResultScreen';
import { ModelInsightsScreen } from './components/ModelInsightsScreen';
import { AboutProjectScreen } from './components/AboutProjectScreen';
import { Footer } from './components/Footer';
import { SoilDetailModal } from './components/SoilDetailModal';
import { FeatureDictionaryModal } from './components/FeatureDictionaryModal';
import { SoilType } from './data/soilData';
import { 
  SoilInputs, 
  ClassificationResult, 
  evaluateDecisionTree, 
  DEFAULT_SAMPLE_INPUTS 
} from './data/soilModel';

type AppView = 'home' | 'analysis' | 'result' | 'insights' | 'about';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeNav, setActiveNav] = useState<string>('home');
  const [currentInputs, setCurrentInputs] = useState<SoilInputs | null>(null);
  const [predictionResult, setPredictionResult] = useState<ClassificationResult | null>(null);
  
  // Modals for deep feature dictionary and soil type details
  const [selectedSoil, setSelectedSoil] = useState<SoilType | null>(null);
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    setActiveNav(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartAnalysis = () => {
    navigateTo('analysis');
  };

  const handleExploreModel = () => {
    navigateTo('insights');
  };

  
const handlePredict = async (inputs: SoilInputs) => {
  setCurrentInputs(inputs);

  try {
    const response = await fetch(
      'https://soilsense-api.onrender.com/predict',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  sand_pct: Number(inputs.sand_pct),
  silt_pct: Number(inputs.silt_pct),
  clay_pct: Number(inputs.clay_pct),
  moisture_pct: Number(inputs.moisture_pct),
  organic_matter_pct: Number(inputs.organic_matter_pct),
  nitrogen_mg_kg: Number(inputs.nitrogen_mg_kg),
  phosphorus_mg_kg: Number(inputs.phosphorus_mg_kg),
  potassium_mg_kg: Number(inputs.potassium_mg_kg),
  ph: Number(inputs.ph),
}),
      }
    );

    if (!response.ok) {
      throw new Error('Backend prediction failed');
    }

    const data = await response.json();
    const result = evaluateDecisionTree(inputs);

    setPredictionResult({
      ...result,
      predictedClass: data.predicted_soil_type,
    });

    navigateTo('result');
  } catch (error) {
    console.error('Prediction error:', error);
    alert('Prediction failed. Please check the backend connection.');
  }
};


  const handleAnalyzeAnother = () => {
    setCurrentInputs(null);
    navigateTo('analysis');
  };

  const handleBackToAnalysis = () => {
    navigateTo('analysis');
  };

  const handleLoadDefaultAndPredict = () => {
    setCurrentInputs(DEFAULT_SAMPLE_INPUTS);
    const result = evaluateDecisionTree(DEFAULT_SAMPLE_INPUTS);
    setPredictionResult(result);
    navigateTo('result');
  };

  const handleSelectNav = (navId: string) => {
    if (navId === 'home') {
      navigateTo('home');
    } else if (navId === 'analysis') {
      navigateTo('analysis');
    } else if (navId === 'result') {
      navigateTo('result');
    } else if (navId === 'insights') {
      navigateTo('insights');
    } else if (navId === 'about') {
      navigateTo('about');
    }
  };

  const handleTestAgainstSoilClass = (soil: SoilType) => {
    setSelectedSoil(null);
    let sampleInputs: SoilInputs;

    if (soil.id === 'sandy') {
      sampleInputs = {
        sand_pct: '72.0',
        silt_pct: '16.0',
        clay_pct: '12.0',
        moisture_pct: '14.5',
        organic_matter_pct: '1.2',
        nitrogen_mg_kg: '32.0',
        phosphorus_mg_kg: '14.0',
        potassium_mg_kg: '45.0',
        ph: '6.2'
      };
    } else if (soil.id === 'clay') {
      sampleInputs = {
        sand_pct: '18.0',
        silt_pct: '26.0',
        clay_pct: '56.0',
        moisture_pct: '58.0',
        organic_matter_pct: '4.1',
        nitrogen_mg_kg: '88.0',
        phosphorus_mg_kg: '36.0',
        potassium_mg_kg: '160.0',
        ph: '7.3'
      };
    } else {
      sampleInputs = {
        sand_pct: '42.0',
        silt_pct: '38.0',
        clay_pct: '20.0',
        moisture_pct: '34.0',
        organic_matter_pct: '3.6',
        nitrogen_mg_kg: '64.0',
        phosphorus_mg_kg: '28.0',
        potassium_mg_kg: '115.0',
        ph: '6.7'
      };
    }

    setCurrentInputs(sampleInputs);
    navigateTo('analysis');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation Header */}
      <Header
        onStartAnalysis={handleStartAnalysis}
        onExploreModel={handleExploreModel}
        onSelectNav={handleSelectNav}
        activeNav={activeNav}
      />

      {/* Main Screen Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div key="home" className="animate-in fade-in duration-300">
            {/* 1. Hero Section */}
            <Hero
              onStartAnalysis={handleStartAnalysis}
              onExploreModel={handleExploreModel}
            />

            {/* 2. Below Hero: Three Small Soil Cards */}
            <SoilCards
              onSelectSoil={(soil) => setSelectedSoil(soil)}
            />

            {/* 3. How It Works Section (3 simple steps) */}
            <HowItWorks
              onStartAnalysis={handleStartAnalysis}
              onExploreModel={handleExploreModel}
            />

            {/* 4. Small Statistics Section (3 Soil Classes, 9 Input Features, Decision Tree Model) */}
            <Statistics
              onOpenFeatures={() => setIsFeaturesModalOpen(true)}
              onOpenModelArchitecture={() => navigateTo('insights')}
            />
          </div>
        )}

        {currentView === 'analysis' && (
          <div key="analysis" className="animate-in fade-in duration-300">
            <SoilAnalysisScreen
              onBackToHome={() => navigateTo('home')}
              onPredict={handlePredict}
              initialInputs={currentInputs}
            />
          </div>
        )}

        {currentView === 'result' && (
          <div key="result" className="animate-in fade-in duration-300">
            <PredictionResultScreen
              result={predictionResult}
              onAnalyzeAnother={handleAnalyzeAnother}
              onBackToAnalysis={handleBackToAnalysis}
              onLoadDefaultAndPredict={handleLoadDefaultAndPredict}
            />
          </div>
        )}

        {currentView === 'insights' && (
          <div key="insights" className="animate-in fade-in duration-300">
            <ModelInsightsScreen
              onGoToAnalysis={() => navigateTo('analysis')}
            />
          </div>
        )}

        {currentView === 'about' && (
          <div key="about" className="animate-in fade-in duration-300">
            <AboutProjectScreen
              onGoToAnalysis={() => navigateTo('analysis')}
              onGoToInsights={() => navigateTo('insights')}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onSelectNav={handleSelectNav} isHome={currentView === 'home'} />

      {/* Interactive Detail Modals */}
      <SoilDetailModal
        soil={selectedSoil}
        onClose={() => setSelectedSoil(null)}
        onStartAnalysis={() => {
          if (selectedSoil) {
            handleTestAgainstSoilClass(selectedSoil);
          } else {
            navigateTo('analysis');
          }
        }}
      />

      <FeatureDictionaryModal
        isOpen={isFeaturesModalOpen}
        onClose={() => setIsFeaturesModalOpen(false)}
      />
    </div>
  );
}
