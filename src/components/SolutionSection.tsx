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
    <section className="py-32 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            How Morita works.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
            From resume to hire in four simple steps. All automated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative opacity-0 animate-fade-in" 
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-7xl font-bold text-accent/20 mb-4">{step.number}</div>
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
