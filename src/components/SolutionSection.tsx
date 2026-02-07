import { Lightbulb, Target, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const points = [
  {
    icon: Lightbulb,
    title: "Smart Matching Engine",
    desc: "Our AI engine connects the right people to the right problems using contextual analysis and skill mapping.",
  },
  {
    icon: Target,
    title: "Unified Workspace",
    desc: "A single platform that combines ideation, collaboration, project management, and deployment seamlessly.",
  },
  {
    icon: Sparkles,
    title: "What Makes Us Unique",
    desc: "Real-time AI suggestions, gamified engagement, and an open ecosystem that scales from hackathons to enterprises.",
  },
];

const SolutionSection = () => (
  <section id="solution" className="section-padding relative">
    {/* Subtle background accent */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] -translate-y-1/2" />
    </div>
    <div className="container mx-auto relative z-10">
      <SectionHeading
        badge="Our Solution"
        title="How We Solve It"
        description="A purpose-built platform that turns fragmented collaboration into a unified experience."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="gradient-border p-6 md:p-8 h-full group hover:glow transition-shadow">
              <p.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
