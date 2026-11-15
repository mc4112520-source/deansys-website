import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { expertiseData } from '../../data/expertiseData';
import { 
  Compass, 
  Layers, 
  FileSpreadsheet, 
  Cpu, 
  Settings, 
  Activity, 
  CheckCircle2, 
  ShieldCheck,
  Binary
} from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState(expertiseData[0].id);

  const activeExpertise = expertiseData.find(item => item.id === activeTab) || expertiseData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Settings':
        return <Settings className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertise" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="TECHNICAL CAPABILITIES"
          title="Engineered for Precision &amp; Manufacturability"
          subtitle="Our core technical disciplines leverage established mechanical engineering principles, strict tolerance calculations, and industry standard CAD environments."
        />

        {/* Interactive Expertise Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            {expertiseData.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-navy-900 border-navy-900 text-white shadow-lg'
                      : 'bg-surface-light border-metallic-200/90 text-navy-900 hover:bg-white hover:border-metallic-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded flex items-center justify-center transition-colors ${
                      isActive 
                        ? 'bg-orange-500 text-navy-950 font-bold' 
                        : 'bg-navy-100/60 text-navy-800 group-hover:text-orange-600'
                    }`}>
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <div className={`text-xs font-mono tracking-wider uppercase ${
                        isActive ? 'text-orange-400' : 'text-metallic-500'
                      }`}>
                        {item.category}
                      </div>
                      <div className="font-bold font-display text-sm sm:text-base mt-0.5">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className={`w-2 h-2 rounded-full transition-transform ${
                    isActive ? 'bg-orange-500 scale-125' : 'bg-metallic-300 group-hover:bg-metallic-400'
                  }`}></div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Technical Panel */}
          <div className="lg:col-span-7 bg-navy-950 rounded-xl p-6 sm:p-8 text-white border border-navy-800 shadow-2xl relative overflow-hidden">
            {/* Blueprint grid effect in panel */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-navy-800">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block font-bold mb-1">
                    [ DISCIPLINE SPECIFICATION ]
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {activeExpertise.title}
                  </h3>
                </div>
                
                <span className="px-3 py-1 bg-navy-900 border border-navy-700 rounded text-xs font-mono text-metallic-300">
                  CAT: {activeExpertise.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-metallic-300 leading-relaxed">
                {activeExpertise.description}
              </p>

              {/* Technical Capabilities List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase text-metallic-400 tracking-wider font-semibold flex items-center gap-2">
                  <Binary className="w-4 h-4 text-orange-500" />
                  <span>Key Technical Deliverables &amp; Competencies</span>
                </h4>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {activeExpertise.technicalCapabilities.map((cap, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded bg-navy-900/80 border border-navy-800 flex items-start gap-3 text-xs sm:text-sm text-metallic-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Standards Badges */}
              <div className="pt-4 border-t border-navy-800">
                <div className="text-xs font-mono text-metallic-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  <span>Applicable Drafting &amp; Engineering Standards</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {activeExpertise.complianceStandards.map((std, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-navy-900 border border-orange-500/40 text-orange-300 rounded text-xs font-mono font-semibold"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Telemetry Metric Box */}
              <div className="p-4 rounded bg-navy-900/90 border border-navy-800 font-mono text-xs text-metallic-300 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span>Inspection Ready</span>
                </div>
                <div>
                  <span className="text-metallic-400">Quality Check:</span> 100% Geometry Interference Verified
                </div>
                <div className="text-orange-400 font-semibold">
                  ASME / ISO Aligned
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

