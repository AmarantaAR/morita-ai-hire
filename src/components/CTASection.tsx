import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const CTASection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden berry-texture">
      <div className="absolute inset-0 bg-gradient-card opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-warm/10 border border-accent-warm/20 backdrop-blur-sm mb-6">
              <Rocket className="w-4 h-4 text-accent-warm" />
              <span className="text-sm font-medium text-accent-warm">Join the Revolution</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05] tracking-tight">
              Ready to Transform Your Hiring —{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Today</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 opacity-30" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M0,7 Q75,2 150,6 T300,7" fill="none" stroke="hsl(var(--accent-warm))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-lg text-foreground/60 mb-10 max-w-xl mx-auto leading-relaxed font-sans">
              Join thoughtful companies that are revolutionizing their recruitment process with AI-powered intelligence and human empathy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="group shadow-[var(--shadow-warm)] bg-gradient-hero hover:shadow-[0_0_80px_hsl(var(--accent-warm)_/_0.5)] text-white font-semibold px-8 py-6 text-base rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => setDialogOpen(true)}
              >
                Let's Start Building Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration - wave shape */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5">
        <svg className="w-full h-full" viewBox="0 0 1200 4" preserveAspectRatio="none">
          <path d="M0,2 Q300,0 600,2 T1200,2" fill="none" stroke="url(#footerGradient)" strokeWidth="3"/>
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent-warm))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
