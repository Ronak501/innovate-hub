import { Rocket, Scale, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const scopes = [
  {
    icon: Rocket,
    title: "Planned Features",
    items: ["Voice & video collaboration", "AI mentorship matching", "Automated project reports", "Plugin marketplace"],
  },
  {
    icon: Scale,
    title: "Scalability",
    items: ["Microservices architecture", "Multi-region deployment", "Enterprise SSO integration", "White-label options"],
  },
  {
    icon: Heart,
    title: "Real-World Impact",
    items: ["NGO partnerships", "Education sector adoption", "Open-source community", "UN SDG alignment"],
  },
];

const FutureScopeSection = () => (
  <section id="future-scope" className="section-padding relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />
    </div>
    <div className="container mx-auto relative z-10">
      <SectionHeading
        badge="Future Scope"
        title="What's Next"
        description="Our roadmap for turning this hackathon project into a scalable solution."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {scopes.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="gradient-border p-6 md:p-8 h-full">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FutureScopeSection;
