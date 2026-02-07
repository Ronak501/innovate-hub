import { AlertTriangle, Users, ShieldOff, TrendingDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fragmented Communication",
    desc: "Communities and organizations struggle with scattered tools, making collaboration inefficient and siloed.",
  },
  {
    icon: Users,
    title: "Limited Accessibility",
    desc: "Millions of potential contributors are excluded due to lack of platform access, language barriers, and complexity.",
  },
  {
    icon: ShieldOff,
    title: "No Unified Platform",
    desc: "Existing solutions address only parts of the problem, leaving gaps in the overall workflow.",
  },
  {
    icon: TrendingDown,
    title: "Declining Engagement",
    desc: "Without smart matching and incentives, user engagement drops rapidly after initial onboarding.",
  },
];

const ProblemSection = () => (
  <section id="problem" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        badge="The Problem"
        title="Why This Matters"
        description="Real-world collaboration is broken. Here's what we're up against."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="glass-card p-6 md:p-8 hover:border-primary/40 transition-colors group h-full">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:glow transition-shadow">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
