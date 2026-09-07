import Image from "next/image";
import { Quote } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

export default function Testimonials() {
  const testimonials = testimonialsData as Testimonial[];

  return (
    <section
      id="testimonials"
      className="bg-paper-panel py-24 dark:bg-base-panel/40"
    >
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-3xl font-semibold text-inkLight md:text-4xl dark:text-ink">
          What Clients Say
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col justify-between rounded-lg border border-base-border/30 bg-paper p-7 dark:border-base-border dark:bg-base"
            >
              <Quote className="h-6 w-6 text-nova-violet/50 dark:text-nova-orange/50" />
              <blockquote className="mt-4 flex-1 text-inkLight md:text-lg dark:text-ink">
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-inkLight dark:text-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-inkLight-muted dark:text-ink-muted">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
