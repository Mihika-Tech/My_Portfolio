import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ChevronDown } from "lucide-react";

const blogEntries = [
  {
    slug: "lumina-llm-observability-platform",
    title: "Lumina: LLM Observability Platform",
    tagline: "Building the nervous system for unreliable AI",
    github: "https://github.com/Mihika-Tech/Lumina",
    tech: ["FastAPI", "React", "Docker", "NLP", "Vector Embeddings"],
    timeline: [
      {
        phase: "The Problem",
        emoji: "💡",
        date: "Week 1",
        content:
          "I kept seeing AI apps fail silently — hallucinations with no detection, cascading API failures with no recovery. I wanted to build the layer that catches all of this before it reaches users.",
      },
      {
        phase: "First Attempt",
        emoji: "🔬",
        date: "Week 2",
        content:
          "Started with simple keyword filtering for hallucination detection. Realized quickly that semantic similarity was the only real answer — words alone don't capture meaning drift.",
      },
      {
        phase: "The Architecture Decision",
        emoji: "🏗️",
        date: "Week 3",
        content:
          "Chose FastAPI over Node for the inference layer — Python's ecosystem for vector operations (FAISS, sentence-transformers) is just unmatched. Docker made the whole thing portable across environments.",
      },
      {
        phase: "Biggest Struggle",
        emoji: "😤",
        date: "Week 4–5",
        content:
          "Circuit Breaker state management under concurrent requests. Getting the half-open state transitions correct took 3 full redesigns and a lot of whiteboard diagrams before it clicked.",
      },
      {
        phase: "What I'd Do Differently",
        emoji: "🔁",
        date: "Reflection",
        content:
          "Instrument latency from day one instead of bolting the dashboard on at the end. Observability as an afterthought is ironic for an observability project.",
      },
    ],
  },
  {
    slug: "livecollab",
    title: "LiveCollab",
    tagline: "Real-time collaboration that actually stays real-time",
    github: "https://github.com/Mihika-Tech/LiveCollab",
    tech: ["React", "TypeScript", "Node.js", "WebRTC", "MySQL", "Socket.io"],
    timeline: [
      {
        phase: "The Problem",
        emoji: "💡",
        date: "Week 1",
        content: "[Why did you build this? What existing tool frustrated you or what gap did you see?]",
      },
      {
        phase: "The Key Decision",
        emoji: "🏗️",
        date: "Week 2",
        content: "[What was the most important architectural decision? WebRTC P2P vs server relay? Why Socket.io for chat?]",
      },
      {
        phase: "Biggest Struggle",
        emoji: "😤",
        date: "Week 3–4",
        content: "[What was the hardest part technically? Signalling? Scaling the MySQL queries? Concurrent user sessions?]",
      },
      {
        phase: "The Win",
        emoji: "✅",
        date: "Week 5",
        content: "[What are you proudest of? The <100ms latency? The 60% query speedup? How did you get there?]",
      },
    ],
  },
  {
    slug: "a11y-component-lab",
    title: "A11y Component Lab",
    tagline: "Accessibility isn't optional — it's the floor",
    github: "https://github.com/Mihika-Tech/a11y_components",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Playwright"],
    timeline: [
      {
        phase: "The Problem",
        emoji: "💡",
        date: "Week 1",
        content: "[Why accessibility? What gap were you filling — a personal frustration, a course project that became more?]",
      },
      {
        phase: "The Key Decision",
        emoji: "🏗️",
        date: "Week 2",
        content: "[Why Playwright for testing? Why Next.js? What component patterns did you choose and why?]",
      },
      {
        phase: "Biggest Struggle",
        emoji: "😤",
        date: "Week 3",
        content: "[Focus management? Tricky ARIA patterns? What took longer than you expected?]",
      },
      {
        phase: "The Win",
        emoji: "✅",
        date: "Week 4",
        content: "[What are you most proud of in this project? The docs experience? The testing coverage?]",
      },
    ],
  },
  {
    slug: "nudgecode",
    title: "NudgeCode",
    tagline: "A coach that guides without giving it away",
    github: "https://github.com/Mihika-Tech/NudgeCode",
    tech: ["JavaScript", "Chrome Extension MV3", "Side Panel API"],
    timeline: [
      {
        phase: "The Problem",
        emoji: "💡",
        date: "Week 1",
        content: "[What frustrated you about existing LeetCode help tools? Why a hint ladder instead of just showing the solution?]",
      },
      {
        phase: "Chrome Extension Realities",
        emoji: "🏗️",
        date: "Week 2",
        content: "[What surprised you about MV3 constraints? Side Panel vs popup — what drove that choice?]",
      },
      {
        phase: "Biggest Struggle",
        emoji: "😤",
        date: "Week 3",
        content: "[What was unexpectedly hard? Content script isolation? LeetCode DOM parsing? Privacy-first local extraction?]",
      },
      {
        phase: "The Win",
        emoji: "✅",
        date: "Reflection",
        content: "[What makes NudgeCode feel like a real coach rather than a search engine with extra steps?]",
      },
    ],
  },
  {
    slug: "student-performance-analysis",
    title: "Student Performance Analysis",
    tagline: "Letting the data tell the story",
    github: "https://github.com/Mihika-Tech/Factors-Influencing-Student-Performance-SQL-Tableau-Analysis",
    tech: ["SQL", "Tableau", "Data Analysis", "PostgreSQL"],
    timeline: [
      {
        phase: "The Question",
        emoji: "💡",
        date: "Week 1",
        content: "[What question were you trying to answer? What made this dataset interesting or surprising to you?]",
      },
      {
        phase: "The Approach",
        emoji: "🔬",
        date: "Week 2",
        content: "[Why SQL + Tableau instead of Python? What were the trade-offs? What did the data look like before cleaning?]",
      },
      {
        phase: "Biggest Struggle",
        emoji: "😤",
        date: "Week 3",
        content: "[Data quality issues? Surprising correlations that broke your assumptions? What took the most time?]",
      },
      {
        phase: "The Finding",
        emoji: "✅",
        date: "Reflection",
        content: "[What was the most interesting insight? What would you tell a student based on what the data showed?]",
      },
    ],
  },
];

interface TimelineEntry {
  phase: string;
  emoji: string;
  date: string;
  content: string;
}

interface BlogEntry {
  slug: string;
  title: string;
  tagline: string;
  github: string;
  tech: string[];
  timeline: TimelineEntry[];
}

const ProjectTimeline = ({ entry }: { entry: BlogEntry }) => (
  <div className="pt-2 pb-6 px-6">
    {/* Tech tags */}
    <div className="flex flex-wrap gap-2 mb-8">
      {entry.tech.map((t) => (
        <span
          key={t}
          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
        >
          {t}
        </span>
      ))}
    </div>

    {/* Vertical timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(266,100%,45%)] to-[hsl(317,100%,45%)] rounded-full" />

      <div className="space-y-0">
        {entry.timeline.map((item) => (
          <div key={item.phase} className="relative flex gap-6 pb-8 last:pb-0">
            {/* Circle node */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(266,100%,30%)] to-[hsl(317,100%,30%)] border-4 border-background flex items-center justify-center text-lg shadow-md">
              {item.emoji}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1 pb-2">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h4 className="font-bold text-primary text-lg">{item.phase}</h4>
                <span className="text-xs text-foreground/40 bg-muted px-2 py-0.5 rounded-full">
                  {item.date}
                </span>
              </div>
              <p className="text-foreground/70 leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BlogProjectCard = ({ entry }: { entry: BlogEntry }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id={entry.slug}
      className="border border-primary/20 rounded-2xl overflow-hidden bg-primary/5 transition-all duration-300"
    >
      {/* Header — click anywhere to toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-6 hover:bg-primary/10 transition-colors group"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary mb-1 group-hover:underline decoration-primary/40 underline-offset-4">
              {entry.title}
            </h2>
            <p className="text-foreground/60 italic text-sm">{entry.tagline}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 mt-1">
            <a
              href={entry.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm text-primary/60 hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <ChevronDown
              className={`h-5 w-5 text-primary/60 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </button>

      {/* Expandable timeline */}
      <div
        style={{
          maxHeight: open ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-primary/15">
          <ProjectTimeline entry={entry} />
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors mb-10 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            How I Built It
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Click any project to see the thinking, the struggles, and the decisions behind it.
          </p>
        </div>

        <div className="space-y-6">
          {blogEntries.map((entry) => (
            <BlogProjectCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
