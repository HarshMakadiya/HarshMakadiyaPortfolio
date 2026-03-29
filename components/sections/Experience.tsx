import { SectionLabel } from "@/components/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-10 border-b border-border/50">
      <SectionLabel>Experience</SectionLabel>
      <div className="space-y-10">
        {experience.map((job, i) => (
          <div key={i} className={i < experience.length - 1 ? "pb-10 border-b border-border/40" : ""}>

            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="font-serif text-lg text-foreground">{job.company}</h3>
              <span className="font-mono text-[11px] text-muted-foreground/50 bg-muted/50 border border-border/50 rounded px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                {job.period}
              </span>
            </div>
            <p className="font-mono text-xs text-violet-400 mb-1">{job.role}</p>
            <p className="font-mono text-xs text-muted-foreground/40 mb-4">
              📍 {job.location} · {job.type}
            </p>


            <ul className="space-y-3 mb-4">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed pl-1">
                  <span className="text-muted-foreground/30 mt-[2px] flex-shrink-0">—</span>
                  <span>
                    <strong className="text-foreground/80 font-medium pr-[24px]">{b.title} — </strong>
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>


            <div className="flex flex-wrap gap-1.5">
              {job.tags.map((tag) => (
                <Badge key={tag} variant="accent" className="text-[11px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
