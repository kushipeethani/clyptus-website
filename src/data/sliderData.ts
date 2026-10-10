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
  pageRoute?: 'SAP' | 'AI' | 'Recruiting';
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
    title: 'SAP S/4HANA CLOUD ERP & BTP',
    category: 'ui',
    subtitle: 'SAP Practice & Digital Core',
    description: 'Enterprise S/4HANA greenfield implementations, brownfield migrations, and S/4HANA upgrades backed by clean-core SAP BTP extensions, automated ledgers, and 24/7 AMS support.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#0089D7',
    tags: ['SAP S/4HANA', 'BTP Extensions', 'RISE with SAP', 'SLA AMS'],
    pageRoute: 'SAP',
    prompt: 'Implement an enterprise SAP S/4HANA Cloud ERP dashboard featuring real-time financial ledgers, clean core BTP microservices, and 3D card navigation.',
    stats: { fps: 60, depth: 'S/4HANA Core', vertices: '250+ Experts', downloads: '50+ Global' }
  },
  {
    id: 'card-2',
    title: 'GENERATIVE AI & AGENTIC PIPELINES',
    category: 'abstract',
    subtitle: 'AI & Data Intelligence Practice',
    description: 'Multi-agent AI architectures, custom LLM fine-tuning, RAG enterprise search engines, and automated document OCR parsing with 99.4% precision integrated directly into business workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#a855f7',
    tags: ['GenAI Agents', 'Custom LLMs', 'RAG Search', 'Document OCR'],
    pageRoute: 'AI',
    prompt: 'Create an autonomous enterprise AI agent visualization with dynamic neural network nodes, predictive telemetry, and high-contrast card slider UI.',
    stats: { fps: 60, depth: '99.4% Accuracy', vertices: 'PyTorch/CUDA', downloads: '12+ LLM Models' }
  },
  {
    id: 'card-3',
    title: 'STRATEGIC IT & SAP RECRUITING',
    category: 'cyberpunk',
    subtitle: 'Global Talent Acquisition',
    description: 'Proactive workforce sourcing for senior SAP consultants, full-stack cloud engineers, executive tech leaders, and flexible contract, contract-to-hire, or permanent global staffing.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#10b981',
    tags: ['IT Staffing', 'SAP Talent', 'Leadership Search', 'Global RPO'],
    pageRoute: 'Recruiting',
    prompt: 'Design a global IT staffing and talent recruitment interactive showcase with instant consultant matching and contract deployment workflows.',
    stats: { fps: 60, depth: '330+ Talent', vertices: 'Top 1% Vetted', downloads: 'UAE, USA & India' }
  },
  {
    id: 'card-4',
    title: 'SAP BRIM MONETIZATION & BILLING',
    category: 'ui',
    subtitle: 'Subscription & Usage Billing',
    description: 'High-throughput Convergent Charging (CC), Convergent Invoicing (CI), SOM subscription order management, and FI-CA Contract A/R for telecom, utilities, software SaaS & airlines.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#0089D7',
    tags: ['SAP BRIM', 'SOM / CC / CI', 'FI-CA A/R', 'Usage Rating'],
    pageRoute: 'SAP',
    prompt: 'Build a SAP BRIM CoE billing monetization card with high-throughput CC rating engines, SOM contract lifecycles, and automated IFRS 15 revenue recognition.',
    stats: { fps: 60, depth: 'BRIM CoE Lab', vertices: 'High Throughput', downloads: 'IFRS 15 Compliant' }
  },
  {
    id: 'card-5',
    title: 'AI PREDICTIVE ANALYTICS & DASHBOARDS',
    category: 'space',
    subtitle: 'Intelligent Business Forecasting',
    description: 'Building predictive ML models and automated executive dashboards over ERP data, enabling leadership to forecast supply chain demands, cash flows, and inventory optimization in real-time.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#ec4899',
    tags: ['Predictive ML', 'ERP Data Mining', 'Databricks', 'Supply Chain AI'],
    pageRoute: 'AI',
    prompt: 'Develop an AI supply chain forecasting module featuring 3D node connections, real-time inventory tracking, and dynamic depth perspective.',
    stats: { fps: 60, depth: 'Real-time Feeds', vertices: 'Custom ML', downloads: 'Quantifiable ROI' }
  },
  {
    id: 'card-6',
    title: 'CONTRACT & PERMANENT IT STAFFING',
    category: 'cyberpunk',
    subtitle: 'Niche Tech Talent Placement',
    description: 'Rapid 48-hour onboarding for specialized ABAP developers, SAP FICO leads, DevOps engineers, and full-stack cloud practitioners tailored for short-term projects or permanent hires.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#10b981',
    tags: ['On-Demand Staffing', 'ABAP Engineers', 'SAP FICO', '48-Hr Onboard'],
    pageRoute: 'Recruiting',
    prompt: 'Design a specialized SAP consultant deployment card detailing module expertise (FICO, ABAP, BTP) and rapid 48-hour onboarding.',
    stats: { fps: 60, depth: '48-Hr Onboarding', vertices: 'Verified Skill Matrix', downloads: 'Contract/Perm' }
  },
  {
    id: 'card-7',
    title: 'SAP BTP INTEGRATION & EXTENSIONS',
    category: 'architecture',
    subtitle: 'Business Technology Platform',
    description: 'Connecting multi-cloud environments, SAP Fiori UX enhancements, 50+ pre-built plugin accelerators, and custom BTP extension microservices with zero data latency.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#0089D7',
    tags: ['SAP BTP', 'Fiori Apps', '50+ Add-ons', 'Cloud Integration'],
    pageRoute: 'SAP',
    prompt: 'Construct a SAP Business Technology Platform (BTP) integration card showing cloud interconnectivity and custom extension modules.',
    stats: { fps: 60, depth: '50+ Add-ons', vertices: 'REST/GraphQL', downloads: 'Zero Data Latency' }
  },
  {
    id: 'card-8',
    title: 'ENTERPRISE AI OCR & DOCUMENT PROCESSING',
    category: 'abstract',
    subtitle: 'Automated Invoice & Contract Intelligence',
    description: 'Automating high-volume invoice processing, purchase order matching, and contract parsing with 99.4% AI accuracy integrated directly into SAP & enterprise ERP systems.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#8b5cf6',
    tags: ['Document AI', 'Generative OCR', 'ERP Automation', 'Contract Parsing'],
    pageRoute: 'AI',
    prompt: 'Build a generative AI document intelligence card highlighting invoice OCR parsing, automated SAP post, and 99.4% accuracy metrics.',
    stats: { fps: 60, depth: '99.4% Accuracy', vertices: 'Automated SAP Post', downloads: 'Enterprise Scale' }
  },
  {
    id: 'card-9',
    title: 'EXECUTIVE IT LEADERSHIP RECRUITMENT',
    category: 'cyberpunk',
    subtitle: 'CXOs & Enterprise Architects',
    description: 'Connecting global enterprises with executive IT leadership, VP Engineering, Enterprise Solution Architects, and SAP Program Directors with proven global delivery records.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    accentColor: '#10b981',
    tags: ['Executive Search', 'VP Engineering', 'Enterprise Architect', 'CXO Placement'],
    pageRoute: 'Recruiting',
    prompt: 'Implement an executive IT leadership search presentation card showcasing C-level tech talent placement and strategic advisory services.',
    stats: { fps: 60, depth: 'Executive Tier', vertices: 'Global Delivery', downloads: 'Confidential Match' }
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
