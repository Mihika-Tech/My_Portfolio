import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "LiveCollab",
      description: "Real-time collaboration platform supporting 100+ concurrent users with video conferencing, live chat, and analytics. Built with WebRTC P2P streaming, Socket.io messaging (<100ms latency), and secure role-based access control.",
      tech: ["React", "TypeScript", "Node.js", "WebRTC", "MySQL", "Socket.io"],
      github: "https://github.com/Mihika-Tech/LiveCollab",
      demo: "#",
      highlights: ["100+ Concurrent Users", "< 100ms Latency", "60% Faster Queries"],
      category: "fullstack"
    },
    {
      title: "Pantry-To-Plate",
      description: "AI-powered recipe finder that generates personalized recipes based on available ingredients, cuisine preferences, and flavor profiles. Features intelligent ingredient substitutions and cooking time optimization.",
      tech: ["React", "Node.js", "AI APIs", "MongoDB"],
      github: "https://github.com/Mihika-Tech/Pantry-to-Plate",
      demo: "#",
      highlights: ["AI Recipe generation", "Smart Substitutions", "Flavor Customization"],
      category: "ai"
    },
    {
      title: "AI Day Planner",
      description: "Location-based intelligent day planner that uses weather data and personal preferences to suggest activities, outfits, destinations, and curated music playlists for the perfect day.",
      tech: ["React", "AI APIs", "Weather API", "Spotify API"],
      github: "https://github.com/Mihika-Tech/AI-Day-Planner",
      demo: "#",
      highlights: ["Weather Integration", "Smart Recommendations", "Personalized Playlists"],
      category: "ai"
    },
    {
      title: "A11y Component Lab",
      description: "Accessibility-first component library and demo app that showcases keyboard navigation, focus management, ARIA patterns, and real testing. Includes a docs experience plus an “Accessible Task Hub” app with realistic flows like login, dashboard tables, and task actions.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Playwright"],
      github: "https://github.com/Mihika-Tech/a11y_components",
      demo: "https://mihika-tech.github.io/a11y_components/",
      highlights: ["Component Lab + Docs", "Accessible Task Hub demo", "Testing and quality"],
      category: "fullstack"
    },
    // {
    //   title: "Social Chat",
    //   description: "Secure real-time chat platform with group chat functionality, user authentication, profile management, and live typing indicators. Built with MERN stack and optimized for 30% lower latency.",
    //   tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    //   github: "https://github.com/Mihika-Tech/Social-Chat",
    //   demo: "#",
    //   highlights: ["Real-time Messaging", "30% Lower Latency", "Group Chat Support"],
    //   category: "fullstack"
    // },
    {
      title: "SugarBooth",
      description: "Fun photobooth application with custom filters and dynamic sticker placement. Currently expanding features to include animated effects and photo strip generation with customization options.",
      tech: ["React", "Canvas API", "CSS Filters"],
      github: "https://github.com/Mihika-Tech/SugarBooth",
      demo: "https://mihika-tech.github.io/SugarBooth/",
      highlights: ["Custom Filters", "Sticker Placement", "Photo Strip Export"],
      category: "fullstack"
    },
    {
      title: "GPT Gift Genie",
      description: "AI-powered gift recommendation engine that analyzes recipient preferences, occasions, and budget constraints to suggest personalized gift ideas with purchase links and alternatives.",
      tech: ["React", "OpenAI API", "Node.js"],
      github: "https://github.com/Mihika-Tech/GPT_Gift_Genie",
      demo: "https://mihika-tech.github.io/GPT_Gift_Genie/",
      highlights: ["AI Recommendations", "Budget Optimization", "Personalized Suggestions"],
      category: "ai"
    },
    // {
    //   title: "Personalized e-Learning System",
    //   description: "Adaptive learning platform using K-means clustering to predict learning styles and reinforcement learning to customize quiz flows. Led a 3-member team to integrate ML models with educational content.",
    //   tech: ["Django", "React", "Machine Learning", "K-means", "RL"],
    //   github: "#",
    //   demo: "#",
    //   highlights: ["Learning Style Prediction", "Adaptive Content", "ML Integration"],
    //   category: "ai"
    // },
    {
      title: "Student Performance Analysis",
      description: "Comprehensive SQL and Tableau analysis exploring how study time, attendance, demographics, and personal habits affect academic performance. Features interactive dashboards and predictive insights.",
      tech: ["SQL", "Tableau", "Data Analysis", "PostgreSQL"],
      github: "https://github.com/Mihika-Tech/Factors-Influencing-Student-Performance-SQL-Tableau-Analysis",
      demo: "https://public.tableau.com/app/profile/mihika.dakappagari/viz/StudentPerformance_17477799049500/Dashboard1?publish=yes",
      highlights: ["Data Visualization", "Predictive Analytics", "Interactive Dashboards"],
      category: "data"
    },
    {
      title: "Cozy Pomodoro Timer",
      description: "Beautiful and functional Pomodoro timer with ambient sounds, task tracking, and productivity statistics. Designed with a cozy aesthetic and smooth animations for better focus.",
      tech: ["React", "TypeScript", "Local Storage"],
      github: "https://github.com/Mihika-Tech/Cozy-Pomodoro-Timer",
      demo: "https://mihika-tech.github.io/Cozy-Pomodoro-Timer/",
      highlights: ["Ambient Sounds", "Task Tracking", "Beautiful UI"],
      category: "fullstack"
    },
    {
      title: "Shrink Wars",
      description: "Competitive two-player game where players must avoid falling objects to remain the smaller one until time runs out. Features dynamic difficulty scaling and real-time physics-based gameplay.",
      tech: ["Unity", "C#", "Physics Engine"],
      github: "https://github.com/Mihika-Tech/ShrinkWars",
      demo: "https://mihika-tech.github.io/ShrinkWars/",
      highlights: ["Two-Player mode", "Physics-Based", "Dynamic Difficulty"],
      category: "game"
    },
    {
      title: "BlindSpot",
      description: "An observation-based, cognitive precision game where players identify impostors within a crowd while adapting to dynamic conditions such as hazards, reduced visibility, and color-shifting impostors.",
      tech: ["Unity", "C#", "Game Design"],
      github: "https://github.com/MihikaD0513/main-snack-overflow",
      demo: "https://csci-526.github.io/main-snack-overflow/",
      highlights: ["Changing Environments", "Precision and Focus", "Large Map Exploration"],
      category: "game"
    },
    {
      title: "Lumina: LLM Observability Platform",
      description: "Fault-tolerant middleware for AI models using semantic vector embeddings to detect hallucinations in real-time. Implemented a Circuit Breaker pattern to prevent cascading API failures and built a live dashboard to monitor latency and quality drift.",
      tech: ["FastAPI", "React", "Docker", "NLP", "Vector Embeddings"],
      github: "https://github.com/Mihika-Tech/ShrinkWars",
      demo: "#",   
      highlights: ["Semantic Guardrails", "Circuit Breaker Architecture", "Real-time Inference"],
      category: "ai"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI" },
    { id: "game", label: "Game" },
    { id: "data", label: "Data" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-blue to-murrey mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            real-time systems, and AI integration
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple to-byzantium text-white border-none"
                  : "border-primary/30 text-primary hover:bg-primary/10"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-primary group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              {project.highlights && (
                <div className="mb-4 space-y-1">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/20 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-purple to-byzantium text-white hover:opacity-90 transition-all"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
