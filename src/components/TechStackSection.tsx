import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI"],
  },
  {
    title: "Database & Storage",
    items: ["PostgreSQL", "Redis", "AWS S3"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "OpenAI API", "LangChain", "Hugging Face"],
  },
  {
    title: "DevOps & Deployment",
    items: ["Docker", "Vercel", "GitHub Actions", "AWS"],
  },
  {
    title: "APIs & Tools",
    items: ["REST APIs", "WebSockets", "Stripe", "SendGrid"],
  },
];

const TechStackSection = () => (
  <section id="tech-stack" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading
        badge="Tech Stack"
        title="Powered By Modern Tech"
        description="A robust, scalable stack chosen for performance, reliability, and developer experience."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.08}>
            <div className="glass-card p-6 h-full">
              <h3 className="font-display text-lg font-semibold mb-4 gradient-text">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
