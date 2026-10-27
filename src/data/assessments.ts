export interface AssessmentItem {
  label: string;
  weight: string;
  description: string;
}

export interface ProjectMilestone {
  week: number;
  title: string;
  description: string;
}

export const assessments: AssessmentItem[] = [
  {
    label: "Weekly simulation labs",
    weight: "30%",
    description: "Hands-on software and simulation exercises (Warm-up, Core, and Boss Level) submitted weekly to reinforce theoretical concepts.",
  },
  {
    label: "Midterm test",
    weight: "30%",
    description: "In-class evaluation covering dynamic modeling, transfer functions, time-domain response analysis, and stability criteria.",
  },
  {
    label: "Mini design project",
    weight: "30%",
    description: "A term-long team design project applying feedback control techniques to a real-world engineering plant with multiple milestone deliverables.",
  },
  {
    label: "Participation and quizzes",
    weight: "10%",
    description: "In-class discussion, lecture engagement, and periodic short comprehension quizzes.",
  },
];

export const miniProjectMilestones: ProjectMilestone[] = [
  {
    week: 5,
    title: "Plant and specs due Week 5",
    description: "Selection of physical plant model, dynamic equations, and performance specifications (overshoot, settling time, steady-state error).",
  },
  {
    week: 9,
    title: "Model and open-loop due Week 9",
    description: "Transfer function derivation, state-space formulation, and open-loop response baseline simulation.",
  },
  {
    week: 14,
    title: "Design and simulation due Week 14",
    description: "Controller synthesis (PID / lead-lag / state-feedback) and closed-loop verification simulation under disturbance inputs.",
  },
  {
    week: 15,
    title: "Report and presentation due Week 15",
    description: "Final written engineering report, oral team presentation, and live demonstration of closed-loop performance.",
  },
];

export const latePolicy = "Submissions delivered after the posted deadline will incur a 10% penalty per day up to a maximum of 3 days. Submissions beyond 72 hours late will not be accepted without prior extension approval or documented extenuating circumstances.";
