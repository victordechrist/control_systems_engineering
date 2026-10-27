import Link from "next/link";
import { BookOpen, Calendar, ArrowRight, FileText } from "lucide-react";
import { PageHeader } from "@/components/course/page-header";
import { getLectures } from "@/lib/lectures";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export default function LecturesPage() {
  const lectures = getLectures();

  return (
    <div className="space-y-10 py-4 sm:py-8">
      <PageHeader
        title="Lecture Notes & Materials"
        subtitle="Comprehensive lecture notes, theoretical derivations, and control engineering architectural principles."
      >
        <Badge variant="outline" className="text-xs font-mono font-medium border-primary/30 text-primary">
          Control Systems Engineering — ECE 4310 / ME 4820
        </Badge>
      </PageHeader>

      {lectures.length === 0 ? (
        <div className="rounded-xl border border-border p-12 text-center space-y-3">
          <FileText className="mx-auto size-12 text-muted-foreground/60" />
          <h3 className="text-xl font-bold">No lectures published yet</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Lecture notes and course slides will be published here as the semester progresses.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lectures.map((lecture) => (
            <Card
              key={lecture.slug}
              className="flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-sm"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {lecture.week > 0 && (
                      <Badge variant="secondary" className="gap-1 px-2.5 py-0.5">
                        <BookOpen className="size-3.5" />
                        Week {lecture.week}
                      </Badge>
                    )}
                    {lecture.date && (
                      <Badge variant="outline" className="gap-1 px-2.5 py-0.5 text-xs">
                        <Calendar className="size-3 text-muted-foreground" />
                        {lecture.date}
                      </Badge>
                    )}
                  </div>
                </div>

                <CardTitle className="text-xl font-bold line-clamp-2">
                  {lecture.title}
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {lecture.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="pt-2">
                <Link
                  href={`/lectures/${lecture.slug}`}
                  className={buttonVariants({
                    variant: "default",
                    className: "w-full gap-2 justify-between bg-emerald-700 hover:bg-emerald-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700",
                  })}
                >
                  <span>Read Lecture Notes</span>
                  <ArrowRight className="size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
