import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-recruiter.jpg";
import { useCounter } from "@/hooks/use-counter";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const costReduction = useCounter({ end: 70, isPercentage: true, duration: 2500 });
  const fasterHiring = useCounter({ end: 10, suffix: "x", duration: 2500 });
  const lessBias = useCounter({ end: 40, isPercentage: true, duration: 2500 });
  const activeInterviews = useCounter({ end: 1247, duration: 3000 });
  const matchAccuracy = useCounter({ end: 94.8, isPercentage: true, duration: 3000 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float-slow opacity-60" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary/4 rounded-full blur-[140px] animate-float-slow opacity-50" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent/3 rounded-full blur-[100px] animate-float-slow opacity-40" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[110px] animate-float-slow opacity-50" style={{ animationDelay: "4.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 backdrop-blur-sm text-primary mb-8 transition-all duration-700 hover:bg-primary/8 border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary opacity-70" />
              <span className="text-sm font-medium">The Future of HR is Here</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.15] tracking-tight">
              Meet the AI Recruiter That{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Never Sleeps</span>
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
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-glow)] transition-all duration-1000 hover:shadow-[var(--shadow-glow)] border border-primary/10 backdrop-blur-sm">
              <img 
                src={heroImage} 
                alt="AI Recruiter Dashboard showing candidate analysis and interview interface"
                className="w-full h-auto opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            </div>
            
            {/* Floating stats cards with glass-morphism */}
            <div ref={activeInterviews.ref} className="absolute -bottom-6 -left-6 bg-card/60 backdrop-blur-2xl p-5 rounded-2xl shadow-[var(--shadow-card)] border border-primary/20 animate-float hover:bg-card/70 hover:border-primary/30 transition-all duration-700" style={{ animationDelay: "0.5s" }}>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1 opacity-70">Active Interviews</div>
              <div className="text-3xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{activeInterviews.count}</div>
            </div>
            
            <div ref={matchAccuracy.ref} className="absolute -top-6 -right-6 bg-card/60 backdrop-blur-2xl p-5 rounded-2xl shadow-[var(--shadow-card)] border border-accent/20 animate-float hover:bg-card/70 hover:border-accent/30 transition-all duration-700" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1 opacity-70">Match Accuracy</div>
              <div className="text-3xl font-semibold text-accent/90">{matchAccuracy.count}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
