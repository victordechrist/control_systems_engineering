import type { MDXComponents } from "mdx/types";
import React from "react";
import Link from "next/link";
import {
  Callout,
  Tip,
  Note,
  Warning,
  InfoCallout,
} from "@/components/course/callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom Callout components
    Callout,
    Tip,
    Note,
    Warning,
    InfoCallout,

    // Typography elements
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className="scroll-m-20 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4 mt-8 first:mt-0"
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className="scroll-m-20 border-b border-border/60 pb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4 mt-8 first:mt-0"
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mb-3 mt-6"
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        className="scroll-m-20 text-lg font-semibold tracking-tight text-foreground mb-2 mt-4"
        {...props}
      />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className="leading-7 text-foreground/90 mb-4 font-normal"
        {...props}
      />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="my-4 ml-6 list-disc space-y-2 [&>li]:mt-1" {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 [&>li]:mt-1" {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="text-foreground/90 leading-normal" {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="my-4 border-l-4 border-primary/50 pl-4 italic text-muted-foreground bg-muted/30 py-2 pr-2 rounded-r"
        {...props}
      />
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className="my-8 border-border" {...props} />
    ),
    a: ({ href = "", className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal) {
        return (
          <Link
            href={href}
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    },
    // Inline code vs fenced pre code
    code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
      // Check if code is inside a pre block (rehype-pretty-code or standard pre)
      const isBlock = typeof className === "string" && className.includes("language-");
      if (isBlock) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="relative rounded-md bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground border border-border/60"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="my-4 overflow-x-auto rounded-xl border border-border/80 bg-zinc-950 p-4 font-mono text-sm text-zinc-50 dark:bg-zinc-900 shadow-sm"
        {...props}
      />
    ),
    // Table family
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto rounded-xl border border-border shadow-xs">
        <table className="w-full text-sm" {...props} />
      </div>
    ),
    thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="bg-muted/70 border-b border-border font-bold" {...props} />
    ),
    tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody className="divide-y divide-border/60 bg-card" {...props} />
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="transition-colors hover:bg-muted/30" {...props} />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="px-4 py-3 text-left font-bold text-foreground border-b border-border"
        {...props}
      />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-4 py-3 text-muted-foreground align-top" {...props} />
    ),
  };
}
