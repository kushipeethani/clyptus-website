export interface SliderCard {
  id: string;
  title: string;
  category: 'cyberpunk' | 'architecture' | 'space' | 'abstract' | 'ui';
  subtitle: string;
  description: string;
  imageUrl: string;
  accentColor: string;
  tags: string[];
  prompt: string;
  stats: {
    fps: number;
    depth: string;
    vertices: string;
    downloads: string;
  };
}

export const SLIDER_CARDS: SliderCard[] = [
  {
    id: 'card-1',
    title: 'SAP S/4HANA CLOUD ERP',
    category: 'ui',
    subtitle: 'Next-Gen Enterprise Core',
    description: 'Transforming enterprise operations with in-memory SAP S/4HANA Cloud ERP, automated financial ledgers, and real-time business analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#38bdf8',
    tags: ['SAP S/4HANA', 'Enterprise ERP', 'RISE with SAP', 'In-Memory DB'],
    prompt: 'Implement an enterprise SAP S/4HANA Cloud dashboard showcase featuring real-time financial telemetry, automated ledgers, and 3D spiral card navigation.',
    stats: { fps: 60, depth: 'RISE Certified', vertices: '4.8k', downloads: '3,420' }
  },
  {
    id: 'card-2',
    title: 'ENTERPRISE AI AGENTS',
    category: 'abstract',
    subtitle: 'Autonomous Intelligence & LLMs',
    description: 'Multi-agent AI architectures automating complex financial audits, supply chain predictions, and LLM-driven document intelligence.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#a855f7',
    tags: ['AI Agents', 'GenAI', 'Databricks', 'Predictive ML'],
    prompt: 'Create an autonomous enterprise AI agent visualization with dynamic neural network nodes, predictive telemetry, and high-contrast card slider UI.',
    stats: { fps: 60, depth: 'Neural Layer', vertices: '14.2k', downloads: '4,980' }
  },
  {
    id: 'card-3',
    title: 'GLOBAL IT RECRUITING',
    category: 'cyberpunk',
    subtitle: 'Specialized SAP & AI Talent',
    description: 'Deploying top 1% vetted SAP consultants, AI engineers, and cloud architects across 30+ countries for rapid project delivery.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#10b981',
    tags: ['IT Staffing', 'SAP Talent', 'Contract Deployment', 'Global Team'],
    prompt: 'Design a global IT staffing and talent recruitment interactive showcase with instant consultant matching and contract deployment workflows.',
    stats: { fps: 60, depth: '330+ Talent', vertices: '6.5k', downloads: '2,150' }
  },
  {
    id: 'card-4',
    title: 'SAP SUCCESSFACTORS HR',
    category: 'ui',
    subtitle: 'Human Experience Management',
    description: 'Empowering global workforces with SAP SuccessFactors HXM Cloud, 30+ country payroll localizations, and talent management.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#f59e0b',
    tags: ['SuccessFactors', 'HXM Cloud', 'Global Payroll', 'Talent Management'],
    prompt: 'Build a SAP SuccessFactors HXM Cloud solution card with workforce analytics, localized payroll modules, and biomorphic card transitions.',
    stats: { fps: 60, depth: '30+ Localized', vertices: '5.1k', downloads: '1,890' }
  },
  {
    id: 'card-5',
    title: 'PREDICTIVE SUPPLY CHAIN AI',
    category: 'space',
    subtitle: 'Autonomous Logistics Nodes',
    description: 'AI-driven demand forecasting, real-time inventory optimization, and automated vendor procurement integrated directly into SAP.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#ec4899',
    tags: ['Supply Chain AI', 'Demand Forecasting', 'Logistics', 'Automated ERP'],
    prompt: 'Develop an AI supply chain forecasting module featuring 3D node connections, real-time inventory tracking, and dynamic depth perspective.',
    stats: { fps: 60, depth: 'Logistics AI', vertices: '9.8k', downloads: '3,120' }
  },
  {
    id: 'card-6',
    title: 'SAP BTP INTEGRATION',
    category: 'architecture',
    subtitle: 'Business Technology Platform',
    description: 'Connecting multi-cloud environments, SAP extension suites, and enterprise REST/GraphQL APIs with zero data latency.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#06b6d4',
    tags: ['SAP BTP', 'Cloud Integration', 'Extension Suite', 'Enterprise APIs'],
    prompt: 'Construct a SAP Business Technology Platform (BTP) integration card showing cloud interconnectivity and custom extension modules.',
    stats: { fps: 60, depth: 'BTP Enterprise', vertices: '8.4k', downloads: '2,640' }
  },
  {
    id: 'card-7',
    title: 'SPECIALIZED SAP CONSULTANTS',
    category: 'abstract',
    subtitle: 'On-Demand Functional Leads',
    description: 'Certified SAP FICO, MM, SD, ABAP, and BTP specialists available for immediate project onboarding and long-term AMS support.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#6366f1',
    tags: ['SAP FICO', 'ABAP Developers', 'On-Demand Experts', 'AMS Support'],
    prompt: 'Design a specialized SAP consultant deployment card detailing module expertise (FICO, ABAP, BTP) and rapid 48-hour onboarding.',
    stats: { fps: 60, depth: 'Vetted 100%', vertices: '7.2k', downloads: '2,890' }
  },
  {
    id: 'card-8',
    title: 'AI DOCUMENT INTELLIGENCE',
    category: 'ui',
    subtitle: 'Generative OCR & Contract Parsing',
    description: 'Automating high-volume invoice processing, purchase order matching, and contract parsing with 99.4% AI accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#8b5cf6',
    tags: ['Document AI', 'Generative OCR', 'ERP Automation', 'NLP Parsing'],
    prompt: 'Build a generative AI document intelligence card highlighting invoice OCR parsing, automated SAP post, and 99.4% accuracy metrics.',
    stats: { fps: 60, depth: '99.4% Accuracy', vertices: '11k', downloads: '4,100' }
  },
  {
    id: 'card-9',
    title: 'SAP MIGRATION & AMS 24/7',
    category: 'architecture',
    subtitle: 'Zero Downtime Conversions',
    description: 'Proven brownfield and greenfield SAP ECC to S/4HANA migrations backed by SLA-driven 24/7 Application Management Services.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#f97316',
    tags: ['S/4HANA Migration', '24/7 AMS', 'Cloud ERP', 'Zero Downtime'],
    prompt: 'Create a SAP S/4HANA migration & AMS support showcase detailing zero-downtime conversion steps and 24/7 global SLA monitoring.',
    stats: { fps: 60, depth: '99.9% Uptime', vertices: '6.7k', downloads: '1,950' }
  },
  {
    id: 'card-10',
    title: 'EXECUTIVE IT LEADERSHIP RECRUITMENT',
    category: 'cyberpunk',
    subtitle: 'Fractional CTOs & Directors',
    description: 'Connecting global enterprises with executive IT leadership, enterprise solution architects, and digital transformation directors.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#14b8a6',
    tags: ['Executive Search', 'Fractional CTO', 'IT Leadership', 'Digital Transformation'],
    prompt: 'Implement an executive IT leadership search presentation card showcasing C-level tech talent placement and strategic advisory services.',
    stats: { fps: 60, depth: 'Executive Tier', vertices: '7.3k', downloads: '2,400' }
  }
];

export interface SpiralConfig {
  radius: number;          // Helix radius in px (180 - 450)
  pitch: number;           // Vertical elevation step per card (20 - 120)
  tightness: number;       // Rotations per total cards (0.5 - 3)
  tiltAngle: number;       // Stage tilt angle in degrees (-30 to +30)
  perspective: number;     // Camera perspective in px (800 - 2000)
  glassBlur: number;       // Frosted glass blur amount (0 - 20)
  aspectRatio: 'portrait' | 'landscape' | 'square';
  theme: 'tide' | 'matrix' | 'amber' | 'rose';
  autoRotate: boolean;
  rotationSpeed: number;   // Speed multiplier (0.1 - 2.0)
  visibleFarCards: boolean; // Toggle far-side visibility frosted effect
}

export const DEFAULT_SPIRAL_CONFIG: SpiralConfig = {
  radius: 194,
  pitch: 63,
  tightness: 1.3,
  tiltAngle: -1,
  perspective: 1150,
  glassBlur: 10,
  aspectRatio: 'portrait',
  theme: 'tide',
  autoRotate: true,
  rotationSpeed: 0.5,
  visibleFarCards: true,
};
