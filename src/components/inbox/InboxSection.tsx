import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type InboxSectionProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}>;

export function InboxSection({ id, eyebrow, title, subtitle, className, children }: InboxSectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 md:py-28", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.36em] text-primary/80">{eyebrow}</p>
          ) : null}
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
        </div>

        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
