import { Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Footer logo - same as header logo */}
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Harshit Dadheech Logo" 
              className="h-6 w-auto dark:invert-0 invert" 
            />
            <span className="text-muted-foreground text-sm">
              © {currentYear} Harshit Dadheech
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/harshitdadheech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/harshitdadheech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:harshitdadheech@email.com"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
