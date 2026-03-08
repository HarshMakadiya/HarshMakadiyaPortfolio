import { SectionLabel } from "@/components/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-10 border-b border-border/50">
      <SectionLabel>Projects</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group flex flex-col p-5 rounded-xl border border-border/60 bg-muted/20 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200"
          >
            <h3 className="font-serif text-base text-foreground mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tags.map((t) => (
                <Badge key={t} variant="tech" className="text-[11px]">
                  {t}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/50 border border-border/50 rounded px-2.5 py-1 hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                >
                  <Github className="w-3 h-3" /> GitHub
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/50 border border-border/50 rounded px-2.5 py-1 hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
