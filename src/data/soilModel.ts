export interface SoilInputs {
  sand_pct: string;
  silt_pct: string;
  clay_pct: string;
  moisture_pct: string;
  organic_matter_pct: string;
  nitrogen_mg_kg: string;
  phosphorus_mg_kg: string;
  potassium_mg_kg: string;
  ph: string;
}

export interface ClassificationResult {
  predictedClass: 'Sandy' | 'Clay' | 'Loamy';
  explanation: string;
  decisionPathSummary: string[];
  inputs: SoilInputs;
  evaluatedAt: string;
}

export const DEFAULT_SAMPLE_INPUTS: SoilInputs = {
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

export const evaluateDecisionTree = (inputs: SoilInputs): ClassificationResult => {
  const sand = Number.parseFloat(inputs.sand_pct);
  const clay = Number.parseFloat(inputs.clay_pct);
  const moisture = Number.parseFloat(inputs.moisture_pct);

  const decisionPathSummary: string[] = [];

  let predictedClass: ClassificationResult['predictedClass'];
  let explanation: string;

  if (sand >= 60 && clay < 20) {
    predictedClass = 'Sandy';
    decisionPathSummary.push(
      `sand_pct (${sand.toFixed(1)}) >= 60 → true`,
      `clay_pct (${clay.toFixed(1)}) < 20 → true`,
      'Leaf node reached: Sandy'
    );
    explanation =
      'This sample is classified as Sandy because sand content is dominant while clay content remains low, indicating faster drainage and lower cohesion.';
  } else if (clay >= 40 || moisture >= 50) {
    predictedClass = 'Clay';
    decisionPathSummary.push(
      `sand_pct (${sand.toFixed(1)}) >= 60 → false`,
      `clay_pct (${clay.toFixed(1)}) >= 40 OR moisture_pct (${moisture.toFixed(1)}) >= 50 → true`,
      'Leaf node reached: Clay'
    );
    explanation =
      'This sample is classified as Clay due to high clay fraction and/or elevated moisture profile, which are consistent with dense, high-retention soil structure.';
  } else {
    predictedClass = 'Loamy';
    decisionPathSummary.push(
      `sand_pct (${sand.toFixed(1)}) >= 60 → false`,
      `clay_pct (${clay.toFixed(1)}) >= 40 OR moisture_pct (${moisture.toFixed(1)}) >= 50 → false`,
      'Leaf node reached: Loamy'
    );
    explanation =
      'This sample is classified as Loamy because feature values are comparatively balanced, indicating intermediate texture and retention properties.';
  }

  return {
    predictedClass,
    explanation,
    decisionPathSummary,
    inputs,
    evaluatedAt: new Date().toLocaleString()
  };
};
