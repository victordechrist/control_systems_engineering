import Link from "next/link";
import { FileText, Cpu, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/40 text-muted-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-foreground">
              <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cpu className="size-4" />
              </div>
              Control Systems Engineering
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Comprehensive course platform covering dynamic systems modeling, feedback control design, stability analysis, and state-space methods.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/victordechrist/control_systems_engineering"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-foreground transition-colors"
              >
                <Code2 className="size-4" />
                <span>GitHub Repo</span>
              </a>
              <a
                href="/syllabus.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-foreground transition-colors"
              >
                <FileText className="size-4" />
                <span>Syllabus (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Course</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/syllabus" className="hover:text-foreground transition-colors">
                  Syllabus & Schedule
                </Link>
              </li>
              <li>
                <Link href="/lectures" className="hover:text-foreground transition-colors">
                  Lectures
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-foreground transition-colors">
                  Lab Modules
                </Link>
              </li>
              <li>
                <Link href="/assessments" className="hover:text-foreground transition-colors">
                  Assessments & HW
                </Link>
              </li>
            </ul>
          </div>

          {/* Secondary Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">Resources & Staff</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  Resources & Tools
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-foreground transition-colors">
                  Teaching Staff
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Course
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Control Systems Engineering Course Staff. All rights reserved.</p>
          <p className="font-mono text-xs">Repository: victordechrist/control_systems_engineering</p>
        </div>
      </div>
    </footer>
  );
}
