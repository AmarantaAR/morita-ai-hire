import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const CTASection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
              Ready to hire smarter?
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 font-light">
              Join companies transforming their hiring with AI.
            </p>
            
            <Button 
              size="lg"
              className="group px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl transition-all duration-500"
              onClick={() => setDialogOpen(true)}
            >
              Start Hiring
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
