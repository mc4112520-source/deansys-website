import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {/* Technical Pill Badge */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-sm border text-xs font-mono tracking-wider uppercase font-semibold ${
        dark 
          ? 'bg-navy-800 border-navy-700 text-orange-400' 
          : 'bg-navy-50 border-navy-200 text-navy-800'
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-subtle"></span>
        {badge}
      </div>

      {/* Main Title */}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display ${
        dark ? 'text-white' : 'text-navy-900'
      }`}>
        {title}
      </h2>

      {/* Accent Underline */}
      <div className={`mt-3 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1 w-12 bg-orange-500 rounded-full"></span>
        <span className="h-1 w-2 bg-metallic-400 rounded-full"></span>
        <span className="h-1 w-1 bg-metallic-300 rounded-full"></span>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-metallic-300' : 'text-metallic-700'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

