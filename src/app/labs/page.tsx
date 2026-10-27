import React from "react";
import Link from "next/link";
import {
  FlaskConical,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Layers,
  FileCode2,
  Lock,
} from "lucide-react";
import { PageHeader } from "@/components/course/page-header";
import { Section } from "@/components/course/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { labs, Lab } from "@/data/labs";
import { miniProjectMilestones } from "@/data/assessments";

const groups = ["Modeling", "Response", "Stability & Design", "Project"] as const;

export default function LabsPage() {
  return (
    <div className="space-y-10 py-6">
      {/* PageHeader */}
      <PageHeader
        title="Simulation Labs & Projects"
        subtitle="Hands-on software simulation exercises and term-long team design project."
      >
        <Badge
          variant="outline"
          className="gap-1.5 px-3 py-1.5 text-xs font-semibold border-primary/30 text-primary bg-primary/5"
        >
          <FlaskConical className="size-3.5" />
          15 Lab Modules
        </Badge>
      </PageHeader>

      {/* 5.2 Featured Mini-Project Card */}
      <section className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-background to-background p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground font-bold px-2.5 py-0.5 text-xs">
                Featured Term Project
              </Badge>
              <Badge variant="outline" className="font-mono text-xs border-primary/30 text-primary">
                30% Total Grade
              </Badge>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Mini Design Project: Real-World Plant Control
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Apply feedback control principles to a complex physical plant (e.g. inverted pendulum, DC motor servo, multi-tank liquid system) from mathematical modeling through controller synthesis and closed-loop robustness verification.
              </p>
            </div>

            {/* What a strong project shows */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                What a Strong Project Shows:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Derivation of physical plant dynamic equations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Open-loop baseline analysis and bottleneck identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Controller synthesis meeting transient & error specs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Closed-loop robustness under disturbances and noise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Milestones Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-3 rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 border-b border-border/60 pb-2">
              <Award className="size-4 text-primary" />
              <h3 className="font-semibold text-sm text-foreground">
                Project Milestones
              </h3>
            </div>
            <div className="space-y-2.5">
              {miniProjectMilestones.map((m) => (
                <div key={m.week} className="flex items-start gap-2 text-xs">
                  <Badge variant="outline" className="font-mono shrink-0 text-[10px] px-1.5 py-0">
                    W{m.week}
                  </Badge>
                  <div>
                    <p className="font-semibold text-foreground">{m.title}</p>
                    <p className="text-muted-foreground text-[11px] leading-tight mt-0.5">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.1 Grouped Lab Modules */}
      <div className="space-y-12">
        {groups.map((groupName) => {
          const groupLabs = labs.filter((lab) => lab.group === groupName);
          if (groupLabs.length === 0) return null;

          return (
            <Section
              key={groupName}
              title={`${groupName} Labs`}
              subtitle={`Practical modules focused on ${groupName.toLowerCase()} concepts.`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {groupLabs.map((lab) => (
                  <Card
                    key={lab.slug}
                    className={`flex flex-col justify-between transition-all ${
                      lab.hasMdx
                        ? "hover:border-primary/50 hover:shadow-md border-primary/20"
                        : "opacity-85"
                    }`}
                  >
                    <CardHeader className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="font-mono text-xs">
                          Week {lab.week}
                        </Badge>
                        {lab.hasMdx ? (
                          <Badge className="bg-emerald-600 dark:bg-emerald-700 text-white text-[10px] px-2 py-0.5 font-semibold">
                            Available Now
                          </Badge>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-2 py-0.5 text-muted-foreground bg-muted border border-border/50"
                          >
                            Coming Soon
                          </Badge>
                        )}
                      </div>

                      <CardTitle className="text-base font-bold leading-snug">
                        {lab.hasMdx ? (
                          <Link
                            href={`/labs/${lab.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {lab.title}
                          </Link>
                        ) : (
                          <span>{lab.title}</span>
                        )}
                      </CardTitle>

                      <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {lab.description}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="pt-2">
                      {/* 5.6 Action button state */}
                      {lab.hasMdx ? (
                        <Link
                          href={`/labs/${lab.slug}`}
                          className={buttonVariants({
                            variant: "default",
                            size: "sm",
                            className: "w-full gap-2 text-xs font-semibold",
                          })}
                        >
                          <span>View Lab Materials</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      ) : (
                        <button
                          disabled
                          className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                            className:
                              "w-full gap-2 text-xs font-medium opacity-60 cursor-not-allowed text-muted-foreground",
                          })}
                        >
                          <Lock className="size-3.5" />
                          <span>Materials Coming Soon</span>
                        </button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </Section>
          );
        })}
      </div>
    </div>
  );
}
