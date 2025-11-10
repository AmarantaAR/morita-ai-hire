import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-recruiter.jpg";
import { useCounter } from "@/hooks/use-counter";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const costReduction = useCounter({ end: 70, isPercentage: true, duration: 2500 });
  const fasterHiring = useCounter({ end: 5, suffix: "x", duration: 2500 });
  const lessBias = useCounter({ end: 40, isPercentage: true, duration: 2500 });
  const activeInterviews = useCounter({ end: 1247, duration: 3000 });
  const matchAccuracy = useCounter({ end: 94.8, isPercentage: true, duration: 3000 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
        
        {/* Berry-inspired floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-bounce-slow" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 transition-all">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">The Future of HR is Here</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Meet the AI Recruiter That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-pulse">Never Sleeps</span>
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
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group w-full sm:w-auto"
                  onClick={() => setDialogOpen(true)}
                >
                  Request Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-xs text-muted-foreground mt-2">No spam, just smarter hiring</span>
              </div>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
            
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div ref={costReduction.ref}>
                <div className="text-2xl font-semibold text-primary">{costReduction.count}</div>
                <div className="text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div ref={fasterHiring.ref}>
                <div className="text-2xl font-semibold text-primary">{fasterHiring.count}</div>
                <div className="text-muted-foreground">Faster Hiring</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div ref={lessBias.ref}>
                <div className="text-2xl font-semibold text-primary">{lessBias.count}</div>
                <div className="text-muted-foreground">Less Bias</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-glow)] hover:shadow-[0_0_100px_hsl(var(--primary)_/_0.4)] transition-all duration-500 hover:scale-105 border border-primary/20">
              <img 
                src={heroImage} 
                alt="AI Recruiter Dashboard showing candidate analysis and interview interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            
            {/* Floating stats cards with glass-morphism */}
            <div ref={activeInterviews.ref} className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-xl p-5 rounded-xl shadow-[var(--shadow-glow)] border border-primary/30 animate-float hover:scale-110 hover:border-primary/50 transition-all cursor-pointer" style={{ animationDelay: "0.3s" }}>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Active Interviews</div>
              <div className="text-3xl font-semibold bg-gradient-primary bg-clip-text text-transparent">{activeInterviews.count}</div>
            </div>
            
            <div ref={matchAccuracy.ref} className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-xl p-5 rounded-xl shadow-[var(--shadow-mint)] border border-accent/30 animate-float hover:scale-110 hover:border-accent/50 transition-all cursor-pointer" style={{ animationDelay: "0.8s" }}>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Match Accuracy</div>
              <div className="text-3xl font-semibold text-accent">{matchAccuracy.count}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
