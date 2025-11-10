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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="text-secondary">Modern Hiring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your recruitment process, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card/10 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/50 hover:bg-card/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
