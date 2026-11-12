import Link from "next/link";
import { getProjects } from "../lib/project";

export default async function Home() {
  const featured = (await getProjects()).filter((p) => p.featured);

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
              <Link href={`/work/${p.slug}`} className="group block">
                <h3 className="font-serif text-2xl group-hover:text-accent">{p.title}</h3>
                <p className="mt-2 text-ink/80">{p.summary}</p>
                <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}