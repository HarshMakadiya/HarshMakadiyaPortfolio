import { SectionLabel } from "@/components/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-10 border-b border-border/50">
      <SectionLabel>Education</SectionLabel>
      {education.map((edu, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-xl border border-border/60 bg-muted/20"
        >
          <div>
            <h3 className="font-serif text-base text-foreground mb-1">{edu.degree}</h3>
            <p className="font-mono text-xs text-violet-400 mb-1">{edu.school}</p>
            <p className="font-mono text-xs text-muted-foreground/50 mb-4">
              {edu.location} · {edu.period}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {edu.courses.map((c) => (
                <Badge key={c} variant="tech" className="text-[11px]">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
          <div className="sm:text-right flex-shrink-0">
            <p className="font-mono text-3xl font-medium text-violet-400">{edu.cgpa}</p>
            <p className="font-mono text-[11px] text-muted-foreground/40 mt-0.5">CGPA / 10.0</p>
          </div>
        </div>
      ))}
    </section>
  );
}
