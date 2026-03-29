import { personal } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground/40">
          Built by{" "}
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-violet-400 hover:underline"
          >
            Harsh Makadiya
          </a>
          {" "}· Inspired by{" "}
          <a
            href="https://chanhdai.com/"
            target="_blank"
            rel="noreferrer"
            className="text-violet-400/70 hover:text-violet-400 hover:underline transition-colors"
          >
            chanhdai.com
          </a>
        </p>

        <a
          href="#"
          className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground/40 hover:text-foreground hover:border-border transition-all"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
