import { Github, Linkedin, Twitter, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-border/30 bg-paper-panel py-12 dark:border-base-border dark:bg-base-panel/40">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-semibold text-inkLight dark:text-ink">
          <Zap className="h-5 w-5 text-nova-orange" strokeWidth={2.5} />
          TechNova
        </div>

        <ul className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-inkLight-muted hover:text-nova-violet dark:text-ink-muted dark:hover:text-nova-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inkLight-muted hover:text-nova-violet dark:text-ink-muted dark:hover:text-nova-orange"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-content px-6 text-xs text-inkLight-muted dark:text-ink-muted">
        © {new Date().getFullYear()} TechNova Solutions. All rights reserved.
      </p>
    </footer>
  );
}
