export const ProblemSection = () => {
  return (
    <section className="py-40 relative overflow-hidden bg-muted/10">
      {/* Floating ethereal shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[130px] animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] bg-primary/5 rounded-full blur-[110px] animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">
            Traditional hiring is slow, expensive, and broken.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground/70 font-light leading-relaxed">
            Most companies waste 42 days and $4,000+ per hire. With bias, inconsistency, and missed talent along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in group" style={{ animationDelay: "0.1s" }}>
            <div className="text-7xl font-bold text-foreground/30 mb-6 group-hover:text-foreground/50 transition-all duration-700">42</div>
            <div className="text-lg text-muted-foreground/70">Average days to hire</div>
          </div>
          <div className="text-center animate-fade-in group" style={{ animationDelay: "0.2s" }}>
            <div className="text-7xl font-bold text-foreground/30 mb-6 group-hover:text-foreground/50 transition-all duration-700">$4,000</div>
            <div className="text-lg text-muted-foreground/70">Cost per hire</div>
          </div>
          <div className="text-center animate-fade-in group" style={{ animationDelay: "0.3s" }}>
            <div className="text-7xl font-bold text-foreground/30 mb-6 group-hover:text-foreground/50 transition-all duration-700">68%</div>
            <div className="text-lg text-muted-foreground/70">Bad hire rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
