export const ProblemSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            Traditional hiring is slow, expensive, and broken.
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed">
            Most companies waste 42 days and $4,000+ per hire. With bias, inconsistency, and missed talent along the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-6xl font-bold text-foreground mb-4">42</div>
            <div className="text-lg text-muted-foreground">Average days to hire</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-6xl font-bold text-foreground mb-4">$4,000</div>
            <div className="text-lg text-muted-foreground">Cost per hire</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-6xl font-bold text-foreground mb-4">68%</div>
            <div className="text-lg text-muted-foreground">Bad hire rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
