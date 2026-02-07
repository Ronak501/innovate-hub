import { Play, ExternalLink, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const DemoSection = () => (
  <section id="demo" className="section-padding relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[160px]" />
    </div>
    <div className="container mx-auto relative z-10">
      <SectionHeading
        badge="Live Demo"
        title="See It in Action"
        description="Watch the walkthrough or try it yourself with the live demo link."
      />

      {/* Video embed placeholder */}
      <AnimatedSection>
        <div className="max-w-4xl mx-auto glass-card overflow-hidden glow mb-10">
          <div className="aspect-video flex items-center justify-center bg-secondary/30 relative group cursor-pointer">
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-primary-foreground ml-1" />
            </div>
            <p className="absolute bottom-4 text-sm text-muted-foreground">Click to play demo video</p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.2} className="text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={18} /> Try Live Demo
          </a>
          <a
            href="#"
            className="glass-card px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-secondary transition-colors"
          >
            <Monitor size={18} /> View Screenshots
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Demo credentials: test@example.com / password123
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default DemoSection;
