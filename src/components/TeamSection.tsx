import { Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Alex Chen",
    role: "Full-Stack Developer",
    skills: "React, Node.js, AWS",
    avatar: "AC",
  },
  {
    name: "Priya Sharma",
    role: "AI/ML Engineer",
    skills: "Python, TensorFlow, NLP",
    avatar: "PS",
  },
  {
    name: "Jordan Lee",
    role: "UI/UX Designer",
    skills: "Figma, Tailwind, Motion",
    avatar: "JL",
  },
  {
    name: "Sam Rivera",
    role: "Backend Engineer",
    skills: "FastAPI, PostgreSQL, Docker",
    avatar: "SR",
  },
];

const TeamSection = () => (
  <section id="team" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        badge="The Team"
        title="Meet the Builders"
        description="A passionate team of developers, designers, and innovators."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <AnimatedSection key={m.name} delay={i * 0.1}>
            <div className="glass-card p-6 text-center group hover:border-primary/40 transition-all hover:-translate-y-1 duration-300">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl text-primary-foreground">
                {m.avatar}
              </div>
              <h3 className="font-display text-lg font-semibold">{m.name}</h3>
              <p className="text-primary text-sm font-medium mb-1">{m.role}</p>
              <p className="text-muted-foreground text-xs mb-4">{m.skills}</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${m.name} LinkedIn`}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${m.name} GitHub`}
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
