export interface Resource {
  category: "Textbooks" | "Tools" | "References" | string;
  name: string;
  url: string;
  description: string;
}

export const resources: Resource[] = [
  {
    category: "Textbooks",
    name: "Modern Control Engineering (Ogata)",
    url: "https://www.pearson.com/en-us/subject-catalog/p/modern-control-engineering/P200000003182",
    description: "Classic textbook by Katsuhiko Ogata covering theoretical foundations, transfer functions, root locus, frequency response, and state-space analysis.",
  },
  {
    category: "Textbooks",
    name: "Feedback Systems (Åström & Murray)",
    url: "https://www.cds.caltech.edu/~murray/amwiki/",
    description: "Open-access textbook by Karl Johan Åström and Richard M. Murray focusing on feedback principles, state-space methods, and analytical modeling.",
  },
  {
    category: "Tools",
    name: "MATLAB & Simulink",
    url: "https://www.mathworks.com/products/simulink.html",
    description: "Industry-standard software environment for modeling, simulating, and analyzing dynamic systems and control feedback loops.",
  },
  {
    category: "Tools",
    name: "Python Control Systems Library",
    url: "https://python-control.org/",
    description: "Open-source Python package implementing standard algorithms for analyze and design of feedback control systems.",
  },
  {
    category: "References",
    name: "Control Tutorials for MATLAB and Simulink (CTMS)",
    url: "https://ctms.engin.umich.edu/",
    description: "Tutorial site created by the University of Michigan and Carnegie Mellon providing step-by-step control system design tutorials.",
  },
  {
    category: "References",
    name: "MIT OpenCourseWare: Feedback Control Systems",
    url: "https://ocw.mit.edu/courses/2-04a-systems-and-controls-spring-2013/",
    description: "Course materials and lectures covering dynamic systems, transfer functions, stability, and closed-loop control from MIT.",
  },
];
