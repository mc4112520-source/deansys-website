import React from 'react';
import { X, Cpu, CheckSquare, AlertCircle, FileText } from 'lucide-react';
import { ProjectItem } from '../../types';
import { SafeImage } from '../common/SafeImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden border border-metallic-300 relative animate-scaleUp text-navy-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual */}
        <div className="relative h-56 sm:h-64 w-full bg-navy-950 overflow-hidden">
          <SafeImage
            src={project.image}
            alt={project.title}
            fallbackTitle={project.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-navy-900/80 text-metallic-300 hover:text-white hover:bg-navy-900 border border-navy-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status */}
          <div className="absolute top-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-orange-500 text-navy-950 font-mono text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            {project.isPlaceholder && (
              <span className="px-2.5 py-1 rounded bg-navy-900/90 text-amber-300 border border-amber-400/40 font-mono text-[11px]">
                Placeholder Case Study
              </span>
            )}
          </div>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-metallic-300 block mb-1">
              Industry: {project.clientIndustry}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-16rem)] overflow-y-auto">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase text-metallic-500 font-semibold tracking-wider mb-1.5">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-navy-900 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-lg bg-surface-light border border-metallic-200">
              <h5 className="text-xs font-mono uppercase font-bold text-navy-900 mb-2 flex items-center gap-1.5 text-red-700">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Engineering Challenge</span>
              </h5>
              <p className="text-xs sm:text-sm text-metallic-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-surface-light border border-metallic-200">
              <h5 className="text-xs font-mono uppercase font-bold text-navy-900 mb-2 flex items-center gap-1.5 text-emerald-700">
                <CheckSquare className="w-4 h-4 text-emerald-600" />
                <span>Engineering Solution</span>
              </h5>
              <p className="text-xs sm:text-sm text-metallic-700 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Technical Scope: Deliverables & Software */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            
            <div className="p-4 rounded-lg bg-navy-50/70 border border-navy-100">
              <h5 className="text-xs font-mono uppercase font-bold text-navy-900 mb-2.5 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-orange-500" />
                <span>Deliverables Provided</span>
              </h5>
              <ul className="text-xs space-y-1.5 text-metallic-700">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-orange-500 font-bold">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-navy-50/70 border border-navy-100 flex flex-col justify-between">
              <div>
                <h5 className="text-xs font-mono uppercase font-bold text-navy-900 mb-2.5 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-orange-500" />
                  <span>CAD / Simulation Software</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {project.softwareUsed.map((sw, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border border-metallic-300 rounded text-xs font-mono text-navy-900">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-navy-200/60 text-[11px] font-mono text-metallic-500">
                Deliverable Format: STEP AP242 / DWG / Vector PDF
              </div>
            </div>

          </div>

          {/* Editable Placeholder Notice */}
          <div className="p-3 bg-amber-50 rounded border border-amber-200 text-xs text-amber-800 font-mono flex items-start gap-2">
            <span className="font-bold text-amber-900 uppercase flex-shrink-0">[Note]</span>
            <span>This is an illustrative placeholder project demonstrating technical depth. Real client CAD drawings and project photos can seamlessly replace this data structure.</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-surface-light border-t border-metallic-200 flex items-center justify-between">
          <div className="text-xs font-mono text-metallic-500 hidden sm:block">
            REF ID: {project.id.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-mono text-xs uppercase font-bold rounded transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
