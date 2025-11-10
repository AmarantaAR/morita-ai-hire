import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-recruiter.jpg";
import { useCounter } from "@/hooks/use-counter";

export const HeroSection = () => {
  const costReduction = useCounter({ end: 70, isPercentage: true, duration: 2500 });
  const fasterHiring = useCounter({ end: 5, suffix: "x", duration: 2500 });
  const lessBias = useCounter({ end: 40, isPercentage: true, duration: 2500 });
  const activeInterviews = useCounter({ end: 1247, duration: 3000 });
  const matchAccuracy = useCounter({ end: 94.8, isPercentage: true, duration: 3000 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Organic background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="organic-blob absolute top-20 left-10 w-96 h-96 bg-primary/8 blur-3xl" />
        <div className="organic-blob absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/8 blur-3xl" style={{ animationDelay: "5s" }} />
        <div className="organic-blob absolute top-1/3 right-1/4 w-72 h-72 bg-accent/6 blur-2xl" style={{ animationDelay: "10s" }} />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-40 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        
        {/* Scattered dots with personality */}
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-primary/40 rounded-full" style={{ transform: 'rotate(15deg)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary/30 rounded-full" style={{ transform: 'rotate(-10deg)' }} />
        <div className="absolute top-2/5 right-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content with asymmetric layout */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 transition-all" style={{ transform: 'rotate(-1deg)' }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">The Future of HR is Here</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
              Meet the AI Recruiter That{" "}
              <span className="handwritten-underline bg-gradient-primary bg-clip-text text-transparent">Never Sleeps</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Morita doesn't just analyze — she understands. Our AI conducts intelligent interviews, 
              analyzes candidates with precision, and finds the perfect match automatically.
            </p>
            
            <p className="text-sm text-muted-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Where technology meets intuition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Request Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-xs text-muted-foreground mt-2">No spam, just smarter hiring</span>
              </div>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                For Investors
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div ref={costReduction.ref} className="relative" style={{ transform: 'rotate(-2deg)' }}>
                <div className="text-2xl font-semibold text-primary">{costReduction.count}</div>
                <div className="text-muted-foreground">Cost Reduction</div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/30 rounded-full" />
              </div>
              <div className="w-px h-12 bg-border opacity-50" style={{ transform: 'rotate(5deg)' }} />
              <div ref={fasterHiring.ref} style={{ transform: 'rotate(1deg)' }}>
                <div className="text-2xl font-semibold text-accent">{fasterHiring.count}</div>
                <div className="text-muted-foreground">Faster Hiring</div>
              </div>
              <div className="w-px h-12 bg-border opacity-50" style={{ transform: 'rotate(-5deg)' }} />
              <div ref={lessBias.ref} className="relative" style={{ transform: 'rotate(-1deg)' }}>
                <div className="text-2xl font-semibold text-secondary">{lessBias.count}</div>
                <div className="text-muted-foreground">Less Bias</div>
                <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-secondary/40 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right image with unique positioning */}
          <div className="relative animate-slide-in-right lg:mt-8">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] hover:shadow-[0_0_100px_hsl(var(--primary)_/_0.4)] transition-all duration-500 hover:scale-[1.02] hover:rotate-1 border border-primary/20" style={{ transform: 'rotate(-2deg)' }}>
              <img 
                src={heroImage} 
                alt="AI Recruiter Dashboard showing candidate analysis and interview interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-20 blur-2xl" />
            </div>
            
            {/* Floating stats cards with unique angles */}
            <div ref={activeInterviews.ref} className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-xl p-5 rounded-xl shadow-[var(--shadow-glow)] border border-primary/30 animate-float hover:scale-110 hover:border-primary/50 transition-all cursor-pointer hover:rotate-3" style={{ animationDelay: "0.3s", transform: 'rotate(-3deg)' }}>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Active Interviews</div>
              <div className="text-3xl font-semibold bg-gradient-primary bg-clip-text text-transparent">{activeInterviews.count}</div>
            </div>
            
            <div ref={matchAccuracy.ref} className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-xl p-5 rounded-xl shadow-[var(--shadow-mint)] border border-accent/30 animate-float hover:scale-110 hover:border-accent/50 transition-all cursor-pointer hover:rotate-3" style={{ animationDelay: "0.8s", transform: 'rotate(4deg)' }}>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Match Accuracy</div>
              <div className="text-3xl font-semibold text-accent">{matchAccuracy.count}</div>
            </div>
            
            {/* Abstract decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
