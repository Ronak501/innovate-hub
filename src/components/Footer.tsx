import { Github, Mail, Zap } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border/50 py-12 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Zap className="h-5 w-5 text-primary" />
          <span className="gradient-text">HackProject</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:team@hackproject.dev" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Mail size={16} /> team@hackproject.dev
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2025 HackProject. All rights reserved.</p>
        <span className="inline-flex items-center gap-1.5 gradient-bg text-primary-foreground px-3 py-1 rounded-full font-semibold text-xs">
          🏆 Built during InnoHacks 2025
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
