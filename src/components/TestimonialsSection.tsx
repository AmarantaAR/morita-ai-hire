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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by Forward-Thinking{" "}
            <span className="text-primary">Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what early adopters are saying about their experience with Morita-hr.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
