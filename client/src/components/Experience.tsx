import { Card } from "../components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Lumina Health Institute",
      role: "Software Engineering Intern – Firebase + UI/UX Team",
      location: "Los Angeles, CA",
      period: "June 2025 – August 2025",
      description: [
        "Designed and shipped 4 core feature upgrades for a patient-facing health record platform, reducing navigation friction and cutting record-access support tickets by an estimated 30%",
        "Architected Firebase real-time database integration with role-based auth, enabling live health record sync for 200+ active patients with zero downtime during rollout",
        "Led WCAG 2.1 AA accessibility and mobile responsiveness audit across 12 UI flows in collaboration with designers, bringing the platform into compliance ahead of schedule",
        "Built core features for a diabetes-focused AI assistant — integrating appointment lookup and medical history access — adopted by 50+ patients in closed beta",
      ],
    },
    {
      company: "Galaxy Office Automation Pvt Ltd",
      role: "Technical Intern",
      location: "Mumbai, India",
      period: "June 2023 – August 2023",
      description: [
        "Built and deployed 6 REST API endpoints in PHP/MySQL on a Linux VM, automating internal workflows and saving approximately 4 hours/week of manual admin overhead",
        "Independently designed and shipped JWT authentication for all internal API routes from scratch — no prior auth system existed — delivered in under 2 weeks",
        "Identified and patched 3 SQL injection vulnerabilities during a self-initiated security audit, hardening the API layer against external threats",
        "Optimised 5 high-frequency PostgreSQL queries through indexing and restructuring, achieving a 25–40% reduction in average execution time",
      ],
    },
    {
      company: "KJ Somaiya College of Engineering",
      role: "Mobile Development Intern",
      location: "Mumbai, India",
      period: "February 2023 – April 2023",
      description: [
        "Designed and built a Flutter/Dart survey app from scratch to collect accessibility data across 15 Mumbai railway stations, used by 30+ field data collectors",
        "Implemented image capture, upload, and geo-tagged search, enabling real-time accessibility assessments from the field without internet dependency",
        "Conducted 12+ informal user interviews with commuters and station staff, translating feedback into 8 UX improvements that were shipped before final delivery",
      ],
    },
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
