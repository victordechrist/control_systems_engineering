import React from "react";
import {
  FileDown,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Award,
  HelpCircle,
} from "lucide-react";
import { PageHeader } from "@/components/course/page-header";
import { Section } from "@/components/course/section";
import { Callout } from "@/components/course/callout";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  theme,
  courseDescription,
  outcomes,
  prerequisites,
} from "@/data/outcomes";
import { schedule } from "@/data/schedule";
import {
  assessments,
  miniProjectMilestones,
  latePolicy,
} from "@/data/assessments";
import { resources } from "@/data/resources";

export default function SyllabusPage() {
  return (
    <div className="space-y-10 py-6">
      {/* 4.1 PageHeader: title + description + theme */}
      <PageHeader
        title="Course Syllabus"
        subtitle={courseDescription}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant="outline"
            className="gap-1.5 px-3 py-1.5 text-xs font-semibold border-primary/30 text-primary bg-primary/5"
          >
            <Sparkles className="size-3.5" />
            Theme: &ldquo;{theme}&rdquo;
          </Badge>
          <a
            href="/syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "gap-2 font-medium",
            })}
          >
            <FileDown className="size-4" />
            Download Syllabus PDF
          </a>
        </div>
      </PageHeader>

      {/* 4.2 Learning outcomes: numbered list from data */}
      <Section
        title="Learning Outcomes"
        subtitle="Key competencies and engineering capabilities acquired upon completing this course."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <CardContent className="p-5 flex items-start gap-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-base shadow-xs">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-sm leading-snug">
                    Outcome {index + 1}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4.3 Prerequisites + self-check table from data */}
      <Section
        title="Prerequisites & Self-Check"
        subtitle="Required background knowledge and self-check questions to gauge your readiness."
      >
        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[200px] font-bold text-foreground">
                  Prerequisite Topic
                </TableHead>
                <TableHead className="w-[350px] font-bold text-foreground">
                  Expected Background
                </TableHead>
                <TableHead className="font-bold text-foreground">
                  Self-Check Question
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prerequisites.map((prereq, index) => (
                <TableRow key={index} className="align-top">
                  <TableCell className="font-semibold text-foreground whitespace-normal">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary shrink-0" />
                      <span>{prereq.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm whitespace-normal leading-relaxed">
                    {prereq.description}
                  </TableCell>
                  <TableCell className="whitespace-normal leading-relaxed">
                    <div className="rounded-lg bg-muted/60 p-3 text-xs font-mono text-foreground border border-border/60">
                      <div className="flex items-center gap-1.5 font-sans font-semibold text-xs text-primary mb-1">
                        <HelpCircle className="size-3.5" />
                        Self-Check Test
                      </div>
                      {prereq.selfCheckExample}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      {/* 4.4 Weekly schedule: Accordion or Table from weeks (number, title, topics, date, milestone badge). Week 1 gets id="week-1" */}
      <Section
        title="15-Week Course Schedule"
        subtitle="Complete weekly sequence of lectures, core concepts, and project milestones."
      >
        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[100px] font-bold text-foreground">Week</TableHead>
                <TableHead className="w-[140px] font-bold text-foreground">Dates</TableHead>
                <TableHead className="w-[240px] font-bold text-foreground">Lecture / Topic</TableHead>
                <TableHead className="font-bold text-foreground">Core Concepts Covered</TableHead>
                <TableHead className="w-[200px] font-bold text-foreground">Milestones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((item) => (
                <TableRow
                  key={item.number}
                  id={item.number === 1 ? "week-1" : undefined}
                  className="align-top hover:bg-muted/30 transition-colors"
                >
                  <TableCell className="font-bold text-foreground whitespace-nowrap">
                    <Badge variant="outline" className="font-mono text-xs">
                      Week {item.number}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground whitespace-nowrap font-medium">
                    {item.date || "—"}
                  </TableCell>
                  <TableCell className="font-semibold text-foreground whitespace-normal">
                    {item.title}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground whitespace-normal leading-relaxed">
                    {item.topics}
                  </TableCell>
                  <TableCell className="whitespace-normal">
                    {item.milestone ? (
                      <Badge variant="secondary" className="gap-1 font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20">
                        <Award className="size-3 shrink-0" />
                        {item.milestone}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground/40 text-xs">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>

      {/* 4.5 Assessment Table from assessments.ts (exact percentages) */}
      <Section
        title="Assessment & Grading Policy"
        subtitle="Grading scheme, weight distribution, and submission requirements."
      >
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[240px] font-bold text-foreground">
                    Assessment Component
                  </TableHead>
                  <TableHead className="w-[120px] font-bold text-foreground">
                    Weight
                  </TableHead>
                  <TableHead className="font-bold text-foreground">
                    Description & Deliverables
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assessments.map((item, index) => (
                  <TableRow key={index} className="align-top">
                    <TableCell className="font-semibold text-foreground whitespace-normal">
                      {item.label}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Badge className="font-mono text-xs font-bold bg-primary text-primary-foreground">
                        {item.weight}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground whitespace-normal leading-relaxed">
                      {item.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mini Design Project Milestones */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="size-5 text-primary" />
              <h3 className="text-base font-semibold text-foreground">
                Mini Design Project Milestones (30% Total Weight)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {miniProjectMilestones.map((milestone) => (
                <div
                  key={milestone.week}
                  className="rounded-lg border border-border/80 bg-muted/30 p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono text-xs">
                      Week {milestone.week}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Late Policy Callout */}
          <Callout type="warning" title="Late Submission Policy">
            <p>{latePolicy}</p>
          </Callout>
        </div>
      </Section>

      {/* 4.6 Textbooks & resources section + link to syllabus.pdf */}
      <Section
        title="Textbooks & Learning Resources"
        subtitle="Recommended literature, simulation tools, and reference documentation."
        action={
          <a
            href="/syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm", className: "gap-2" })}
          >
            <FileDown className="size-4" />
            Official Syllabus (PDF)
          </a>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((res, index) => (
            <Card key={index} className="flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {res.category}
                  </Badge>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visit ${res.name}`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>
                <CardTitle className="text-base font-bold leading-snug">
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  >
                    {res.name}
                  </a>
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                  {res.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "w-full justify-between text-xs font-medium text-primary hover:text-primary p-0 h-auto",
                  })}
                >
                  <span>Access Resource</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
