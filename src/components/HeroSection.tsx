import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-aquatic-ai.jpg";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated aquatic background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50 animate-aquatic-drift"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
          }}
        />
        
        {/* Animated water overlay effects with more intensity */}
        <div className="absolute inset-0 animate-wave-slow opacity-60" 
          style={{
            background: 'radial-gradient(ellipse 150% 100% at 50% 50%, hsl(var(--primary) / 0.35) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div className="absolute inset-0 animate-wave-medium opacity-50" 
          style={{
            background: 'radial-gradient(circle 120% at 30% 40%, hsl(var(--accent) / 0.4) 0%, transparent 60%)',
            filter: 'blur(80px)',
            animationDelay: '2s'
          }}
        />
        <div className="absolute inset-0 animate-wave-fast opacity-45" 
          style={{
            background: 'radial-gradient(ellipse 100% 140% at 70% 60%, hsl(270 85% 75% / 0.3) 0%, transparent 65%)',
            filter: 'blur(100px)',
            animationDelay: '4s'
          }}
        />
        
        {/* Floating particles and bubbles */}
        <div className="absolute top-20 left-10 w-[700px] h-[700px] bg-primary/12 rounded-full blur-[180px] animate-float-slow opacity-80" />
        <div className="absolute bottom-20 right-10 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] animate-float-slow opacity-70" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[160px] animate-float-slow opacity-60" style={{ animationDelay: "1.5s" }} />
        
        {/* Smaller floating bubbles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-primary/25 rounded-full blur-xl animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-1/3 left-2/3 w-28 h-28 bg-primary/20 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero content */}
          <div className="animate-fade-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
              Hire smarter.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Not harder.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              AI-powered recruiting that interviews, analyzes, and matches candidates automatically. While you sleep.
            </p>
            
            <div className="flex gap-4 justify-center mb-16">
              <Button 
                size="lg"
                className="group px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl transition-all duration-500"
                onClick={() => setDialogOpen(true)}
              >
                Start Hiring
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto">
              <div ref={costReduction.ref} className="text-center backdrop-blur-sm bg-background/5 rounded-2xl p-6 border border-border/10">
                <div className="text-5xl sm:text-6xl font-bold text-foreground mb-2">{costReduction.count}</div>
                <div className="text-sm text-muted-foreground/80">Cost reduction</div>
              </div>
              <div ref={fasterHiring.ref} className="text-center backdrop-blur-sm bg-background/5 rounded-2xl p-6 border border-border/10">
                <div className="text-5xl sm:text-6xl font-bold text-foreground mb-2">{fasterHiring.count}</div>
                <div className="text-sm text-muted-foreground/80">Faster hiring</div>
              </div>
              <div ref={lessBias.ref} className="text-center backdrop-blur-sm bg-background/5 rounded-2xl p-6 border border-border/10">
                <div className="text-5xl sm:text-6xl font-bold text-foreground mb-2">{lessBias.count}</div>
                <div className="text-sm text-muted-foreground/80">Less bias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
