import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InvestorSection } from "@/components/InvestorSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="investors">
          <InvestorSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
