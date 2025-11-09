import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Lumina Health Institute",
      role: "Software Engineering Intern – Firebase + UI/UX Team",
      location: "Los Angeles, CA",
      period: "June 2025 - August 2025",
      description: [
        "Added new features to the patient-facing web platform, improving usability and navigation for health record access",
        "Implemented Firebase-based authentication and integrated database features for real-time updates",
        "Collaborated with designers and engineers to enhance UI/UX flows, ensuring accessibility and mobile responsiveness",
        "Contributed to a diabetes-focused personalized AI assistance tool, providing patients with easier access to doctor appointments and medical history"
      ]
    },
    {
      company: "Galaxy Office Automation Pvt Ltd",
      role: "Technical Intern",
      location: "Mumbai, India",
      period: "June 2023 - August 2023",
      description: [
        "Developed REST APIs with PHP and MySQL, running in a Linux VM for internal tools",
        "Implemented JWT authentication and tested endpoints using Postman",
        "Independently researched and implemented security features to improve internal API access controls",
        "Collaborated with database administrators to test and optimize PostgreSQL queries for performance"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="experience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="p-8 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.company}</h3>
                  <div className="flex items-center gap-2 text-foreground/80 mb-2">
                    <Briefcase className="h-4 w-4" />
                    <p className="font-semibold">{exp.role}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:text-right">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(291,100%,24%)] to-[hsl(317,100%,24%)] mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
