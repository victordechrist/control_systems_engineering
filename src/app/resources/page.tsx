import React from "react";
import { ExternalLink, BookOpen, Wrench, BookmarkCheck } from "lucide-react";
import { PageHeader } from "@/components/course/page-header";
import { resources, Resource } from "@/data/resources";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResourcesPage() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Textbooks":
        return <BookOpen className="size-5 text-primary" />;
      case "Tools":
        return <Wrench className="size-5 text-primary" />;
      default:
        return <BookmarkCheck className="size-5 text-primary" />;
    }
  };

  return (
    <div className="space-y-12 py-4 sm:py-8">
      <PageHeader
        title="Course Resources & Tools"
        subtitle="Recommended textbooks, simulation toolkits, reference documentation, and control engineering learning materials."
      >
        <Badge variant="outline" className="text-xs font-mono font-medium border-primary/30 text-primary">
          Control Systems Engineering
        </Badge>
      </PageHeader>

      <div className="space-y-10">
        {categories.map((category) => {
          const categoryItems = resources.filter((r) => r.category === category);
          return (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-2.5 border-b border-border/80 pb-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {categoryItems.map((item) => (
                  <Card
                    key={item.name}
                    className="flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-sm"
                  >
                    <CardHeader className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-lg font-bold">
                          {item.name}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {item.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    <CardFooter className="pt-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        <span>Access Resource</span>
                        <ExternalLink className="size-4" />
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
