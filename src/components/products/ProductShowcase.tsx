import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { productsData, getProductCategories } from '../../data/productsData';
import { Product } from '../../types';
import { ProductDetailsModal } from './ProductDetailsModal';
import { getProductWhatsAppLink } from '../../config/siteConfig';
import { 
  MessageSquare, 
  Eye, 
  Layers, 
  Info
} from 'lucide-react';

interface ProductShowcaseProps {
  onRequestQuote: (productName: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onRequestQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categories = getProductCategories();

  const filteredProducts = selectedCategory === 'All Products'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  const handleWhatsAppClick = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const url = getProductWhatsAppLink(product.name, product.id);
    window.open(url, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white relative border-t border-metallic-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="MANUFACTURED PRODUCTS &amp; ASSEMBLIES"
          title="Engineered Products &amp; Standardized Modules"
          subtitle="Explore our portfolio of industrial hydraulic cylinders, multi-station index tables, precision planetary gearboxes, and custom CNC milled components."
        />

        {/* Sample Content Notification Banner (Requirement: Clearly mark sample content) */}
        <div className="mb-8 p-4 rounded-lg bg-surface-light border border-metallic-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-navy-900">
            <Info className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span>
              <strong className="text-orange-600 font-bold">PRODUCT CATALOG (SAMPLE DATA):</strong> Products and specifications are populated from <code className="bg-white px-1.5 py-0.5 rounded border border-metallic-300 text-navy-900">src/data/products.json</code> for seamless updating and replacement.
            </span>
          </div>
          <span className="text-[11px] text-metallic-600 bg-white px-2.5 py-1 rounded border border-metallic-200 whitespace-nowrap">
            {productsData.length} Products Configured
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-navy-900 text-orange-400 shadow-md border border-navy-900'
                    : 'bg-surface-light text-metallic-700 hover:text-navy-900 border border-metallic-200 hover:border-metallic-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className="bg-white rounded-lg overflow-hidden border border-metallic-200 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer technical-border"
            >
              
              {/* Product Image & Overlays */}
              <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                <SafeImage
                  src={product.image}
                  alt={product.name}
                  fallbackTitle={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-sm border border-navy-700 px-2.5 py-1 rounded text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">
                  {product.category}
                </div>

                {/* Sample Badge */}
                {product.isPlaceholder && (
                  <div className="absolute top-3 right-3 bg-amber-500/95 text-navy-950 font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow">
                    SAMPLE SPEC
                  </div>
                )}

                {/* Hover Quick Action */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded bg-navy-900 text-white flex items-center justify-center opacity-90 group-hover:bg-orange-500 group-hover:text-navy-950 transition-colors shadow">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-navy-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-metallic-600 line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* Technical Specifications Snapshot (Requirement: display technical specifications) */}
                  <div className="mb-5 space-y-1.5 p-3 rounded bg-surface-light border border-metallic-200/90 text-[11px] font-mono">
                    <div className="text-[10px] uppercase text-metallic-500 font-bold mb-1 tracking-wider">
                      Key Technical Specs:
                    </div>
                    {product.specifications.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between">
                        <span className="text-metallic-500 truncate mr-2">{spec.label}:</span>
                        <span className="font-semibold text-navy-900 text-right truncate">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CAD Deliverable Availability Tag */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-metallic-500 mb-5">
                    <Layers className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                    <span className="truncate">CAD: {product.cadFormatsAvailable.slice(0, 3).join(', ')}</span>
                  </div>
                </div>

                {/* Dual Buttons: View Details & WhatsApp Enquiry */}
                <div className="pt-4 border-t border-metallic-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProduct(product);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-navy-900 hover:bg-navy-800 text-white font-mono text-xs font-bold uppercase rounded transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-orange-400" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleWhatsAppClick(e, product)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase rounded shadow transition-colors active:scale-95"
                    title={`Enquire about ${product.name} on WhatsApp`}
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Empty Search Safeguard */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-surface-light rounded-lg border border-metallic-200">
            <p className="text-metallic-600 font-mono text-sm">No products found in this category.</p>
          </div>
        )}

        {/* Product Catalog Footer Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-lg bg-navy-900 text-white border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display text-white">
              Need Custom Dimensions, Stroke, or Torque Ratings?
            </h4>
            <p className="text-sm text-metallic-400">
              We design and modify mechanical assemblies and hydraulic cylinders to match your exact machine envelope and duty cycle.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Product Engineering')}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-md"
          >
            Request Custom Sizing
          </button>
        </div>

      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};
