import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Check, User, Mail, Briefcase, Building2, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// ✅ Put your Make webhook URL here (or use an env var)
const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/fcqp3dwqsn6kvx2zpx1w8gauiy4t6p8k";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  role: z.string().trim().max(100, "Role must be less than 100 characters").optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateStep = (stepNumber: number): boolean => {
    setErrors({});
    if (stepNumber === 1) {
      try {
        contactSchema.pick({ name: true, email: true }).parse({
          name: formData.name,
          email: formData.email,
        });
        return true;
      } catch (error) {
        if (error instanceof z.ZodError) {
          const newErrors: Record<string, string> = {};
          error.errors.forEach((err) => {
            if (err.path[0]) newErrors[err.path[0] as string] = err.message;
          });
          setErrors(newErrors);
          toast({ title: "Validation Error", description: "Please check the form fields", variant: "destructive" });
        }
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    try {
      // 1) Validate all fields
      contactSchema.parse(formData);

      // 2) Prepare payload
      const payload = {
        ...formData,
        source: "morita-hr:web",
        submittedAt: new Date().toISOString(),
        idempotencyKey: crypto?.randomUUID?.() ?? `${formData.email}-${Date.now()}`,
        // optional: page context
        page: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      };

      // 3) Send to Make webhook
      setIsSubmitting(true);
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Webhook error: ${res.status}`);
      }

      // 4) Success UI
      toast({
        title: "Success!",
        description: "We'll be in touch soon. Thank you for your interest!",
      });
      onOpenChange(false);

      // 5) Reset form
      setTimeout(() => {
        setStep(1);
        setFormData({ name: "", email: "", company: "", role: "", message: "" });
        setErrors({});
      }, 300);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) newErrors[err.path[0] as string] = err.message;
        });
        setErrors(newErrors);
        toast({ title: "Validation Error", description: "Please check all required fields", variant: "destructive" });
      } else {
        console.error(error);
        toast({
          title: "Something went wrong",
          description: "We couldn't submit your request. Please try again in a moment.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] backdrop-blur-2xl bg-gradient-to-br from-white/90 via-white/80 to-white/90 dark:from-background/95 dark:via-background/90 dark:to-background/95 border border-white/60 dark:border-primary/30 shadow-2xl">
        <DialogHeader className="space-y-4 pb-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mx-auto">
            {step === 1 && <User className="w-8 h-8 text-white" />}
            {step === 2 && <Briefcase className="w-8 h-8 text-white" />}
            {step === 3 && <MessageSquare className="w-8 h-8 text-white" />}
          </div>
          <DialogTitle className="text-3xl font-bold text-center">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">
              {step === 1 && "Let's Get Started"}
              {step === 2 && "Tell Us About You"}
              {step === 3 && "Almost Done!"}
            </span>
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            {step === 1 && "We're excited to connect with you"}
            {step === 2 && "Help us understand your needs better"}
            {step === 3 && "Share any additional thoughts with us"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* Progress indicator */}
          <div className="flex gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative h-2 flex-1 rounded-full transition-all duration-500 overflow-hidden ${
                  i < step ? "bg-gradient-to-r from-primary to-accent" : 
                  i === step ? "bg-gradient-to-r from-primary/70 to-accent/70" : 
                  "bg-border/50"
                }`}
              >
                {i === step && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      handleChange("name", e.target.value);
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`h-12 pl-4 backdrop-blur-sm bg-white/50 dark:bg-background/50 border-2 transition-all duration-300 rounded-xl ${
                      errors.name 
                        ? "border-destructive focus:border-destructive" 
                        : "border-border/50 focus:border-primary hover:border-primary/50"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
                    <span className="inline-block w-1 h-1 rounded-full bg-destructive" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address *
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      handleChange("email", e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`h-12 pl-4 backdrop-blur-sm bg-white/50 dark:bg-background/50 border-2 transition-all duration-300 rounded-xl ${
                      errors.email 
                        ? "border-destructive focus:border-destructive" 
                        : "border-border/50 focus:border-primary hover:border-primary/50"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in">
                    <span className="inline-block w-1 h-1 rounded-full bg-destructive" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <Label htmlFor="company" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Your Company Inc."
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="h-12 pl-4 backdrop-blur-sm bg-white/50 dark:bg-background/50 border-2 border-border/50 focus:border-primary hover:border-primary/50 transition-all duration-300 rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="role" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Your Role
                </Label>
                <Input
                  id="role"
                  placeholder="HR Manager, CEO, Recruiter..."
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="h-12 pl-4 backdrop-blur-sm bg-white/50 dark:bg-background/50 border-2 border-border/50 focus:border-primary hover:border-primary/50 transition-all duration-300 rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-semibold text-foreground/90 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Additional Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your hiring needs, team size, or any specific questions..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="pl-4 pt-3 backdrop-blur-sm bg-white/50 dark:bg-background/50 border-2 border-border/50 focus:border-primary hover:border-primary/50 transition-all duration-300 rounded-xl resize-none"
                />
                <p className="text-xs text-muted-foreground">This helps us personalize our response to your needs</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 pt-2">
            {step > 1 && (
              <Button 
                variant="outline" 
                onClick={handleBack} 
                className="flex-1 h-12 rounded-xl border-2 hover:bg-muted/50 transition-all duration-300" 
                disabled={isSubmitting}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button 
                onClick={handleNext} 
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300" 
                disabled={isSubmitting}
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
                    <Check className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
