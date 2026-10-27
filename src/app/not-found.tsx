import Link from "next/link";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/course/page-header";

export default function NotFound() {
  return (
    <div className="py-12 max-w-2xl mx-auto space-y-8 text-center">
      <PageHeader
        title="404 - Page Not Found"
        subtitle="The control signal was lost or the requested course page does not exist."
      />

      <div className="flex flex-col items-center justify-center p-8 bg-muted/30 border border-border rounded-xl space-y-4">
        <div className="size-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
          <AlertCircle className="size-8" />
        </div>
        <p className="text-muted-foreground text-sm max-w-md">
          Please check the URL or navigate back to one of the main sections of the course site using the buttons below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button render={<Link href="/" />}>
            <Home className="size-4 mr-1.5" /> Return Home
          </Button>
          <Button variant="outline" render={<Link href="/syllabus" />}>
            <ArrowLeft className="size-4 mr-1.5" /> View Syllabus
          </Button>
        </div>
      </div>
    </div>
  );
}
