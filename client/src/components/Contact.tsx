import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[hsl(251,100%,24%)] via-[hsl(291,100%,24%)] to-[hsl(326,100%,24%)] relative overflow-hidden" id="contact">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[hsl(266,100%,24%)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(317,100%,24%)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-['Space_Grotesk']">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting conversations. 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-lg border-white/20 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-lg bg-white/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <a href="mailto:mihikashrinivas@gmail.com" className="text-lg font-semibold hover:underline">
                      mihikashrinivas@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-lg bg-white/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <a href="tel:+12135618952" className="text-lg font-semibold hover:underline">
                      +1 (213) 561-8952
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-lg bg-white/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Location</p>
                    <p className="text-lg font-semibold">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
                
                <Button 
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 justify-start"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/mihika-dakappagari-150a92215/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 justify-start"
                  asChild
                >
                  <a href="https://github.com/Mihika-Tech" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    GitHub Profile
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 justify-start"
                  asChild
                >
                  <a href="mailto:mihikashrinivas@gmail.com">
                    <Mail className="mr-3 h-5 w-5" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8 text-center text-white/80">
              <p className="text-sm">
                Available for full-time opportunities starting May 2026
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
