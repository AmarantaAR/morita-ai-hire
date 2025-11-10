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
      
      {/* Organic blob decorations */}
      <div className="organic-blob absolute top-10 right-10 w-64 h-64 bg-accent/5 blur-3xl" style={{ animationDelay: "3s" }} />
      <div className="organic-blob absolute bottom-20 left-20 w-80 h-80 bg-primary/5 blur-3xl" style={{ animationDelay: "7s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight" style={{ transform: 'rotate(-1deg)' }}>
            Hiring Reinvented with{" "}
            <span className="text-float inline-block bg-gradient-primary bg-clip-text text-transparent">Intelligent AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your recruitment process with AI that understands candidates as well as humans do—but faster, fairer, and at scale.
          </p>
          {/* Decorative underline */}
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-primary rounded-full" style={{ transform: 'rotate(-1deg)' }} />
          </div>
        </div>

        {/* Process Flow with staggered layout */}
        <div className="stagger-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-1'];
            const marginTops = ['mt-0', 'mt-4', 'mt-0', 'mt-6'];
            return (
              <div key={index} className={`relative ${marginTops[index]}`}>
                {/* Connector line with gradient animation */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -z-10 opacity-30" />
                )}
                
                <div className={`bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 h-full group transition-all duration-300 ${rotations[index]} hover:rotate-0`}>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-[var(--shadow-glow)] group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                    Step {index + 1}
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits with asymmetric layout */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/80 backdrop-blur-sm p-7 rounded-xl border border-primary/30 hover:bg-card hover:shadow-[0_0_50px_hsl(var(--primary)_/_0.5)] hover:border-primary/60 hover:scale-[1.02] transition-all duration-300 animate-scale-in group md:translate-y-6" style={{ transform: 'rotate(-1deg)' }}>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.4)] transition-all duration-300 group-hover:rotate-12">
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
            {/* Decorative corner */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-7 rounded-xl border border-accent/30 hover:bg-card hover:shadow-[0_0_50px_hsl(var(--accent)_/_0.5)] hover:border-accent/60 hover:scale-[1.02] transition-all duration-300 animate-scale-in group md:-translate-y-6" style={{ animationDelay: "0.2s", transform: 'rotate(1deg)' }}>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/30 group-hover:bg-accent/30 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_hsl(var(--accent)_/_0.4)] transition-all duration-300 group-hover:rotate-12">
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
            {/* Decorative corner */}
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
