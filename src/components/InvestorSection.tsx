import { TrendingUp, Globe, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InvestorSection = () => {
  const metrics = [
    {
      icon: Globe,
      value: "$30B",
      label: "Global HR Tech Market",
      subtitle: "Expected to reach $90B by 2028",
    },
    {
      icon: TrendingUp,
      value: "70%",
      label: "Cost Reduction",
      subtitle: "For companies using AI recruiting",
    },
    {
      icon: Users,
      value: "5x",
      label: "Faster Time-to-Hire",
      subtitle: "Compared to traditional methods",
    },
    {
      icon: DollarSign,
      value: "40%",
      label: "Bias Reduction",
      subtitle: "Through objective AI evaluation",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            For Investors
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The Market Opportunity is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Massive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.subtitle}</div>
              </div>
            );
          })}
        </div>

        {/* Why Invest Section */}
        <div className="bg-gradient-dark rounded-3xl p-8 sm:p-12 animate-scale-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary-foreground">
              Why Invest in Morita-hr?
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
              <Button variant="hero" size="xl">
                Schedule Investor Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
