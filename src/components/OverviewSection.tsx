import heroImage from "@/assets/hero-aquatic-ai.jpg";

export const OverviewSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">Why Morita-HR?</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15]">
            Designed to Make Hiring Seamless
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - rotating cards */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-background/40 rounded-3xl p-8 border border-white/30 dark:border-border/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-foreground">Understand Talent Deeply</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Morita's AI goes beyond surface-level screening. It analyzes communication patterns, problem-solving ability, and cultural fit—all in real-time.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">Video Analysis</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">NLP Scoring</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">Personality Insights</span>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/40 dark:bg-background/40 rounded-3xl p-8 border border-white/30 dark:border-border/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold mb-3 text-foreground">Hire Globally Without Friction</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Interview candidates in 40+ languages, across any timezone. Morita never sleeps, so you can scale globally without hiring more recruiters.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent">24/7 Availability</span>
                <span className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent">Multi-language</span>
                <span className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent">No Time Zones</span>
              </div>
            </div>
          </div>

          {/* Right side - image card */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-background/30 border border-white/40 dark:border-border/20 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Streamline your screening process" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
