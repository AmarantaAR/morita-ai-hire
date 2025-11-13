import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
              Hire smarter.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">Not harder.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              AI-powered recruiting that interviews, analyzes, and matches candidates automatically. While you sleep.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start mb-12">
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
            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <div ref={costReduction.ref} className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-1">{costReduction.count}</div>
                <div className="text-sm text-muted-foreground">Cost reduction</div>
              </div>
              <div ref={fasterHiring.ref} className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-1">{fasterHiring.count}</div>
                <div className="text-sm text-muted-foreground">Faster hiring</div>
              </div>
              <div ref={lessBias.ref} className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-bold text-foreground mb-1">{lessBias.count}</div>
                <div className="text-sm text-muted-foreground">Less bias</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in lg:block hidden" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] transition-all duration-1000 border border-border/20">
              <img 
                src={heroImage} 
                alt="AI Recruiter Dashboard showing candidate analysis and interview interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
