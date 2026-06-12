import { Card } from "../components/ui/card";
import {
  Tooltip, TooltipContent, TooltipTrigger,
} from "../components/ui/tooltip";

interface Skill {
  name: string;
  icon: string | null;
  tip: string;
  scrollTo?: string;
}

interface Category {
  title: string;
  gradient: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    title: "Languages",
    gradient: "from-[hsl(251,100%,24%)] to-[hsl(266,100%,24%)]",
    skills: [
      { name: "Python",     icon: "python",     tip: "Core language for Lumina & ML projects",        scrollTo: "projects" },
      { name: "TypeScript", icon: "typescript",  tip: "LiveCollab, A11y Lab & this portfolio",         scrollTo: "projects" },
      { name: "JavaScript", icon: "javascript",  tip: "NudgeCode Chrome extension",                   scrollTo: "projects" },
      { name: "C++",        icon: "cplusplus",   tip: "Algorithms coursework @ USC",                  scrollTo: "education" },
      { name: "C#",         icon: "csharp",      tip: "Unity games: Shrink Wars & BlindSpot",         scrollTo: "projects" },
      { name: "Dart",       icon: "dart",        tip: "Flutter survey app @ KJ Somaiya",              scrollTo: "experience" },
      { name: "PHP",        icon: "php",         tip: "REST APIs @ Galaxy Office Automation",         scrollTo: "experience" },
      { name: "SQL",        icon: "mysql",       tip: "Student Performance Analysis",                 scrollTo: "projects" },
    ],
  },
  {
    title: "Frontend",
    gradient: "from-[hsl(266,100%,24%)] to-[hsl(280,100%,24%)]",
    skills: [
      { name: "React.js",       icon: "react",         tip: "All major projects — home base",           scrollTo: "projects" },
      { name: "Next.js",        icon: "nextjs",        tip: "A11y Component Lab",                      scrollTo: "projects" },
      { name: "Tailwind CSS",   icon: "tailwindcss",   tip: "A11y Component Lab & this portfolio",     scrollTo: "projects" },
      { name: "Flutter",        icon: "flutter",       tip: "Accessibility survey app internship",     scrollTo: "experience" },
      { name: "HTML/CSS",       icon: "html5",         tip: "Everything on this page, literally",      scrollTo: "projects" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-[hsl(280,100%,24%)] to-[hsl(291,100%,24%)]",
    skills: [
      { name: "Node.js",   icon: "nodejs",   tip: "LiveCollab real-time backend",         scrollTo: "projects" },
      { name: "Express",   icon: "express",  tip: "REST APIs across multiple projects",   scrollTo: "projects" },
      { name: "FastAPI",   icon: "fastapi",  tip: "Lumina observability platform",        scrollTo: "projects" },
      { name: "WebRTC",    icon: null,       tip: "P2P streaming in LiveCollab",          scrollTo: "projects" },
      { name: "Socket.io", icon: null,       tip: "<100ms latency in LiveCollab",         scrollTo: "projects" },
    ],
  },
  {
    title: "Databases",
    gradient: "from-[hsl(291,100%,24%)] to-[hsl(310,100%,24%)]",
    skills: [
      { name: "MongoDB",      icon: "mongodb",    tip: "Pantry-To-Plate & AI Day Planner",    scrollTo: "projects" },
      { name: "MySQL",        icon: "mysql",      tip: "LiveCollab — 60% query optimization", scrollTo: "projects" },
      { name: "PostgreSQL",   icon: "postgresql", tip: "Student Performance Analysis",        scrollTo: "projects" },
      { name: "Firebase",     icon: "firebase",   tip: "Lumina Health internship",            scrollTo: "experience" },
    ],
  },
  {
    title: "Tools & Platforms",
    gradient: "from-[hsl(310,100%,24%)] to-[hsl(317,100%,24%)]",
    skills: [
      { name: "Git/GitHub", icon: "github",  tip: "Every. Single. Project.",          scrollTo: "projects" },
      { name: "Docker",     icon: "docker",  tip: "Containerised Lumina platform",    scrollTo: "projects" },
      { name: "Unity",      icon: "unity",   tip: "Shrink Wars & BlindSpot games",    scrollTo: "projects" },
      { name: "Postman",    icon: null,      tip: "API testing @ Galaxy Office",      scrollTo: "experience" },
    ],
  },
  {
    title: "AI & ML",
    gradient: "from-[hsl(317,100%,24%)] to-[hsl(326,100%,24%)]",
    skills: [
      { name: "Vector Embeddings", icon: null, tip: "Semantic guardrails in Lumina",      scrollTo: "projects" },
      { name: "LLM Integration",   icon: null, tip: "Interview Coach & GPT Gift Genie",   scrollTo: "projects" },
      { name: "NLP",               icon: null, tip: "Advanced NLP coursework @ USC",      scrollTo: "education" },
      { name: "OpenAI API",        icon: null, tip: "GPT Gift Genie project",             scrollTo: "projects" },
      { name: "Machine Learning",  icon: null, tip: "Personalized e-Learning System",     scrollTo: "projects" },
    ],
  },
];

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const Skills = () => {
  const scrollTo = (id?: string) => {
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-muted/30" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((cat, i) => (
            <Card
              key={cat.title}
              className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${cat.gradient} mb-4`}>
                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => scrollTo(skill.scrollTo)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/25 border border-primary/20 transition-all hover:scale-105 cursor-pointer"
                      >
                        {skill.icon && (
                          <img
                            src={`${DEVICON_BASE}/${skill.icon}/${skill.icon}-original.svg`}
                            alt={skill.name}
                            className="w-4 h-4"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        )}
                        {skill.name}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs max-w-[180px] text-center">
                      {skill.tip}
                      {skill.scrollTo && (
                        <span className="block text-primary/70 mt-0.5">Click to jump there ↓</span>
                      )}
                    </TooltipContent>
                  </Tooltip>
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
