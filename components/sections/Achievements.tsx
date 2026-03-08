"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { achievements } from "@/lib/data";

export function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? achievements : achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-10 border-b border-border/50">
      <SectionLabel>Achievements</SectionLabel>
      <div className="space-y-2">
        {visible.map((a, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-muted/20 hover:border-border/80 transition-colors"
          >
            <div className="w-8 h-8 rounded-md bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-sm flex-shrink-0">
              {a.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground/90">{a.title}</p>
              <p className="font-mono text-xs text-muted-foreground/50 mt-0.5">{a.sub}</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground/40 whitespace-nowrap flex-shrink-0">
              {a.year}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 w-full py-2 font-mono text-xs text-muted-foreground/50 border border-border/40 rounded-lg hover:border-violet-500/40 hover:text-violet-400 transition-all"
      >
        {showAll
          ? "— Show Less —"
          : `— Show ${achievements.length - 3} More —`}
      </button>
    </section>
  );
}
