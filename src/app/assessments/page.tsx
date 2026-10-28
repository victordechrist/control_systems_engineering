import React from "react";
import { PageHeader } from "@/components/course/page-header";
import { assessments, miniProjectMilestones, latePolicy } from "@/data/assessments";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/course/callout";
import { Award, Clock, Calendar, ShieldCheck, Cpu, Bot } from "lucide-react";

export default function AssessmentsPage() {
  return (
    <div className="space-y-12 py-4 sm:py-8 max-w-5xl mx-auto">
      <PageHeader
        title="Assessments & Grading Criteria"
        subtitle="Detailed breakdown of assessment weights, mini-project milestones, late submission policies, and academic integrity guidelines."
      >
        <Badge variant="outline" className="text-xs font-mono font-medium border-primary/30 text-primary">
          Grading & Policies
        </Badge>
      </PageHeader>

      {/* 1. Grading Scheme Table */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="size-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Grading Breakdown
          </h2>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[28%] font-bold">Assessment Category</TableHead>
                <TableHead className="w-[15%] font-bold text-center">Weight</TableHead>
                <TableHead className="font-bold">Description & Scope</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assessments.map((item, idx) => (
                <TableRow key={idx} className="hover:bg-muted/30">
                  <TableCell className="font-semibold text-foreground">
                    {item.label}
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary font-mono text-base">
                    {item.weight}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* 2. Mini Design Project Requirements */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Cpu className="size-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Mini Design Project Milestones
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          The term design project accounts for 30% of your final grade. Student teams design, model, tune, and simulate closed-loop control systems for physical engineering plants according to strict performance specifications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {miniProjectMilestones.map((milestone, idx) => (
            <Card key={idx} className="border-border/80 hover:border-primary/30 transition-all">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="gap-1 px-2.5 py-0.5 text-xs font-mono">
                    <Calendar className="size-3" />
                    Week {milestone.week} Deliverable
                  </Badge>
                </div>
                <CardTitle className="text-base font-bold">
                  {milestone.title}
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed">
                  {milestone.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Late Policy Callout */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Late Submission Policy
          </h2>
        </div>

        <Callout type="warning" title="Submissions & Penalties">
          {latePolicy}
        </Callout>
      </section>

      {/* 4. Academic Integrity & AI Tools Guidelines */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Academic Integrity & Generative AI Policy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                Academic Integrity
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                All submitted code, dynamic equations, and report prose must reflect original work. Collaboration is encouraged for conceptual discussions, but each student or assigned team must independently author their simulation scripts and written lab reports.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border">
            <CardHeader className="space-y-2">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Bot className="size-4 text-blue-600 dark:text-blue-400" />
                AI Tools & Assistance
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Generative AI tools (e.g., ChatGPT, GitHub Copilot) may be utilized as supplementary tutoring or debugging aids. However, code generated by AI must be thoroughly understood, validated, and explicitly acknowledged in your submission references.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
