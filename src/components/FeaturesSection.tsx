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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: "from-primary/15 to-primary/5", icon: "bg-white text-primary", border: "border-primary/30", glow: "hover:shadow-[0_10px_50px_hsl(var(--primary)_/_0.3)]" },
              { bg: "from-accent/15 to-accent/5", icon: "bg-white text-accent", border: "border-accent/30", glow: "hover:shadow-[0_10px_50px_hsl(var(--accent)_/_0.3)]" },
              { bg: "from-secondary/15 to-secondary/5", icon: "bg-white text-secondary", border: "border-secondary/30", glow: "hover:shadow-[0_10px_50px_hsl(var(--secondary)_/_0.3)]" },
              { bg: "from-primary/15 to-accent/5", icon: "bg-white text-primary", border: "border-primary/30", glow: "hover:shadow-[0_10px_50px_hsl(var(--primary)_/_0.3)]" },
              { bg: "from-accent/15 to-secondary/5", icon: "bg-white text-accent", border: "border-accent/30", glow: "hover:shadow-[0_10px_50px_hsl(var(--accent)_/_0.3)]" },
              { bg: "from-secondary/15 to-primary/5", icon: "bg-white text-secondary", border: "border-secondary/30", glow: "hover:shadow-[0_10px_50px_hsl(var(--secondary)_/_0.3)]" },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-lg p-6 rounded-xl border ${colorScheme.border} hover:scale-[1.01] ${colorScheme.glow} hover:bg-opacity-30 transition-all duration-300 hover:-translate-y-0.5 animate-slide-up relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${colorScheme.icon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-accent">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
