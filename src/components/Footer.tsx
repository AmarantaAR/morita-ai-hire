import { Mail, Linkedin } from "lucide-react";
import berryLogo from "@/assets/morita-berry-logo.png";
import { useState } from "react";
import { ContactFormDialog } from "./ContactFormDialog";

export const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    <footer className="bg-gradient-dark text-primary-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-3 group cursor-pointer">
              <span className="text-xl font-clash font-bold lowercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                mor
                <span className="relative inline-block">
                  i
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--accent))]" />
                </span>
                ta
              </span>
              <span className="text-base font-sans text-muted-foreground ml-0.5">.hr</span>
            </div>
            <p className="text-muted-foreground mb-5 max-w-sm text-sm">
              Revolutionizing human resources with AI-powered intelligent recruiting.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20 cursor-pointer"
                aria-label="Contact us via email"
              >
                <Mail className="w-4 h-4 text-primary" />
              </button>
              <a
                href="https://www.linkedin.com/company/morita-hr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20 cursor-pointer"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-3 text-card-foreground text-sm">About</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3 text-card-foreground text-sm">Product</h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#solution" className="text-muted-foreground hover:text-primary transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2025 Morita. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
