import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, FileText } from "lucide-react";
import { labs } from "@/data/labs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Callout } from "@/components/course/callout";

export const dynamicParams = false;

export function generateStaticParams() {
  return labs.map((lab) => ({
    slug: lab.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LabDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const lab = labs.find((l) => l.slug === slug);

  if (!lab) {
    notFound();
  }

  let MdxComponent: React.ComponentType | null = null;
  let mdxError = false;

  if (lab.hasMdx) {
    try {
      const mdxModule = await import(`@/content/labs/${slug}.mdx`);
      MdxComponent = mdxModule.default;
    } catch (err) {
      console.error(`Failed to load MDX for lab ${slug}:`, err);
      mdxError = true;
    }
  }

  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto">
      {/* Back to Labs Link */}
      <div>
        <Link
          href="/labs"
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "gap-2 text-muted-foreground hover:text-foreground pl-0",
          })}
        >
          <ArrowLeft className="size-4" />
          Back to all labs
        </Link>
      </div>

      {/* Lab Header */}
      <div className="space-y-4 pb-6 border-b border-border">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="font-mono text-xs">
            Week {lab.week}
          </Badge>
          <Badge variant="secondary" className="text-xs font-medium">
            {lab.group}
          </Badge>
          {lab.hasMdx ? (
            <Badge className="bg-emerald-600 dark:bg-emerald-700 text-white text-xs font-semibold">
              Materials Available
            </Badge>
          ) : (
            <Badge variant="outline" className="text-muted-foreground border-dashed text-xs">
              Materials Coming Soon
            </Badge>
          )}
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {lab.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {lab.description}
        </p>
      </div>

      {/* Lab Body */}
      {lab.hasMdx && MdxComponent && !mdxError ? (
        <article className="prose dark:prose-invert max-w-none">
          <MdxComponent />
        </article>
      ) : (
        <div className="space-y-6 py-6">
          <Callout type="note" title="Lab Materials Coming Soon">
            <p className="leading-relaxed">
              Detailed step-by-step instructions, starter code templates, and simulation datasets for{" "}
              <strong>{lab.title}</strong> will be published prior to Week {lab.week}.
            </p>
          </Callout>

          <div className="rounded-xl border border-border bg-card p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Clock className="size-5 text-primary" />
              <span>Module Overview & Learning Plan</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This lab module covers key practical exercises in the <strong>{lab.group}</strong> unit. Students will develop simulation models, evaluate time or frequency domain specifications, and document dynamic response characteristics.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                disabled
                className={buttonVariants({
                  variant: "outline",
                  size: "default",
                  className: "opacity-60 cursor-not-allowed gap-2",
                })}
              >
                <FileText className="size-4" />
                Lab Sheet (PDF) — Coming Soon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
