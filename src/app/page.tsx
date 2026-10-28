import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  ArrowRight,
  Cpu,
  Activity,
  Sliders,
  Bot,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-12 py-4 sm:py-8">
      {/* 3.1 Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-muted/50 via-background to-background p-8 sm:p-12 lg:p-16 text-center sm:text-left shadow-xs">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 size-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs font-medium border-primary/30 text-primary">
            <Sparkles className="size-3.5" />
            Core Engineering Course
          </Badge>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Control Systems Engineering
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Make systems behave.
            </p>
          </div>

          <p className="text-lg sm:text-xl font-medium text-muted-foreground tracking-wide">
            Model it. Analyze it. Tune it. Prove it.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href="/syllabus"
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto gap-2 px-6 h-11 text-base font-semibold" })}
            >
              Explore Syllabus
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/labs"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full sm:w-auto gap-2 px-6 h-11 text-base font-medium",
              })}
            >
              <FlaskConical className="size-4 text-muted-foreground" />
              View Labs
            </Link>
          </div>
        </div>
      </section>

      {/* 3.4 Theme Banner Strip */}
      <section className="rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
            <Cpu className="size-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-foreground">
              Course Tagline: &ldquo;Make systems behave.&rdquo;
            </h2>
            <p className="text-sm text-muted-foreground">
              Transforming dynamic instability into precision performance through rigorous analytical and empirical design.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-medium text-primary bg-background/80 dark:bg-background/50 px-3 py-1.5 rounded-md border border-primary/20 shrink-0">
          <CheckCircle2 className="size-3.5 text-primary" />
          <span>Model &bull; Analyze &bull; Tune &bull; Prove</span>
        </div>
      </section>

      {/* 3.2 Highlights Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Course Highlights
          </h2>
          <p className="text-sm text-muted-foreground">
            Key pillars of modern linear control theory and physical system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <Card className="flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground border border-border/80">
                <Cpu className="size-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">
                Modeling from first principles
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Derive differential equations, transfer functions, and state-space representations for electromechanical systems.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground border border-border/80">
                <Activity className="size-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">
                Time and frequency response
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Analyze transient metrics, stability via Routh-Hurwitz and Nyquist, Bode plots, and gain/phase margins.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground border border-border/80">
                <Sliders className="size-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">
                Feedback and PID control
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Design lead-lag compensators and tune PID controllers with Ziegler-Nichols, anti-windup, and noise filtering.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Card 4 */}
          <Card className="flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm">
            <CardHeader className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground border border-border/80">
                <Bot className="size-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">
                Hands-on simulation labs (Servo)
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Build computational models for DC motor positioning, load disturbances, and real-world sensor feedback.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 3.3 Quick-links Row */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/syllabus"
            className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Syllabus
                </p>
                <p className="text-xs text-muted-foreground">Course schedule & topics</p>
              </div>
            </div>
            <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/labs"
            className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FlaskConical className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Labs
                </p>
                <p className="text-xs text-muted-foreground">15 hands-on lab modules</p>
              </div>
            </div>
            <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/lectures/week-1-introduction-to-control-systems"
            className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Week 1 Lecture
                </p>
                <p className="text-xs text-muted-foreground">Introduction to Control Systems</p>
              </div>
            </div>
            <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </section>
    </div>
  );
}
