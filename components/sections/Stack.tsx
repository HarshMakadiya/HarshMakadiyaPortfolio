import { SectionLabel } from "@/components/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { stack } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="py-10 border-b border-border/50">
      <SectionLabel>Tech Stack</SectionLabel>
      <div className="space-y-5">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/40 mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="tech">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
