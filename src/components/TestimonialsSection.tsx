import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Morita-hr transformed our hiring process. We filled 20 positions in 3 weeks instead of 3 months. The AI insights were surprisingly accurate.",
      author: "Sarah Chen",
      role: "VP of Talent",
      company: "TechCorp Global",
    },
    {
      quote: "As a candidate, I loved the flexibility. The AI interviewer asked thoughtful questions and I felt truly evaluated on my skills, not just my resume.",
      author: "Marcus Williams",
      role: "Software Engineer",
      company: "Recently Hired",
    },
    {
      quote: "The ROI is undeniable. We've cut recruitment costs by 65% while improving candidate quality. This is the future of HR technology.",
      author: "Priya Sharma",
      role: "Chief People Officer",
      company: "StartupX",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Trusted by Forward-Thinking{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what early adopters are saying about their experience with Morita.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm p-10 rounded-2xl border border-primary/20 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] hover:-translate-y-2 transition-all animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-12 h-12 text-primary/30 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all" />
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-primary/20 pt-6">
                <div className="font-bold text-lg">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground mt-1">{testimonial.role}</div>
                <div className="text-sm text-primary font-semibold mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
