import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Product } from '../../types';
import { getProductWhatsAppLink } from '../../config/siteConfig';
import { SafeImage } from '../common/SafeImage';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  // Use gallery or fallback to main image
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const activeImage = images[activeImageIndex] || product.image;

  const handleWhatsAppEnquiry = () => {
    const waUrl = getProductWhatsAppLink(product.name, product.id);
    window.open(waUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Modal Dialog Card */}
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden border border-metallic-200 relative animate-scaleUp text-navy-900 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-navy-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-navy-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/40 text-[11px] font-mono font-bold uppercase tracking-wider">
              {product.category}
            </div>
            <div className="text-xs font-mono text-metallic-400 hidden sm:inline">
              REF ID: {product.id.toUpperCase()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-metallic-400 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none"
              aria-label="Close product details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Top Section: Visual Gallery & Key Specs Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Product Images with Gallery Switcher */}
            <div className="lg:col-span-7 space-y-3">
              {/* Main Large Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-950 border border-metallic-200 shadow-md">
                <SafeImage
                  src={activeImage}
                  alt={product.name}
                  fallbackTitle={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                
                {/* Product Badge */}
                <div className="absolute top-3 left-3 bg-navy-950/90 backdrop-blur-sm border border-navy-700 px-3 py-1 rounded text-xs font-mono text-white">
                  <span className="text-orange-400 font-bold">SPEC:</span> Standard Production
                </div>

                {product.isPlaceholder && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-navy-950 font-mono text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    SAMPLE PRODUCT
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded overflow-hidden border-2 flex-shrink-0 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-orange-500 scale-105 shadow-md' 
                          : 'border-metallic-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <SafeImage 
                        src={img} 
                        alt={`${product.name} view ${idx + 1}`} 
                        fallbackTitle={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Title, Description & Action Buttons */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono text-orange-600 uppercase tracking-widest font-semibold block mb-1">
                  Technical Product Dossier
                </span>
                
                <h3 id="product-modal-title" className="text-xl sm:text-2xl font-extrabold font-display text-navy-900 leading-tight">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm text-metallic-700 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* CAD Models Available */}
                <div className="mt-4 pt-4 border-t border-metallic-200">
                  <span className="text-[11px] font-mono text-metallic-500 uppercase tracking-wider block mb-2 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-orange-500" />
                    <span>Deliverable CAD Data Formats</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.cadFormatsAvailable.map((fmt, i) => (
                      <span key={i} className="px-2 py-0.5 bg-surface-light text-navy-900 border border-metallic-300 rounded text-xs font-mono">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Primary Dual CTA Buttons */}
              <div className="pt-2 space-y-2.5">
                {/* Direct WhatsApp Enquiry Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-colors active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </button>

                {/* Request Formal Quotation */}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRequestQuote(product.name);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 hover:bg-navy-800 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors active:scale-98"
                >
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span>Request Engineering Quote</span>
                </button>
              </div>

            </div>

          </div>

          {/* Full Technical Description */}
          <div className="p-5 rounded-lg bg-surface-light border border-metallic-200 space-y-2">
            <h4 className="text-xs font-mono uppercase text-navy-900 tracking-wider font-bold">
              Engineering Overview &amp; Construction
            </h4>
            <p className="text-sm text-metallic-700 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-metallic-200">
              <h4 className="text-sm font-bold font-display uppercase tracking-wider text-navy-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>Technical Specifications</span>
              </h4>
              <span className="text-[11px] font-mono text-metallic-500">
                Standard Factory Tolerances (ISO 2768-mK)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.specifications.map((spec, i) => (
                <div 
                  key={i} 
                  className="p-3 bg-white rounded border border-metallic-200/90 flex items-center justify-between text-xs"
                >
                  <span className="font-mono text-metallic-500 uppercase tracking-wide">{spec.label}</span>
                  <span className="font-semibold text-navy-900 font-mono text-right ml-2">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-navy-900">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-surface-light border border-metallic-200 text-xs text-metallic-800">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industrial Applications */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-navy-900">
              Target Industrial Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.applications.map((app, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-navy-900 p-2.5 bg-navy-50/50 rounded border border-navy-100">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Product Notice */}
          <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 flex items-start gap-3">
            <span className="font-bold uppercase text-amber-950 flex-shrink-0">[Sample Content]</span>
            <span>
              This product entry is illustrative sample data stored in <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-950">src/data/products.json</code>. You can easily replace, add, or customize actual inventory, photographs, and CAD specs by editing the JSON file directly.
            </span>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-surface-light border-t border-metallic-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono uppercase font-bold text-metallic-600 hover:text-navy-900 transition-colors"
          >
            &larr; Back to Products
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppEnquiry}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase rounded transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-navy-950 font-mono text-xs font-bold uppercase rounded shadow transition-colors"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

