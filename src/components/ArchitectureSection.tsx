import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const steps = [
  { num: "01", title: "User Input", desc: "Users submit problems, ideas, or project briefs through the intuitive interface." },
  { num: "02", title: "AI Processing", desc: "Our ML engine analyzes context, extracts key signals, and identifies matching criteria." },
  { num: "03", title: "Smart Matching", desc: "The platform connects users with the best-fit collaborators, mentors, or resources." },
  { num: "04", title: "Collaboration", desc: "Teams work together in real-time using integrated tools and communication channels." },
  { num: "05", title: "Delivery & Impact", desc: "Projects are tracked, measured, and showcased with built-in analytics." },
];

const ArchitectureSection = () => (
  <section id="architecture" className="section-padding relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
    </div>
    <div className="container mx-auto relative z-10">
      <SectionHeading
        badge="How It Works"
        title="System Workflow"
        description="A streamlined pipeline from problem submission to impactful delivery."
      />
      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.1}>
            <div className="flex items-start gap-4 md:gap-6 group">
              {/* Vertical connector */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center font-display font-bold text-primary-foreground text-sm shrink-0">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
