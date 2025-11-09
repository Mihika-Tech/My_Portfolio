import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Swift", "C#"],
      gradient: "from-[hsl(251,100%,24%)] to-[hsl(266,100%,24%)]"
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML/CSS", "Bootstrap", "Tailwind CSS", "Responsive Design"],
      gradient: "from-[hsl(266,100%,24%)] to-[hsl(280,100%,24%)]"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "WebRTC", "Socket.io", "WebSocket"],
      gradient: "from-[hsl(280,100%,24%)] to-[hsl(291,100%,24%)]"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "MongoDB Atlas", "Firebase"],
      gradient: "from-[hsl(291,100%,24%)] to-[hsl(310,100%,24%)]"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git/GitHub", "Docker", "Postman", "VSCode", "XAMPP", "FFmpeg", "Unity"],
      gradient: "from-[hsl(310,100%,24%)] to-[hsl(317,100%,24%)]"
    },
    {
      title: "Specializations",
      skills: ["JWT Auth", "Real-time Systems", "Machine Learning", "NLP", "Algorithm Design"],
      gradient: "from-[hsl(317,100%,24%)] to-[hsl(326,100%,24%)]"
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} mb-4`}>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
