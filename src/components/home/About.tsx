import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { 
  Compass, 
  Layers, 
  Cpu, 
  FileCheck2, 
  Wrench, 
  Settings2,
  Info
} from 'lucide-react';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: 'Mechanical Engineering',
      icon: Compass,
      description: 'Applying fundamental physics, kinematics, and material properties to engineer reliable machinery, load-bearing frames, and drive mechanisms.'
    },
    {
      title: 'Industrial Design',
      icon: Layers,
      description: 'Synthesizing functional utility with manufacturable geometry, ergonomic operation, service accessibility, and structural longevity.'
    },
    {
      title: 'CAD Modelling',
      icon: Settings2,
      description: 'Constructing robust parametric 3D solid and surface models with clean feature trees, native metadata, and dynamic assembly constraint verification.'
    },
    {
      title: 'Manufacturing Support',
      icon: Cpu,
      description: 'Bridging design intent with shop-floor execution through watertight STEP generation, toolpath clearance audits, and DFM optimization.'
    },
    {
      title: 'Engineering Drawing Solutions',
      icon: FileCheck2,
      description: 'Delivering dimensioned 2D fabrication drawings, GD&T annotations, revision logs, and comprehensive Bills of Materials (BOM) per ISO / ASME.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="ABOUT OUR PRACTICE"
          title="Engineering Solutions Built Around Precision"
          subtitle="A specialized mechanical design and CAD engineering provider dedicated to converting conceptual mechanical ideas into production-grade manufacturing drawings and 3D digital assets."
        />

        {/* Company Overview & Engineering Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-metallic-700 leading-relaxed text-base">
            <p className="text-lg text-navy-900 font-medium">
              At DEANSYS, we specialize in mechanical engineering design, 3D CAD modeling, and manufacturing drafting support for machine builders, industrial manufacturers, and fabrication facilities.
            </p>
            
            <p>
              In today's fast-moving production environment, engineering discrepancies between conceptual models and shop-floor machines result in costly rework and assembly delays. Our approach is anchored in <strong className="text-navy-900 font-semibold">manufacturing-oriented precision</strong>: every model is evaluated against real-world fabrication constraints, machine tool reach, material stock sizes, and standardized assembly hardware.
            </p>

            <p>
              Whether you need to outsource full Special Purpose Machine (SPM) design, translate legacy 2D drawings into parametric 3D models, or prepare watertight STEP files for multi-axis CNC milling centers, DEANSYS delivers accurate, reliable engineering assets designed to fit the first time.
            </p>

            {/* Editable Placeholder Note for User */}
            <div className="p-4 rounded-lg bg-surface-light border border-metallic-200 flex items-start gap-3 text-xs text-metallic-600 font-mono">
              <Info className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-navy-900 uppercase block mb-1">DEANSYS Profile Placeholder</span>
                This section provides a clean foundation. Company history, specific workshop equipment, or customized team profiles can be directly added here as your company details become available.
              </div>
            </div>
          </div>

          {/* Right Visual / Technical Specification Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Engineering Facility Showcase Image */}
            <div className="relative rounded-lg overflow-hidden border border-metallic-200 shadow-lg bg-navy-950 aspect-[16/10] group">
              <SafeImage
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80"
                alt="DEANSYS Industrial Engineering & CNC Machine Center"
                fallbackTitle="DEANSYS Engineering Facility"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3 bg-navy-950/90 backdrop-blur-sm border border-navy-700/80 px-2.5 py-1 rounded text-[11px] font-mono text-orange-400 font-bold">
                FACILITY // DEANSYS PRECISION CAD
              </div>
              
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono bg-navy-950/85 backdrop-blur-sm p-2 rounded border border-navy-800">
                <span className="text-orange-400 font-bold">FOCUS:</span> ASME Y14.5 Drafting &bull; 3D Assembly Modeling &bull; DFM
              </div>
            </div>

            <div className="bg-navy-900 text-white rounded-lg p-6 sm:p-8 border border-navy-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-4 border-b border-navy-800 mb-6">
                <div className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-orange-500" />
                  <h3 className="font-display font-bold text-lg text-white">Engineering Disciplines</h3>
                </div>
                <span className="text-[11px] font-mono text-metallic-400 bg-navy-950 px-2.5 py-1 rounded border border-navy-800">
                  DFM &bull; GD&amp;T &bull; CAD
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 text-xs font-mono font-bold mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Design for Manufacturability (DFM)</h4>
                    <p className="text-xs text-metallic-400 mt-0.5">Designing parts that optimize machining cycle times, reduce material scrap, and simplify tooling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 text-xs font-mono font-bold mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">ASME Y14.5 / ISO-GPS Standard Drafting</h4>
                    <p className="text-xs text-metallic-400 mt-0.5">Clear datum references, geometric tolerances, and surface finish callouts eliminating shop ambiguity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 text-xs font-mono font-bold mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Watertight 3D STEP Formats</h4>
                    <p className="text-xs text-metallic-400 mt-0.5">Zero gap, validated solid geometries fully compatible with modern CAM software and 5-axis CNCs.</p>
                  </div>
                </div>
              </div>

              {/* Supported Software Badges */}
              <div className="mt-8 pt-5 border-t border-navy-800">
                <div className="text-[11px] font-mono text-metallic-400 uppercase tracking-wider mb-2.5">
                  Core Engineering Tools
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-metallic-300">
                  <span className="px-2 py-1 bg-navy-950 border border-navy-800 rounded">SolidWorks</span>
                  <span className="px-2 py-1 bg-navy-950 border border-navy-800 rounded">Autodesk Inventor</span>
                  <span className="px-2 py-1 bg-navy-950 border border-navy-800 rounded">PTC Creo</span>
                  <span className="px-2 py-1 bg-navy-950 border border-navy-800 rounded">AutoCAD Mechanical</span>
                  <span className="px-2 py-1 bg-navy-950 border border-navy-800 rounded">Siemens NX</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5 Core Pillars Grid */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-900">
              Core Engineering Focus Areas
            </h3>
            <p className="text-sm text-metallic-600 mt-1">
              Engineered to support machine builders, component manufacturers, and design teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-lg bg-surface-light border border-metallic-200/80 hover:border-orange-500/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded bg-navy-900 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-navy-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-sm text-metallic-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}

            {/* Quick Consultation Callout Box */}
            <div className="p-6 rounded-lg bg-navy-900 border border-navy-800 text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase font-semibold tracking-wider block mb-2">
                  Technical Consultation
                </span>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  Have a Custom Engineering Requirement?
                </h4>
                <p className="text-xs text-metallic-300 leading-relaxed">
                  We review your 2D sketches, legacy blueprints, or physical parts to establish exact CAD scope and turnaround timelines.
                </p>
              </div>
              <a 
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Discuss Your Project</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

