import { ExpertiseItem } from '../types';

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'mechanical-cad',
    title: 'Mechanical CAD Design',
    category: 'Parametric Engineering',
    description: 'Developing high-precision parametric 3D solid and surface models from technical specifications, hand sketches, or physical reverse engineering samples.',
    technicalCapabilities: [
      'Complex lofts, sweeps, and advanced surfacing',
      'Parametric feature tree structuring for easy design updates',
      'Mass properties, center of gravity (CoG), and volume computations',
      'Draft angle and wall thickness analysis for casting & injection molding'
    ],
    complianceStandards: ['ISO 1101', 'ASME Y14.41 (MBD)', 'DIN EN ISO 5459'],
    icon: 'Compass'
  },
  {
    id: '3d-assemblies',
    title: '3D Assemblies',
    category: 'Kinematics & Multi-Body',
    description: 'Constructing bottom-up and top-down mechanical assemblies with accurate mate constraints, clearance analyses, and dynamic mechanism simulations.',
    technicalCapabilities: [
      'Dynamic collision detection and motion envelope simulation',
      'Top-down skeleton modeling for complex machinery architectures',
      'Automated multi-level Bill of Materials (BOM) creation',
      'Hardware and fastener sizing according to load requirements'
    ],
    complianceStandards: ['ISO 128', 'ASME B18 Series', 'DIN 912 / ISO 4762'],
    icon: 'Layers'
  },
  {
    id: 'engineering-drawings',
    title: 'Engineering Drawings',
    category: 'Drafting & GD&T Detailing',
    description: 'Producing production-ready 2D manufacturing drawings that convey critical dimensional tolerances, datum references, and surface finish requirements.',
    technicalCapabilities: [
      'ASME Y14.5-2018 and ISO-GPS GD&T datum referencing',
      'Surface roughness (Ra/Rz) and texture callouts (ISO 1302)',
      'Tolerance stack-up calculations (worst-case and RSS methods)',
      'Weld symbols detailing per AWS A2.4 / ISO 2553'
    ],
    complianceStandards: ['ASME Y14.5-2018', 'ISO 2768-mK', 'ISO 1302'],
    icon: 'FileSpreadsheet'
  },
  {
    id: 'cnc-vmc-support',
    title: 'CNC/VMC Manufacturing Support',
    category: 'Machining Pre-Processing',
    description: 'Translating design intent into flawless CAM geometry, eliminating tool collisions, and structuring neutral CAD formats optimized for CNC programming.',
    technicalCapabilities: [
      'Geometry healing, gap closure, and surface stitching for CAM',
      'Tool radius accessibility checks and deep pocket draft verification',
      'Custom fixture and workholding clamping clearance checks',
      'Multi-axis coordinate system origin referencing'
    ],
    complianceStandards: ['ISO 10303 (STEP AP242)', 'DIN 66025 (G-Code)', 'ISO 286-1'],
    icon: 'Cpu'
  },
  {
    id: 'machine-design',
    title: 'Machine Design',
    category: 'Custom Industrial Machinery',
    description: 'Engineering bespoke industrial equipment, fixtures, and automated production machinery built for durability, structural rigidity, and maintainability.',
    technicalCapabilities: [
      'Drive component sizing: gearboxes, ball screws, servos, and belts',
      'Structural frame deflection FEA and natural frequency checks',
      'Operator ergonomics, guard interlocks, and machine safety design',
      'Pneumatic and electro-mechanical sequencing integration'
    ],
    complianceStandards: ['ISO 12100 (Machinery Safety)', 'ISO 13849-1', 'AGMA Standards'],
    icon: 'Settings'
  },
  {
    id: 'hydraulic-systems',
    title: 'Hydraulic Systems',
    category: 'Fluid Power Mechanics',
    description: 'Providing engineering analysis, failure diagnosis, seal geometry re-engineering, and refurbishment drawings for heavy industrial hydraulic cylinders.',
    technicalCapabilities: [
      'Cylinder barrel hoop stress and test pressure calculations',
      'Euler buckling analysis for long-stroke telescopic rods',
      'Polyurethane and PTFE seal groove machining specifications',
      'Port sizing, manifold integration, and cushioning sleeve design'
    ],
    complianceStandards: ['ISO 6020/2', 'ISO 10766 (Seals)', 'DIN 24554'],
    icon: 'Activity'
  }
];

