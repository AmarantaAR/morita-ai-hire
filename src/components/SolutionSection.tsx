import { FileText, Video, Brain, CheckCircle, BarChart3, Zap } from "lucide-react";

export const SolutionSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Upload & Parse",
      description: "Candidates upload their résumé. Our AI instantly extracts and analyzes all relevant information.",
    },
    {
      icon: Video,
      title: "AI Interview",
      description: "Automated video interview with dynamic questions that adapt based on candidate responses in real-time.",
    },
    {
      icon: Brain,
      title: "Deep Analysis",
      description: "Natural language processing evaluates answers, tone, communication skills, and cultural fit.",
    },
    {
      icon: BarChart3,
      title: "Smart Scoring",
      description: "Candidates are automatically ranked with detailed insights and compatibility scores for each role.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden berry-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hiring Reinvented with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Intelligent AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your recruitment process with AI that understands candidates as well as humans do—but faster, fairer, and at scale.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Connector line with gradient animation */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -z-10 animate-pulse" />
                )}
                
                <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] hover:-translate-y-3 h-full group transition-all">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-[var(--shadow-glow)] group-hover:scale-125 group-hover:rotate-12 transition-all">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/80 backdrop-blur-sm p-10 rounded-2xl border border-primary/30 hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all animate-scale-in">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">For Candidates</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Interview on your schedule, 24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Fair evaluation based on skills, not first impressions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Instant feedback and transparent process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-10 rounded-2xl border border-accent/30 hover:shadow-[var(--shadow-mint)] hover:border-accent/50 transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-accent/30">
                <BarChart3 className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">For Recruiters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Comprehensive dashboard with ranked candidates</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Detailed interview summaries and insights</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Seamless integration with existing ATS systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
