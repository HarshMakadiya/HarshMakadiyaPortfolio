"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm text-muted-foreground">
          <span className="text-violet-400">harsh</span>.makadiya
        </span>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-5">
            {["about", "experience", "projects", "achievements"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="font-mono text-xs text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-border/60"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {!mounted ? (
              <span className="h-3.5 w-3.5" />
            ) : theme === "dark" ? (
              <Sun className="h-3.5 w-3.5" />
            ) : (
              <Moon className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
