import React from "react";
import { PageHeader } from "@/components/course/page-header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Clock, MapPin } from "lucide-react";

interface StaffMember {
  role: string;
  category: "Instructor" | "Teaching Assistant" | "Lab Support";
  title: string;
  email: string;
  officeHours: string;
  location: string;
  responsibilities: string;
}

const STAFF_MEMBERS: StaffMember[] = [
  {
    role: "Lead Course Instructor",
    category: "Instructor",
    title: "Instructor (TBD)",
    email: "instructor-tbd@university.edu",
    officeHours: "TBD — Posted before Week 1",
    location: "Engineering Hall 304",
    responsibilities: "Overall course leadership, lecture instruction, midterm exam design, and academic supervision.",
  },
  {
    role: "Head Teaching Assistant",
    category: "Teaching Assistant",
    title: "Head TA (TBD)",
    email: "head-ta-tbd@university.edu",
    officeHours: "TBD — Posted before Week 1",
    location: "Systems Lab 102",
    responsibilities: "Grading coordination, lab content support, mini-project guidance, and discussion sessions.",
  },
  {
    role: "Lab Teaching Assistant",
    category: "Teaching Assistant",
    title: "Lab TA (TBD)",
    email: "lab-ta-tbd@university.edu",
    officeHours: "TBD — Posted before Week 1",
    location: "Systems Lab 102",
    responsibilities: "Weekly lab session supervision, simulation troubleshooting (Python/MATLAB), and assignment evaluation.",
  },
  {
    role: "Simulation & Hardware Specialist",
    category: "Lab Support",
    title: "Lab Specialist (TBD)",
    email: "lab-specialist-tbd@university.edu",
    officeHours: "By appointment",
    location: "Engineering Systems Center",
    responsibilities: "Hardware-in-the-loop setup support, software environment configuration, and lab platform maintenance.",
  },
];

export default function StaffPage() {
  return (
    <div className="space-y-10 py-4 sm:py-8 max-w-6xl mx-auto">
      <PageHeader
        title="Teaching Staff & Office Hours"
        subtitle="Meet the instructional team supporting lectures, simulation labs, office hours, and project mentoring."
      >
        <Badge variant="outline" className="text-xs font-mono font-medium border-primary/30 text-primary">
          Instructional Team
        </Badge>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {STAFF_MEMBERS.map((staff, idx) => (
          <Card key={idx} className="flex flex-col justify-between hover:border-primary/30 transition-all">
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <User className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">{staff.title}</CardTitle>
                    <p className="text-xs font-medium text-primary">{staff.role}</p>
                  </div>
                </div>
                <Badge variant={staff.category === "Instructor" ? "default" : "secondary"} className="text-xs shrink-0">
                  {staff.category}
                </Badge>
              </div>

              <CardDescription className="text-sm leading-relaxed pt-1">
                {staff.responsibilities}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2 text-xs border-t border-border/60 pt-4 mt-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-3.5 text-primary shrink-0" />
                <span className="font-mono">{staff.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-3.5 text-primary shrink-0" />
                <span>{staff.officeHours}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-3.5 text-primary shrink-0" />
                <span>{staff.location}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
