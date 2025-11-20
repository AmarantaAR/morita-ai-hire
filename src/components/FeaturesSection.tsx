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
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/5">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-accent/10 to-secondary/5 backdrop-blur-3xl opacity-30 animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">Powerful Features</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15]">
            Built for Modern Hiring Teams
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Everything you need to hire faster, smarter, and without bias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in group backdrop-blur-xl bg-white/30 dark:bg-background/30 rounded-3xl p-8 border border-white/20 dark:border-border/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" 
                style={{ 
                  animationDelay: `${index * 0.08}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="mb-6 inline-block p-3 rounded-2xl bg-primary/10">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
