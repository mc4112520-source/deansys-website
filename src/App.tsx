import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Services } from './components/home/Services';
import { ProductShowcase } from './components/products/ProductShowcase';
import { Expertise } from './components/home/Expertise';
import { Projects } from './components/home/Projects';
import { Process } from './components/home/Process';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { Contact } from './components/home/Contact';
import { Footer } from './components/common/Footer';
import { QuoteModal } from './components/modals/QuoteModal';
import { getWhatsAppLink } from './config/siteConfig';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('3D Modeling');

  // Triggered when clicking "Enquire for this service" or from cards
  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    setIsQuoteModalOpen(true);
  };

  const handleFloatingWhatsApp = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 4: Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Section 5: About Us */}
        <About />

        {/* Section 6: Services */}
        <Services onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* Section: Product Showcase (Phase 2 Enhancement) */}
        <ProductShowcase onRequestQuote={(name) => handleOpenQuoteModal(name)} />

        {/* Section 7: Our Expertise */}
        <Expertise />

        {/* Section 8: Projects / Portfolio */}
        <Projects />

        {/* Section 9: Our Working Process */}
        <Process />

        {/* Section 10: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 11: Contact / Get a Quote */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Section 12: Footer */}
      <Footer onSelectService={handleSelectServiceForEnquiry} />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Floating Fast-Access WhatsApp Pill */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleFloatingWhatsApp}
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider group active:scale-95 border-2 border-white"
          title="Direct WhatsApp Enquiry"
          aria-label="Direct WhatsApp Enquiry"
        >
          <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">WhatsApp Enquiry</span>
        </button>
      </aside>
    </div>
  );
};

export default App;


