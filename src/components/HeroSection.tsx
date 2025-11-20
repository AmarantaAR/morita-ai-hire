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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8F5F7] via-[#F0F4FF] to-[#F5F0FF] dark:from-background dark:via-background dark:to-background">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glass sphere top right */}
        <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-3xl opacity-60 animate-float-slow border border-white/20" />
        
        {/* Medium glass sphere bottom left */}
        <div className="absolute bottom-20 left-20 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-accent/15 to-primary/10 backdrop-blur-3xl opacity-50 animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Small glass sphere middle */}
        <div className="absolute top-1/2 right-1/3 w-[150px] h-[150px] rounded-full bg-gradient-to-br from-secondary/20 to-accent/15 backdrop-blur-3xl opacity-40 animate-float-slow" style={{ animationDelay: "1s" }} />
        
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero content */}
          <div className="animate-fade-in">
            {/* Eyebrow */}
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">FOR HR LEADERS WHO NEED TO SCALE FAST</p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Slash Your Hiring Time by 90%
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">While Improving Quality</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Morita's AI interviews, analyzes, and ranks candidates automatically—24/7. 
              Fill positions in days, not months.
            </p>
            
            {/* Benefit bullets */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 text-sm sm:text-base">
              <div className="flex items-center gap-2 text-foreground/80">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>70% lower hiring costs</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>10x faster interviews</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Zero unconscious bias</span>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center mb-16">
              <Button 
                size="lg"
                className="group px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => setDialogOpen(true)}
              >
                Get Early Access Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div ref={costReduction.ref} className="text-center backdrop-blur-xl bg-white/40 dark:bg-background/40 rounded-3xl p-8 border border-white/30 dark:border-border/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{costReduction.count}</div>
                <div className="text-xs sm:text-sm text-foreground/70 font-medium">Cost Reduction</div>
              </div>
              <div ref={fasterHiring.ref} className="text-center backdrop-blur-xl bg-white/40 dark:bg-background/40 rounded-3xl p-8 border border-white/30 dark:border-border/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{fasterHiring.count}</div>
                <div className="text-xs sm:text-sm text-foreground/70 font-medium">Faster Hiring</div>
              </div>
              <div ref={lessBias.ref} className="text-center backdrop-blur-xl bg-white/40 dark:bg-background/40 rounded-3xl p-8 border border-white/30 dark:border-border/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{lessBias.count}</div>
                <div className="text-xs sm:text-sm text-foreground/70 font-medium">Less Bias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
