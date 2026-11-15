import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: '3d-modeling',
    title: '3D Modeling',
    shortDescription: 'Professional 3D modelling of mechanical components, assemblies and industrial equipment.',
    fullDescription: 'Our 3D modeling service delivers high-fidelity parametric solid and surface models tailored for mechanical engineering, manufacturing evaluation, and prototyping. We construct detailed part models and complex multi-component assemblies with precise tolerances, mass property analysis, and kinematic motion verification.',
    iconName: 'Box',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', // High-tech engineering CAD screen / assembly
    features: [
      'Parametric solid & complex surface modeling',
      'Multi-body assembly design & interference checking',
      'Finite element analysis (FEA) mesh-ready geometry',
      'Exploded view creation and technical assembly documentation'
    ],
    deliverables: [
      'Native CAD files (SolidWorks, Creo, Inventor)',
      'Universal interchange files (STEP, IGES, Parasolid X_T)',
      '3D PDF for non-CAD stakeholder review',
      'Mass properties and bill of materials (BOM)'
    ],
    toolsUsed: ['SolidWorks', 'PTC Creo', 'Autodesk Inventor', 'Siemens NX'],
    turnaroundEstimate: '3-7 Business Days (based on assembly complexity)'
  },
  {
    id: 'drawing-modification',
    title: 'Drawing Modification',
    shortDescription: 'Modification, updating and optimization of existing mechanical engineering drawings.',
    fullDescription: 'We revise legacy 2D blueprints, redlined engineering changes, and outdated drafting files to comply with modern ASME Y14.5 or ISO drafting standards. Our team eliminates drafting ambiguities, integrates geometric dimensioning and tolerancing (GD&T), and optimizes drawing layouts for modern production floors.',
    iconName: 'FilePenLine',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80', // Blueprint & calipers / technical drafting
    features: [
      'Engineering Change Order (ECO/ECN) incorporation',
      '2D to 3D associative model-to-drawing synchronization',
      'GD&T tolerance stack-up and precision detailing',
      'Legacy scanned paper blueprint digitizing and conversion'
    ],
    deliverables: [
      'High-resolution vector PDFs with searchable text',
      'Production-ready AutoCAD DWG & DXF files',
      'Detailed revision history log and redline markup review',
      'Updated Bill of Materials (BOM) & title blocks'
    ],
    toolsUsed: ['AutoCAD Mechanical', 'DraftSight', 'SolidWorks Drafting', 'BricsCAD'],
    turnaroundEstimate: '2-4 Business Days'
  },
  {
    id: 'step-file-generation',
    title: 'STEP File Generation for CNC & VMC',
    shortDescription: 'Accurate 3D STEP file preparation for CNC and VMC manufacturing workflows.',
    fullDescription: 'Flawless CAM machining requires clean, watertight 3D geometries without gaps, inverted normals, or self-intersecting surfaces. We generate and validate industry-standard STEP (AP203, AP214, AP242) and neutral machining files directly compatible with 3-axis, 4-axis, and 5-axis CNC & VMC machining centers.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80', // CNC milling precision machine
    features: [
      'Watertight geometry inspection and surface healing',
      'Machining orientation setup and tool access verification',
      'Direct compatibility testing with Mastercam, Siemens NX CAM & Fusion 360',
      'Toleranced model data export preserving critical datum structures'
    ],
    deliverables: [
      'STEP AP214 / AP242 with PMI annotations',
      'IGES / Parasolid (.x_t) backup geometry',
      'Machining setup reference sheet with critical datum callouts',
      'Coordinate system zero-point alignment report'
    ],
    toolsUsed: ['Siemens NX', 'SolidWorks', 'Mastercam', 'Rhino 3D'],
    turnaroundEstimate: '1-3 Business Days'
  },
  {
    id: 'spm-design',
    title: 'Special Purpose Machine Design',
    shortDescription: 'Custom mechanical design solutions for special purpose machines and industrial applications.',
    fullDescription: 'Custom industrial machines require engineering tailored to specific factory processes. We conceptualize, engineer, and detail custom Special Purpose Machines (SPMs)—including indexing tables, automated feeding mechanisms, pressing fixtures, and material handling systems engineered for high duty cycles and safety compliance.',
    iconName: 'Cog',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80', // Industrial machinery automation
    features: [
      'Concept development and kinematic cycle-time calculation',
      'Structural frame FEA analysis and deflection verification',
      'Pneumatic, hydraulic, and electromechanical drive sizing',
      'Turnkey manufacturing drawings with fabrication tolerances'
    ],
    deliverables: [
      'Complete 3D master assembly and sub-assemblies',
      'Full manufacturing drawing packet (welding, machining, sheet metal)',
      'Commercial parts catalog sourcing BOM (motors, bearings, actuators)',
      'Operator maintenance and assembly manual package'
    ],
    toolsUsed: ['SolidWorks Machine Design', 'Autodesk Inventor', 'ANSYS Mechanical', 'MathCAD'],
    turnaroundEstimate: '2-6 Weeks (depending on scope)'
  },
  {
    id: 'hydraulic-solutions',
    title: 'Hydraulic Cylinder Maintenance Solutions',
    shortDescription: 'Engineering support and maintenance solutions for hydraulic cylinder systems.',
    fullDescription: 'We provide comprehensive mechanical engineering evaluations for industrial hydraulic cylinders, heavy equipment rams, and custom hydraulic actuators. Our support encompasses seal failure analysis, rod buckling and barrel wall thickness recalculations, re-engineering for extended duty life, and precise replacement part drawings.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80', // Heavy hydraulic / mechanical cylinder system
    features: [
      'Cylinder barrel bursting pressure and stress calculations',
      'Piston rod buckling analysis under high compressive load',
      'Seal selection and gland groove geometry optimization',
      'Refurbishment drawings for honed tubes, chrome rods, and end glands'
    ],
    deliverables: [
      'Cylinder rebuild & maintenance engineering assessment report',
      'Machining drawings for custom rod ends, caps, and ports',
      'Standardized seal kit bill of materials',
      'Testing protocol specifications (hydrostatic pressure test)'
    ],
    toolsUsed: ['AutoCAD', 'SolidWorks Simulation', 'Fluid Power Engineering Tools', 'MathCAD'],
    turnaroundEstimate: '3-7 Business Days'
  },
  {
    id: 'standardization-parts',
    title: 'Standardization of Parts',
    shortDescription: 'Standardization of mechanical components, drawings and engineering specifications.',
    fullDescription: 'Eliminate part redundancy, lower procurement costs, and accelerate engineering turnaround by establishing a unified component library. We audit your existing hardware and custom component inventory to formulate standardized drawing templates, modular part families, and centralized engineering classification systems.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', // Precision mechanical components organized
    features: [
      'Part consolidation and redundant component elimination',
      'Creation of parametric configuration tables and design tables',
      'Company-wide title block and drafting standard manual setup',
      'Fastener, bearing, fitting, and raw material standardization'
    ],
    deliverables: [
      'Standardized CAD component library & design tables',
      'Standard engineering specification guide (PDF handbook)',
      'Preferred parts catalog for mechanical design teams',
      'Clean ERP/PDM-ready item numbering taxonomy'
    ],
    toolsUsed: ['SolidWorks PDM / Toolbox', 'Autodesk Vault', 'Excel Automation', 'AutoCAD Standards'],
    turnaroundEstimate: '1-3 Weeks'
  }
];

