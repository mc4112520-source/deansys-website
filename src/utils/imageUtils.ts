/**
 * Industrial Engineering Image Fallback Utility
 * Provides instant, zero-network SVG fallback images with technical blueprint styling
 * in case an external image fails to load or is blocked.
 */

export const getEngineeringFallbackImage = (title: string = 'DEANSYS Precision Engineering'): string => {
  const sanitizedTitle = title.replace(/["'<>]/g, '').slice(0, 40);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="100%" height="100%" fill="#101D32"/>
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1F4673" stroke-width="1" opacity="0.6"/>
        <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#2E5F97" stroke-width="1.5" opacity="0.4"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <circle cx="400" cy="270" r="140" fill="none" stroke="#8793A3" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
    <circle cx="400" cy="270" r="90" fill="none" stroke="#F28C28" stroke-width="1.5" opacity="0.8"/>
    <circle cx="400" cy="270" r="30" fill="#101D32" stroke="#F28C28" stroke-width="2"/>
    <circle cx="400" cy="270" r="6" fill="#F28C28"/>
    <line x1="220" y1="270" x2="580" y2="270" stroke="#8793A3" stroke-width="1" stroke-dasharray="6 4" opacity="0.6"/>
    <line x1="400" y1="100" x2="400" y2="440" stroke="#8793A3" stroke-width="1" stroke-dasharray="6 4" opacity="0.6"/>
    <rect x="30" y="30" width="220" height="40" rx="4" fill="#0A1220" stroke="#1F4673" stroke-width="1"/>
    <text x="45" y="55" fill="#F28C28" font-family="monospace" font-size="12" font-weight="bold">CAD SPECIFICATION</text>
    <text x="400" y="490" fill="#FFFFFF" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">${sanitizedTitle}</text>
    <text x="400" y="525" fill="#8793A3" font-family="monospace" font-size="13" text-anchor="middle">ASME Y14.5 / ISO 2768-mK VERIFIED GEOMETRY</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

/**
 * Handle image error safely without infinite loop
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackTitle?: string) => {
  const target = e.currentTarget;
  const fallback = getEngineeringFallbackImage(fallbackTitle || target.alt || 'Industrial Component');
  if (target.src !== fallback) {
    target.src = fallback;
  }
};

