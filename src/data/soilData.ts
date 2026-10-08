export interface SoilType {
  id: 'sandy' | 'clay' | 'loamy';
  name: string;
  badge: string;
  texture: string;
  summary: string;
  characteristics: string[];
  decisionRuleHint: string;
}

export interface InputFeature {
  id: string;
  symbol: string;
  name: string;
  unit: string;
  category: string;
  typicalRange: string;
  description: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyAttributes: string[];
}

export const SOIL_TYPES: SoilType[] = [
  {
    id: 'sandy',
    name: 'Sandy',
    badge: 'High Drainage',
    texture: 'Coarse-grained, low cohesion',
    summary:
      'Sandy soils are dominated by large mineral particles, drain quickly, and retain comparatively less water and nutrients.',
    characteristics: [
      'Large particle size and high aeration',
      'Low water and nutrient retention capacity',
      'Warms up quickly and is easy to till'
    ],
    decisionRuleHint: 'Typically selected when sand proportion is high and clay proportion remains low.'
  },
  {
    id: 'clay',
    name: 'Clay',
    badge: 'High Retention',
    texture: 'Fine-grained, cohesive matrix',
    summary:
      'Clay soils contain very fine particles that hold water and nutrients effectively but can compact and drain slowly.',
    characteristics: [
      'High moisture and nutrient holding potential',
      'Dense structure with slower infiltration',
      'Can become sticky when wet and hard when dry'
    ],
    decisionRuleHint: 'Commonly selected when clay and moisture levels are elevated.'
  },
  {
    id: 'loamy',
    name: 'Loamy',
    badge: 'Balanced Profile',
    texture: 'Balanced sand, silt, and clay blend',
    summary:
      'Loamy soils combine favorable drainage and retention characteristics, making them suitable for diverse crops.',
    characteristics: [
      'Balanced particle distribution',
      'Moderate drainage and moisture retention',
      'Good structure for root growth and cultivation'
    ],
    decisionRuleHint: 'Assigned when feature values indicate a balanced intermediate composition.'
  }
];

export const INPUT_FEATURES: InputFeature[] = [
  {
    id: 'sand_pct',
    symbol: 'SAND',
    name: 'Sand Percentage',
    unit: '%',
    category: 'Texture',
    typicalRange: '0–100',
    description: 'Relative proportion of sand-sized mineral particles.'
  },
  {
    id: 'silt_pct',
    symbol: 'SILT',
    name: 'Silt Percentage',
    unit: '%',
    category: 'Texture',
    typicalRange: '0–100',
    description: 'Relative proportion of silt-sized particles in the sample.'
  },
  {
    id: 'clay_pct',
    symbol: 'CLAY',
    name: 'Clay Percentage',
    unit: '%',
    category: 'Texture',
    typicalRange: '0–100',
    description: 'Relative proportion of clay particles that influence cohesion and retention.'
  },
  {
    id: 'moisture_pct',
    symbol: 'H2O',
    name: 'Moisture Percentage',
    unit: '%',
    category: 'Hydrology',
    typicalRange: '0–100',
    description: 'Water content measured in the soil sample at analysis time.'
  },
  {
    id: 'organic_matter_pct',
    symbol: 'OM',
    name: 'Organic Matter',
    unit: '%',
    category: 'Chemistry',
    typicalRange: '0–20',
    description: 'Estimated portion of decomposed organic material in the soil.'
  },
  {
    id: 'nitrogen_mg_kg',
    symbol: 'N',
    name: 'Nitrogen',
    unit: 'mg/kg',
    category: 'Nutrients',
    typicalRange: '0–200',
    description: 'Available nitrogen concentration supporting vegetative growth.'
  },
  {
    id: 'phosphorus_mg_kg',
    symbol: 'P',
    name: 'Phosphorus',
    unit: 'mg/kg',
    category: 'Nutrients',
    typicalRange: '0–150',
    description: 'Available phosphorus concentration linked to root and energy transfer.'
  },
  {
    id: 'potassium_mg_kg',
    symbol: 'K',
    name: 'Potassium',
    unit: 'mg/kg',
    category: 'Nutrients',
    typicalRange: '0–300',
    description: 'Available potassium concentration influencing stress resilience.'
  },
  {
    id: 'ph',
    symbol: 'pH',
    name: 'Soil pH',
    unit: 'pH',
    category: 'Chemistry',
    typicalRange: '3.5–9.0',
    description: 'Acidity/alkalinity measure affecting nutrient availability.'
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Capture Soil Metrics',
    subtitle: 'Input 9 measured parameters',
    description:
      'Enter laboratory or field measurements for texture, moisture, nutrient, and pH indicators.',
    keyAttributes: ['9 normalized inputs', 'Structured feature schema', 'Fast client-side validation']
  },
  {
    step: '02',
    title: 'Evaluate Decision Rules',
    subtitle: 'Deterministic tree traversal',
    description:
      'The model applies rule-based thresholds learned from labeled soil observations to traverse a decision path.',
    keyAttributes: ['Gini-based split logic', 'Interpretable branch checks', 'Consistent inference path']
  },
  {
    step: '03',
    title: 'Return Soil Class',
    subtitle: 'Sandy · Clay · Loamy output',
    description:
      'A final class label is produced with a short explanation and rule trace for transparent interpretation.',
    keyAttributes: ['3-class classification', 'Human-readable summary', 'Actionable agronomy context']
  }
];
