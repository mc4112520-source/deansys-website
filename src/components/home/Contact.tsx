import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ContactFormData } from '../../types';
import { siteConfig, getWhatsAppLink } from '../../config/siteConfig';
import { SafeImage } from '../common/SafeImage';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  RotateCcw
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: preselectedService || '3D Modeling',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // Update selected service if parent changes it
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    '3D Modeling',
    'Drawing Modification',
    'STEP File Generation for CNC & VMC',
    'Special Purpose Machine Design',
    'Hydraulic Cylinder Maintenance Solutions',
    'Standardization of Parts',
    'Other Custom Engineering Requirement'
  ];

  // Validation logic
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Organization name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[+0-9\s\-()]{7,18}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid contact phone number (min 7 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select an engineering service.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide brief details of your engineering requirement.';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters of project description.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-level error on edit
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      service: '3D Modeling',
      projectDescription: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  // WhatsApp click-to-chat hooked to central config
  const handleWhatsAppClick = () => {
    const text = formData.service
      ? `Hello ${siteConfig.company.name}, I am interested in your engineering services (${formData.service}). Please share more details.`
      : `Hello ${siteConfig.company.name}, I am interested in your engineering services. Please share more details.`;
    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          badge="GET IN TOUCH &bull; REQUEST A QUOTE"
          title="Submit an Engineering Enquiry"
          subtitle="Share your 2D drawings, 3D CAD requirements, or machine specifications. We review all technical inputs with confidentiality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-light rounded-xl p-6 sm:p-8 border border-metallic-200/90 shadow-lg">

            <div className="flex items-center justify-between pb-4 border-b border-metallic-200 mb-6">
              <div>
                <h3 className="text-xl font-bold font-display text-navy-900">
                  Engineering Scope Intake Form
                </h3>
                <p className="text-xs text-metallic-600 mt-0.5">
                  Complete the fields below for a preliminary scope and quotation review.
                </p>
              </div>
              <span className="text-[10px] font-mono text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-200 font-semibold">
                CONFIDENTIAL
              </span>
            </div>

            {/* Success Notification Banner (Honest frontend validation state) */}
            {isSubmitted && submittedData ? (
              <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-4 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold font-display text-base text-emerald-950">
                      Enquiry Validated Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      All required technical fields have passed frontend validation. (Note: This is a frontend simulation. In production, this data connects directly to your backend API or CRM).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-emerald-200 text-xs font-mono text-navy-900 space-y-1.5">
                  <div><strong>Client:</strong> {submittedData.fullName} ({submittedData.companyName})</div>
                  <div><strong>Email:</strong> {submittedData.email} | <strong>Phone:</strong> {submittedData.phone}</div>
                  <div><strong>Selected Service:</strong> {submittedData.service}</div>
                  <div className="truncate"><strong>Description:</strong> {submittedData.projectDescription}</div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>

                  <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold rounded transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1.5">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Manish Chauhan"
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-sm text-navy-900 placeholder-metallic-400 focus:outline-none focus:ring-2 transition-all ${errors.fullName
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-metallic-300 focus:border-navy-800 focus:ring-navy-100'
                        }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1.5">
                      Company Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g., Apex Machine Works Pvt Ltd"
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-sm text-navy-900 placeholder-metallic-400 focus:outline-none focus:ring-2 transition-all ${errors.companyName
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-metallic-300 focus:border-navy-800 focus:ring-navy-100'
                        }`}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1.5">
                      Email Address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="engineer@company.com"
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-sm text-navy-900 placeholder-metallic-400 focus:outline-none focus:ring-2 transition-all ${errors.email
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-metallic-300 focus:border-navy-800 focus:ring-navy-100'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1.5">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded bg-white border text-sm text-navy-900 placeholder-metallic-400 focus:outline-none focus:ring-2 transition-all ${errors.phone
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-metallic-300 focus:border-navy-800 focus:ring-navy-100'
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Select Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1.5">
                    Select Engineering Service <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded bg-white border border-metallic-300 text-sm text-navy-900 focus:outline-none focus:border-navy-800 focus:ring-2 focus:ring-navy-100 transition-all"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-xs font-mono uppercase font-semibold text-navy-900 mb-1.5">
                    Project Description &amp; Technical Requirements <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Describe your component, machinery scope, tolerances, required CAD software, or existing drawings..."
                    className={`w-full px-3.5 py-2.5 rounded bg-white border text-sm text-navy-900 placeholder-metallic-400 focus:outline-none focus:ring-2 transition-all ${errors.projectDescription
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-metallic-300 focus:border-navy-800 focus:ring-navy-100'
                      }`}
                  ></textarea>
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                  <p className="mt-1 text-[11px] text-metallic-500 font-mono">
                    You can share 3D CAD (STEP/IGES) or PDF drawings securely after our preliminary review.
                  </p>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-navy-950 font-bold font-mono text-sm uppercase tracking-wider rounded shadow-md hover:shadow-orange-500/20 active:scale-95 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <span className="text-xs text-metallic-500 font-mono">
                    Direct engineering response within 24 hours.
                  </span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Details, WhatsApp CTA, Placeholders */}
          <div className="lg:col-span-5 space-y-6">

            {/* Facility & Engineering Consultation Desk Image */}
            <div className="relative rounded-xl overflow-hidden border border-metallic-200 shadow-md bg-navy-950 aspect-[16/9] group">
              <SafeImage
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80"
                alt="DEANSYS Headquarters & Consultation Desk"
                fallbackTitle="DEANSYS Consultation Desk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 bg-navy-950/90 backdrop-blur-sm border border-navy-700/80 px-2.5 py-1 rounded text-[11px] font-mono text-orange-400 font-bold">
                HEADQUARTERS // TECHNICAL DESK
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono bg-navy-950/80 backdrop-blur-sm p-2 rounded border border-navy-800 flex items-center justify-between">
                <span>In-Person &amp; Remote Review</span>
                <span className="text-emerald-400 font-bold">Active</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Box */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-200 font-bold block">
                    Fast Track Engineering
                  </span>
                  <h4 className="font-display font-bold text-lg text-white">
                    Need Immediate CAD Assistance?
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-5">
                Connect directly with our engineering desk on WhatsApp to discuss drawing revisions, urgency turnarounds, or file interchange specs.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-emerald-950 font-mono text-xs font-bold uppercase tracking-wider rounded hover:bg-emerald-50 transition-colors shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>

            {/* Contact Information Placeholders Card */}
            <div className="bg-navy-900 text-white rounded-xl p-6 sm:p-7 border border-navy-800 shadow-xl space-y-6">
              <div className="pb-4 border-b border-navy-800">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold block mb-1">
                  OFFICE &amp; WORKSHOP DETAILS
                </span>
                <h4 className="font-display font-bold text-lg text-white">
                  Engineering Headquarters
                </h4>
              </div>

              {/* Contact list */}
              <div className="space-y-4 text-sm text-metallic-300">

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-metallic-400 uppercase">Registered Address Placeholder</div>
                    <div className="text-white font-medium mt-0.5">
                      {siteConfig.contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-metallic-400 uppercase">Engineering Desk Email</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-orange-400 transition-colors font-medium mt-0.5 block">
                      {siteConfig.contact.email} / {siteConfig.contact.altEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-metallic-400 uppercase">Direct Telephone Line</div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-white hover:text-orange-400 transition-colors font-medium mt-0.5 block font-mono">
                      {siteConfig.contact.phoneDisplay} / {siteConfig.contact.altPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-navy-800 border border-navy-700 flex items-center justify-center text-orange-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-metallic-400 uppercase">Working Hours</div>
                    <div className="text-white font-medium mt-0.5">
                      {siteConfig.contact.officeHours}
                    </div>
                    <div className="text-xs text-metallic-400 mt-0.5">{siteConfig.contact.emergencySupport}</div>
                  </div>
                </div>

              </div>

              {/* Confidentiality note */}
              <div className="pt-4 border-t border-navy-800 text-[11px] font-mono text-metallic-400 leading-relaxed">
                Non-Disclosure Agreements (NDA) are willingly executed prior to receiving proprietary customer CAD databases or production drawings.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

