import { FileText, Video, Brain, BarChart3 } from "lucide-react";

export const SolutionSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Upload & Parse",
      description: "Candidates upload résumés. AI extracts and analyzes everything instantly.",
    },
    {
      number: "02",
      icon: Video,
      title: "AI Interview",
      description: "Dynamic video interview adapts questions based on responses in real-time.",
    },
    {
      number: "03",
      icon: Brain,
      title: "Deep Analysis",
      description: "NLP evaluates answers, tone, skills, and cultural fit automatically.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Smart Ranking",
      description: "Candidates automatically ranked with detailed insights and scores.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-muted/5 to-background">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-accent/10 to-secondary/5 backdrop-blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">How It Works</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.15]">
            From Job Post to Perfect Hire
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">in 72 Hours</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 font-light max-w-3xl mx-auto">
            Four automated steps. Zero manual screening. Complete transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative opacity-0 animate-fade-in group backdrop-blur-xl bg-white/40 dark:bg-background/40 rounded-3xl p-8 border border-white/30 dark:border-border/20 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300" 
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-6xl font-bold text-accent/60 mb-4">{step.number}</div>
                <div className="mb-6 inline-block p-3 rounded-2xl bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
