import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const CTASection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Ethereal background gradient with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-accent/3" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-float-slow" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">
              Ready to hire smarter?
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground/70 mb-16 font-light leading-relaxed">
              Join companies transforming their hiring with AI.
            </p>
            
            <Button 
              size="lg"
              className="group px-10 py-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm"
              onClick={() => setDialogOpen(true)}
            >
              Start Hiring
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>

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
