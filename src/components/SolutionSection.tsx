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
    <section className="py-20 relative overflow-hidden berry-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated light orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-slow opacity-40" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse opacity-25" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Hiring Reinvented with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Intelligent AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your recruitment process with AI that understands candidates as well as humans do—but faster, fairer, and at scale.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative opacity-0 animate-fade-in" 
                style={{ 
                  animationDelay: `${index * 0.2 + 0.3}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Connector line with subtle glow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent -z-10" />
                )}
                
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.3)] hover:-translate-y-1 h-full group transition-all duration-300 relative overflow-hidden">
                  {/* Subtle glow circle on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(var(--primary)_/_0.4)] group-hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.6)] transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2 group-hover:text-secondary transition-colors duration-300">Step {index + 1}</div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card/80 backdrop-blur-sm p-7 rounded-xl border border-primary/30 hover:bg-card hover:shadow-[0_0_50px_hsl(var(--primary)_/_0.5)] hover:border-primary/60 hover:scale-[1.02] transition-all duration-300 animate-scale-in group">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.4)] transition-all duration-300">
                <Zap className="w-5 h-5 text-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">For Candidates</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-sm group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Interview on your schedule, 24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Fair evaluation based on skills, not first impressions</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Instant feedback and transparent process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-7 rounded-xl border border-accent/30 hover:bg-card hover:shadow-[0_0_50px_hsl(var(--accent)_/_0.5)] hover:border-accent/60 hover:scale-[1.02] transition-all duration-300 animate-scale-in group" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:bg-accent/30 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_hsl(var(--accent)_/_0.4)] transition-all duration-300">
                <BarChart3 className="w-5 h-5 text-accent group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--accent))] transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">For Recruiters</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-sm group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Comprehensive dashboard with ranked candidates</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Detailed interview summaries and insights</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Seamless integration with existing ATS systems</span>
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
