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
      {/* Background decoration - more vibrant */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent animate-pulse">Modern Hiring</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Everything you need to revolutionize your recruitment process, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: "from-primary/90 to-primary/70", icon: "bg-white text-primary", border: "border-primary/50", glow: "shadow-[0_0_40px_hsl(var(--primary)_/_0.6)]" },
              { bg: "from-accent/90 to-accent/70", icon: "bg-white text-accent", border: "border-accent/50", glow: "shadow-[0_0_40px_hsl(var(--accent)_/_0.6)]" },
              { bg: "from-secondary/90 to-secondary/70", icon: "bg-primary text-white", border: "border-secondary/50", glow: "shadow-[0_0_40px_hsl(var(--secondary)_/_0.6)]" },
              { bg: "from-primary/90 to-accent/70", icon: "bg-accent text-white", border: "border-primary/50", glow: "shadow-[0_0_40px_hsl(var(--primary)_/_0.6)]" },
              { bg: "from-accent/90 to-primary/70", icon: "bg-white text-primary", border: "border-accent/50", glow: "shadow-[0_0_40px_hsl(var(--accent)_/_0.6)]" },
              { bg: "from-secondary/90 to-accent/70", icon: "bg-white text-secondary", border: "border-secondary/50", glow: "shadow-[0_0_40px_hsl(var(--secondary)_/_0.6)]" },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${colorScheme.bg} backdrop-blur-xl p-8 rounded-2xl border-2 ${colorScheme.border} hover:scale-105 hover:${colorScheme.glow} transition-all duration-300 hover:-translate-y-3 animate-slide-up relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-white/5 opacity-100" />
                <div className="relative z-10">
                  <div className={`w-20 h-20 ${colorScheme.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all shadow-2xl border-4 border-white/20`}>
                    <Icon className="w-10 h-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
