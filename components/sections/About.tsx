import { SectionLabel } from "@/components/SectionLabel";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-10 border-b border-border/50">
      <SectionLabel>About</SectionLabel>
      <ul className="space-y-3">
        {about.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
            <span className="text-violet-500 mt-[3px] flex-shrink-0 text-[10px]">▸</span>
            <span>
              {item.text.split(item.highlight).map((part, j, arr) =>
                j < arr.length - 1 ? (
                  <span key={j}>
                    {part}
                    <strong className="text-foreground font-medium">{item.highlight}</strong>
                  </span>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
