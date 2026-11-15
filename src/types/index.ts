export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  deliverables: string[];
  toolsUsed: string[];
  turnaroundEstimate: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: '3D Models' | 'Mechanical Drawings' | 'Machine Design' | 'Industrial Components' | 'Hydraulic Systems';
  image: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  solution: string;
  softwareUsed: string[];
  deliverables: string[];
  isPlaceholder: boolean;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technicalCapabilities: string[];
  complianceStandards: string[];
  icon: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  projectDescription: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  specifications: ProductSpec[];
  applications: string[];
  features: string[];
  cadFormatsAvailable: string[];
  isPlaceholder: boolean;
}


