import React from 'react';
import { X, Check, FileCheck, Wrench, Clock, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import { SafeImage } from '../common/SafeImage';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onEnquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onEnquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden border border-metallic-200 relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-navy-900">
          <SafeImage
            src={service.image}
            alt={service.title}
            fallbackTitle={service.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-navy-900/80 text-metallic-300 hover:text-white hover:bg-navy-900 border border-navy-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold block mb-1">
              Engineering Scope &amp; Deliverables
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-14rem)] overflow-y-auto text-metallic-700">
          
          {/* Full description */}
          <div>
            <h4 className="text-xs font-mono uppercase text-metallic-500 font-semibold mb-2 tracking-wider">
              Service Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-navy-900">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase text-metallic-500 font-semibold mb-3 tracking-wider flex items-center gap-1.5">
              <Check className="w-4 h-4 text-orange-500" />
              <span>Technical Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm bg-surface-light p-2.5 rounded border border-metallic-200">
                  <span className="text-orange-500 font-bold">&bull;</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Toolset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Deliverables */}
            <div className="bg-navy-50/70 p-4 rounded-lg border border-navy-100">
              <h5 className="text-xs font-mono font-bold uppercase text-navy-900 mb-2.5 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-orange-500" />
                <span>Deliverables Provided</span>
              </h5>
              <ul className="text-xs space-y-1.5 text-metallic-700">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-navy-900 font-bold">&rsaquo;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Turnaround */}
            <div className="bg-navy-50/70 p-4 rounded-lg border border-navy-100 flex flex-col justify-between">
              <div>
                <h5 className="text-xs font-mono font-bold uppercase text-navy-900 mb-2 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-orange-500" />
                  <span>CAD Tools Employed</span>
                </h5>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.toolsUsed.map((tool, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white text-navy-900 border border-metallic-300 rounded text-[11px] font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-navy-200/60 flex items-center gap-2 text-xs font-mono text-metallic-600">
                <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Estimated Turnaround: <strong className="text-navy-900">{service.turnaroundEstimate}</strong></span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-surface-light border-t border-metallic-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono uppercase font-bold text-metallic-600 hover:text-navy-900 transition-colors"
          >
            Close Window
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-xs uppercase tracking-wider rounded shadow transition-all duration-200"
          >
            <span>Enquire for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

