import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { siteConfig } from '../../config/siteConfig';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Manufactured Products', href: '#products' },
    { label: 'Technical Expertise', href: '#expertise' },
    { label: 'Project Portfolio', href: '#projects' },
    { label: 'Working Process', href: '#process' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact & Quote', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Col 1: Logo & Company Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-navy-900 border border-navy-700 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-orange-500"
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
            </div>

            <p className="text-xs sm:text-sm text-metallic-400 leading-relaxed pr-4">
              {siteConfig.company.description}
            </p>

            {/* Social media placeholders */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="#linkedin"
                aria-label="LinkedIn profile placeholder"
                className="w-8 h-8 rounded bg-navy-900 border border-navy-800 text-metallic-400 hover:text-white hover:border-orange-500 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z" />
                </svg>
              </a>
              <a
                href="#twitter"
                aria-label="Twitter / X profile placeholder"
                className="w-8 h-8 rounded bg-navy-900 border border-navy-800 text-metallic-400 hover:text-white hover:border-orange-500 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube channel placeholder"
                className="w-8 h-8 rounded bg-navy-900 border border-navy-800 text-metallic-400 hover:text-white hover:border-orange-500 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <span className="text-[11px] font-mono text-metallic-500 ml-2">
                Social Profile Placeholders
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-metallic-300">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-500/70" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: All Six Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs text-metallic-300">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      onSelectService(svc.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-left hover:text-white hover:text-orange-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-orange-500">&rsaquo;</span>
                    <span className="line-clamp-1">{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
              Contact Desk
            </h4>
            <div className="space-y-3 text-xs text-metallic-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors font-mono">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="pt-2 border-t border-navy-800 text-[11px] font-mono text-metallic-400">
                {siteConfig.contact.officeHours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-metallic-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved. Industrial mechanical engineering and CAD drafting services.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-navy-600">|</span>
            <span className="text-metallic-500">ASME Y14.5 &amp; ISO Aligned</span>
            <span className="text-navy-600">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-metallic-300 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
