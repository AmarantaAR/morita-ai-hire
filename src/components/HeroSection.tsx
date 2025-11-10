import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-recruiter.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
        
        {/* Berry-inspired floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-bounce-slow" style={{ animationDelay: "0.7s" }} />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-accent/50 rounded-full animate-float" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-bounce-slow hover:animate-pulse-glow transition-all cursor-pointer">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span className="text-sm font-medium">The Future of HR is Here</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet the AI Recruiter That{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Never Sleeps</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Our AI conducts interviews, analyzes candidates, and finds the perfect match automatically. 
              Transform your hiring process with intelligent, personalized recruiting at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Request Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                For Investors
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">70%</div>
                <div className="text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary">5x</div>
                <div className="text-muted-foreground">Faster Hiring</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-muted-foreground">Less Bias</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 hover:scale-105">
              <img 
                src={heroImage} 
                alt="AI Recruiter Dashboard showing candidate analysis and interview interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating stats cards with animations */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-[var(--shadow-card)] border border-border animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: "0.3s" }}>
              <div className="text-sm text-muted-foreground">Active Interviews</div>
              <div className="text-2xl font-bold text-primary">1,247</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-[var(--shadow-card)] border border-border animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: "0.8s" }}>
              <div className="text-sm text-muted-foreground">Match Accuracy</div>
              <div className="text-2xl font-bold text-secondary">94.8%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
