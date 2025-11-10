import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultType?: "early-access" | "investor";
}

export const ContactFormDialog = ({ open, onOpenChange, defaultType = "early-access" }: ContactFormDialogProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    type: defaultType,
    message: "",
  });
  const { toast } = useToast();

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      toast({
        title: "Required fields",
        description: "Please fill in your name and email",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Success!",
      description: "We'll be in touch soon. Thank you for your interest!",
    });
    onOpenChange(false);
    // Reset form
    setTimeout(() => {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        type: defaultType,
        message: "",
      });
    }, 300);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] backdrop-blur-xl bg-card/95 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {step === 1 && "Let's Get Started"}
            {step === 2 && "Tell Us About You"}
            {step === 3 && "What Brings You Here?"}
            {step === 4 && "Almost Done!"}
          </DialogTitle>
          <DialogDescription>
            {step === 1 && "We're excited to connect with you"}
            {step === 2 && "Help us understand your needs better"}
            {step === 3 && "Choose your interest"}
            {step === 4 && "Any additional information?"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Progress indicator */}
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all ${
                  i <= step ? "bg-gradient-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 2: Professional Info */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Your Company Inc."
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Your Role</Label>
                <Input
                  id="role"
                  placeholder="HR Manager, CEO, etc."
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 3: Interest Type */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleChange("type", "early-access")}
                  className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                    formData.type === "early-access"
                      ? "border-primary bg-primary/10 shadow-[0_0_30px_hsl(var(--primary)_/_0.3)]"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl">🚀</div>
                    <div className="font-semibold">Early Access</div>
                    <div className="text-xs text-muted-foreground">Transform your hiring</div>
                  </div>
                </button>
                <button
                  onClick={() => handleChange("type", "investor")}
                  className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                    formData.type === "investor"
                      ? "border-accent bg-accent/10 shadow-[0_0_30px_hsl(var(--accent)_/_0.3)]"
                      : "border-border bg-card hover:border-accent/50"
                  }`}
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl">💼</div>
                    <div className="font-semibold">Investor</div>
                    <div className="text-xs text-muted-foreground">Join the revolution</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Message */}
          {step === 4 && (
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your needs or interests..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            {step < 4 ? (
              <Button
                variant="hero"
                onClick={handleNext}
                className="flex-1"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                variant="hero"
                onClick={handleSubmit}
                className="flex-1"
              >
                Submit
                <Check className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
