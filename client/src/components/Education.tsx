import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      school: "University of Southern California",
      subtitle: "Viterbi School of Engineering",
      degree: "Master of Science in Computer Science",
      location: "Los Angeles, CA",
      period: "August 2024 - May 2026",
      courses: [
        "Analysis of Algorithms",
        "Web Technologies",
        "Advanced Natural Language Processing",
        "Database Systems",
        "Advanced Mobile Devices and Game Consoles"
      ],
      gradient: "from-[hsl(251,100%,24%)] to-[hsl(291,100%,24%)]"
    },
    {
      school: "K.J Somaiya College of Engineering",
      subtitle: "",
      degree: "Bachelor of Technology in Computer Engineering",
      location: "Mumbai, India",
      period: "July 2020 - May 2024",
      courses: [],
      gradient: "from-[hsl(291,100%,24%)] to-[hsl(326,100%,24%)]"
    }
  ];

  return (
    <section className="py-24 bg-background" id="education">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={edu.school}
              className="p-8 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${edu.gradient}`}></div>
              
              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{edu.school}</h3>
                    {edu.subtitle && (
                      <p className="text-lg text-foreground/70 mb-2">{edu.subtitle}</p>
                    )}
                    <div className="flex items-center gap-2 text-foreground/80">
                      <GraduationCap className="h-5 w-5" />
                      <p className="font-semibold">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 md:text-right">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                
                {edu.courses.length > 0 && (
                  <div className="mt-6">
                    <p className="font-semibold text-foreground/80 mb-3">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span 
                          key={course}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
