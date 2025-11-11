import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import berrLogo from "@/assets/morita-berry-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border animate-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-2xl font-clash font-bold lowercase tracking-wide text-foreground group-hover:text-primary transition-colors">
              mor
              <span className="relative inline-block">
                i
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--accent))]" />
              </span>
              ta
            </span>
            <span className="text-lg font-sans text-muted-foreground ml-0.5">.hr</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#solution" className="text-sm font-medium hover:text-primary transition-colors">
              Solution
            </a>
            <a href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="default" size="sm" onClick={() => setDialogOpen(true)}>
              Request Early Access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="/#solution" className="text-sm font-medium hover:text-primary transition-colors">
                Solution
              </a>
              <a href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="default" size="sm" onClick={() => setDialogOpen(true)}>
                  Request Early Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <ContactFormDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen}
      />
    </nav>
  );
};
