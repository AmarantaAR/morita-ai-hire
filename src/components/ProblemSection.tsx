import { Clock, DollarSign, Users, AlertCircle } from "lucide-react";

export const ProblemSection = () => {
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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The Hiring Process is{" "}
            <span className="text-destructive">Broken</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Companies waste valuable time and resources on outdated, inefficient hiring practices that fail both employers and candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-[var(--shadow-card)] hover:-translate-y-2 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-dark rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Average time-to-hire: <span className="text-accent">42 days</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            While competitors find their perfect candidates in under a week with Morita-hr's AI-powered solution.
          </p>
        </div>
      </div>
    </section>
  );
};
