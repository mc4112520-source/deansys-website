import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { SafeImage } from '../common/SafeImage';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types';
import { ProjectModal } from '../modals/ProjectModal';
import { ExternalLink, Layers, Info } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    '3D Models',
    'Mechanical Drawings',
    'Machine Design',
    'Industrial Components',
    'Hydraulic Systems'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-surface-light relative border-t border-metallic-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="PORTFOLIO &amp; CASE STUDIES"
          title="Engineered Deliverables &amp; Design Gallery"
          subtitle="Explore representative mechanical assemblies, manufacturing drawings, SPM concepts, and fluid power engineering solutions."
        />

        {/* Placeholder Projects Notice Badge (as requested: clearly mark placeholder projects) */}
        <div className="mb-8 p-3.5 rounded-lg bg-white border border-metallic-300/80 shadow-sm flex items-center justify-between flex-wrap gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-navy-900">
            <Info className="w-4 h-4 text-orange-500 flex-shrink-0" />
            <span>
              <strong className="text-orange-600 font-bold">PORTFOLIO DEMONSTRATION:</strong> Sample engineering projects shown below reflect technical workflows and standards. Real client projects can be loaded anytime.
            </span>
          </div>
          <span className="text-[11px] text-metallic-500 bg-surface-light px-2.5 py-1 rounded border border-metallic-200">
            Total Projects: {projectsData.length}
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-navy-900 text-orange-400 shadow-md border border-navy-900'
                    : 'bg-white text-metallic-700 hover:text-navy-900 border border-metallic-200 hover:border-metallic-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-lg overflow-hidden border border-metallic-200 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
            >
              
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-navy-950">
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  fallbackTitle={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80"></div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-sm border border-navy-700 px-2.5 py-1 rounded text-[10px] font-mono font-bold text-orange-400 uppercase">
                  {project.category}
                </div>

                {/* Placeholder Marker */}
                <div className="absolute top-3 right-3 bg-amber-500/90 text-navy-950 font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow">
                  SAMPLE SPEC
                </div>

                {/* View Details Hover Overlay Action */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded bg-navy-900 text-white flex items-center justify-center opacity-90 group-hover:bg-orange-500 group-hover:text-navy-950 transition-colors shadow-lg">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-metallic-500 uppercase tracking-wide mb-1.5">
                    {project.clientIndustry}
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold font-display text-navy-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-metallic-600 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Footer Software Badges */}
                <div className="pt-3 border-t border-metallic-100 flex items-center justify-between text-[11px] font-mono text-metallic-600">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-orange-500" />
                    <span>{project.softwareUsed[0]}</span>
                  </div>
                  <span className="text-orange-600 font-bold group-hover:underline">
                    View Scope &rarr;
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-metallic-200">
            <p className="text-metallic-600 font-mono text-sm">No projects found in this category.</p>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

