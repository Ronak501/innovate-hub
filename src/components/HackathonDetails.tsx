import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const details = [
  { icon: Trophy, label: "Hackathon", value: "InnoHacks 2025" },
  { icon: Calendar, label: "Date", value: "March 6–7, 2025" },
  { icon: MapPin, label: "Mode", value: "Hybrid (Online + Offline)" },
  { icon: Users, label: "Theme", value: "AI for Social Good" },
];

const HackathonDetails = () => (
  <section id="hackathon" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        badge="Event Info"
        title="Hackathon Details"
        description="Everything you need to know about the event."
      />
      <AnimatedSection>
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {d.label}
                  </p>
                  <p className="font-display font-semibold">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HackathonDetails;
