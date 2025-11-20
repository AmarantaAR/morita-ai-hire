export const ProblemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/5">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-accent/10 to-primary/5 backdrop-blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute bottom-20 left-1/4 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20">
            <p className="text-xs font-semibold tracking-wide text-destructive uppercase">The Problem</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15] tracking-tight">
            Your Hiring Process is Bleeding Money
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 font-light leading-relaxed">
            Every day without the right hire costs you revenue, productivity, and momentum. 
            Traditional recruiting is too slow for today's pace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in group backdrop-blur-sm bg-white/30 dark:bg-background/30 rounded-3xl p-8 border border-white/20 dark:border-border/10" style={{ animationDelay: "0.1s" }}>
            <div className="text-6xl font-bold text-destructive/80 mb-4 group-hover:text-destructive transition-all duration-500">6 weeks</div>
            <div className="text-base text-foreground/70 font-medium">Average time to hire</div>
            <div className="text-sm text-muted-foreground/60 mt-2">Missing revenue daily</div>
          </div>
          <div className="text-center animate-fade-in group backdrop-blur-sm bg-white/30 dark:bg-background/30 rounded-3xl p-8 border border-white/20 dark:border-border/10" style={{ animationDelay: "0.2s" }}>
            <div className="text-6xl font-bold text-destructive/80 mb-4 group-hover:text-destructive transition-all duration-500">$75K</div>
            <div className="text-base text-foreground/70 font-medium">Cost of a bad hire</div>
            <div className="text-sm text-muted-foreground/60 mt-2">Salary + lost productivity</div>
          </div>
          <div className="text-center animate-fade-in group backdrop-blur-sm bg-white/30 dark:bg-background/30 rounded-3xl p-8 border border-white/20 dark:border-border/10" style={{ animationDelay: "0.3s" }}>
            <div className="text-6xl font-bold text-destructive/80 mb-4 group-hover:text-destructive transition-all duration-500">73%</div>
            <div className="text-base text-foreground/70 font-medium">Candidates ghosted</div>
            <div className="text-sm text-muted-foreground/60 mt-2">Before first interview</div>
          </div>
        </div>
      </div>
    </section>
  );
};
