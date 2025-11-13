import { Mail, Linkedin } from "lucide-react";
import berryLogo from "@/assets/morita-berry-logo.png";
import { useState } from "react";
import { ContactFormDialog } from "./ContactFormDialog";

export const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-1 mb-3 justify-center md:justify-start">
              <span className="text-xl font-clash font-bold lowercase tracking-wide text-foreground">
                mor
                <span className="relative inline-block">
                  i
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--accent))]" />
                </span>
                ta
              </span>
              <span className="text-base font-sans text-muted-foreground ml-0.5">.hr</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered recruiting. Smarter, faster, fairer.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center hover:bg-muted transition-all duration-300 cursor-pointer"
              aria-label="Contact us via email"
            >
              <Mail className="w-4 h-4 text-foreground" />
            </button>
            <a
              href="https://www.linkedin.com/company/morita-hr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center hover:bg-muted transition-all duration-300"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="w-4 h-4 text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Morita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};
