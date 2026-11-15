import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Understand Requirements',
    subtitle: 'Technical Scoping & Data Input',
    description: 'We initiate every project by thoroughly analyzing your technical requirements, design briefs, sample parts, or legacy drawings.',
    activities: [
      'Comprehensive review of engineering inputs & tolerance specifications',
      'Manufacturing constraint analysis (CNC, Sheet Metal, Casting, Welding)',
      'Clarification of interface boundaries and operating environment',
      'Project milestone definition and deliverable format agreement'
    ],
    deliverables: ['Statement of Work (SOW)', 'Technical Input Checklist', 'Timeline & Milestone Plan']
  },
  {
    stepNumber: '02',
    title: 'Design & Engineering',
    subtitle: 'Parametric CAD & Engineering Computations',
    description: 'Our mechanical designers construct robust 3D models and engineering drawings adhering to recognized ISO / ASME drafting standards.',
    activities: [
      'Parametric 3D part and assembly modeling',
      'Clearance, interference, and kinematic range verification',
      'Geometric Dimensioning and Tolerancing (GD&T) application',
      'Structural sizing calculations and material selection guidance'
    ],
    deliverables: ['Preliminary 3D CAD Models', 'Preliminary Assembly Views', 'Engineering Calculation Sheets']
  },
  {
    stepNumber: '03',
    title: 'Review & Modification',
    subtitle: 'Feedback Iteration & Precision Refinement',
    description: 'We conduct collaborative review cycles with your engineering team, incorporating redline revisions and optimizing for manufacturing efficiency.',
    activities: [
      'Interactive 3D PDF / Web-viewer markup sessions',
      'Incorporation of design iterations and ECO modifications',
      'Tolerance stack-up verification and drafting cross-checks',
      'Machining accessibility and toolpath clearance audit'
    ],
    deliverables: ['Revision History Log', 'Redline Markup Comparison', 'Updated CAD Models']
  },
  {
    stepNumber: '04',
    title: 'Final Deliverables',
    subtitle: 'Production-Ready Package Handover',
    description: 'We supply clean, fully validated, production-ready engineering packages ready for immediate CAM programming, fabrication, or archiving.',
    activities: [
      'STEP / IGES neutral file generation for CNC/VMC machines',
      'Vector PDF & DWG/DXF 2D manufacturing drawings',
      'Hierarchical Bill of Materials (BOM) with commercial part specs',
      'Archive package organization with clear file naming conventions'
    ],
    deliverables: ['STEP AP242 / IGES Files', 'Production-Grade 2D Drawings', 'Consolidated Excel / CSV BOM', 'Archival Zip Archive']
  }
];

