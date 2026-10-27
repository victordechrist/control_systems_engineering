import * as React from "react";
import { Lightbulb, FileText, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalloutType = "tip" | "note" | "warning" | "info";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const calloutVariants: Record<
  CalloutType,
  {
    container: string;
    border: string;
    icon: React.ComponentType<{ className?: string }>;
    defaultTitle: string;
    iconColor: string;
  }
> = {
  tip: {
    container: "bg-[var(--callout-tip-bg)] text-foreground",
    border: "border-l-4 border-[var(--callout-tip)]",
    icon: Lightbulb,
    defaultTitle: "Tip",
    iconColor: "text-[var(--callout-tip)]",
  },
  note: {
    container: "bg-[var(--callout-note-bg)] text-foreground",
    border: "border-l-4 border-[var(--callout-note)]",
    icon: FileText,
    defaultTitle: "Note",
    iconColor: "text-[var(--callout-note)]",
  },
  warning: {
    container: "bg-[var(--callout-warning-bg)] text-foreground",
    border: "border-l-4 border-[var(--callout-warning)]",
    icon: AlertTriangle,
    defaultTitle: "Warning",
    iconColor: "text-[var(--callout-warning)]",
  },
  info: {
    container: "bg-[var(--callout-info-bg)] text-foreground",
    border: "border-l-4 border-[var(--callout-info)]",
    icon: Info,
    defaultTitle: "Info",
    iconColor: "text-[var(--callout-info)]",
  },
};

export function Callout({
  type = "note",
  title,
  children,
  className,
  icon: customIcon,
}: CalloutProps) {
  const variant = calloutVariants[type] || calloutVariants.note;
  const IconComponent = variant.icon;

  return (
    <div
      className={cn(
        "my-4 p-4 rounded-r-lg shadow-xs transition-colors",
        variant.container,
        variant.border,
        className
      )}
      role="region"
      aria-label={title || variant.defaultTitle}
    >
      <div className="flex items-start gap-3">
        <div className={cn("mt-0.5 shrink-0", variant.iconColor)}>
          {customIcon || <IconComponent className="size-5" />}
        </div>
        <div className="space-y-1 text-sm flex-1 leading-relaxed">
          {title && (
            <h4 className={cn("font-semibold text-base leading-none tracking-tight", variant.iconColor)}>
              {title}
            </h4>
          )}
          <div className="[&>p]:my-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Tip(props: Omit<CalloutProps, "type">) {
  return <Callout type="tip" {...props} />;
}

export function Note(props: Omit<CalloutProps, "type">) {
  return <Callout type="note" {...props} />;
}

export function Warning(props: Omit<CalloutProps, "type">) {
  return <Callout type="warning" {...props} />;
}

export function InfoCallout(props: Omit<CalloutProps, "type">) {
  return <Callout type="info" {...props} />;
}
