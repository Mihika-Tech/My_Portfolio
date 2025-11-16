import { Card } from "../components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: About text */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm currently pursuing my <span className="font-semibold text-primary">Master's in Computer Science at USC</span>, 
              building on my Bachelor's in Computer Engineering from K.J Somaiya College of Engineering, Mumbai.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              My passion lies in creating <span className="font-semibold text-primary">innovative full-stack applications</span> that 
              solve real-world problems. From real-time collaboration platforms to AI-powered personalized experiences, 
              I love bringing ideas to life through clean code and intuitive design.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              With hands-on experience in <span className="font-semibold text-primary">WebRTC, real-time systems, and modern web technologies</span>, 
              I specialize in building scalable applications that can handle 100+ concurrent users while maintaining 
              performance and user experience.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              When I'm not coding, you'll find me exploring new technologies, losing myself in fiction and fantasy novels, 
              or experimenting with new recipes. I believe in continuous learning and staying ahead 
              of the curve in this ever-evolving tech landscape.
            </p>
          </div>
          
          {/* Right: Value props */}
          <div className="space-y-6">
            <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[hsl(251,100%,24%)] to-[hsl(266,100%,24%)]">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Full Stack Expertise</h3>
                  <p className="text-foreground/70">
                    Proficient in React, Node.js, TypeScript, and modern web technologies. 
                    Building end-to-end solutions from database to deployment.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[hsl(291,100%,24%)] to-[hsl(317,100%,24%)]">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Game Development</h3>
                  <p className="text-foreground/70">
                    Building immersive 2D & 3D experiences in Unity using C#. Focused on designing intuitive mechanics, meaningful player feedback, and dynamic level design.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[hsl(317,100%,24%)] to-[hsl(326,100%,24%)]">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">AI Integration</h3>
                  <p className="text-foreground/70">
                    Leveraging AI APIs and machine learning to create intelligent, personalized user experiences. 
                    From NLP to clustering algorithms.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
