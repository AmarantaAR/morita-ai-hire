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
    <section className="py-40 bg-muted/20 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Trusted by Forward-Thinking{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what early adopters are saying about their experience with Morita.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/60 backdrop-blur-md p-12 rounded-3xl border border-primary/10 hover:border-primary/30 hover:bg-card/70 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 transition-all duration-700 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-14 h-14 text-primary/20 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700" />
              <p className="text-muted-foreground/80 mb-10 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-primary/10 pt-8">
                <div className="font-bold text-lg">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground/70 mt-2">{testimonial.role}</div>
                <div className="text-sm text-primary/80 font-semibold mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
