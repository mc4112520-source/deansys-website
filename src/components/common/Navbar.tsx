import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for highlight
      const sections = ['home', 'about', 'services', 'products', 'expertise', 'projects', 'process', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top info strip - professional engineering touch */}
      <div className="bg-navy-950 text-metallic-400 text-xs border-b border-navy-800/80 hidden md:block py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Office Hours: {siteConfig.contact.officeHours}
            </span>
            <span className="hidden lg:inline text-navy-600">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <span className="text-orange-400 font-medium">CAD Standards:</span> {siteConfig.contact.standards}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`mailto:${siteConfig.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="text-navy-700">|</span>
            <a 
              href={`tel:${siteConfig.contact.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800'
            : 'bg-navy-900 py-4 border-b border-navy-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with Mechanical Icon */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded bg-navy-800 border border-navy-700 flex items-center justify-center relative overflow-hidden group-hover:border-orange-500 transition-colors">
              {/* Technical crosshair and geometric gear icon */}
              <div className="absolute inset-0 bg-tech-pattern opacity-30"></div>
              <svg 
                className="w-6 h-6 text-orange-500 group-hover:rotate-45 transition-transform duration-500" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="12 2 15 5 15 9 19 9 22 12 19 15 15 15 15 19 12 22 9 19 9 15 5 15 2 12 5 9 9 9 9 5 12 2" />
                <circle cx="12" cy="12" r="3" fill="#101D32" stroke="#F28C28" strokeWidth="2" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
                DEAN<span className="text-orange-500">SYS</span>
              </span>
              <span className="text-[10px] tracking-widest text-metallic-400 uppercase font-mono -mt-1 font-semibold">
                Industrial Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-orange-400 font-semibold'
                      : 'text-metallic-300 hover:text-white hover:bg-navy-800/60 rounded'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wide text-navy-950 uppercase bg-orange-500 hover:bg-orange-400 rounded transition-all duration-200 shadow-md hover:shadow-orange-500/20 active:scale-95 group font-mono"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-metallic-300 hover:text-white hover:bg-navy-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-400" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-navy-900 border-l border-navy-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-navy-800 border border-orange-500/50 flex items-center justify-center">
                    <span className="text-orange-500 font-bold font-display text-sm">DS</span>
                  </div>
                  <span className="font-display font-bold text-lg text-white">
                    DEAN<span className="text-orange-500">SYS</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-metallic-400 hover:text-white rounded hover:bg-navy-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-3.5 py-3 text-sm font-medium rounded transition-colors ${
                        isActive
                          ? 'bg-navy-800 text-orange-400 font-bold border-l-2 border-orange-500'
                          : 'text-metallic-200 hover:text-white hover:bg-navy-800/60'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-metallic-500" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer & Actions */}
            <div className="pt-6 border-t border-navy-800 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-sm uppercase rounded shadow-lg transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-metallic-400 space-y-2 pt-2">
                <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

