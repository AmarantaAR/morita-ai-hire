import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const CTASection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/15 to-accent/10 backdrop-blur-3xl opacity-50 animate-pulse-glow" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-accent/15 to-secondary/10 backdrop-blur-3xl opacity-40 animate-float-slow" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20">
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">Limited Beta Access</p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15] tracking-tight">
              Start Hiring 10x Faster
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">This Week</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground/80 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Join 200+ companies already using Morita to slash hiring time and costs. 
              Limited spots available in our early access program.
            </p>
            
            <Button 
              size="lg"
              className="group px-12 py-7 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              onClick={() => setDialogOpen(true)}
            >
              Claim Your Spot Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <p className="text-sm text-muted-foreground/60 mt-6">
              ✓ No credit card required  •  ✓ Setup in 5 minutes  •  ✓ Cancel anytime
            </p>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
