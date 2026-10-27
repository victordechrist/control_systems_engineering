import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Calendar, Tag } from "lucide-react";
import { getLectures, getLecture } from "@/lib/lectures";
import { Badge } from "@/components/ui/badge";

export const dynamicParams = false;

export async function generateStaticParams() {
  const lectures = getLectures();
  return lectures.map((lecture) => ({
    slug: lecture.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LectureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lecture = getLecture(slug);

  if (!lecture) {
    notFound();
  }

  let LectureComponent: React.ComponentType | null = null;
  try {
    const mdxModule = await import(`@/content/lectures/${slug}.mdx`);
    LectureComponent = mdxModule.default;
  } catch (error) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      {/* Top back navigation */}
      <div>
        <Link
          href="/lectures"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to all lectures
        </Link>
      </div>

      {/* Lecture Header */}
      <div className="space-y-4 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {lecture.week > 0 && (
            <Badge variant="secondary" className="gap-1 px-2.5 py-0.5">
              <BookOpen className="size-3.5" />
              Week {lecture.week}
            </Badge>
          )}
          {lecture.date && (
            <Badge variant="outline" className="gap-1 px-2.5 py-0.5">
              <Calendar className="size-3.5" />
              {lecture.date}
            </Badge>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {lecture.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {lecture.description}
        </p>
      </div>

      {/* MDX Content */}
      <article className="prose dark:prose-invert max-w-none">
        {LectureComponent ? <LectureComponent /> : null}
      </article>
    </div>
  );
}
