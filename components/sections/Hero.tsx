import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { personal } from "@/lib/data";

export function Hero() {
  return (
    <section className="py-12 border-b border-border/50">
      {/* Top row */}
      <div className="flex items-start gap-5 mb-6">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center text-white font-serif text-2xl select-none shadow-lg shadow-violet-500/20">
            HM
          </div>
          <span
            className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background animate-pulse"
            title="Available for opportunities"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h1 className="font-serif text-[2.1rem] leading-tight tracking-tight text-foreground mb-1">
            {personal.name}
          </h1>
          <p className="text-sm text-muted-foreground mb-3">
            {personal.role}{" "}
            <span className="font-mono text-violet-400 text-[13px]">
              @ {personal.company}
            </span>
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60">
              <MapPin className="w-3 h-3" />
              {personal.location}
            </span>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60 hover:text-violet-400 transition-colors"
            >
              <Mail className="w-3 h-3" />
              {personal.email}
            </a>
            <span className="font-mono text-xs text-muted-foreground/40">
              {personal.pronouns}
            </span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <blockquote className="border-l-2 border-violet-500 pl-4 py-2 bg-violet-500/5 rounded-r-lg">
        <p className="text-sm text-muted-foreground italic leading-relaxed">
          {personal.tagline}
        </p>
      </blockquote>
    </section>
  );
}

export function SocialLinks() {
  const { github, linkedin, email, phone } = personal;

  const links = [
    {
      label: "GitHub",
      href: github,
      icon: <Github className="w-3.5 h-3.5" />,
    },
    {
      label: "LinkedIn",
      href: linkedin,
      icon: <Linkedin className="w-3.5 h-3.5" />,
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      icon: <Mail className="w-3.5 h-3.5" />,
    },
    {
      label: phone,
      href: `tel:${phone.replace(/-/g, "")}`,
      icon: (
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 border-b border-border/50">
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border/60 bg-muted/30 font-mono text-xs text-muted-foreground hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/5 transition-all duration-200"
          >
            {l.icon}
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
