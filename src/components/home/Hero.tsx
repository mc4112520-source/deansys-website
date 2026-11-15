import React from 'react';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck, Crosshair, Wrench, Layers } from 'lucide-react';
import { SafeImage } from '../common/SafeImage';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-navy-950 text-white overflow-hidden pt-8 pb-16 lg:py-24 border-b border-navy-800">
      {/* Background blueprint grid & subtle radial glow */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-navy-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-navy-900 border border-navy-700/80 text-metallic-300 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-400 font-bold uppercase tracking-wider">Precision Engineering Solutions</span>
              <span className="text-navy-600">|</span>
              <span className="hidden sm:inline text-metallic-400">CAD &bull; CAM &bull; Industrial Design</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.12]">
              Engineering Precision.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 block mt-1">
                Designing Possibilities.
              </span>
            </h1>

            {/* Exact Subheading */}
            <p className="text-base sm:text-lg text-metallic-300 max-w-2xl leading-relaxed">
              Delivering innovative mechanical design, CAD modelling and industrial engineering solutions that transform ideas into practical engineering solutions.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-sm uppercase tracking-wider rounded shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 group active:scale-95"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-800/90 hover:bg-navy-800 text-white font-mono text-sm uppercase tracking-wider rounded border border-navy-700 hover:border-metallic-400 transition-all duration-200 active:scale-95 shadow-sm"
              >
                <FileText className="w-4 h-4 text-orange-400" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Engineering Trust Pillars (Realistic engineering standards, no fake statistics) */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-metallic-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>ISO 2768 &amp; ASME Y14.5</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>CNC/VMC Machining Ready</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Crosshair className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>100% Watertight STEP</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Industrial CAD Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Technical Showcase Box */}
              <div className="relative rounded-lg overflow-hidden border border-navy-700 bg-navy-900/90 shadow-2xl group">
                
                {/* CAD Top Bar / Window Frame */}
                <div className="px-4 py-2.5 bg-navy-950 border-b border-navy-800 flex items-center justify-between font-mono text-[11px] text-metallic-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-white font-medium">CAD_ASSEMBLY_V4.STEP</span>
                  </div>
                  <span className="text-orange-400">VIEWPORT // ISOMETRIC</span>
                </div>

                {/* Primary Industrial Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-950">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                    alt="Precision Mechanical Engineering CAD Modeling & 3D Assembly"
                    fallbackTitle="CAD Assembly Viewport"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  
                  {/* Subtle technical overlay & crosshairs */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Digital crosshair center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <div className="w-16 h-16 border border-dashed border-orange-400/80 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* On-image CAD Datum Badges */}
                  <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-sm border border-navy-700/80 px-2.5 py-1 rounded text-[10px] font-mono text-metallic-300">
                    <span className="text-orange-400 font-semibold">TOL:</span> &plusmn;0.005 mm
                  </div>

                  <div className="absolute bottom-3 left-3 bg-navy-950/90 backdrop-blur-sm border border-navy-700/80 px-3 py-1.5 rounded text-xs font-mono">
                    <div className="text-white font-bold flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-orange-400" />
                      <span>Parametric Solid &amp; Surface Model</span>
                    </div>
                    <div className="text-[10px] text-metallic-400 mt-0.5">
                      Formats: STEP &bull; IGES &bull; SLDPRT &bull; DWG
                    </div>
                  </div>
                </div>

                {/* Technical Telemetry Bar */}
                <div className="p-3 bg-navy-950 border-t border-navy-800 font-mono text-[11px] grid grid-cols-3 gap-2 text-center text-metallic-400">
                  <div className="bg-navy-900/60 p-1.5 rounded border border-navy-800">
                    <span className="block text-[9px] text-metallic-500">X-AXIS</span>
                    <span className="text-white font-semibold">142.85 mm</span>
                  </div>
                  <div className="bg-navy-900/60 p-1.5 rounded border border-navy-800">
                    <span className="block text-[9px] text-metallic-500">Y-AXIS</span>
                    <span className="text-white font-semibold">89.40 mm</span>
                  </div>
                  <div className="bg-navy-900/60 p-1.5 rounded border border-navy-800">
                    <span className="block text-[9px] text-metallic-500">Z-AXIS</span>
                    <span className="text-orange-400 font-semibold">210.00 mm</span>
                  </div>
                </div>

              </div>

              {/* Floating Engineering Badge 1 (Top Right) */}
              <div className="absolute -top-4 -right-4 bg-navy-900 border border-orange-500/60 rounded p-3 shadow-xl backdrop-blur hidden sm:flex items-center gap-3 font-mono text-xs">
                <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">ASME Y14.5</div>
                  <div className="text-[10px] text-metallic-400">GD&amp;T Compliant Detailing</div>
                </div>
              </div>

              {/* Floating Engineering Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 bg-navy-900 border border-navy-700 rounded p-2.5 shadow-xl hidden sm:flex items-center gap-2.5 font-mono text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-white">Machining-Ready Deliverables</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

