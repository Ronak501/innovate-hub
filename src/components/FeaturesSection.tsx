import { Brain, Zap, Globe, Shield, BarChart3, MessageSquare } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const features = [
  { icon: Brain, title: "AI-Powered Insights", desc: "Machine learning models analyze trends and suggest optimal collaboration paths." },
  { icon: Zap, title: "Real-Time Collaboration", desc: "Live editing, instant feedback, and seamless team communication built-in." },
  { icon: Globe, title: "Global Accessibility", desc: "Multi-language support and low-bandwidth mode for worldwide reach." },
  { icon: Shield, title: "Secure & Private", desc: "End-to-end encryption and role-based access keep your data safe." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track engagement, contributions, and project health with rich visualizations." },
  { icon: MessageSquare, title: "Smart Notifications", desc: "Context-aware alerts that keep you informed without overwhelming." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        badge="Key Features"
        title="Built for Impact"
        description="Every feature is designed to maximize collaboration efficiency and innovation."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.08}>
            <div className="glass-card p-6 h-full group hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
