import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Aurora effect background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5F7] via-[#F0F4FF] to-[#F5F0FF] dark:from-[#0a0a0f] dark:via-[#0f0a15] dark:to-[#150a1f]" />
        
        {/* Aurora layers */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 opacity-30 dark:opacity-20 blur-[120px] animate-aurora-1"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-25 dark:opacity-15 blur-[130px] animate-aurora-2"
            style={{
              background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] opacity-20 dark:opacity-10 blur-[140px] animate-aurora-3"
            style={{
              background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 dark:opacity-10 blur-[150px] animate-aurora-4"
            style={{
              background: 'radial-gradient(ellipse, hsl(270 85% 75%) 0%, transparent 70%)',
            }}
          />
        </div>
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="animate-fade-in">
            {/* Eyebrow */}
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <p className="text-xs font-semibold tracking-wide text-primary uppercase">AI-Powered Hiring Built for High-Volume Teams</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              Slash Your Hiring Time by 90%
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">While Improving Quality</span>
            </h1>
            
            <p className="text-base sm:text-lg text-foreground/70 mb-8 leading-relaxed">
              Morita's AI interviews, analyzes, and ranks candidates automatically—24/7. 
              Fill positions in days, not months.
            </p>
            
            <div className="mb-10">
              <Button 
                size="lg"
                className="group px-14 py-8 text-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                onClick={() => setDialogOpen(true)}
              >
                Start Hiring Faster
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
            
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              <div ref={costReduction.ref} className="backdrop-blur-xl bg-white/50 dark:bg-background/50 rounded-2xl p-4 border border-white/40 dark:border-border/30">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{costReduction.count}</div>
                <div className="text-xs text-foreground/70 font-medium">Lower Costs</div>
              </div>
              <div ref={fasterHiring.ref} className="backdrop-blur-xl bg-white/50 dark:bg-background/50 rounded-2xl p-4 border border-white/40 dark:border-border/30">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{fasterHiring.count}</div>
                <div className="text-xs text-foreground/70 font-medium">Faster</div>
              </div>
              <div ref={lessBias.ref} className="backdrop-blur-xl bg-white/50 dark:bg-background/50 rounded-2xl p-4 border border-white/40 dark:border-border/30">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{lessBias.count}</div>
                <div className="text-xs text-foreground/70 font-medium">Less Bias</div>
              </div>
            </div>
          </div>

          {/* Right card with glass effect */}
          <div className="relative animate-fade-in lg:block hidden" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/40 dark:bg-background/40 border border-white/50 dark:border-border/30 shadow-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">AI Interview Active</div>
                    <div className="text-xs text-muted-foreground">Analyzing candidate response...</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-background/60">
                      <div className="text-xs text-muted-foreground mb-1">Communication</div>
                      <div className="text-lg font-bold text-primary">94%</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-background/60">
                      <div className="text-xs text-muted-foreground mb-1">Technical Fit</div>
                      <div className="text-lg font-bold text-accent">88%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating mini orbs around card */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 backdrop-blur-xl border border-white/30 animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 backdrop-blur-xl border border-white/30 animate-float-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};
