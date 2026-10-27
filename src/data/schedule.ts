export interface Week {
  number: number;
  title: string;
  topics: string;
  date?: string;
  milestone?: string;
}

export const schedule: Week[] = [
  {
    number: 1,
    title: "Introduction to Control Systems",
    topics: "Course overview, open-loop vs. closed-loop control, feedback concepts, system dynamic block diagrams.",
    date: "Sep 2 - Sep 6",
  },
  {
    number: 2,
    title: "Mathematical Modeling of Physical Systems",
    topics: "Differential equations, mechanical translational/rotational systems, electrical circuits, liquid-level systems.",
    date: "Sep 9 - Sep 13",
  },
  {
    number: 3,
    title: "Transfer Functions & Block Diagrams",
    topics: "Laplace transforms, transfer function derivations, block diagram algebra, reduction techniques.",
    date: "Sep 16 - Sep 20",
  },
  {
    number: 4,
    title: "State-Space Representation",
    topics: "State variables, state-space equations, vector-matrix differential equations, conversion between transfer functions and state-space.",
    date: "Sep 23 - Sep 27",
  },
  {
    number: 5,
    title: "Time-Domain Transient Response",
    topics: "First-order and second-order system responses, step response, damping ratio, natural frequency, settling time, overshoot.",
    date: "Sep 30 - Oct 4",
    milestone: "Plant and specs due Week 5",
  },
  {
    number: 6,
    title: "Stability & Routh-Hurwitz Criterion",
    topics: "Concept of BIBO stability, characteristic equations, Routh-Hurwitz stability criterion and special cases.",
    date: "Oct 7 - Oct 11",
  },
  {
    number: 7,
    title: "Steady-State Error Analysis",
    topics: "System types (Type 0, 1, 2), static error constants (Kp, Kv, Ka), steady-state error for step, ramp, and parabolic inputs.",
    date: "Oct 14 - Oct 18",
  },
  {
    number: 8,
    title: "Midterm Review & Examination",
    topics: "Comprehensive review of modeling, transient response, and stability analysis. Midterm assessment.",
    date: "Oct 21 - Oct 25",
    milestone: "Midterm review Week 8",
  },
  {
    number: 9,
    title: "Root Locus Method",
    topics: "Root locus concept, construction rules, magnitude and angle conditions, open-loop poles/zeros influence.",
    date: "Oct 28 - Nov 1",
    milestone: "Model and open-loop due Week 9",
  },
  {
    number: 10,
    title: "Root Locus Compensator Design",
    topics: "Lead compensators, lag compensators, lead-lag design for transient and steady-state specifications.",
    date: "Nov 4 - Nov 8",
  },
  {
    number: 11,
    title: "Frequency Response Analysis",
    topics: "Bode plots, logarithmic magnitude and phase diagrams, gain margin, phase margin, transfer functions from Bode plots.",
    date: "Nov 11 - Nov 15",
  },
  {
    number: 12,
    title: "PID Controller Design & Tuning",
    topics: "Proportional, Integral, and Derivative control actions, Ziegler-Nichols tuning methods, anti-windup, practical implementation.",
    date: "Nov 18 - Nov 22",
  },
  {
    number: 13,
    title: "Nyquist Stability Criterion",
    topics: "Polar plots, Mapping theorem, Nyquist stability criterion, relative stability, gain and phase margin analysis.",
    date: "Nov 25 - Nov 29",
  },
  {
    number: 14,
    title: "State-Space Control & Observer Design",
    topics: "Controllability, observability, pole placement design via state feedback, Ackermann's formula, full-order state observers.",
    date: "Dec 2 - Dec 6",
    milestone: "Design and simulation due Week 14",
  },
  {
    number: 15,
    title: "Capstone Project Synthesis & Presentations",
    topics: "Final project review, comprehensive closed-loop system evaluation, group presentations and technical reporting.",
    date: "Dec 9 - Dec 13",
    milestone: "Report and presentation due Week 15",
  },
];

export const weeks = schedule;
