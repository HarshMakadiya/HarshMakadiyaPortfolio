import { personal } from "@/lib/data";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground/40">
          Built by{" "}
          <a href={personal.github} className="text-violet-400 hover:underline">
            Harsh Makadiya
          </a>{" "}
          ·{" "}
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-muted-foreground transition-colors"
          >
            {personal.email}
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-muted-foreground/40 hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-muted-foreground/40 hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground/40 hover:text-foreground hover:border-border transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
