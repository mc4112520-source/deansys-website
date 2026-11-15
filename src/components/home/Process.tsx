import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { processSteps } from '../../data/processData';
import { CheckCircle2, ArrowRight, FileCheck } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="OUR STRUCTURED METHODOLOGY"
          title="From Concept to Production-Grade CAD"
          subtitle="A systematic, milestone-driven engineering workflow that guarantees precision, accountability, and seamless manufacturing handoff."
        />

        {/* 4-Step Process Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {processSteps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="bg-surface-light rounded-lg p-6 border border-metallic-200/90 hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between relative group hover:shadow-lg"
            >
              
              {/* Step Number & Connector */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-metallic-200 mb-5">
                  <span className="font-mono text-3xl font-black text-navy-900 group-hover:text-orange-500 transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-metallic-500 bg-white px-2 py-0.5 rounded border border-metallic-200">
                    STAGE 0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold font-display text-navy-900 mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-orange-600 font-semibold mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs text-metallic-600 leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Key Activities */}
                <div className="space-y-2 mb-6">
                  {step.activities.slice(0, 3).map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-metallic-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Footer */}
              <div className="pt-4 border-t border-metallic-200">
                <div className="text-[10px] font-mono uppercase text-metallic-500 tracking-wider font-semibold mb-2 flex items-center gap-1">
                  <FileCheck className="w-3 h-3 text-orange-500" />
                  <span>Key Output Deliverables</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {step.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2 py-0.5 bg-white text-navy-900 border border-metallic-300 rounded text-[10px] font-mono"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Indicator for Desktop Next Step */}
              {index < 3 && (
                <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-navy-900 text-orange-400 items-center justify-center border border-navy-700 shadow pointer-events-none">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}

            </div>
          ))}

        </div>

        {/* Process Guarantee Note */}
        <div className="mt-12 p-4 rounded-lg bg-navy-950 border border-navy-800 text-metallic-300 font-mono text-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-white font-bold">Standard Review Turnaround:</span> 24-48 hours for drawing iterations.
          </div>
          <div className="text-metallic-400">
            CAD Integrity: AP242 STEP geometry verified before final delivery.
          </div>
        </div>

      </div>
    </section>
  );
};

