export interface Lab {
  slug: string;
  title: string;
  week: number;
  group: "Modeling" | "Response" | "Stability & Design" | "Project";
  description: string;
  hasMdx: boolean;
}

export const labs: Lab[] = [
  {
    slug: "week-1-introduction",
    title: "Introduction to Control Systems & Simulation Environment",
    week: 1,
    group: "Modeling",
    description: "Warm-up: Set up Python/MATLAB environment and simulate a 1st-order RC circuit. Core: Model open-loop vs. closed-loop step response for a DC motor. Boss Level: Implement discrete step simulation with sensor noise.",
    hasMdx: true,
  },
  {
    slug: "week-2-mathematical-modeling",
    title: "Mathematical Modeling of Electromechanical Systems",
    week: 2,
    group: "Modeling",
    description: "Warm-up: Derive differential equations for a mass-spring-damper plant. Core: Model a DC motor electromechanical system with back-EMF feedback. Boss Level: Build a coupled two-tank liquid-level system model.",
    hasMdx: false,
  },
  {
    slug: "week-3-transfer-functions",
    title: "Transfer Functions & Block Diagram Algebra",
    week: 3,
    group: "Modeling",
    description: "Warm-up: Compute Laplace transforms and transfer functions for RL circuits. Core: Perform block diagram reduction on a multi-loop feedback control system. Boss Level: Verify equivalence using Mason's gain formula on signal flow graphs.",
    hasMdx: false,
  },
  {
    slug: "week-4-state-space",
    title: "State-Space Modeling & System Conversions",
    week: 4,
    group: "Modeling",
    description: "Warm-up: Convert a 2nd-order ODE to phase-variable state-space form. Core: Derive state-space models for an inverted pendulum system and convert to TF. Boss Level: Compute state-transition matrix e^(At) numerically and analytically.",
    hasMdx: false,
  },
  {
    slug: "week-5-time-response",
    title: "Time-Domain Response & Performance Specifications",
    week: 5,
    group: "Response",
    description: "Warm-up: Measure rise time, peak time, overshoot, and settling time of 2nd-order systems. Core: Parameterize damping ratio zeta and natural frequency wn to match target specifications. Boss Level: Analyze step response with dominant/non-dominant secondary poles and zeros.",
    hasMdx: false,
  },
  {
    slug: "week-6-stability-analysis",
    title: "Stability & Routh-Hurwitz Criterion",
    week: 6,
    group: "Response",
    description: "Warm-up: Construct Routh arrays for 3rd and 4th-order polynomial characteristic equations. Core: Find parameter gain ranges K for BIBO stability in closed-loop systems. Boss Level: Analyze edge cases with zero rows and imaginary axis roots.",
    hasMdx: false,
  },
  {
    slug: "week-7-steady-state-error",
    title: "Steady-State Error & System Type Classification",
    week: 7,
    group: "Response",
    description: "Warm-up: Classify system types 0, 1, and 2 and calculate Kp, Kv, and Ka error constants. Core: Measure steady-state tracking error for step, ramp, and parabolic inputs. Boss Level: Design disturbance rejection feedforward compensation for unity feedback.",
    hasMdx: false,
  },
  {
    slug: "week-8-midterm-review",
    title: "Midterm Performance & System Audit",
    week: 8,
    group: "Response",
    description: "Warm-up: Review transient specification metrics and stability bounds. Core: Comprehensive audit of modeling, time response, and stability analysis. Boss Level: Diagnose unknown plant dynamics from step response data.",
    hasMdx: false,
  },
  {
    slug: "week-9-root-locus",
    title: "Root Locus Method & Pole Trajectories",
    week: 9,
    group: "Stability & Design",
    description: "Warm-up: Sketch root locus asymptotes and real-axis locus segments by hand. Core: Plot root locus trajectories in software and identify critical gain K_crit. Boss Level: Analyze breakaway points, departure angles, and complex pole zero interactions.",
    hasMdx: false,
  },
  {
    slug: "week-10-lead-lag-design",
    title: "Root Locus Controller Design: Lead-Lag",
    week: 10,
    group: "Stability & Design",
    description: "Warm-up: Design a lead compensator to meet transient overshoot and settling specifications. Core: Design a lag compensator to improve steady-state velocity error constant Kv by 10x. Boss Level: Synthesize a combined lead-lag compensator for high-order plants.",
    hasMdx: false,
  },
  {
    slug: "week-11-bode-plots",
    title: "Frequency Response & Bode Plot Analysis",
    week: 11,
    group: "Stability & Design",
    description: "Warm-up: Draw straight-line asymptotic Bode magnitude and phase approximations. Core: Determine gain margin, phase margin, and gain/phase crossover frequencies. Boss Level: Extract open-loop transfer function parameters from experimental frequency data.",
    hasMdx: false,
  },
  {
    slug: "week-12-pid-controllers",
    title: "PID Controller Tuning & Implementation",
    week: 12,
    group: "Stability & Design",
    description: "Warm-up: Observe P, I, and D actions individually on a 2nd-order plant step response. Core: Tune PID gains using Ziegler-Nichols reaction curve and ultimate sensitivity methods. Boss Level: Implement anti-windup clamping and derivative filtering under noise.",
    hasMdx: true,
  },
  {
    slug: "week-13-nyquist-stability",
    title: "Nyquist Stability & Relative Stability Margins",
    week: 13,
    group: "Stability & Design",
    description: "Warm-up: Plot polar frequency response curves for 1st and 2nd order systems. Core: Apply Nyquist criterion Z = N + P to determine closed-loop stability. Boss Level: Evaluate gain and phase margins for conditionally stable systems with time delay.",
    hasMdx: false,
  },
  {
    slug: "week-14-state-space-control",
    title: "State-Space Control & Observer Synthesis",
    week: 14,
    group: "Project",
    description: "Warm-up: Test controllability and observability matrices for full rank. Core: Design state feedback gain matrix K using pole placement / Ackermann formula. Boss Level: Construct a full-order Luenberger observer to estimate unmeasured states.",
    hasMdx: false,
  },
  {
    slug: "week-15-capstone-project",
    title: "Capstone Project Evaluation & Closed-Loop Verification",
    week: 15,
    group: "Project",
    description: "Warm-up: Verify closed-loop pole locations against baseline specifications. Core: Execute complete closed-loop simulation under load disturbance and sensor noise. Boss Level: Final project synthesis, comparative performance trade-off analysis, and presentation.",
    hasMdx: false,
  },
];
