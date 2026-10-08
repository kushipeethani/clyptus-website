import React from 'react';
import { 
  Building2, 
  Globe2, 
  Users, 
  Award, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const stats = [
    { number: '10+', label: 'Years of Experience', desc: 'Implementation, Migration, Upgradation, Rollout & AMS services' },
    { number: '120+', label: 'SAP Consultants', desc: 'Expertise in SAP S/4HANA, SuccessFactors & HCM Payroll' },
    { number: '5+', label: 'RDS Packages', desc: 'SAP SuccessFactors Rapid Deployment Solutions' },
    { number: '50+', label: 'Global Projects', desc: 'Enterprise transformation projects delivered worldwide' },
    { number: '30+', label: 'Country Localizations', desc: 'Deep regulatory & regional tax localization experience' },
    { number: '330+', label: 'Talent Deployed', desc: 'Skilled engineers & consultants placed globally' },
    { number: '50+', label: 'Add-on Assets', desc: 'Pre-built plugin accelerators & enterprise software assets' },
  ];

  const timeline = [
    {
      period: '2014 - 2016',
      step: '01',
      title: 'Foundation & Initial Expansion',
      points: [
        'Company founded with core SAP & HCM practice',
        'Delivered first international SAP project in Dubai',
        'Established dedicated ERP delivery center'
      ]
    },
    {
      period: '2016 - 2018',
      step: '02',
      title: 'Global Footprint Growth',
      points: [
        'Expanded SAP delivery across 3+ countries',
        'Served over 15+ enterprise customers',
        'Team grew to 65+ consultants with major UAE & India rollouts'
      ]
    },
    {
      period: '2018 - 2020',
      step: '03',
      title: 'S/4HANA & Cloud Leadership',
      points: [
        'Introduced SAP Cloud Services portfolio',
        'Team scaled to 87+ senior SAP consultants',
        'Launched dedicated SAP S/4HANA migration practice'
      ]
    },
    {
      period: '2020 - 2022',
      step: '04',
      title: 'Analytics & SAP Silver Partner',
      points: [
        'Introduced Data Analytics & BRIM Staffing',
        'Achieved SAP Partner Silver Certification',
        'Scaled to 120+ team strength & 110+ customer base'
      ]
    },
    {
      period: '2022 - Present',
      step: '05',
      title: 'BTP, AI & Next-Gen Innovation',
      points: [
        'Introduced SAP BTP (Business Technology Platform) Practice',
        'Built proprietary SAP Add-on Solutions & integrated SAP AI capabilities',
        'Team expanded to 250+ SAP & Cloud consultants globally'
      ]
    }
  ];

  const valueProps = [
    {
      icon: Building2,
      title: 'Industry Specialization',
      desc: 'Sector-specific accelerators and pre-built solutions for banking, pharma, oil & gas, retail, and energy industries.'
    },
    {
      icon: Layers,
      title: 'Flexible Engagement Models',
      desc: 'Customizable delivery frameworks with innovative assets and client-centric teams tailored to your business needs.'
    },
    {
      icon: Cpu,
      title: 'SAP Center of Excellence',
      desc: 'Deep expertise and innovation hub with global delivery capabilities across multiple SAP & Oracle technologies.'
    },
    {
      icon: Award,
      title: 'Measurable Outcomes',
      desc: 'Consistent, high-quality deliverables with quantifiable ROI and value realization frameworks.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* HERO SECTION - ABOUT CLYPTUS                         */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200/80 overflow-hidden">
        
        {/* Ambient Glow Background Orbs (Aurora Effect) */}
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gradient-to-tr from-amber-400/25 via-orange-300/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-12 -right-24 w-[450px] h-[450px] bg-gradient-to-bl from-blue-500/25 via-sky-400/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            
            {/* Left Content */}
            <div className="lg:w-7/12">
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-3 leading-[1.1]">
                About <span className="text-blue-600">Clyptus</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-black text-orange-600 mb-6 tracking-tight">
                Enterprise Technology & ERP Transformation Partner
              </h2>

              <div className="space-y-4 text-base text-slate-600 font-normal leading-relaxed">
                <p>
                  Clyptus Software Solutions helps organizations implement, modernize, integrate, and manage their enterprise technology.
                </p>
                <p>
                  We specialize in <strong className="text-slate-900 font-bold">SAP</strong> and <strong className="text-slate-900 font-bold">Oracle ERP</strong> services, supporting businesses across their technology lifecycle from ERP implementation and migration to rollout, integration, and ongoing application support.
                </p>
                <p>
                  Our expertise spans <strong className="text-blue-600 font-bold">SAP S/4HANA</strong>, <strong className="text-blue-600 font-bold">SuccessFactors</strong>, <strong className="text-blue-600 font-bold">HCM</strong>, <strong className="text-blue-600 font-bold">BRIM</strong>, and <strong className="text-blue-600 font-bold">BTP</strong>, along with <strong className="text-indigo-600 font-bold">Oracle ERP Cloud</strong>, <strong className="text-indigo-600 font-bold">Oracle EBS</strong>, <strong className="text-indigo-600 font-bold">Oracle Financials</strong>, <strong className="text-indigo-600 font-bold">Oracle HCM</strong>, and <strong className="text-indigo-600 font-bold">PeopleSoft</strong>.
                </p>
                <p>
                  Beyond providing ERP services, we support the technology that connects and extends the enterprise, including <strong className="text-slate-900 font-bold">cloud, data and analytics, AI, integration, managed services, and IT staffing</strong>.
                </p>
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100/90 text-slate-700 font-semibold leading-relaxed shadow-xs">
                  At Clyptus, we focus on practical solutions that fit the way businesses operate helping organizations manage complex technology today while preparing for what comes next.
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('Contact')}
                  className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                </button>
              </div>
            </div>

            {/* Right Visual Image Box */}
            <div className="lg:w-5/12 w-full mt-4 lg:mt-0">
              <div className="p-8 sm:p-10 rounded-3xl bg-white text-slate-900 shadow-xl border border-slate-200/90 relative">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 font-mono font-extrabold text-xl shadow-md shadow-blue-500/30">
                  C
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  Why Choose Clyptus IT Solutions?
                </h3>
                <p className="text-sm text-slate-600 mb-8 font-medium leading-relaxed">
                  Your trusted partner for multi-industry SAP transformation. Clyptus delivers smart, reliable IT solutions tailored to drive your business forward with innovation and efficiency.
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                      SAP SILVER PARTNER CERTIFIED
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                      30+ COUNTRIES LOCALIZATION
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                      330+ GLOBAL TALENT POOL
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* STATS GRID                                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-10 bg-slate-100/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest block mb-2">
              NUMBERS THAT DEFINE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Proven Track Record of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-4xl sm:text-5xl font-black text-blue-600 mb-2">
                    {st.number}
                  </h3>
                  <h4 className="text-sm font-extrabold text-slate-900 mb-2">
                    {st.label}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* OUR JOURNEY TIMELINE                                 */}
      {/* ---------------------------------------------------- */}
      <section id="journey" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest block mb-2">
              OUR EVOLUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-blue-600 ml-4 sm:ml-12 space-y-12 pl-6 sm:pl-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-sm font-mono font-extrabold text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    <span className="text-2xl font-mono font-black text-slate-300">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* WHY CLYPTUS? VALUE PROPOSITION                       */}
      {/* ---------------------------------------------------- */}
      <section id="leadership" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-slate-100/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-widest block mb-2">
              WHY CLYPTUS? VALUE PROPOSITION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              The Clyptus Difference
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-3">
              Partner with Clyptus for a seamless SAP journey powered by expertise, innovation, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp, idx) => {
              const IconComp = vp.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                      {vp.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {vp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-blue-50 border border-blue-200/80 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2 text-slate-900">
                Ready to accelerate your enterprise technology?
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                Talk with our SAP & Oracle transformation experts today.
              </p>
            </div>
            <button
              onClick={() => onNavigate('Contact')}
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
