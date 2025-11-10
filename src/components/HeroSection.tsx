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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft berry-texture">
      {/* Organic background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/8 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary/8 rounded-[40%_60%_70%_30%/40%_60%_30%_70%] blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent-warm/6 rounded-[70%_30%_50%_50%/30%_70%_50%_50%] blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent-natural/6 rounded-[50%_50%_70%_30%/70%_30%_50%_50%] blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-card border border-secondary/20 backdrop-blur-sm mb-8 transition-all hover:border-secondary/40">
              <Sparkles className="w-4 h-4 text-accent-warm" />
              <span className="text-sm font-medium text-foreground">Empathy. Insight. Intelligence.</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
              Meet the AI Recruiter That{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Never Sleeps</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-40" viewBox="0 0 300 12" preserveAspectRatio="none">
                  <path d="M0,8 Q75,2 150,6 T300,8" fill="none" stroke="url(#warmGradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent-warm))" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-3 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Morita doesn't just analyze — <span className="text-accent-natural font-medium">she feels patterns others miss</span>. 
              Our AI conducts warm, intelligent interviews and finds the perfect match automatically.
            </p>
            
            <p className="text-sm text-foreground/50 mb-10 max-w-2xl mx-auto lg:mx-0 italic">
              Technology with intuition. Recruiting with empathy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <Button 
                  size="lg" 
                  className="group w-full sm:w-auto bg-gradient-hero hover:shadow-[var(--shadow-warm)] border-0 text-white font-semibold px-8 py-6 text-base rounded-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => setDialogOpen(true)}
                >
                  Let's Build Your Team Together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-xs text-foreground/40 mt-2.5 font-sans">No spam, just thoughtful hiring</span>
              </div>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
            
            <div className="mt-14 flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div ref={costReduction.ref}>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{costReduction.count}</div>
                <div className="text-foreground/60 font-sans text-xs mt-1">Cost Reduction</div>
              </div>
              <div className="w-px h-14 bg-border/40" />
              <div ref={fasterHiring.ref}>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{fasterHiring.count}</div>
                <div className="text-foreground/60 font-sans text-xs mt-1">Faster Hiring</div>
              </div>
              <div className="w-px h-14 bg-border/40" />
              <div ref={lessBias.ref}>
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{lessBias.count}</div>
                <div className="text-foreground/60 font-sans text-xs mt-1">Less Bias</div>
              </div>
            </div>
          </div>

          {/* Right image - more organic presentation */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-700 hover:scale-[1.02] border border-primary/10">
              <img 
                src={heroImage} 
                alt="AI Recruiter Dashboard showing candidate analysis and interview interface with warm, human-centered design"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating stats cards with softer, more organic look */}
            <div ref={activeInterviews.ref} className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-xl p-6 rounded-3xl shadow-[var(--shadow-card)] border border-accent-natural/20 animate-float hover:scale-105 hover:border-accent-natural/40 transition-all cursor-pointer hover:shadow-[0_0_40px_hsl(var(--accent-natural)_/_0.2)]" style={{ animationDelay: "0.3s" }}>
              <div className="text-xs text-foreground/50 uppercase tracking-wider mb-2 font-sans">Active Interviews</div>
              <div className="text-3xl font-bold text-accent-natural">{activeInterviews.count}</div>
            </div>
            
            <div ref={matchAccuracy.ref} className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-xl p-6 rounded-3xl shadow-[var(--shadow-card)] border border-accent-warm/20 animate-float hover:scale-105 hover:border-accent-warm/40 transition-all cursor-pointer hover:shadow-[var(--shadow-warm)]" style={{ animationDelay: "0.8s" }}>
              <div className="text-xs text-foreground/50 uppercase tracking-wider mb-2 font-sans">Match Accuracy</div>
              <div className="text-3xl font-bold text-accent-warm">{matchAccuracy.count}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
