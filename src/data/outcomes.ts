export interface Prerequisite {
  title: string;
  description: string;
  selfCheckExample: string;
}

export const theme = "Make systems behave.";
export const courseTheme = theme;

export const courseDescription = "Where behavior is designed, not guessed. An introduction to modeling, analyzing, and controlling dynamic physical systems using feedback.";

export const outcomes: string[] = [
  "Derive mathematical models (differential equations, transfer functions, state-space models) for mechanical, electrical, and electromechanical systems.",
  "Analyze system stability and response dynamics in time and frequency domains using standard analytical and computational tools.",
  "Design controllers (PID, lead-lag compensators, state feedback) to meet specified transient and steady-state performance requirements.",
  "Validate and simulate closed-loop control designs using industry-standard software tools and simulation environments.",
];

export const prerequisites: Prerequisite[] = [
  {
    title: "Programming basics",
    description: "Familiarity with Python or MATLAB data structures, basic scripting, arrays, function definitions, and plotting.",
    selfCheckExample: "Can you write a script to generate a time vector t from 0 to 10s and compute/plot y = e^(-2t) * sin(5t)?",
  },
  {
    title: "ODEs and complex numbers",
    description: "Understanding linear ordinary differential equations, Euler's formula, complex arithmetic, and Laplace transform fundamentals.",
    selfCheckExample: "Can you solve d^2y/dt^2 + 3 dy/dt + 2y = 0 with initial conditions y(0)=1, y'(0)=0, and state its roots in the complex plane?",
  },
  {
    title: "RLC circuits",
    description: "Basic electric circuit analysis including Kirchhoff's laws, impedance concepts, passive components (R, L, C), and operational amplifiers.",
    selfCheckExample: "Can you write Kirchhoff's voltage law for a series RLC circuit driven by a voltage source v(t) and find its differential equation?",
  },
];
