import { Button } from "../components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-purple to-murrey animate-gradient-shift bg-300%"></div>

      {/* Animated orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-persian-indigo rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-byzantium rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-lg md:text-xl font-medium mb-4 text-white/90">Hi, I'm</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white font-['Space_Grotesk']">
            Mihika Dakappagari
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 text-white/95 font-['Space_Grotesk'] tracking-wide">
            AI &amp; Full Stack Engineer · MS CS @ USC '26 · Building systems that think and scale
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center mb-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              asChild
            >
              <a href="https://github.com/Mihika-Tech" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/mihika-dakappagari-150a92215/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:mihikadakappagari@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 transition-all hover:scale-105 shadow-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 transition-all hover:scale-105"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                ↓ Resume
              </a>
            </Button> */}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
