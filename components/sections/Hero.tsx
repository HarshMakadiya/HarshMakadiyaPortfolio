"use client";

import { useState } from "react";
import { MapPin, Mail, Github, Linkedin, Phone, User, Briefcase, ArrowUpRight, X } from "lucide-react";
import { personal } from "@/lib/data";

export function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const infoRows = [
    {
      icon: <Briefcase className="w-3.5 h-3.5" />,
      content: (
        <span className="font-mono text-sm text-foreground/80">
          {personal.role}{" "}
          <a
            href={personal.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-violet-400 hover:text-violet-300 hover:underline underline-offset-2 transition-colors"
          >
            @{personal.company}
          </a>
        </span>
      ),
    },
    {
      icon: <MapPin className="w-3.5 h-3.5" />,
      content: (
        <span className="font-mono text-sm text-foreground/80">{personal.location}</span>
      ),
    },
    {
      icon: <Mail className="w-3.5 h-3.5" />,
      content: (
        <a
          href={`mailto:${personal.email}`}
          className="font-mono text-sm text-foreground/80 hover:text-violet-400 transition-colors"
        >
          {personal.email}
        </a>
      ),
    },
    {
      icon: <Phone className="w-3.5 h-3.5" />,
      content: (
        <a
          href={`tel:${personal.phone.replace(/[^+\d]/g, "")}`}
          className="font-mono text-sm text-foreground/80 hover:text-violet-400 transition-colors"
        >
          {personal.phone}
        </a>
      ),
    },
    {
      icon: <User className="w-3.5 h-3.5" />,
      content: (
        <span className="font-mono text-sm text-foreground/80">{personal.pronouns}</span>
      ),
    },
  ];

  return (
    <>
      <section className="border-b border-border/50">
        <div className="flex items-center gap-5 px-0 py-10 border-b border-border/50">
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setLightboxOpen(true)}
              className="group relative block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              aria-label="View profile photo"
            >
              <img
                src="/avatar.png"
                alt={personal.name}
                className="w-[80px] h-[80px] rounded-full object-cover object-top shadow-lg shadow-violet-500/20 ring-2 ring-violet-500/30 cursor-zoom-in transition-transform duration-200 group-hover:scale-105"
              />
              <span className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            </button>
            <span
              className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background animate-pulse"
              title="Available for opportunities"
            />
          </div>

          <div>
            <h1 className="font-serif text-[2rem] leading-tight tracking-tight text-foreground">
              {personal.name}
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {personal.role}
            </p>
          </div>
        </div>

        <div className="divide-y divide-border/50">
          {infoRows.map((row, i) => (
            <div key={i} className="flex items-center gap-4 px-1 py-3">
              <span className="text-muted-foreground/50 flex-shrink-0 w-5 flex justify-center">
                {row.icon}
              </span>
              {row.content}
            </div>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile photo"
          style={{ animation: "fadeIn 0.2s ease" }}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src="/avatar.png"
            alt={personal.name}
            className="max-w-sm w-full rounded-2xl shadow-2xl shadow-black/60 ring-2 ring-violet-500/40"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "zoomIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
          />
          <style>{`
            @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
            @keyframes zoomIn { from { opacity: 0; transform: scale(0.7) } to { opacity: 1; transform: scale(1) } }
          `}</style>
        </div>
      )}
    </>
  );
}

export function SocialLinks() {
  const { github, linkedin } = personal;

  const links = [
    {
      label: "GitHub",
      href: github,
      icon: <Github className="w-5 h-5" />,
    },
    {
      label: "LinkedIn",
      href: linkedin,
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  return (
    <section className="border-b border-border/50">
      <div className="grid grid-cols-2 divide-x divide-y divide-border/50 border-t border-border/50">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between gap-3 px-5 py-4 font-mono text-sm text-muted-foreground hover:bg-violet-500/5 hover:text-violet-400 transition-all duration-200"
          >
            <span className="flex items-center gap-3">
              {l.icon}
              <span className="font-semibold">{l.label}</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        ))}
      </div>
    </section>
  );
}
