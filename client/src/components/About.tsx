import { Card } from "../components/ui/card";
import { Code2, Brain, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function useCountUp(target: number, duration = 1500, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects  = useCountUp(12, 1200, started);
  const commits   = useCountUp(1000, 1800, started);
  const techs     = useCountUp(20, 1000, started);

  const stats = [
    { label: "Projects Shipped", value: `${projects}+`, emoji: "🚀" },
    { label: "Git Commits",      value: `${commits}+`,  emoji: "⚡" },
    { label: "Technologies",     value: `${techs}+`,    emoji: "🛠️" },
    { label: "Cups of Coffee",   value: "∞",            emoji: "☕" },
  ];

  const badges = [
    "🏆 Real-time Wizard",
    "🧠 AI Whisperer",
    "♿ Accessibility Champion",
    "🔐 Security-First Builder",
    "📊 Data Storyteller",
  ];

  return (
    <section className="py-24 bg-background" id="about" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(251,100%,24%)] to-[hsl(326,100%,24%)] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Stats + Bio */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Dev Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors text-center"
                >
                  <div className="text-2xl mb-1">{s.emoji}</div>
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-foreground/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* XP Bar */}
            <div className="p-4 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-primary">⚡ Level 5 Engineer</span>
                <span className="text-xs text-foreground/50">78% → Level 6</span>
              </div>
              <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[hsl(266,100%,45%)] to-[hsl(317,100%,45%)] transition-all duration-1000"
                  style={{ width: started ? "78%" : "0%" }}
                />
              </div>
              <p className="text-xs text-foreground/50 mt-2">XP: Building real things that ship</p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                I'm a Master's student at{" "}
                <span className="font-semibold text-primary">USC Viterbi (Class of '26)</span>,
                building on my Computer Engineering degree from Mumbai.
              </p>
              <p>
                My focus: AI systems that are actually observable, full-stack apps that handle real load,
                and anything involving LLMs doing useful things in production.
              </p>
              <p>
                I've shipped real-time platforms, AI observability middleware, accessibility component
                libraries, and a Pomodoro timer I'm a little too proud of.
              </p>
              <p className="text-foreground/60 italic text-sm">
                Outside code: fantasy novels, experimental cooking, and strong opinions about TypeScript.
              </p>
            </div>
          </div>

          {/* Right: Expertise cards */}
          <div className="space-y-6">
            <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[hsl(251,100%,24%)] to-[hsl(266,100%,24%)]">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Full Stack Expertise</h3>
                  <p className="text-foreground/70">
                    React, Node.js, TypeScript, WebRTC — building end-to-end solutions from
                    database schema to live deployment.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[hsl(291,100%,24%)] to-[hsl(317,100%,24%)]">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">LLM Engineering</h3>
                  <p className="text-foreground/70">
                    Building observable, fault-tolerant AI pipelines. Semantic guardrails, circuit
                    breakers, vector search, and making LLMs behave in production.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[hsl(317,100%,24%)] to-[hsl(326,100%,24%)]">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">AI Integration</h3>
                  <p className="text-foreground/70">
                    Leveraging AI APIs and machine learning to create intelligent, personalized
                    experiences — from NLP pipelines to recommendation engines.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap gap-3 justify-center mt-14 animate-fade-in-up">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default select-none"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
