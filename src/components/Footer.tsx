import { Linkedin, Twitter, Mail } from "lucide-react";
import berryLogo from "@/assets/morita-berry-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-1 mb-3 group cursor-pointer justify-center md:justify-start">
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
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              Revolutionizing human resources with AI-powered intelligent recruiting.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="#"
              className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20"
            >
              <Linkedin className="w-4 h-4 text-primary" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20"
            >
              <Twitter className="w-4 h-4 text-primary" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:scale-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all border border-primary/20"
            >
              <Mail className="w-4 h-4 text-primary" />
            </a>
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
  );
};
