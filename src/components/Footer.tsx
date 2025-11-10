import { Linkedin, Twitter, Mail } from "lucide-react";
import berryLogo from "@/assets/morita-berry-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4 group cursor-pointer">
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
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Revolutionizing human resources with AI-powered intelligent recruiting. 
              The future of hiring is here.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-card-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-card-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Morita. All rights reserved.</p>
            <div className="flex items-center gap-6">
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
  );
};
