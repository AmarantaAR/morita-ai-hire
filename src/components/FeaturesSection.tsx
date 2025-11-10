import { MessageSquare, Target, TrendingUp, Network, Shield, Workflow } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Dynamic AI Interviewer",
      description: "Adaptive questioning that evolves based on candidate responses, creating a natural conversation flow that reveals true capabilities.",
    },
    {
      icon: Target,
      title: "Personality Analysis",
      description: "Advanced behavioral metrics and communication skill assessment to understand not just what candidates say, but how they say it.",
    },
    {
      icon: TrendingUp,
      title: "Employer Dashboard",
      description: "Comprehensive analytics with ranked candidates, detailed comparisons, and actionable insights at your fingertips.",
    },
    {
      icon: Network,
      title: "Real-Time Reports",
      description: "Instant interview summaries, skill breakdowns, and compatibility scores delivered as soon as the interview completes.",
    },
    {
      icon: Shield,
      title: "Bias Reduction",
      description: "AI-powered objective evaluation that focuses purely on skills and fit, eliminating unconscious human bias from the process.",
    },
    {
      icon: Workflow,
      title: "ATS Integration",
      description: "Seamlessly connects with your existing Applicant Tracking System for a unified workflow without disruption.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background decoration - subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Modern Hiring</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to revolutionize your recruitment process, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { icon: "text-primary", glow: "group-hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.4)]" },
              { icon: "text-accent", glow: "group-hover:shadow-[0_0_20px_hsl(var(--accent)_/_0.4)]" },
              { icon: "text-secondary", glow: "group-hover:shadow-[0_0_20px_hsl(var(--secondary)_/_0.4)]" },
              { icon: "text-primary", glow: "group-hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.4)]" },
              { icon: "text-accent", glow: "group-hover:shadow-[0_0_20px_hsl(var(--accent)_/_0.4)]" },
              { icon: "text-secondary", glow: "group-hover:shadow-[0_0_20px_hsl(var(--secondary)_/_0.4)]" },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-lg p-5 hover:bg-card/60 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 bg-background/80 rounded-lg flex items-center justify-center flex-shrink-0 ${colorScheme.glow} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`w-5 h-5 ${colorScheme.icon} group-hover:brightness-125 transition-all`} strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold mb-1.5 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
