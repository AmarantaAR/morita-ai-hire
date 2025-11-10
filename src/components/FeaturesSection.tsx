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
    <section className="py-24 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Background decoration - subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Modern Hiring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to revolutionize your recruitment process, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: "from-primary/80 to-primary/60", icon: "bg-white text-primary", border: "border-primary/40", glow: "hover:shadow-[0_10px_50px_hsl(var(--primary)_/_0.3)]" },
              { bg: "from-accent/80 to-accent/60", icon: "bg-white text-accent", border: "border-accent/40", glow: "hover:shadow-[0_10px_50px_hsl(var(--accent)_/_0.3)]" },
              { bg: "from-secondary/80 to-secondary/60", icon: "bg-white text-secondary", border: "border-secondary/40", glow: "hover:shadow-[0_10px_50px_hsl(var(--secondary)_/_0.3)]" },
              { bg: "from-primary/80 to-accent/60", icon: "bg-white text-primary", border: "border-primary/40", glow: "hover:shadow-[0_10px_50px_hsl(var(--primary)_/_0.3)]" },
              { bg: "from-accent/80 to-secondary/60", icon: "bg-white text-accent", border: "border-accent/40", glow: "hover:shadow-[0_10px_50px_hsl(var(--accent)_/_0.3)]" },
              { bg: "from-secondary/80 to-primary/60", icon: "bg-white text-secondary", border: "border-secondary/40", glow: "hover:shadow-[0_10px_50px_hsl(var(--secondary)_/_0.3)]" },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-lg p-7 rounded-2xl border ${colorScheme.border} hover:scale-[1.02] ${colorScheme.glow} transition-all duration-300 hover:-translate-y-1 animate-slide-up relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${colorScheme.icon} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/85 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
