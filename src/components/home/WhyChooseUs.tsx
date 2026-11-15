import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Target, 
  Wrench, 
  Factory, 
  Users2, 
  Microscope,
  Check
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Precision-Focused Engineering',
      icon: Target,
      highlight: 'Sub-millimeter Tolerance Control',
      description: 'We adhere strictly to ASME Y14.5 and ISO-GPS tolerancing standards. Every dimension, datum reference frame, and geometric tolerance is purposefully designated to guarantee functional assembly without shop floor adjustments.'
    },
    {
      title: 'Practical Design Approach',
      icon: Wrench,
      highlight: 'Real-World Functional Utility',
      description: 'We design machinery and components with real operating conditions in mind—accounting for operational thermal expansion, vibration dampening, lubrication access, and straightforward field maintenance.'
    },
    {
      title: 'Manufacturing-Oriented Solutions',
      icon: Factory,
      highlight: 'Design for Manufacturability (DFM)',
      description: 'Our engineering models account for cutter radius limitations, standard drill depths, sheet metal bend radii, and raw material stock dimensions to drastically lower CNC machining times and fabrication costs.'
    },
    {
      title: 'Customized Engineering Support',
      icon: Users2,
      highlight: 'Agile Collaborative Workflow',
      description: 'We operate as an agile extension of your in-house team. Whether you need an urgent drawing revision, a specialized component standardized, or full SPM engineering, our scope adapts to your schedule.'
    },
    {
      title: 'Attention to Technical Details',
      icon: Microscope,
      highlight: 'Zero Tolerance for Ambiguity',
      description: 'From thread pitch callouts and surface roughness annotations to hardware grades and weld symbols, our documentation leaves zero room for guesswork on the factory floor.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-navy-950 text-white relative overflow-hidden border-t border-b border-navy-800">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="OUR VALUE PROPOSITION"
          title="Why Engineering Teams Partner With Us"
          subtitle="We eliminate the friction between engineering design and practical workshop manufacturing through uncompromised precision and technical rigor."
          dark={true}
        />

        {/* 5 Value Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-navy-900/90 rounded-lg p-6 sm:p-7 border border-navy-800 hover:border-orange-500/70 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded bg-navy-950 border border-navy-700 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-navy-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-metallic-400 uppercase tracking-widest font-semibold bg-navy-950 px-2.5 py-1 rounded border border-navy-800">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-1.5 group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-mono text-orange-400 font-semibold mb-3">
                    {pillar.highlight}
                  </div>

                  <p className="text-sm text-metallic-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-2 text-xs font-mono text-metallic-400">
                  <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span>Engineering Standard Verified</span>
                </div>
              </div>
            );
          })}

          {/* 6th Box: Engineering Commitment Card */}
          <div className="bg-gradient-to-br from-navy-900 via-navy-900 to-navy-850 rounded-lg p-6 sm:p-7 border border-orange-500/40 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold block mb-3">
                [ OUR COMMITMENT ]
              </span>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Zero Tolerance for Drafting Ambiguity
              </h3>
              <p className="text-sm text-metallic-300 leading-relaxed mb-4">
                Every file we deliver undergoes a dual-engineer review before client handoff. We verify geometry completeness, drawing datum associativity, and fabrication feasibility.
              </p>
            </div>

            <div className="pt-4 border-t border-navy-800">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-xs uppercase tracking-wider rounded transition-colors"
              >
                <span>Initiate Technical Discussion</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

