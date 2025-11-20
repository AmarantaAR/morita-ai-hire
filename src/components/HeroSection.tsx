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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Background image with aquatic overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Translucent aquatic veils with movement */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5F7]/95 via-[#F0F4FF]/90 to-[#F5F0FF]/95 dark:from-background/95 dark:via-background/90 dark:to-background/95" />
        
        {/* Animated water overlay effects */}
        <div className="absolute inset-0 animate-wave-slow opacity-40" 
          style={{
            background: 'radial-gradient(ellipse 150% 100% at 50% 50%, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div className="absolute inset-0 animate-wave-medium opacity-30" 
          style={{
            background: 'radial-gradient(circle 120% at 30% 40%, hsl(var(--accent) / 0.35) 0%, transparent 60%)',
            filter: 'blur(80px)',
            animationDelay: '2s'
          }}
        />
        <div className="absolute inset-0 animate-wave-fast opacity-25" 
          style={{
            background: 'radial-gradient(ellipse 100% 140% at 70% 60%, hsl(270 85% 75% / 0.25) 0%, transparent 65%)',
            filter: 'blur(100px)',
            animationDelay: '4s'
          }}
        />
        
        {/* Floating glass orbs */}
        <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/15 to-accent/10 backdrop-blur-3xl opacity-50 animate-float-slow border border-white/20" />
        <div className="absolute bottom-20 left-20 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-accent/15 to-primary/10 backdrop-blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-[150px] h-[150px] rounded-full bg-gradient-to-br from-secondary/15 to-accent/10 backdrop-blur-3xl opacity-30 animate-float-slow" style={{ animationDelay: "1s" }} />
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
                className="group px-10 py-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => setDialogOpen(true)}
              >
                Start Hiring Faster
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

          {/* Right side - empty space for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};
