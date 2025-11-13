import { MessageSquare, Target, TrendingUp, Network, Shield, Workflow } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Dynamic AI Interviews",
      description: "Adaptive conversations that reveal true capabilities.",
    },
    {
      icon: Target,
      title: "Personality Analysis",
      description: "Behavioral metrics and communication assessment.",
    },
    {
      icon: TrendingUp,
      title: "Employer Dashboard",
      description: "Analytics, rankings, and actionable insights.",
    },
    {
      icon: Network,
      title: "Real-Time Reports",
      description: "Instant summaries and compatibility scores.",
    },
    {
      icon: Shield,
      title: "Bias Reduction",
      description: "Objective evaluation focused on skills and fit.",
    },
    {
      icon: Workflow,
      title: "ATS Integration",
      description: "Seamless connection with existing systems.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in" 
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
