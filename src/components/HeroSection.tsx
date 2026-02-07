import { motion } from "framer-motion";
import { ExternalLink, Github, Presentation } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block glass-card px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary mb-6">
          🚀 March 6–7 Hackathon
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
      >
        <span className="gradient-text">HackProject</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
      >
        Revolutionizing the way communities connect and collaborate.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto mb-10"
      >
        An AI-powered platform that bridges the gap between problem-solvers and
        real-world challenges, making innovation accessible to everyone.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="#demo"
          className="gradient-bg text-primary-foreground font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity glow"
        >
          <ExternalLink size={18} /> Live Demo
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-secondary transition-colors"
        >
          <Github size={18} /> GitHub Repo
        </a>
        <a
          href="#"
          className="glass-card px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-secondary transition-colors"
        >
          <Presentation size={18} /> Pitch Deck
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
