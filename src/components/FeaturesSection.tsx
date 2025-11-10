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
    <section className="py-20 bg-[#0B0A10] text-white relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6B4EFF] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '2s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00F5A0] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B4EFF]/5 via-transparent to-[#00F5A0]/5 animate-pulse" style={{ animationDuration: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight text-white">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#A28CFF] bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '1.5s' }}>Modern Hiring</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to revolutionize your recruitment process, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = [
              { bg: "bg-[#6B4EFF]/10", icon: "text-[#6B4EFF]", glow: "group-hover:shadow-[0_0_30px_rgba(107,78,255,0.5)]", border: "border-[#6B4EFF]/30" },
              { bg: "bg-[#00F5A0]/10", icon: "text-[#00F5A0]", glow: "group-hover:shadow-[0_0_30px_rgba(0,245,160,0.5)]", border: "border-[#00F5A0]/30" },
              { bg: "bg-[#A28CFF]/10", icon: "text-[#A28CFF]", glow: "group-hover:shadow-[0_0_30px_rgba(162,140,255,0.5)]", border: "border-[#A28CFF]/30" },
              { bg: "bg-[#6B4EFF]/10", icon: "text-[#6B4EFF]", glow: "group-hover:shadow-[0_0_30px_rgba(107,78,255,0.5)]", border: "border-[#6B4EFF]/30" },
              { bg: "bg-[#00F5A0]/10", icon: "text-[#00F5A0]", glow: "group-hover:shadow-[0_0_30px_rgba(0,245,160,0.5)]", border: "border-[#00F5A0]/30" },
              { bg: "bg-[#A28CFF]/10", icon: "text-[#A28CFF]", glow: "group-hover:shadow-[0_0_30px_rgba(162,140,255,0.5)]", border: "border-[#A28CFF]/30" },
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`group bg-white/5 backdrop-blur-sm border ${colorScheme.border} rounded-xl p-5 hover:bg-white/10 hover:border-opacity-60 hover:-translate-x-1 transition-all duration-200 cursor-pointer ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: visibleItems.has(index) ? `${index * 0.05}s` : '0s'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${colorScheme.bg} rounded-xl flex items-center justify-center flex-shrink-0 ${colorScheme.glow} transition-all duration-150 group-hover:scale-125 group-hover:rotate-3 border ${colorScheme.border}`}>
                    <Icon className={`w-6 h-6 ${colorScheme.icon} group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-150`} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold mb-1.5 text-white group-hover:text-[#00F5A0] transition-colors duration-150">{feature.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-150">{feature.description}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
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
