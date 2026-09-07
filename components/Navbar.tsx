"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Zap } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-base-border/60 bg-paper/80 backdrop-blur-md dark:border-base-border dark:bg-base/80">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Zap className="h-5 w-5 text-nova-orange" strokeWidth={2.5} />
          TechNova
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-inkLight-muted transition-colors hover:text-nova-violet dark:text-ink-muted dark:hover:text-nova-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              aria-label="Toggle color theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-base-border/40 p-2 text-inkLight-muted transition-colors hover:border-nova-violet hover:text-nova-violet dark:border-base-border dark:text-ink-muted dark:hover:border-nova-orange dark:hover:text-nova-orange"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <a
            href="#contact"
            className="hidden rounded-md bg-nova-violet px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Get Started
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-base-border/40 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-inkLight-muted dark:text-ink-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
