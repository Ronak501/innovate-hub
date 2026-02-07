import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import DemoSection from "@/components/DemoSection";
import TeamSection from "@/components/TeamSection";
import HackathonDetails from "@/components/HackathonDetails";
import FutureScopeSection from "@/components/FutureScopeSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ArchitectureSection />
      <TechStackSection />
      <DemoSection />
      <TeamSection />
      <HackathonDetails />
      <FutureScopeSection />
    </main>
    <Footer />
  </div>
);

export default Index;
