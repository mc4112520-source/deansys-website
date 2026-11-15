import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { ServiceModal } from '../modals/ServiceModal';
import { 
  Box, 
  FilePenLine, 
  Cpu, 
  Cog, 
  Activity, 
  Layers, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEnquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon name to Lucide component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'FilePenLine':
        return <FilePenLine className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Cog':
        return <Cog className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      default:
        return <Box className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-surface-light relative border-t border-b border-metallic-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="OUR CORE ENGINEERING SERVICES"
          title="Specialized Mechanical &amp; CAD Solutions"
          subtitle="Precision-engineered services designed to support machine manufacturing, drawing digitization, and shop-floor production workflows."
        />

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden border border-metallic-200/90 hover:border-orange-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group technical-border"
            >
              
              {/* Card Image with Technical Overlay */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950">
                <SafeImage
                  src={service.image}
                  alt={service.title}
                  fallbackTitle={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                
                {/* Service Index Badge */}
                <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-sm border border-navy-700/80 px-2.5 py-1 rounded text-[11px] font-mono text-orange-400 font-bold">
                  SERVICE // 0{index + 1}
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded bg-navy-900 border border-navy-700 text-orange-400 flex items-center justify-center shadow-lg group-hover:bg-orange-500 group-hover:text-navy-950 transition-colors">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-navy-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-metallic-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-metallic-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with Learn More */}
                <div className="pt-4 border-t border-metallic-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-navy-900 hover:text-orange-600 transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 text-orange-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[10px] font-mono text-metallic-600 bg-surface-light px-2 py-1 rounded border border-metallic-200">
                    {service.toolsUsed[0]}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-lg bg-navy-900 text-white border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Need a Custom Turnkey Drawing or 3D Conversion?
            </h4>
            <p className="text-sm text-metallic-400">
              Send us your DXF, hand sketch, or sample component for a fast technical evaluation and quotation.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForEnquiry('3D Modeling')}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-md"
          >
            Request Engineering Scope
          </button>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={(title) => {
          setSelectedService(null);
          onSelectServiceForEnquiry(title);
        }}
      />
    </section>
  );
};

