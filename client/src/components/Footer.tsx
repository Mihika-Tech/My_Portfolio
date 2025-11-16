import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground/70">
              Built with <Heart className="inline h-4 w-4 text-primary fill-primary" /> by Mihika Dakappagari
            </p>
            <p className="text-sm text-foreground/50 mt-1">
              © 2025 All rights reserved
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Mihika-Tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mihika-dakappagari-150a92215/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mihikashrinivas@gmail.com"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-foreground/70 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
