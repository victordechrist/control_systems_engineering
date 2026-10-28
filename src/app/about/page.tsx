import React from "react";
import { PageHeader } from "@/components/course/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/course/callout";
import { Cpu, Eye, Zap, Layers, CheckCircle2, User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-12 py-4 sm:py-8 max-w-5xl mx-auto">
      <PageHeader
        title="About Control Systems Engineering"
        subtitle="Course philosophy, pedagogical framework, physical plant focus, and structural overview."
      >
        <Badge variant="outline" className="text-xs font-mono font-medium border-primary/30 text-primary">
          Pedagogy & Architecture
        </Badge>
      </PageHeader>

      {/* Course Philosophy */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1 text-xs">
            <Eye className="size-3.5" />
            Core Philosophy
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            &ldquo;Predict Then Simulate&rdquo; Paradigm
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            In modern engineering, computational simulation without prior hand calculation leads to blind trial-and-error. This course mandates the **&ldquo;Predict Then Simulate&rdquo;** workflow: students must first analyze physical systems on paper, derive theoretical transfer functions, and predict transient metrics (pole locations, overshoot, time constants) before running Python or MATLAB scripts to verify their hypotheses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="border-primary/20">
            <CardHeader className="space-y-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                1
              </div>
              <CardTitle className="text-base font-bold">Predict (Theory)</CardTitle>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Derive dynamic differential equations, transfer functions, and root locus diagrams manually.
              </p>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="space-y-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                2
              </div>
              <CardTitle className="text-base font-bold">Simulate (Software)</CardTitle>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Build computational models in Python/MATLAB to simulate step response, Bode plots, and disturbance rejection.
              </p>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="space-y-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                3
              </div>
              <CardTitle className="text-base font-bold">Prove (Validation)</CardTitle>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Quantify error metrics, assess gain/phase margins, and prove closed-loop robustness against physical constraints.
              </p>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Running Physical Plant (Servo Motor) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1 text-xs">
            <Cpu className="size-3.5" />
            Physical Benchmark Plant
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            One Running Plant: DC Servo Positioning System (Appendix A)
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Rather than introducing disconnected abstract equations each week, all theoretical and practical concepts in this course anchor around a single physical benchmark system: the **DC Servo Motor Positioning Plant with Back-EMF and Gear Train Feedback**.
          </p>
        </div>

        <Card className="bg-muted/30 border-border">
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Armature Resistance ($R_a$):</span>
                <p className="text-muted-foreground font-mono">2.5 &Omega;</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Armature Inductance ($L_a$):</span>
                <p className="text-muted-foreground font-mono">0.12 H</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Torque Constant ($K_t$):</span>
                <p className="text-muted-foreground font-mono">0.05 N&middot;m/A</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Back-EMF Constant ($K_b$):</span>
                <p className="text-muted-foreground font-mono">0.05 V/(rad/s)</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Rotor Inertia ($J$):</span>
                <p className="text-muted-foreground font-mono">0.01 kg&middot;m&sup2;</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground">Viscous Friction ($b$):</span>
                <p className="text-muted-foreground font-mono">0.1 N&middot;m&middot;s/rad</p>
              </div>
            </div>

            <Callout type="tip" title="Pedagogical Advantage">
              By returning to this exact DC servo plant throughout the term, students observe how first-principles modeling, step response, frequency response, root locus tuning, and state-feedback control build directly upon one another on a familiar hardware target.
            </Callout>
          </CardContent>
        </Card>
      </section>

      {/* Three-Tier Lab Structure */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1 text-xs">
            <Layers className="size-3.5" />
            Lab Module Architecture
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Three-Tier Exercise Framework
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every weekly lab module follows a structured progression designed to support both fundamental comprehension and advanced mastery:
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-1">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="size-4" /> Tier 1: Warm-up Exercises
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Targeted, low-stakes baseline simulations designed to verify script setup, parameter loading, and fundamental equations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-1">
            <h3 className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2">
              <CheckCircle2 className="size-4" /> Tier 2: Core Engineering Analysis
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In-depth modeling and design problems requiring students to synthesize compensators, evaluate steady-state error, or tune closed-loop feedback gains.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5 space-y-1">
            <h3 className="font-bold text-purple-800 dark:text-purple-300 flex items-center gap-2">
              <Zap className="size-4" /> Tier 3: Boss Level Challenge
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Complex, real-world engineering constraints including actuator saturation limits, sensor noise injection, parameter uncertainty, or discrete implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Instructional Staff Card */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Teaching Team
        </h2>
        <Card className="max-w-md">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted border border-border">
              <User className="size-6 text-muted-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold">Course Instructor</CardTitle>
              <p className="text-sm text-primary font-medium">Instructor (TBD)</p>
              <p className="text-xs text-muted-foreground mt-0.5">Faculty of Engineering</p>
            </div>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
}
