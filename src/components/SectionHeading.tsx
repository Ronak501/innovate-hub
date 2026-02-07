import AnimatedSection from "./AnimatedSection";

interface Props {
  badge: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ badge, title, description }: Props) => (
  <AnimatedSection className="text-center mb-12 md:mb-16">
    <span className="inline-block gradient-bg text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
      {badge}
    </span>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
        {description}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
