import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'High-Torque Planetary Gearbox Housing & Internals',
    category: '3D Models',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Heavy Transmission & Power Generation',
    summary: 'Parametric 3D solid modeling and dynamic assembly design for a multi-stage industrial planetary gearbox.',
    challenge: 'Tight envelope constraints and high thermal dissipation requirements necessitated optimized internal wall thicknesses and precise tooth contact geometry.',
    solution: 'Constructed an associative 3D CAD model featuring ribbed structural casing, integrated oil lubrication channels, and verified gear mesh clearances.',
    softwareUsed: ['SolidWorks 2024', 'ANSYS Mechanical', 'KISSsoft'],
    deliverables: ['STEP AP242 Master Solid', 'Parasolid .x_t Assembly', 'Detailed Exploded View PDF', 'Consolidated BOM'],
    isPlaceholder: true
  },
  {
    id: 'proj-02',
    title: 'Precision Spindle Shaft 2D Production Drawing',
    category: 'Mechanical Drawings',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'CNC Machine Tool Manufacturing',
    summary: 'Comprehensive manufacturing drawing package with strict GD&T runout and concentricity tolerances.',
    challenge: 'The high-speed rotating spindle suffered from runout deviations during batch manufacturing due to ambiguous legacy drawing datums.',
    solution: 'Re-engineered drawing detailing with explicit datum reference frames per ASME Y14.5-2018, specifying total radial runout within 0.003mm.',
    softwareUsed: ['AutoCAD Mechanical', 'SolidWorks MBD'],
    deliverables: ['2D AutoCAD DWG & DXF', 'Dimensioned PDF Drawing with Title Block', 'GD&T Datum Verification Sheet'],
    isPlaceholder: true
  },
  {
    id: 'proj-03',
    title: 'Automated Rotary Indexing Table & Pick-and-Place SPM',
    category: 'Machine Design',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Automotive Component Assembly',
    summary: 'Complete mechanical design and structural modeling of an 8-station rotary indexing assembly machine.',
    challenge: 'Achieving a 3.2-second station cycle time while maintaining structural rigidity against dynamic indexing deceleration forces.',
    solution: 'Engineered a rigid welded tubular frame with internal gusseting, pneumatic clamping modules, and servo-driven precision cam indexing.',
    softwareUsed: ['Autodesk Inventor', 'SolidWorks Simulation'],
    deliverables: ['Full SPM CAD Assembly', 'Sheet Metal Flat Patterns (DXF)', 'Pneumatic Schematic Overlay', 'Complete Buy-out Hardware BOM'],
    isPlaceholder: true
  },
  {
    id: 'proj-04',
    title: 'Multi-Axis CNC Milled Impeller & Hub STEP Package',
    category: 'Industrial Components',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Centrifugal Turbomachinery',
    summary: 'Surface modeling and clean STEP file generation for complex curved aerodynamic turbine impellers.',
    challenge: 'Original customer CAD suffered from micro-gaps and unstitched non-manifold edges that caused CAM toolpath generation failures.',
    solution: 'Performed geometric healing, re-lofted blade suction and pressure surfaces with G2 continuity, and exported validated STEP AP242 geometry.',
    softwareUsed: ['Siemens NX CAD', 'Rhino 3D', 'Mastercam'],
    deliverables: ['Watertight STEP AP242 File', 'IGES Surface Backup', 'Toolpath Accessibility Report'],
    isPlaceholder: true
  },
  {
    id: 'proj-05',
    title: '250-Ton Heavy Press Double-Acting Hydraulic Cylinder',
    category: 'Hydraulic Systems',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Metal Stamping & Forging Press',
    summary: 'Mechanical refurbishment engineering, seal redesign, and drawing generation for heavy press hydraulic cylinders.',
    challenge: 'Premature rod seal blowouts and gland galling caused by high surge pressures and side load deflections during stamping operations.',
    solution: 'Redesigned the gland assembly with composite wear rings, optimized seal grooves for step-seal arrangements, and validated cylinder wall thickness under 350 bar test pressure.',
    softwareUsed: ['SolidWorks', 'MathCAD Calculation Sheets', 'AutoCAD'],
    deliverables: ['Cylinder Assembly CAD Model', 'Honed Barrel & Chrome Rod Drawings', 'Seal Kit Specification Sheet', 'Pressure Test Procedure'],
    isPlaceholder: true
  },
  {
    id: 'proj-06',
    title: 'Flanged Bearing Block & Modular Bracket Family',
    category: 'Industrial Components',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Industrial Conveyor Systems',
    summary: 'Standardization and parametric CAD family generation for cast iron mounting brackets and pillow block housings.',
    challenge: 'Over 45 duplicate part drawings existed across different projects with minor non-standard dimensional variances.',
    solution: 'Standardized the component line into 6 modular frame sizes governed by parametric design tables, reducing manufacturing changeovers.',
    softwareUsed: ['SolidWorks Design Tables', 'Autodesk Vault'],
    deliverables: ['Parametric CAD Library (.sldprt)', 'Standard Parts Catalog (PDF)', 'Drawing Template Standard Package'],
    isPlaceholder: true
  },
  {
    id: 'proj-07',
    title: 'Hydraulic Manifold Block with Cartridge Valves',
    category: 'Hydraulic Systems',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Mobile Construction Equipment',
    summary: '3D modeling and multi-axis drilling drawings for a high-density ductile iron hydraulic control manifold.',
    challenge: 'Routing 18 internal flow channels within a compact block without cross-drilling breaches or excessive pressure drops.',
    solution: 'Utilized 3D internal flow path clearance verification to maintain minimum 4mm wall safety margins between pressurized galleries.',
    softwareUsed: ['Autodesk Inventor', 'SolidWorks Flow Simulation'],
    deliverables: ['Manifold 3D Solid Model', 'Multi-View Drilling Layout Drawings', 'Port Identification Diagram (SAE/BSPP)'],
    isPlaceholder: true
  },
  {
    id: 'proj-08',
    title: 'Heavy Duty Structural Frame & Lifting Lug Assembly',
    category: 'Machine Design',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80',
    clientIndustry: 'Material Handling & Rigging',
    summary: 'Fabrication drawings and weldment cut sheets for high-capacity industrial skids and lifting beams.',
    challenge: 'Compliance with strict structural welding codes and crane lifting lug safety factors under unbalanced dynamic loading.',
    solution: 'Drafted complete weldment cut lists, weld size callouts per AWS D1.1, and localized reinforcement pad details.',
    softwareUsed: ['AutoCAD Mechanical', 'SolidWorks Weldments'],
    deliverables: ['Full Fabrication Drawing Set', 'Structural Tube Cut List & BOM', 'Weld Inspection Schedule'],
    isPlaceholder: true
  }
];

