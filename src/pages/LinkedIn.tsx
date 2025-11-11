import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle, Brain, Users, TrendingUp, Linkedin } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroNetworkImage from "@/assets/linkedin-hero-network.png";

const LinkedIn = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Hero Network Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={heroNetworkImage} 
            alt="AI Network Visualization" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary mb-6 transition-all border border-primary/30">
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">Welcome from LinkedIn</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
              <span className="text-accent">Hire with</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">Empathy & Intelligence</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl font-semibold text-accent mb-6 leading-tight">
              Find Perfect Fit. Every Time.
            </p>
            
            <p className="text-lg text-muted-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed">
              Morita understands what others miss. Combining emotional intelligence with 
              data precision to match candidates who truly fit—not just on paper.
            </p>
            
            <p className="text-sm text-muted-foreground/70 mb-8 italic">
              "Technology with intuition. Recruiting with empathy."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl" 
                className="group w-full sm:w-auto"
                onClick={() => setDialogOpen(true)}
              >
                Request Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <span className="text-xs text-muted-foreground">Join forward-thinking HR teams</span>
            </div>

            <ContactFormDialog 
              open={dialogOpen} 
              onOpenChange={setDialogOpen}
            />
          </div>
        </div>
      </section>

      {/* What Makes Morita Different */}
      <section className="py-20 relative overflow-hidden berry-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Beyond Traditional{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">ATS Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Morita doesn't just screen—she understands. Every interview reveals insights 
              that résumés can't capture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.3)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_hsl(var(--primary)_/_0.4)] group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Emotional Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Analyzes tone, confidence, and communication style—not just keywords.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 hover:shadow-[0_0_40px_hsl(var(--secondary)_/_0.3)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 border border-secondary/30 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Cultural Fit</h3>
              <p className="text-sm text-muted-foreground">
                Goes beyond skills to identify alignment with your company values and team dynamics.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_hsl(var(--accent)_/_0.3)] transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 border border-accent/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-accent">Predictive Insights</h3>
              <p className="text-sm text-muted-foreground">
                Predicts long-term success and growth potential, not just current qualifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-slow opacity-40" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float opacity-30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
              Simple for HR.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Powerful for Teams.</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold border border-primary/30 group-hover:bg-primary/30 transition-all">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Upload Job Requirements</h3>
                  <p className="text-muted-foreground">Define the role, required skills, and cultural values that matter to your team.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold border border-primary/30 group-hover:bg-primary/30 transition-all">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Candidates Interview with Morita</h3>
                  <p className="text-muted-foreground">Our AI conducts personalized video interviews 24/7, adapting questions in real-time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold border border-primary/30 group-hover:bg-primary/30 transition-all">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Receive Ranked Insights</h3>
                  <p className="text-muted-foreground">Get detailed candidate profiles with compatibility scores, personality insights, and interview summaries.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 text-accent font-bold border border-accent/30 group-hover:bg-accent/30 transition-all">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Hire with Confidence</h3>
                  <p className="text-muted-foreground">Make data-informed decisions backed by emotional intelligence and predictive analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-dark">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Join the Revolution</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight text-accent">
            Let's build the future of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">hiring — today</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request early access and be among the first to experience recruiting with empathy and intelligence.
          </p>

          <Button 
            variant="hero" 
            size="xl" 
            className="group"
            onClick={() => setDialogOpen(true)}
          >
            Request Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinkedIn;
