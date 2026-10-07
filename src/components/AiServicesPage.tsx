import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  Workflow, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  BrainCircuit,
  Sparkles,
  Layers,
  Cpu,
  LineChart,
  Bot,
  FlaskConical,
  ShoppingBag,
  Truck,
  HeartPulse,
  Landmark,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface AiServicesPageProps {
  onNavigateContact?: () => void;
}

export const AiServicesPage: React.FC<AiServicesPageProps> = ({ onNavigateContact }) => {
  const [activeServiceTab, setActiveServiceTab] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Set Page Meta Title & Description
  useEffect(() => {
    document.title = "AI Consulting & Development Services | Clyptus";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Clyptus builds generative AI, machine learning and automation solutions for enterprises, from AI assistants to predictive analytics and data platforms.'
      );
    }
  }, []);

  // Mouse tilt effect for 3D AI Core
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroSectionRef.current) return;
    const rect = heroSectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleContactClick = () => {
    if (onNavigateContact) {
      onNavigateContact();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 3 Core AI Services
  const aiServicesList = [
    {
      id: 0,
      number: '01',
      title: 'Data Science & Analytics',
      description: 'Build powerful dashboards and predictive models using ERP and operational data, helping leadership understand the business without waiting for manual reports.',
      icon: BarChart3,
      badge: 'PREDICTIVE MODELS & DASHBOARDS',
    },
    {
      id: 1,
      number: '02',
      title: 'Intelligent Process Automation',
      description: 'Automate repetitive business processes around ERP — including document handling, master-data checks, approvals and reconciliations.',
      icon: Workflow,
      badge: 'ERP WORKFLOW AUTOMATION',
    },
    {
      id: 2,
      number: '03',
      title: 'AI Inside SAP S/4HANA',
      description: 'Put machine learning and advanced analytics within SAP S/4HANA to work on real business processes and generate smarter operational insights.',
      icon: Database,
      badge: 'EMBEDDED SAP MACHINE LEARNING',
    },
  ];

  // Comprehensive Services Catalog Categories
  const generativeAiServices = [
    'Generative AI solutions',
    'AI assistants & copilots',
    'Intelligent process automation',
    'Machine learning & predictive analytics',
    'Conversational AI',
    'AI-powered decision support',
  ];

  const dataServicesList = [
    'Data engineering',
    'Modern data platforms',
    'Business intelligence & reporting',
    'Databricks & Snowflake solutions',
    'Advanced analytics',
    'Data visualization & insights',
  ];

  const modelTypesList = [
    'Natural language processing',
    'Computer vision',
    'Predictive analytics',
    'Generative AI',
    'Recommendation systems',
    'Time series forecasting',
  ];

  // How an AI Project Runs (5 Delivery Steps)
  const projectSteps = [
    {
      step: '01',
      title: 'Data-driven foundation',
      desc: 'High-quality data engineering for accurate insight.',
      icon: Database,
    },
    {
      step: '02',
      title: 'Model engineering',
      desc: 'State-of-the-art algorithms and architectures.',
      icon: Cpu,
    },
    {
      step: '03',
      title: 'Training and validation',
      desc: 'Rigorous testing for reliability and performance.',
      icon: ShieldCheck,
    },
    {
      step: '04',
      title: 'Deployment at scale',
      desc: 'MLOps for smooth and secure deployment.',
      icon: Layers,
    },
    {
      step: '05',
      title: 'Continuous learning',
      desc: 'Models that evolve with your business.',
      icon: RefreshCw,
    },
  ];

  // Innovation Lab (Exploring Tomorrow - R&D Research Focus)
  const innovationLabAreas = [
    { name: 'AI Agents', tag: 'Autonomous Multi-Agent Swarms' },
    { name: 'Digital Twins', tag: 'Real-time Process Simulation' },
    { name: 'Computer Vision', tag: 'Visual Quality & Safety Inspection' },
    { name: 'RPA + GenAI', tag: 'Hyper-automated Workflows' },
    { name: 'Generative AI Architecture', tag: 'Enterprise RAG & Fine-tuning' },
    { name: 'Industry 4.0', tag: 'Smart Manufacturing Analytics' },
  ];

  // Industry Project Lines Case Studies
  const industryProjects = [
    {
      sector: 'Retail',
      title: 'AI-Powered Demand Forecasting',
      desc: 'Machine learning prediction models optimizing inventory levels and order planning across omni-channel fulfillment nodes.',
      icon: ShoppingBag,
      color: 'sky',
    },
    {
      sector: 'Logistics',
      title: 'Intelligent Automation with AI',
      desc: 'Automate invoice processing, shipping manifest validation, and route dispatch optimization with zero manual bottlenecks.',
      icon: Truck,
      color: 'indigo',
    },
    {
      sector: 'Healthcare',
      title: 'Data Lake & Analytics Platform',
      desc: 'Unified patient and operational data platforms powering compliant clinical insights and resource forecasting.',
      icon: HeartPulse,
      color: 'emerald',
    },
    {
      sector: 'Banking',
      title: 'Data Warehouse Modernization',
      desc: 'High-throughput cloud warehouse architectures delivering real-time fraud detection and automated regulatory reporting.',
      icon: Landmark,
      color: 'purple',
    },
  ];

  // FAQ Items
  const faqList = [
    {
      question: 'Do you build AI from scratch or use existing platforms?',
      answer: 'Both. Where a proven analytics or automation platform solves the problem we configure it, because it is faster and cheaper. Where nothing fits, we build.',
    },
    {
      question: 'Can you work with our SAP or ERP data?',
      answer: 'Yes, and that is usually the starting point. Our consultants know the underlying ERP data model, so the analysis reflects how the business actually runs.',
    },
    {
      question: 'What does a first engagement look like?',
      answer: 'A short discovery on a single use case with a defined output at the end, so you can judge the value before committing to a larger programme.',
    },
    {
      question: 'How do you handle our data and confidentiality?',
      answer: 'Work is done under NDA, with access limited to the named project team and data handled according to the terms agreed in the contract.',
    },
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans selection:bg-sky-500/20 selection:text-sky-800">
      
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION                                         */}
      {/* ---------------------------------------------------- */}
      <section 
        ref={heroSectionRef}
        onMouseMove={handleMouseMove}
        className="relative w-full pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80 text-slate-900 select-none"
      >
        {/* Ambient Soft Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* AI Services Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 shadow-xs mb-6 animate-in fade-in slide-in-from-bottom-2">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-ping" />
            <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-sky-700">
              AI SERVICES <span className="text-sky-500 mx-1.5">•</span> ENTERPRISE PRACTICE
            </span>
          </div>

          {/* H1 Main Page Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6 max-w-4xl">
            AI Consulting & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600">Development Services</span>
          </h1>

          {/* Headline & Introduction */}
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4 max-w-3xl">
            “Turn Business Data Into Intelligent Action”
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-10 font-medium">
            Clyptus designs and builds AI solutions for enterprises: generative AI, AI assistants and copilots, machine learning, conversational AI and intelligent process automation. Our data engineers prepare and run the platforms behind them, including Databricks and Snowflake.
          </p>

          {/* Hero CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <button
              onClick={handleContactClick}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Talk to our AI team</span>
              <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3D FLOATING AI CORE STAGE */}
          <div 
            className="relative w-full max-w-3xl h-64 sm:h-72 rounded-3xl bg-white/80 border border-slate-200/80 shadow-2xl backdrop-blur-xl p-6 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Ambient Inner Canvas Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

            {/* Glowing Central AI Core Orb */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 p-1 shadow-[0_0_50px_rgba(2,132,199,0.35)] flex items-center justify-center animate-pulse z-10">
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-white p-2 text-center">
                <BrainCircuit className="w-8 h-8 text-sky-400 mb-1 animate-spin" style={{ animationDuration: '12s' }} />
                <span className="text-[9px] font-mono tracking-widest font-extrabold uppercase text-sky-300">CLYPTUS AI</span>
                <span className="text-[8px] font-mono text-slate-400 font-bold uppercase">CORE ENGINE</span>
              </div>
            </div>

            {/* Floating Satellite Service Nodes */}
            <div className="absolute inset-0 flex items-center justify-between px-8 sm:px-16 pointer-events-none">
              <div className="flex items-center gap-3 bg-white/95 border border-sky-200/80 px-4 py-2.5 rounded-2xl shadow-lg animate-bounce" style={{ animationDuration: '4s' }}>
                <BarChart3 className="w-5 h-5 text-sky-600" />
                <div className="text-left">
                  <span className="block text-xs font-black text-slate-900">Analytics & Models</span>
                  <span className="block text-[9px] font-mono font-bold text-sky-600">PREDICTIVE STACK</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/95 border border-indigo-200/80 px-4 py-2.5 rounded-2xl shadow-lg animate-bounce" style={{ animationDuration: '5s' }}>
                <Workflow className="w-5 h-5 text-indigo-600" />
                <div className="text-left">
                  <span className="block text-xs font-black text-slate-900">ERP Automation</span>
                  <span className="block text-[9px] font-mono font-bold text-indigo-600">AUTONOMOUS AGENTS</span>
                </div>
              </div>
            </div>

            {/* Bottom Node */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 border border-purple-200/80 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 pointer-events-none">
              <Database className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-extrabold text-slate-900">Databricks • Snowflake • SAP S/4HANA</span>
            </div>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* 3 CORE AI PRACTICE PILLARS                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold text-sky-600 uppercase tracking-widest block mb-2">
            PRACTICE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Core Enterprise AI Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore our core practices designed to turn raw operational data into autonomous enterprise intelligence.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aiServicesList.map((srv, idx) => {
            const IconComp = srv.icon;
            const isActive = activeServiceTab === idx;

            return (
              <div
                key={srv.number}
                onClick={() => setActiveServiceTab(idx)}
                className={`group relative p-8 rounded-3xl bg-white border transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? `border-sky-500 shadow-2xl scale-[1.03] ring-2 ring-sky-500/20`
                    : `border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-300`
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono tracking-tighter text-slate-300 group-hover:text-slate-900 transition-colors">
                      {srv.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-extrabold tracking-wider uppercase bg-sky-50 text-sky-700 border border-sky-100">
                      {srv.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[2]" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-sky-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-600 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                    View Interactive Concept →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE SERVICE DYNAMIC VISUALIZATION CANVAS */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

          {activeServiceTab === 0 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-sky-400" />
                <h3 className="text-2xl font-black text-white">01 — Data Science & Predictive Analytics Concept</h3>
              </div>
              <p className="text-sm text-slate-300 max-w-3xl mb-8">
                Interactive predictive forecasting model consuming real-time ERP sales & supply chain metrics to generate instant executive decision curves.
              </p>

              <div className="w-full h-64 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-sky-400 font-bold uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    LIVE PREDICTION ENGINE
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">ACCURACY: 99.4%</span>
                </div>

                <div className="flex items-end justify-between gap-3 h-36 px-4">
                  {[45, 62, 58, 79, 85, 94, 88, 96].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div 
                        className="w-full rounded-t-lg bg-gradient-to-t from-sky-600 via-indigo-500 to-sky-400 transition-all duration-700 hover:brightness-125"
                        style={{ height: `${val}%` }}
                      />
                      <span className="text-[10px] font-mono text-slate-500">M{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeServiceTab === 1 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl font-black text-white">02 — Intelligent Process Automation Workflow</h3>
              </div>
              <p className="text-sm text-slate-300 max-w-3xl mb-8">
                Autonomous document intake, master-data verification, and instant 3-way ERP reconciliation without manual operator delay.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { title: '1. Document Intake', desc: 'PDF / OCR Data Capture' },
                  { title: '2. LLM Extraction', desc: 'Entity & Table Parsing' },
                  { title: '3. ERP Validation', desc: 'Master Data & Rule Checks' },
                  { title: '4. SAP Posting', desc: 'Zero-Touch Reconciliation' },
                ].map((node, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/30 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-indigo-400 font-extrabold mb-2 uppercase">STAGE 0{i + 1}</span>
                    <h4 className="text-base font-extrabold text-white mb-1">{node.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeServiceTab === 2 && (
            <div className="animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-black text-white">03 — AI Inside SAP S/4HANA Architecture</h3>
              </div>
              <p className="text-sm text-slate-300 max-w-3xl mb-8">
                Embedded machine learning models running directly within SAP BTP and S/4HANA core to deliver real-time operational insights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-slate-950 border border-purple-500/30 text-left">
                  <span className="text-[10px] font-mono text-purple-400 font-bold uppercase block mb-2">ERP DATA CORE</span>
                  <h4 className="text-lg font-black text-white mb-1">SAP S/4HANA HANA DB</h4>
                  <p className="text-xs text-slate-400">High-speed in-memory transactional ledger</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-sky-500/30 text-left">
                  <span className="text-[10px] font-mono text-sky-400 font-bold uppercase block mb-2">AI PIPELINE</span>
                  <h4 className="text-lg font-black text-white mb-1">SAP BTP AI Core</h4>
                  <p className="text-xs text-slate-400">Custom ML algorithms & RAG engines</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/30 text-left">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase block mb-2">BUSINESS IMPACT</span>
                  <h4 className="text-lg font-black text-white mb-1">Fiori Smart Insights</h4>
                  <p className="text-xs text-slate-400">Real-time alerts & action suggestions</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* FULL SERVICES & DATA PLATFORMS CATALOG               */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-slate-100/80 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-extrabold text-sky-600 uppercase tracking-widest block mb-2">
              COMPLETE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
              AI & Data Platform Offerings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              From model engineering to modern cloud data infrastructure (Databricks & Snowflake), we cover the entire enterprise AI lifecyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Generative AI & Automation */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">AI Services & Solutions</h3>
                <ul className="space-y-3">
                  {generativeAiServices.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 2: Data Services & Platforms */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Data Services Behind the Models</h3>
                <ul className="space-y-3">
                  {dataServicesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category 3: Model Types */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-6">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Model Architectures</h3>
                <ul className="space-y-3">
                  {modelTypesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* HOW AN AI PROJECT RUNS (5 DELIVERY STAGES)           */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold text-sky-600 uppercase tracking-widest block mb-2">
            DELIVERY METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            How an AI Project Runs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            A battle-tested 5-stage engineering lifecycle designed for accuracy, reliability, and enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {projectSteps.map((st) => {
            const StepIcon = st.icon;
            return (
              <div 
                key={st.step}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 text-xs font-black flex items-center justify-center font-mono">
                      {st.step}
                    </span>
                    <StepIcon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* INNOVATION LAB (EXPLORING TOMORROW - R&D RESEARCH)   */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-extrabold mb-3 uppercase">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>INNOVATION LAB • RESEARCH & EXPLORATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
                Exploring Tomorrow
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-medium">
                Active R&D focus areas and emerging technology evaluations currently undergoing internal validation prior to client delivery rollout.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono max-w-xs">
              <span className="text-amber-400 font-bold block mb-1">⚠️ R&D STATUS NOTE</span>
              Exploration and research initiatives under evaluation. Not presented as production client deliverables until management clearance.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {innovationLabAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white mb-1">{area.name}</h3>
                  <span className="text-[10px] font-mono text-slate-400 block">{area.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* VERIFIED SECTOR CASE STUDIES (PROJECT LINES)          */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold text-indigo-600 uppercase tracking-widest block mb-2">
            INDUSTRY SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Verified Project Lines by Sector
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryProjects.map((proj, idx) => {
            const SectorIcon = proj.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[10px] font-mono font-extrabold text-sky-700 tracking-wider uppercase">
                      {proj.sector}
                    </span>
                    <SectorIcon className="w-5 h-5 text-slate-400 group-hover:text-sky-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-sky-600 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500">
                  <span className="flex items-center gap-1.5 text-sky-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    VERIFIED IMPLEMENTATION
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* FREQUENTLY ASKED QUESTIONS                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold text-sky-600 uppercase tracking-widest block mb-2">
            CLEAR ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqList.map((faq, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-sky-50/40 border border-sky-100/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* FINAL CTA                                            */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto select-none">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-purple-500/10 border border-sky-200/80 text-center shadow-xl overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-sky-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-6">
              Ready to transform your data into intelligent action?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              Talk to the Clyptus AI team about generative AI, machine learning models, Databricks & Snowflake platforms, or SAP AI integration.
            </p>

            <button
              onClick={handleContactClick}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-slate-950 font-black text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Talk to our AI team →</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
