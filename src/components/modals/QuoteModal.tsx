import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../../types';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '3D Modeling'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: preselectedService,
    projectDescription: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const serviceOptions = [
    '3D Modeling',
    'Drawing Modification',
    'STEP File Generation for CNC & VMC',
    'Special Purpose Machine Design',
    'Hydraulic Cylinder Maintenance Solutions',
    'Standardization of Parts',
    'Heavy-Duty Industrial Hydraulic Cylinder',
    'Precision Cam Rotary Indexing Table',
    'High-Torque Planetary Reduction Gearbox',
    'Custom CNC-Milled Hydraulic Manifold Block',
    '5-Axis CNC Milled Aerodynamic Impeller',
    'Heavy-Duty Split Pillow Block Bearing Housing',
    'Other Custom Engineering Requirement'
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email.';
    }

    const phoneRegex = /^[+0-9\s\-()]{7,18}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errs.phone = 'Valid phone number required.';
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your requirement.';
    } else if (formData.projectDescription.trim().length < 10) {
      errs.projectDescription = 'Please provide at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello ${siteConfig.company.name}, I am interested in requesting an engineering quotation for: ${formData.service}. Please share more details.`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-xl w-full overflow-hidden border border-metallic-200 relative animate-scaleUp text-navy-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-navy-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-navy-800">
          <div>
            <div className="text-[11px] font-mono text-orange-400 uppercase tracking-wider font-bold">
              Engineering Quotation Desk
            </div>
            <h3 className="text-xl font-bold font-display text-white mt-0.5">
              Request a Project Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-metallic-400 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[calc(85vh-8rem)] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-display text-navy-900">
                Quotation Request Validated!
              </h4>
              <p className="text-sm text-metallic-600 max-w-sm mx-auto">
                Your request details for <strong className="text-navy-900">{formData.service}</strong> are complete. (Frontend simulation: data captured and ready for backend connection).
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase rounded"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Follow Up via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-mono text-xs uppercase font-bold rounded"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-3 py-2 rounded border border-metallic-300 text-sm focus:outline-none focus:border-navy-900"
                  />
                  {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full px-3 py-2 rounded border border-metallic-300 text-sm focus:outline-none focus:border-navy-900"
                  />
                  {errors.companyName && <p className="text-red-600 text-[11px] mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded border border-metallic-300 text-sm focus:outline-none focus:border-navy-900"
                  />
                  {errors.email && <p className="text-red-600 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98000 00000"
                    className="w-full px-3 py-2 rounded border border-metallic-300 text-sm focus:outline-none focus:border-navy-900"
                  />
                  {errors.phone && <p className="text-red-600 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded border border-metallic-300 text-sm focus:outline-none focus:border-navy-900"
                >
                  {serviceOptions.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1">
                  Project Description &amp; Scope *
                </label>
                <textarea
                  name="projectDescription"
                  rows={3}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Outline dimensions, tolerances, quantity of parts, or timeline requirements..."
                  className="w-full px-3 py-2 rounded border border-metallic-300 text-sm focus:outline-none focus:border-navy-900"
                ></textarea>
                {errors.projectDescription && <p className="text-red-600 text-[11px] mt-1">{errors.projectDescription}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono uppercase text-metallic-500 hover:text-navy-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-xs uppercase tracking-wider rounded shadow transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
