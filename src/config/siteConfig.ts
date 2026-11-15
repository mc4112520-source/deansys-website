/**
 * DEANSYS - Central Company Configuration
 * 
 * Central configuration file for all company contact information,
 * branding, office hours, address, and WhatsApp contact details.
 * 
 * Update this file to change contact and branding details across the entire website.
 */

export interface SiteConfig {
  company: {
    name: string;
    shortName: string;
    brandTag: string;
    tagline: string;
    description: string;
  };
  contact: {
    email: string;
    altEmail: string;
    phone: string;
    phoneDisplay: string;
    altPhone: string;
    address: string;
    officeHours: string;
    emergencySupport: string;
    standards: string;
  };
  whatsapp: {
    phoneNumber: string; // International format without '+' or spaces, e.g., '919953968159'
    displayNumber: string;
    defaultMessage: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    youtube: string;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: 'DEANSYS',
    shortName: 'DEANSYS',
    brandTag: 'DEANSYS',
    tagline: 'Industrial Engineering Solutions',
    description: 'DEANSYS provides mechanical engineering, 3D modelling, industrial design and manufacturing support solutions.'
  },
  contact: {
    email: 'contact@deansys.com',
    altEmail: 'info@deansys.com',
    phone: '+919953968159',
    phoneDisplay: '+91 99539 68159',
    altPhone: '+91 99539 68159',
    address: 'Plot No. 42, Industrial Area Phase II, Mechanical Engineering Hub, India',
    officeHours: 'Mon - Sat: 09:00 - 19:00 IST',
    emergencySupport: 'Sunday: Closed (Emergency Support On-Demand)',
    standards: 'ASME Y14.5 & ISO-GPS Aligned'
  },
  whatsapp: {
    // WhatsApp direct contact number
    phoneNumber: '919953968159',
    displayNumber: '+91 99539 68159',
    defaultMessage: 'Hello DEANSYS, I am interested in your engineering services. Please share more details.'
  },
  social: {
    linkedin: '#linkedin',
    twitter: '#twitter',
    youtube: '#youtube'
  }
};

/**
 * Helper to construct WhatsApp click-to-chat links with custom encoded messages.
 */
export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Helper for product-specific WhatsApp inquiry messages.
 */
export const getProductWhatsAppLink = (productName: string, productId?: string): string => {
  const refText = productId ? ` (Ref: ${productId})` : '';
  const message = `Hello DEANSYS, I am interested in the product: "${productName}"${refText}. Please share technical specifications, availability, and quotation details.`;
  return getWhatsAppLink(message);
};
