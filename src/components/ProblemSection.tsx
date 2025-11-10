import { Clock, DollarSign, Users, AlertCircle } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";

export const ProblemSection = () => {
  const daysCounter = useCounter({ end: 42, duration: 2500 });

  const problems = [
    {
      icon: Clock,
      title: "Time-Consuming Screening",
      description: "HR teams spend countless hours manually reviewing resumes and conducting initial interviews, draining productivity.",
    },
    {
      icon: DollarSign,
      title: "High Recruitment Costs",
      description: "Traditional hiring processes are expensive, with costs escalating through multiple interview rounds and extended timelines.",
    },
    {
      icon: AlertCircle,
      title: "Unconscious Bias",
      description: "Human decision-making can introduce bias, affecting diversity and potentially missing great candidates.",
    },
    {
      icon: Users,
      title: "Inconsistent Evaluation",
      description: "Different interviewers apply different standards, leading to unfair comparisons and poor hiring decisions.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 berry-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            The Hiring Process is{" "}
            <span className="text-destructive">Broken</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Companies waste valuable time and resources on outdated, inefficient hiring practices that fail both employers and candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-destructive/50 transition-all hover:shadow-[0_0_30px_hsl(var(--destructive)_/_0.2)] hover:-translate-y-2 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all border border-destructive/20">
                  <Icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div ref={daysCounter.ref} className="mt-16 bg-gradient-dark rounded-3xl p-10 sm:p-16 text-center berry-dots border border-primary/20 shadow-[var(--shadow-glow)]">
          <p className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
            Average time-to-hire: <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">{daysCounter.count} days</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            While competitors find their perfect candidates in under a week with Morita&apos;s AI-powered solution.
          </p>
        </div>
      </div>
    </section>
  );
};
