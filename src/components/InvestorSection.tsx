import { TrendingUp, Globe, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCounter } from "@/hooks/use-counter";

export const InvestorSection = () => {
  const marketSize = useCounter({ end: 30, prefix: "$", suffix: "B", duration: 2500 });
  const costReduction = useCounter({ end: 70, isPercentage: true, duration: 2500 });
  const timeToHire = useCounter({ end: 5, suffix: "x", duration: 2500 });
  const biasReduction = useCounter({ end: 40, isPercentage: true, duration: 2500 });

  const metrics = [
    {
      icon: Globe,
      counter: marketSize,
      label: "Global HR Tech Market",
      subtitle: "Expected to reach $90B by 2028",
    },
    {
      icon: TrendingUp,
      counter: costReduction,
      label: "Cost Reduction",
      subtitle: "For companies using AI recruiting",
    },
    {
      icon: Users,
      counter: timeToHire,
      label: "Faster Time-to-Hire",
      subtitle: "Compared to traditional methods",
    },
    {
      icon: DollarSign,
      counter: biasReduction,
      label: "Bias Reduction",
      subtitle: "Through objective AI evaluation",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden berry-texture">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-sm border border-accent/30 text-accent rounded-full text-sm font-bold mb-6 uppercase tracking-wider shadow-[var(--shadow-mint)]">
            For Investors
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            The Market Opportunity is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Massive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI-powered recruiting is reshaping the $500B+ global recruitment industry. 
            Join us in building the future of human resources.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                ref={metric.counter.ref}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/30 hover:border-primary/60 hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform origin-left">
                  {metric.counter.count}
                </div>
                <div className="text-base font-bold mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{metric.subtitle}</div>
              </div>
            );
          })}
        </div>

        {/* Why Invest Section */}
        <div className="bg-gradient-dark rounded-3xl p-10 sm:p-16 animate-scale-in berry-dots border border-primary/30 shadow-[var(--shadow-glow)]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Why Invest in Morita?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-card-foreground">Massive TAM</h4>
                    <p className="text-sm text-muted-foreground">$30B+ addressable market growing at 12% annually</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-card-foreground">Global Scalability</h4>
                    <p className="text-sm text-muted-foreground">AI solution works across markets and languages</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-card-foreground">Strong Unit Economics</h4>
                    <p className="text-sm text-muted-foreground">SaaS model with high margins and low CAC</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-card-foreground">Network Effects</h4>
                    <p className="text-sm text-muted-foreground">More data = better AI = stronger moat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="xl" className="shadow-[0_0_80px_hsl(var(--primary)_/_0.5)]">
                Schedule Investor Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
