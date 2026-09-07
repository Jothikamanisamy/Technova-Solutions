import {
  Code2,
  Smartphone,
  PenTool,
  CloudCog,
  BrainCircuit,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import servicesData from "@/data/services.json";
import type { Service } from "@/types";

const icons: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  PenTool,
  CloudCog,
  BrainCircuit,
  Megaphone,
};

export default function Services() {
  const services = servicesData as Service[];

  return (
    <section id="services" className="bg-paper-panel py-24 dark:bg-base-panel/40">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-lg">
          <h2 className="text-3xl font-semibold text-inkLight md:text-4xl dark:text-ink">
            What We Do
          </h2>
          <p className="mt-4 text-inkLight-muted dark:text-ink-muted">
            Six practices, one team. Every engagement draws on whichever mix
            of these your product actually needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.id}
                className="group rounded-lg border border-base-border/30 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-nova-violet hover:shadow-xl hover:shadow-nova-violet/10 dark:border-base-border dark:bg-base dark:hover:border-nova-orange dark:hover:shadow-nova-orange/10"
              >
                <Icon className="h-6 w-6 text-nova-violet transition-colors group-hover:text-nova-orange dark:text-nova-orange" />
                <h3 className="mt-4 font-display text-lg font-semibold text-inkLight dark:text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-inkLight-muted dark:text-ink-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
