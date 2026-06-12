import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github, X, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VideoModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

const VideoModal = ({ url, title, onClose }: VideoModalProps) => {
  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");
  const isGif = url.endsWith(".gif");

  const getEmbedUrl = (rawUrl: string) => {
    const match = rawUrl.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    return rawUrl;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/60">
          <span className="text-white font-semibold text-sm truncate">{title}</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors ml-4 shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Media */}
        <div className="relative w-full" style={{ paddingBottom: isGif ? undefined : "56.25%" }}>
          {isYoutube ? (
            <iframe
              src={getEmbedUrl(url)}
              title={title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : isGif ? (
            <img src={url} alt={title} className="w-full max-h-[70vh] object-contain" />
          ) : (
            <video
              src={url}
              controls
              autoPlay
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  highlights: string[];
  mediaUrl: string;
}

const featuredProjects: Project[] = [
  {
    title: "Guardrail: Distributed Observatory and Telemetry System",
    description: "Fault-tolerant middleware for AI models using semantic vector embeddings to detect hallucinations in real-time. Implemented a Circuit Breaker pattern to prevent cascading API failures and built a live dashboard to monitor latency and quality drift.",
    tech: ["FastAPI", "React", "Docker", "NLP", "Vector Embeddings"],
    github: "https://github.com/Mihika-Tech/Guardrail",
    demo: "#",
    highlights: ["Semantic Guardrails", "Circuit Breaker Architecture", "Real-time Inference"],
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
  {
    title: "LiveCollab",
    description: "Real-time collaboration platform supporting 100+ concurrent users with video conferencing, live chat, and analytics. Built with WebRTC P2P streaming, Socket.io messaging (<100ms latency), and secure role-based access control.",
    tech: ["React", "TypeScript", "Node.js", "WebRTC", "MySQL", "Socket.io"],
    github: "https://github.com/Mihika-Tech/LiveCollab",
    demo: "#",
    highlights: ["100+ Concurrent Users", "< 100ms Latency", "60% Faster Queries"],
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
  {
    title: "A11y Component Lab",
    description: "Accessibility-first component library and demo app that showcases keyboard navigation, focus management, ARIA patterns, and real testing. Includes a docs experience plus an \"Accessible Task Hub\" app with realistic flows like login, dashboard tables, and task actions.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Playwright"],
    github: "https://github.com/Mihika-Tech/a11y_components",
    demo: "https://mihika-tech.github.io/a11y_components/",
    highlights: ["Component Lab + Docs", "Accessible Task Hub demo", "Testing and quality"],
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
  {
    title: "NudgeCode",
    description: "A Chrome extension that coaches you through LeetCode problems using progressive hints — built to feel like an interview-style coach without ever giving away the full solution.",
    tech: ["JavaScript", "Chrome Extension MV3", "Side Panel API"],
    github: "https://github.com/Mihika-Tech/NudgeCode",
    demo: "",
    highlights: ["Progressive hint ladder", "Privacy-first local extraction", "Guardrails by design"],
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
  {
    title: "Student Performance Analysis",
    description: "Comprehensive SQL and Tableau analysis exploring how study time, attendance, demographics, and personal habits affect academic performance. Features interactive dashboards and predictive insights.",
    tech: ["SQL", "Tableau", "Data Analysis", "PostgreSQL"],
    github: "https://github.com/Mihika-Tech/Factors-Influencing-Student-Performance-SQL-Tableau-Analysis",
    demo: "https://public.tableau.com/app/profile/mihika.dakappagari/viz/StudentPerformance_17477799049500/Dashboard1?publish=yes",
    highlights: ["Data Visualization", "Predictive Analytics", "Interactive Dashboards"],
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
];

const wipProjects = [
  {
    title: "Interview AI Coach",
    description:
      "AI-powered mock interview system with multi-turn conversation memory, real-time feedback, and adaptive difficulty scoring. Built with Claude API + RAG for domain-specific coaching.",
    tech: ["Python", "React", "Claude API", "FastAPI", "PostgreSQL"],
    eta: "June 2026",
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
  {
    title: "AI Code Review Agent",
    description:
      "Autonomous agent that analyses pull requests for bugs, security vulnerabilities, and style violations. Integrates with GitHub webhooks and posts structured review comments automatically.",
    tech: ["Python", "Claude API", "GitHub API", "FastAPI"],
    eta: "July 2026",
    mediaUrl: "", // paste your YouTube/gif/mp4 URL here
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<{ url: string; title: string } | null>(null);

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

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 flex flex-col animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.mediaUrl && (
                <button
                  onClick={() => setActiveModal({ url: project.mediaUrl, title: project.title })}
                  className="w-full h-36 rounded-xl mb-4 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group hover:border-primary/50 transition-all overflow-hidden relative"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-3 text-xs text-primary/60 font-medium">
                    Watch demo ↗
                  </span>
                </button>
              )}

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
                {project.demo && (
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
                )}
              </div>

              {/* <Link
                to={`/blog#${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="text-xs text-primary/70 hover:text-primary transition-colors mt-2 block"
              >
                📝 Read my build story →
              </Link> */}
            </Card>
          ))}
        </div>

        {/* WIP Projects */}
        <div className="max-w-7xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 gradient-text font-['Space_Grotesk'] text-center">
            🔨 Currently Building
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {wipProjects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* BUILDING badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold text-green-600 tracking-wider">BUILDING</span>
                </div>

                {project.mediaUrl && (
                  <button
                    onClick={() => setActiveModal({ url: project.mediaUrl, title: project.title })}
                    className="w-full h-36 rounded-xl mb-4 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group hover:border-primary/50 transition-all overflow-hidden relative"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-3 text-xs text-primary/60 font-medium">
                      Watch demo ↗
                    </span>
                  </button>
                )}

                <h3 className="text-xl font-bold mb-3 text-primary pr-24">
                  {project.title}
                </h3>

                <p className="text-foreground/70 mb-4 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
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

                <p className="text-xs text-foreground/50 font-medium">ETA: {project.eta}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* See all button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple to-byzantium text-white hover:opacity-90 transition-all hover:scale-105 px-10"
            onClick={() => navigate("/projects")}
          >
            See all 12 projects →
          </Button>
        </div>
      </div>

      {activeModal && (
        <VideoModal
          url={activeModal.url}
          title={activeModal.title}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
};

export default Projects;
