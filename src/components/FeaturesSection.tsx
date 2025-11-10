import { MessageSquare, Target, TrendingUp, Network, Shield, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const FeaturesSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
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
    <section className="py-20 bg-background relative overflow-hidden berry-dots">
      {/* Soft organic background decoration */}
      <div className="absolute inset-0 opacity-6">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-warm/6 rounded-[40%_60%_70%_30%/40%_60%_30%_70%] blur-3xl animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-accent-natural/3 animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Powerful Features for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Modern Hiring</span>
              <svg className="absolute -bottom-1 left-0 w-full h-2 opacity-30" viewBox="0 0 300 8" preserveAspectRatio="none">
                <path d="M0,6 Q75,1 150,5 T300,6" fill="none" stroke="hsl(var(--accent-natural))" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
            Everything you need to revolutionize your recruitment process, powered by cutting-edge AI with a human touch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: "bg-primary/8", icon: "text-primary", glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.25)]", border: "border-primary/20", accent: "bg-primary" },
              { bg: "bg-secondary/8", icon: "text-secondary", glow: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)_/_0.25)]", border: "border-secondary/20", accent: "bg-secondary" },
              { bg: "bg-accent-warm/8", icon: "text-accent-warm", glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent-warm)_/_0.25)]", border: "border-accent-warm/20", accent: "bg-accent-warm" },
              { bg: "bg-accent-natural/8", icon: "text-accent-natural", glow: "group-hover:shadow-[0_0_30px_hsl(var(--accent-natural)_/_0.25)]", border: "border-accent-natural/20", accent: "bg-accent-natural" },
              { bg: "bg-primary/8", icon: "text-primary", glow: "group-hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.25)]", border: "border-primary/20", accent: "bg-primary" },
              { bg: "bg-secondary/8", icon: "text-secondary", glow: "group-hover:shadow-[0_0_30px_hsl(var(--secondary)_/_0.25)]", border: "border-secondary/20", accent: "bg-secondary" },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`group bg-gradient-card backdrop-blur-sm border ${colorScheme.border} rounded-2xl p-6 hover:bg-card/40 hover:border-opacity-70 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${colorScheme.glow} ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: visibleItems.has(index) ? `${index * 0.08}s` : '0s'
                }}
              >
                <div className="flex items-start gap-5">
                  <div className={`relative w-14 h-14 ${colorScheme.bg} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 border ${colorScheme.border}`}>
                    <Icon className={`w-7 h-7 ${colorScheme.icon} transition-all duration-300`} strokeWidth={2} />
                    <div className={`absolute inset-0 ${colorScheme.accent} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-lg font-semibold mb-2 ${colorScheme.icon} transition-colors duration-300`}>{feature.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 font-sans">{feature.description}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2">
                    <div className={`w-2 h-2 rounded-full ${colorScheme.accent} animate-pulse`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
