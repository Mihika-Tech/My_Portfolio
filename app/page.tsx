import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

const featured: Project[] = [
  {
    slug: "guardrail",
    title: "Guardrail",
    summary: "Fault-tolerant observability middleware for LLM apps: semantic hallucination checks, circuit breakers, and a live drift dashboard.",
    stack: ["FastAPI", "Vector embeddings", "React", "Docker"],
  },
  {
    slug: "code-review-agent",
    title: "AI Code Review Agent",
    summary: "A ReAct agent shipped as a GitHub App that reviews pull requests, measured against a hand-labeled eval set.",
    stack: ["Python", "FastAPI", "GitHub API", "Evals"],
  },
  {
    slug: "livecollab",
    title: "LiveCollab",
    summary: "Real-time collaboration platform with WebRTC video, live chat, and role-based access.",
    stack: ["React", "WebRTC", "Socket.io", "Node.js"],
  },
  {
    slug: "a11y-component-lab",
    title: "A11y Component Lab",
    summary: "Accessibility-first component library with keyboard, focus, and ARIA patterns, tested end to end.",
    stack: ["Next.js", "TypeScript", "Vitest", "Playwright"],
  },
];

export default function Home() {
  return (
    <>
      <section className="py-16">
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
          I build AI systems you can observe and trust, and the full-stack products around them.
        </h1>
        <p className="mt-6 text-muted">
          MS CS, USC ’26. Open to AI engineering, backend, and full-stack roles.
        </p>
      </section>

      <section id="work" className="border-t border-rule pt-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">Selected work</h2>
        <ul className="mt-8 space-y-10">
          {featured.map((p) => (
            <li key={p.slug}>
              <a href={`/work/${p.slug}`} className="group block">
                <h3 className="font-serif text-2xl group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 text-ink/80">{p.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}