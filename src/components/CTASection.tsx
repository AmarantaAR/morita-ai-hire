import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const CTASection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"early-access" | "investor">("early-access");

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-5">
              <Rocket className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Join the Revolution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-[1.1] tracking-tight">
              Let's Build the Future of Hiring —{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Today</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're ready to transform your recruitment process or interested in investing in 
              the future of HR tech, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button 
                variant="hero" 
                size="lg" 
                className="group shadow-[0_0_60px_hsl(var(--primary)_/_0.4)]"
                onClick={() => {
                  setDialogType("early-access");
                  setDialogOpen(true);
                }}
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="shadow-[0_0_40px_hsl(var(--primary)_/_0.2)]"
                onClick={() => {
                  setDialogType("investor");
                  setDialogOpen(true);
                }}
              >
                I'm an Investor
              </Button>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
              defaultType={dialogType}
            />

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>GDPR Ready</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary" />
    </section>
  );
};
