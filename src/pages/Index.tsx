import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OverviewSection } from "@/components/OverviewSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <div id="solution">
          <SolutionSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <ProblemSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
