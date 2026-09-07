import { Target, Eye, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To give ambitious teams the engineering leverage they need to ship reliable software faster.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A world where any business, regardless of size, can build technology as well as the largest tech companies.",
  },
  {
    icon: Users,
    title: "Our People",
    text: "A distributed team of engineers, designers, and strategists who've shipped products used by millions.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-base">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-inkLight md:text-4xl dark:text-ink">
              About TechNova
            </h2>
            <p className="mt-5 max-w-md text-inkLight-muted dark:text-ink-muted">
              Founded by engineers who were tired of watching good ideas die
              in slow, bloated development cycles, TechNova Solutions
              partners with startups and enterprises to design, build, and
              ship technology that actually moves the business forward. We
              embed with your team, work in the open, and measure ourselves
              against your outcomes, not our billable hours.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 border-l-2 border-nova-violet/40 pl-5 dark:border-nova-orange/40"
              >
                <Icon className="mt-1 h-5 w-5 shrink-0 text-nova-violet dark:text-nova-orange" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-inkLight dark:text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-inkLight-muted dark:text-ink-muted">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
